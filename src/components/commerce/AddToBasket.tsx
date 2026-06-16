"use client";

import { useEffect, useRef, useState } from "react";
import { useBasket } from "@/components/commerce/BasketProvider";
import { addBasketLine } from "@/components/commerce/basketStorage";
import type { ContentItem } from "@/lib/content";

export function AddToBasket({ item }: { item: ContentItem }) {
  const { openDrawer } = useBasket();
  const variants = item.commerce?.variants ?? [];
  const purchasable = item.commerce?.status === "available";

  const firstAvailable = variants.find((variant) => variant.available) ?? variants[0];
  const [selectedId, setSelectedId] = useState(firstAvailable?.id);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
  }, []);

  if (variants.length === 0) {
    return null;
  }

  const selected = variants.find((variant) => variant.id === selectedId) ?? firstAvailable;
  const canAdd = Boolean(purchasable && selected?.available);

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

  return (
    <div className="grid gap-5 p-5">
      {variants.length > 1 ? (
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d]">Option</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {variants.map((variant) => {
              const isActive = variant.id === selected?.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedId(variant.id)}
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
        className={`group flex min-h-14 w-full items-center justify-center gap-2 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-colors ${
          canAdd
            ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5]"
            : "cursor-not-allowed bg-white/10 text-white/45"
        }`}
      >
        {justAdded ? "Added to basket ✓" : canAdd ? "Add to basket" : purchasable ? "Unavailable" : "Coming soon"}
      </button>
    </div>
  );
}
