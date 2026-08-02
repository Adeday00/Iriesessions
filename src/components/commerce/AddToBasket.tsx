"use client";

import { useEffect, useRef, useState } from "react";
import { useBasket } from "@/components/commerce/BasketProvider";
import {
  addBasketLine,
  canCreateShopifyCart,
  createShopifyCart,
  formatCents,
  parsePriceToCents,
  type ShopifyBasketLine,
} from "@/components/commerce/basketStorage";
import type { CommerceVariant } from "@/lib/content";
import type { ContentItem } from "@/lib/content";

function getCheckoutLines(
  lines: ShopifyBasketLine[],
  item: ContentItem,
  variant: CommerceVariant,
  quantity: number,
) {
  const nextLines = lines.map((line) => ({ ...line }));
  const existing = nextLines.find(
    (line) => line.itemSlug === item.slug && line.variantId === variant.id,
  );

  if (existing) {
    existing.quantity += quantity;
    return nextLines;
  }

  nextLines.push({
    itemSlug: item.slug,
    title: item.title,
    image: variant.image ?? item.image,
    variantId: variant.id,
    shopifyVariantId: variant.shopifyVariantId,
    label: variant.label,
    price: variant.price,
    quantity,
  });

  return nextLines;
}

export function AddToBasket({
  item,
  selectedVariantId,
  onVariantChange,
}: {
  item: ContentItem;
  selectedVariantId?: string;
  onVariantChange?: (variantId: string) => void;
}) {
  const { lines, openDrawer } = useBasket();
  const variants = item.commerce?.variants ?? [];
  const purchasable = item.commerce?.status === "available";

  const firstAvailable = variants.find((variant) => variant.available) ?? variants[0];
  const [internalSelectedId, setInternalSelectedId] = useState(firstAvailable?.id);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [buyError, setBuyError] = useState<string | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
  }, []);

  if (variants.length === 0) {
    return null;
  }

  const selectedId = selectedVariantId ?? internalSelectedId;
  const selected = variants.find((variant) => variant.id === selectedId) ?? firstAvailable;
  const canAdd = Boolean(purchasable && selected?.available);
  const unitPrice = selected?.price ? parsePriceToCents(selected.price) : null;
  const buyNowPrice = unitPrice === null ? selected?.price : formatCents(unitPrice * quantity);

  function handleVariantChange(variantId: string) {
    setInternalSelectedId(variantId);
    onVariantChange?.(variantId);
  }

  function handleAdd() {
    if (!canAdd || !selected) {
      return;
    }
    addBasketLine(item, selected, quantity);
    setQuantity(1);
    setJustAdded(true);
    openDrawer();
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => setJustAdded(false), 2500);
  }

  async function handleBuyNow() {
    if (!canAdd || !selected || isBuying) {
      return;
    }

    const checkoutLines = getCheckoutLines(lines, item, selected, quantity);
    if (!canCreateShopifyCart(checkoutLines)) {
      setBuyError("Checkout is temporarily unavailable.");
      return;
    }

    setIsBuying(true);
    setBuyError(null);

    try {
      const checkoutUrl = await createShopifyCart(checkoutLines);
      window.location.assign(checkoutUrl);
    } catch (error) {
      setBuyError(error instanceof Error ? error.message : "Checkout could not be started.");
      setIsBuying(false);
    }
  }

  return (
    <>
      <div className="grid gap-5 p-5">
        {variants.length > 1 ? (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d]">Option</p>
            <div className="mt-3 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
              {variants.map((variant) => {
                const isActive = variant.id === selected?.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => handleVariantChange(variant.id)}
                    disabled={!variant.available}
                    aria-pressed={isActive}
                    className={`border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "border-[#b9ff3b] bg-[#b9ff3b] text-black"
                        : "border-white/20 text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
                    } ${variant.available ? "" : "cursor-not-allowed opacity-40"}`}
                  >
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d]">Quantity</p>
            <div className="mt-3 flex items-center border border-white/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="grid h-12 w-12 place-items-center font-mono text-lg transition-colors hover:bg-[#b9ff3b] hover:text-black"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="grid h-12 min-w-12 place-items-center px-3 font-mono text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                className="grid h-12 w-12 place-items-center font-mono text-lg transition-colors hover:bg-[#b9ff3b] hover:text-black"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          {selected?.price ? (
            <p className="font-mono text-lg uppercase tracking-[0.12em] text-[#f4efe5]">{selected.price}</p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!canAdd}
          aria-live="polite"
          className={`pressable group flex min-h-14 w-full items-center justify-center gap-2 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] ${
            canAdd
              ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5]"
              : "cursor-not-allowed bg-white/10 text-white/45"
          }`}
        >
          {justAdded ? "Added to bag" : canAdd ? "Add to bag" : purchasable ? "Unavailable" : "Coming soon"}
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-[#090909]/96 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
        {buyError ? (
          <p
            role="alert"
            className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-red-200"
          >
            {buyError}
          </p>
        ) : null}
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!canAdd || isBuying}
          className={`pressable flex min-h-14 w-full items-center justify-center px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] ${
            canAdd
              ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5] disabled:cursor-wait disabled:opacity-75"
              : "cursor-not-allowed bg-white/10 text-white/45"
          }`}
        >
          {isBuying
            ? "Opening secure checkout..."
            : canAdd
              ? `Buy now${buyNowPrice ? ` / ${buyNowPrice}` : ""}`
              : purchasable
                ? "Unavailable"
                : "Coming soon"}
        </button>
      </div>
    </>
  );
}
