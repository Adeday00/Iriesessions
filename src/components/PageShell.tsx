import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type Card = {
  title: string;
  image: string;
  summary: string;
  href: string;
  category?: string;
  kicker?: string;
  metadata?: string[];
};

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">{eyebrow}</p>
        <h1 className="mt-5 max-w-6xl text-6xl font-black uppercase leading-[0.86] md:text-8xl lg:text-9xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-[#cfc5b8] md:text-2xl">{intro}</p>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function EditorialGrid({ items, cta = "Open" }: { items: Card[]; cta?: string }) {
  return (
    <section className="grid border-y border-white/15 bg-[#111111] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const isRelease = item.category === "release";

        return (
          <article key={item.title} className="group border-white/15 p-5 md:border-r lg:p-8">
            <div className={`relative mb-6 overflow-hidden bg-[#1a1a1a] ${isRelease ? "aspect-square" : "aspect-[4/5]"}`}>
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className={`${isRelease ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-105`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isRelease ? "from-black/55 via-transparent to-transparent" : "from-black/75 via-black/10 to-transparent"}`} />
              <p className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] font-mono text-[11px] uppercase tracking-[0.2em] text-[#b9ff3b]">
                {item.kicker ?? item.metadata?.slice(0, 2).join(" / ")}
              </p>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">{item.title}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#bdb3a5]">{item.summary}</p>
            <Link
              href={item.href}
              className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b] transition hover:text-[#f4efe5]"
            >
              {cta}
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export function SplitFeature({
  image,
  eyebrow,
  title,
  copy,
  cta,
  href = "/journal",
}: {
  image: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  href?: string;
}) {
  return (
    <section className="grid border-y border-white/15 bg-[#e9e2d5] text-[#101010] lg:grid-cols-2">
      <div className="relative min-h-[520px]">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex min-h-[520px] flex-col justify-between p-6 sm:p-10 lg:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.34em]">{eyebrow}</p>
        <div>
          <h2 className="max-w-xl text-5xl font-black uppercase leading-none md:text-7xl">{title}</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-black/70">{copy}</p>
        </div>
        <Link
          href={href}
          className="w-fit bg-black px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] transition hover:bg-[#b9ff3b] hover:text-black"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
