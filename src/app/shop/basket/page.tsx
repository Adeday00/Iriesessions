import type { Metadata } from "next";
import { ShopifyBasket } from "@/components/commerce/ShopifyBasket";

export const metadata: Metadata = {
  title: "Basket",
  robots: { index: false, follow: false },
};

export default function BasketPage() {
  return <ShopifyBasket />;
}
