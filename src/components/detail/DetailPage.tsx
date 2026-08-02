import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AddToBasket } from "@/components/commerce/AddToBasket";
import { ArchiveMediaGallery, ZoomableHero } from "@/components/detail/MediaLightbox";
import { ProductDetailPage } from "@/components/detail/ProductDetailPage";
import type { ContentItem } from "@/lib/content";

function getLinkSectionLabel(item: ContentItem) {
  if (item.category === "release") {
    return "Listen / Watch";
  }

  if (item.href.startsWith("/shop")) {
    return "Shop";
  }

  if (item.category === "opportunity") {
    return "Apply / Learn";
  }

  return "Explore";
}

function getCommerceStatusLabel(status: NonNullable<ContentItem["commerce"]>["status"]) {
  if (status === "available") {
    return "Available";
  }

  if (status === "soldOut") {
    return "Sold out";
  }

  return "Coming soon";
}

export function DetailPage({ item, backHref, backLabel }: { item: ContentItem; backHref: string; backLabel: string }) {
  const linkSectionLabel = getLinkSectionLabel(item);
  const isRelease = item.category === "release";
  const isSession = item.category === "session";
  const embeds = item.embeds ?? (item.embed ? [item.embed] : []);

  if (item.href.startsWith("/shop/")) {
    return <ProductDetailPage item={item} backHref={backHref} backLabel={backLabel} />;
  }

  return (
    <main className="min-h-screen bg-[#090909] text-[#f4efe5]">
      <SiteHeader />
      <section className="grid min-w-0 border-b border-white/15 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className={`relative min-h-[520px] lg:min-h-[calc(100vh-84px)] ${
            isRelease || item.imageFit === "contain" ? "bg-[#111111]" : ""
          }`}
        >
          <ZoomableHero image={item.image} title={item.title} contain={isRelease || item.imageFit === "contain"} />
        </div>
        <div className="flex min-h-[520px] min-w-0 flex-col justify-between p-6 sm:p-10 lg:p-14">
          <div>
            <Link href={backHref} className="font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b]">
              {backLabel}
            </Link>
            <p className="hero-enter font-mono mt-10 text-xs uppercase tracking-[0.34em] text-[#b9ff3b] [overflow-wrap:anywhere]">{item.kicker}</p>
            <h1 className="title-safe-wrap hero-enter hero-enter-2 mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.92] sm:text-5xl md:text-6xl lg:text-[clamp(3rem,4vw,4rem)]">
              {item.title}
            </h1>
            <p className="hero-enter hero-enter-3 mt-8 max-w-2xl text-xl leading-9 text-[#cfc5b8]">{item.summary}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {item.metadata.map((meta) => (
              <span key={meta} className="border border-white/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#c8c0b4]">
                {meta}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="w-full">
          <div className="grid gap-6 border-b border-white/15 pb-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Archive note</p>
            <p className="max-w-none whitespace-pre-line text-left text-lg leading-8 text-[#e6ddcf] sm:text-xl sm:leading-9 xl:text-2xl xl:leading-10">
              {item.body}
            </p>
          </div>
          {embeds.length > 0 ? (
            <div className="mt-12">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
                {item.embedLabel ?? "Listen / Watch"}
              </p>
              <div className={`grid gap-5 ${embeds.length > 1 ? "lg:grid-cols-2" : ""}`}>
                {embeds.map((embed) => {
                  const isPortrait = embed.type === "youtube" && embed.aspect === "portrait";

                  return (
                    <article
                      key={`${embed.title}-${embed.src}`}
                      className={`min-w-0 border border-white/15 bg-[#111111] p-4 sm:p-5 ${
                        isPortrait ? "w-full max-w-[30rem] justify-self-center" : ""
                      }`}
                    >
                      <h3 className="mb-4 text-xl font-black uppercase leading-tight">
                        {embed.title}
                      </h3>
                      <iframe
                        title={embed.title}
                        src={embed.src}
                        className={`w-full border-0 ${
                          embed.type === "spotify"
                            ? "h-[352px]"
                            : isPortrait
                              ? "aspect-[9/16] h-auto"
                              : "aspect-video h-auto"
                        }`}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          ) : null}
          {item.gallery && item.gallery.length > 0 ? (
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
                Media
              </p>
              <ArchiveMediaGallery images={item.gallery} isSession={isSession} />
            </div>
          ) : null}
          {item.commerce ? (
            <div className="mt-12 border border-white/15 bg-[#111111] p-5 sm:p-6">
              <div className="flex flex-col gap-4 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
                    Checkout
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-none">
                    {getCommerceStatusLabel(item.commerce.status)}
                  </h2>
                </div>
                {item.commerce.price ? (
                  <p className="font-mono text-sm uppercase tracking-[0.16em] text-[#c8c0b4]">
                    {item.commerce.price}
                  </p>
                ) : null}
              </div>
              {item.commerce.note ? (
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#bdb3a5]">{item.commerce.note}</p>
              ) : null}
              {item.commerce.variants && item.commerce.variants.length > 0 ? (
                <div className="mt-6 border border-white/15 bg-[#090909]">
                  <AddToBasket item={item} />
                </div>
              ) : null}
            </div>
          ) : null}
          {item.links && item.links.length > 0 ? (
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
                {linkSectionLabel}
              </p>
              <div className="mt-5 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {item.links.map((link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="archive-row bg-[#111111] p-5 hover:bg-[#b9ff3b] hover:text-black"
                  >
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                      {link.kind}
                    </span>
                    <span className="mt-2 block text-xl font-black uppercase">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
