"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBasket } from "@/components/commerce/BasketProvider";
import {
  canCreateShopifyCart,
  createShopifyCart,
  formatCents,
  getBasketSubtotal,
  updateBasketLineQuantity,
} from "@/components/commerce/basketStorage";

export function MiniCart() {
  const { lines, quantity, isOpen, closeDrawer } = useBasket();
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const subtotal = getBasketSubtotal(lines);
  const canCheckout = canCreateShopifyCart(lines);
  const hasMissingConfig = lines.some((line) => !line.shopifyVariantId);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsVisible(false);
    const timeout = window.setTimeout(() => setIsMounted(false), 520);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  async function handleCheckout() {
    if (!canCheckout || isCheckingOut) {
      return;
    }
    setIsCheckingOut(true);
    setCheckoutError(null);
    try {
      const checkoutUrl = await createShopifyCart(lines);
      window.location.assign(checkoutUrl);
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Checkout could not be started.");
      setIsCheckingOut(false);
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${isVisible ? "" : "pointer-events-none"}`}
      aria-hidden={!isVisible}
    >
      {/* Scrim */}
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close basket"
        onClick={closeDrawer}
        className={`absolute inset-0 bg-black/65 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Basket"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/15 bg-[#0c0c0c] text-[#f4efe5] shadow-2xl shadow-black/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-5">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#b9ff3b]">
            Basket{quantity > 0 ? ` / ${quantity} ${quantity === 1 ? "item" : "items"}` : ""}
          </p>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close basket"
            className="grid size-9 place-items-center border border-white/20 text-[#f4efe5] transition-colors hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
          >
            <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </div>

        {lines.length > 0 ? (
          <div className="flex-1 overflow-y-auto" data-lenis-prevent>
            {lines.map((line) => (
              <article
                key={`${line.itemSlug}-${line.variantId}`}
                className="grid grid-cols-[72px_1fr] gap-4 border-b border-white/10 p-5"
              >
                <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                  <Image src={line.image} alt="" fill sizes="72px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b9ff3b]">{line.label}</p>
                      <h3 className="mt-1 text-lg font-black uppercase leading-tight">{line.title}</h3>
                    </div>
                    <p className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-[#c8c0b4]">{line.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-white/15">
                      <button
                        type="button"
                        onClick={() => updateBasketLineQuantity(line.itemSlug, line.variantId, line.quantity - 1)}
                        className="grid h-9 w-9 place-items-center font-mono text-base transition-colors hover:bg-[#b9ff3b] hover:text-black"
                        aria-label={`Decrease ${line.title} quantity`}
                      >
                        −
                      </button>
                      <span className="grid h-9 min-w-9 place-items-center px-2 font-mono text-xs">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateBasketLineQuantity(line.itemSlug, line.variantId, line.quantity + 1)}
                        className="grid h-9 w-9 place-items-center font-mono text-base transition-colors hover:bg-[#b9ff3b] hover:text-black"
                        aria-label={`Increase ${line.title} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateBasketLineQuantity(line.itemSlug, line.variantId, 0)}
                      className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-[#81786d] transition-colors hover:text-[#b9ff3b]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-start justify-center gap-6 p-8">
            <p className="text-2xl font-black uppercase leading-tight">Your basket is empty.</p>
            <p className="max-w-xs text-sm leading-6 text-[#bdb3a5]">
              Drops connect back to the city, sound, and story that made them. Add an artifact to begin.
            </p>
            <Link
              href="/shop"
              onClick={closeDrawer}
              className="bg-[#b9ff3b] px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#f4efe5]"
            >
              Browse the shop
            </Link>
          </div>
        )}

        {lines.length > 0 ? (
          <div className="border-t border-white/15 p-5">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em]">
              <span className="text-[#c8c0b4]">{subtotal.complete ? "Subtotal" : "Subtotal (est.)"}</span>
              <span>{formatCents(subtotal.cents)}</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#81786d]">
              Shipping, taxes, and discounts are finalized in secure Shopify checkout.
            </p>
            {hasMissingConfig ? (
              <p className="mt-4 border border-amber-300/25 bg-amber-950/20 p-3 text-xs leading-5 text-amber-100">
                This item still needs a Shopify variant ID before it can check out.
              </p>
            ) : null}
            {checkoutError ? (
              <p className="mt-4 border border-red-300/25 bg-red-950/20 p-3 text-xs leading-5 text-red-100">
                {checkoutError}
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={!canCheckout || isCheckingOut}
              className={`mt-4 block w-full px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] transition-colors ${
                canCheckout
                  ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5] disabled:cursor-wait disabled:opacity-70"
                  : "bg-white/10 text-white/45"
              }`}
            >
              {isCheckingOut ? "Opening checkout…" : "Checkout"}
            </button>
            <Link
              href="/shop/basket"
              onClick={closeDrawer}
              className="mt-4 block text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8c0b4] transition-colors hover:text-[#b9ff3b]"
            >
              View full basket
            </Link>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
