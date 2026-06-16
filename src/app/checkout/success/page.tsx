import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function CheckoutSuccessPage() {
  return (
    <PageShell
      eyebrow="Checkout"
      title="Order received."
      intro="Your checkout is complete. Keep an eye on your email for the receipt and fulfillment details."
    >
      <Link
        href="/shop"
        className="inline-flex bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black transition hover:bg-[#f4efe5]"
      >
        Return to shop
      </Link>
    </PageShell>
  );
}
