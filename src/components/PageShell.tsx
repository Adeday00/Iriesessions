import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/motion/Reveal";

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
  meta?: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, meta = "Irie Archive", children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="border-b border-white/15 px-5 pb-12 pt-16 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-6">
          <p className="hero-enter font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">{eyebrow}</p>
          <p className="hero-enter font-mono text-[11px] uppercase tracking-[0.22em] text-[#81786d]">{meta}</p>
        </div>
        <div className="grid gap-8 pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:pt-14">
          <h1 className="hero-enter hero-enter-2 text-[clamp(2.75rem,6.5vw,6.5rem)] font-black uppercase leading-[0.86] lg:leading-[0.84]">
            {title}
          </h1>
          <p className="hero-enter hero-enter-3 max-w-xl text-xl leading-8 text-[#cfc5b8] md:text-2xl lg:pb-3">{intro}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function EditorialGrid({ items, cta = "Open" }: { items: Card[]; cta?: string }) {
  return (
    <section className="grid border-b border-white/15 bg-[#111111] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const isRelease = item.category === "release";

        return (
          <Reveal
            key={item.title}
            as="article"
            delay={index * 70}
            className="media-lift group flex flex-col border-b border-white/15 p-5 md:border-r lg:p-8"
          >
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-[#81786d]">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[#b9ff3b]">{item.category ?? "Archive"}</span>
            </div>
            <Link
              href={item.href}
              className="relative mb-6 block overflow-hidden bg-[#1a1a1a]"
              aria-label={`${cta}: ${item.title}`}
            >
              <div className={`relative ${isRelease ? "aspect-square" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={isRelease ? "object-contain" : "object-cover"}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isRelease ? "from-black/55 via-transparent to-transparent" : "from-black/75 via-black/10 to-transparent"
                  }`}
                />
                <p className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] font-mono text-[11px] uppercase tracking-[0.2em] text-[#b9ff3b]">
                  {item.kicker ?? item.metadata?.slice(0, 2).join(" / ")}
                </p>
              </div>
            </Link>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">{item.title}</h2>
            <p className="mt-4 max-w-md grow text-base leading-7 text-[#bdb3a5]">{item.summary}</p>
            <Link
              href={item.href}
              className="group/cta mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b] transition-colors hover:text-[#f4efe5]"
            >
              {cta}
              <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
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
    <section className="grid border-b border-white/15 bg-[#e9e2d5] text-[#101010] lg:grid-cols-2">
      <div className="media-lift relative min-h-[520px] overflow-hidden">
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
          className="pressable group inline-flex w-fit items-center gap-2 bg-black px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] hover:bg-[#b9ff3b] hover:text-black"
        >
          {cta}
          <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
