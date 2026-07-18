import { ShopifyBasket } from "@/components/commerce/ShopifyBasket";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Basket",
  description: "Review the items in your Irie Sessions basket before checkout.",
  path: "/shop/basket",
  noIndex: true,
});

export default function BasketPage() {
  return <ShopifyBasket />;
}
