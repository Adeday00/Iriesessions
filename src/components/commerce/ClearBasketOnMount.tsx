"use client";

import { useEffect } from "react";
import { clearBasket } from "@/components/commerce/basketStorage";

/** Clears the local basket once after a completed checkout. Renders nothing. */
export function ClearBasketOnMount() {
  useEffect(() => {
    clearBasket();
  }, []);

  return null;
}
