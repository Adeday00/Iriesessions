import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ClearBasketOnMount } from "@/components/commerce/ClearBasketOnMount";

export const metadata: Metadata = {
  title: "Order Received",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <PageShell
      eyebrow="Checkout"
      title="Order received."
      intro="Your checkout is complete. Keep an eye on your email for the receipt and fulfillment details."
    >
      <ClearBasketOnMount />
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <Link
          href="/shop"
          className="inline-flex bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#f4efe5]"
        >
          Return to shop
        </Link>
      </section>
    </PageShell>
  );
}
