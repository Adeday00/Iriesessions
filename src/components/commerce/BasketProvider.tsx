"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MiniCart } from "@/components/commerce/MiniCart";
import {
  BASKET_UPDATED_EVENT,
  getBasketLines,
  getBasketQuantity,
  type ShopifyBasketLine,
} from "@/components/commerce/basketStorage";

type BasketContextValue = {
  lines: ShopifyBasketLine[];
  quantity: number;
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const BasketContext = createContext<BasketContextValue | null>(null);

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return ctx;
}

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<ShopifyBasketLine[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function refresh() {
      setLines(getBasketLines());
      setQuantity(getBasketQuantity());
    }

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(BASKET_UPDATED_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(BASKET_UPDATED_EVENT, refresh);
    };
  }, []);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  // Lock body scroll while the drawer is open. Focus and keyboard behavior
  // live with the dialog itself in MiniCart.
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ lines, quantity, isOpen, openDrawer, closeDrawer }),
    [lines, quantity, isOpen, openDrawer, closeDrawer],
  );

  return (
    <BasketContext.Provider value={value}>
      {children}
      <MiniCart />
    </BasketContext.Provider>
  );
}
