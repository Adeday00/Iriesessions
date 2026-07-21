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
  imageFit?: "cover" | "contain";
};

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
  compact?: boolean;
  showMetaRow?: boolean;
  children: React.ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  meta = "Irie Archive",
  compact = false,
  showMetaRow = true,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="border-b border-white/15 px-5 pb-12 pt-16 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
        {showMetaRow ? (
          <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-6">
            <p className="hero-enter font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">{eyebrow}</p>
            <p className="hero-enter font-mono text-[11px] uppercase tracking-[0.22em] text-[#81786d]">{meta}</p>
          </div>
        ) : null}
        <div
          className={`grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 ${
            showMetaRow ? "pt-10 lg:pt-14" : ""
          }`}
        >
          <h1
            className={`hero-enter hero-enter-2 font-black uppercase ${
              compact
                ? "max-w-4xl text-[clamp(2.5rem,5vw,5rem)] leading-[0.9]"
                : "text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[0.86] lg:leading-[0.84]"
            }`}
          >
            {title}
          </h1>
          <p
            className={`hero-enter hero-enter-3 max-w-xl text-[#cfc5b8] lg:pb-3 ${
              compact ? "text-lg leading-7 md:text-xl md:leading-8" : "text-xl leading-8 md:text-2xl"
            }`}
          >
            {intro}
          </p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function EditorialGrid({
  items,
  cta = "Open",
  categoryLabels,
  kickerLabels,
  showSummaries = true,
}: {
  items: Card[];
  cta?: string;
  categoryLabels?: string[];
  kickerLabels?: string[];
  showSummaries?: boolean;
}) {
  return (
    <section className="grid border-b border-white/15 bg-[#111111] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const isRelease = item.category === "release";
        const isArtifact = item.category === "artifact";
        const isFlyer = item.imageFit === "contain" && !isRelease && !isArtifact;
        const kicker = kickerLabels?.[index] ?? item.kicker ?? item.metadata?.slice(0, 2).join(" / ");

        return (
          <Reveal
            key={item.title}
            as="article"
            delay={Math.min(index * 70, 350)}
            className="media-lift group flex flex-col border-b border-white/15 p-5 md:border-r lg:p-8"
          >
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-[#81786d]">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[#b9ff3b]">{categoryLabels?.[index] ?? item.category ?? "Archive"}</span>
            </div>
            <Link
              href={item.href}
              className={`relative mb-6 block overflow-hidden ${
                isArtifact ? "bg-white" : "bg-[#1a1a1a]"
              }`}
              aria-label={`${cta}: ${item.title}`}
            >
              <div className={`relative ${isRelease || isArtifact ? "aspect-square" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={
                    isRelease
                      ? "object-contain"
                      : isArtifact
                        ? "object-contain p-6 sm:p-8"
                        : isFlyer
                          ? "object-contain"
                          : "object-cover"
                  }
                />
                {isArtifact || isFlyer ? null : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isRelease
                        ? "from-black/55 via-transparent to-transparent"
                        : "from-black/75 via-black/10 to-transparent"
                    }`}
                  />
                )}
                {isFlyer || isArtifact ? null : (
                  <p
                    className={`absolute bottom-4 left-4 max-w-[calc(100%-2rem)] font-mono text-[11px] uppercase tracking-[0.2em] ${
                      isArtifact ? "text-black" : "text-[#b9ff3b]"
                    }`}
                  >
                    {kicker}
                  </p>
                )}
              </div>
              {isFlyer ? (
                <p className="border-t border-white/15 bg-[#111111] px-4 py-3 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-[#b9ff3b]">
                  {kicker}
                </p>
              ) : null}
            </Link>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">{item.title}</h2>
            {showSummaries ? (
              <p className="mt-4 max-w-md grow text-base leading-7 text-[#bdb3a5]">{item.summary}</p>
            ) : (
              <div className="grow" />
            )}
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
