"use client";

import Link from "next/link";
import { useState } from "react";
import { addBasketLine } from "@/components/commerce/basketStorage";
import type { CommerceVariant, ContentItem } from "@/lib/content";

type ShopifyBasketButtonProps = {
  item: ContentItem;
  variant: CommerceVariant;
};

export function ShopifyBasketButton({ item, variant }: ShopifyBasketButtonProps) {
  const [added, setAdded] = useState(false);
  const available = item.commerce?.status === "available" && variant.available;

  function handleAdd() {
    if (!available) {
      return;
    }

    addBasketLine(item, variant);
    setAdded(true);
  }

  return (
    <div className="bg-[#090909]">
      <button
        type="button"
        onClick={handleAdd}
        disabled={!available}
        className={`block w-full p-5 text-left transition ${
          available
            ? "hover:bg-[#b9ff3b] hover:text-black"
            : "pointer-events-none opacity-45"
        }`}
      >
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
          {added ? "Added" : available ? "Add to basket" : "Unavailable"}
        </span>
        <span className="mt-2 block text-xl font-black uppercase">{variant.label}</span>
        <span className="mt-3 block font-mono text-xs uppercase tracking-[0.16em] opacity-75">
          {variant.price}
        </span>
      </button>
      {added ? (
        <div className="border-t border-white/10 p-4">
          <Link
            href="/shop/basket"
            className="block bg-[#b9ff3b] px-4 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-black transition hover:bg-[#f4efe5]"
          >
            View basket / checkout
          </Link>
        </div>
      ) : null}
    </div>
  );
}
