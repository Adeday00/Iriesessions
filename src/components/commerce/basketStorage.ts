"use client";

import type { CommerceVariant, ContentItem } from "@/lib/content";

export type ShopifyBasketLine = {
  itemSlug: string;
  title: string;
  image: string;
  variantId: string;
  shopifyVariantId?: string;
  label: string;
  price: string;
  quantity: number;
};

const STORAGE_KEY = "irie-shopify-basket";
const DEFAULT_SHOPIFY_STORE_DOMAIN = "irie-sessions-6873.myshopify.com";
export const BASKET_UPDATED_EVENT = "irie-basket-updated";

export function getShopifyStoreDomain() {
  return (
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/$/, "") ||
    DEFAULT_SHOPIFY_STORE_DOMAIN
  );
}

function readLines(): ShopifyBasketLine[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLines(lines: ShopifyBasketLine[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  window.dispatchEvent(new Event(BASKET_UPDATED_EVENT));
}

export function getBasketLines() {
  return readLines();
}

export function getBasketQuantity() {
  return readLines().reduce((total, line) => total + line.quantity, 0);
}

export function addBasketLine(item: ContentItem, variant: CommerceVariant, quantity = 1) {
  const addQuantity = Math.max(1, Math.floor(quantity));
  const lines = readLines();
  const existingLine = lines.find((line) => line.itemSlug === item.slug && line.variantId === variant.id);

  if (existingLine) {
    existingLine.quantity += addQuantity;
  } else {
    lines.push({
      itemSlug: item.slug,
      title: item.title,
      image: item.image,
      variantId: variant.id,
      shopifyVariantId: variant.shopifyVariantId,
      label: variant.label,
      price: variant.price,
      quantity: addQuantity,
    });
  }

  writeLines(lines);
}

/** Parse a display price like "$60.00" or "$40.00 USD" into integer cents. Returns null if unparseable. */
export function parsePriceToCents(price: string): number | null {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d{1,2})?)/);
  if (!match) {
    return null;
  }
  return Math.round(parseFloat(match[1]) * 100);
}

export function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

/**
 * Estimated subtotal across all lines. `complete` is false if any line's price
 * could not be parsed, so the UI can label the figure as approximate.
 */
export function getBasketSubtotal(lines: ShopifyBasketLine[]): { cents: number; complete: boolean } {
  let cents = 0;
  let complete = true;
  for (const line of lines) {
    const unit = parsePriceToCents(line.price);
    if (unit === null) {
      complete = false;
      continue;
    }
    cents += unit * line.quantity;
  }
  return { cents, complete };
}

export function updateBasketLineQuantity(itemSlug: string, variantId: string, quantity: number) {
  const nextLines = readLines()
    .map((line) => (line.itemSlug === itemSlug && line.variantId === variantId ? { ...line, quantity } : line))
    .filter((line) => line.quantity > 0);

  writeLines(nextLines);
}

export function clearBasket() {
  writeLines([]);
}

export function canCreateShopifyCart(lines: ShopifyBasketLine[]) {
  return lines.length > 0 && lines.every((line) => line.shopifyVariantId && line.quantity > 0);
}

export async function createShopifyCart(lines: ShopifyBasketLine[]) {
  const response = await fetch("/.netlify/functions/create-shopify-cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lines: lines.map((line) => ({
        merchandiseId: line.shopifyVariantId,
        quantity: line.quantity,
      })),
    }),
  });

  const payload = (await response.json()) as { checkoutUrl?: string; error?: string };

  if (!response.ok || !payload.checkoutUrl) {
    throw new Error(payload.error ?? "Checkout could not be started.");
  }

  return payload.checkoutUrl;
}
