import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Thank You",
  description: "Your submission has been received by Irie Global.",
  path: "/thanks",
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="grid flex-1 place-items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="w-full max-w-4xl border border-white/15 p-7 sm:p-12 lg:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Received</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] sm:text-7xl">Thank you.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#cfc5b8]">
            Your submission is in the Irie inbox. We will follow up when there is a clear next step.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="pressable bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black hover:bg-[#f4efe5]"
            >
              Return home
            </Link>
            <Link
              href="/journal"
              className="pressable border border-white/20 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
            >
              Browse the archive
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
