"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  BASKET_UPDATED_EVENT,
  canCreateShopifyCart,
  clearBasket,
  createShopifyCart,
  getBasketLines,
  type ShopifyBasketLine,
  updateBasketLineQuantity,
} from "@/components/commerce/basketStorage";

function getQuantityLabel(lines: ShopifyBasketLine[]) {
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  return `${count} ${count === 1 ? "item" : "items"}`;
}

export function ShopifyBasket() {
  const [lines, setLines] = useState<ShopifyBasketLine[]>([]);
  const canCheckout = useMemo(() => canCreateShopifyCart(lines), [lines]);
  const hasMissingConfig = lines.some((line) => !line.shopifyVariantId);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    function refreshBasket() {
      setLines(getBasketLines());
    }

    refreshBasket();
    window.addEventListener("storage", refreshBasket);
    window.addEventListener(BASKET_UPDATED_EVENT, refreshBasket);

    return () => {
      window.removeEventListener("storage", refreshBasket);
      window.removeEventListener(BASKET_UPDATED_EVENT, refreshBasket);
    };
  }, []);

  useEffect(() => {
    function resetCheckoutState() {
      setIsCheckingOut(false);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        resetCheckoutState();
      }
    }

    window.addEventListener("pageshow", resetCheckoutState);
    window.addEventListener("focus", resetCheckoutState);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", resetCheckoutState);
      window.removeEventListener("focus", resetCheckoutState);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function updateQuantity(line: ShopifyBasketLine, quantity: number) {
    updateBasketLineQuantity(line.itemSlug, line.variantId, quantity);
    setLines(getBasketLines());
  }

  function emptyBasket() {
    clearBasket();
    setLines([]);
  }

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

  return (
    <main className="min-h-screen bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Link href="/shop" className="font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b]">
          Back to shop
        </Link>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Basket</p>
        <h1 className="mt-5 max-w-6xl text-6xl font-black uppercase leading-[0.86] md:text-8xl lg:text-9xl">
          Your basket.
        </h1>
      </section>

      <section className="grid border-y border-white/15 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="bg-[#111111]">
          {lines.length > 0 ? (
            lines.map((line) => (
              <article key={`${line.itemSlug}-${line.variantId}`} className="grid gap-5 border-b border-white/15 p-5 sm:grid-cols-[140px_1fr] lg:p-8">
                <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                  <Image src={line.image} alt="" fill sizes="140px" className="object-cover" />
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b9ff3b]">{line.label}</p>
                    <h2 className="mt-3 text-3xl font-black uppercase leading-none">{line.title}</h2>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[#c8c0b4]">{line.price}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line, line.quantity - 1)}
                      className="h-11 w-11 border border-white/15 font-mono text-lg transition hover:bg-[#b9ff3b] hover:text-black"
                      aria-label={`Decrease ${line.title} quantity`}
                    >
                      -
                    </button>
                    <span className="flex h-11 min-w-14 items-center justify-center border border-white/15 px-4 font-mono text-xs uppercase tracking-[0.16em]">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line, line.quantity + 1)}
                      className="h-11 w-11 border border-white/15 font-mono text-lg transition hover:bg-[#b9ff3b] hover:text-black"
                      aria-label={`Increase ${line.title} quantity`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line, 0)}
                      className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8c0b4] transition hover:text-[#b9ff3b]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="p-5 lg:p-8">
              <p className="max-w-xl text-2xl leading-10 text-[#e6ddcf]">Your basket is empty.</p>
              <Link href="/shop" className="mt-8 inline-block bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black transition hover:bg-[#f4efe5]">
                Shop products
              </Link>
            </div>
          )}
        </div>

        <aside className="p-5 lg:p-8">
          <div className="sticky top-8">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Summary</p>
            <div className="mt-6 border-y border-white/15 py-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#c8c0b4]">Basket</span>
                <span className="font-mono text-xs uppercase tracking-[0.16em]">{getQuantityLabel(lines)}</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#bdb3a5]">
                Shipping, taxes, discounts, and final totals are calculated in Shopify checkout.
              </p>
            </div>
            {hasMissingConfig && lines.length > 0 ? (
              <p className="mt-5 border border-red-300/25 bg-red-950/20 p-4 text-sm leading-6 text-red-100">
                Shopify checkout needs Shopify variant IDs before this basket can check out.
              </p>
            ) : null}
            {checkoutError ? (
              <p className="mt-5 border border-red-300/25 bg-red-950/20 p-4 text-sm leading-6 text-red-100">
                {checkoutError}
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={!canCheckout || isCheckingOut}
              className={`mt-6 block w-full px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] transition ${
                canCheckout
                  ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5] disabled:cursor-wait disabled:opacity-70"
                  : "bg-white/10 text-white/45"
              }`}
            >
              {isCheckingOut ? "Opening checkout" : "Checkout"}
            </button>
            {lines.length > 0 ? (
              <button
                type="button"
                onClick={emptyBasket}
                className="mt-5 w-full font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8c0b4] transition hover:text-[#b9ff3b]"
              >
                Empty basket
              </button>
            ) : null}
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
