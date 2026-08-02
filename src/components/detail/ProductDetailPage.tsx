"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AddToBasket } from "@/components/commerce/AddToBasket";
import { ProductMediaGallery, ZoomableHero } from "@/components/detail/MediaLightbox";
import type { ContentItem } from "@/lib/content";

const trustPoints = ["Ships in 24–48h", "Secure checkout", "Tracked delivery"];

function getCommerceStatusLabel(status: NonNullable<ContentItem["commerce"]>["status"]) {
  if (status === "available") {
    return "Available";
  }

  if (status === "soldOut") {
    return "Sold out";
  }

  return "Coming soon";
}

export function ProductDetailPage({
  item,
  backHref,
  backLabel,
}: {
  item: ContentItem;
  backHref: string;
  backLabel: string;
}) {
  const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [{ src: item.image, label: item.title }];
  const commerce = item.commerce;
  const variants = commerce?.variants ?? [];
  const firstAvailableVariant = variants.find((variant) => variant.available) ?? variants[0];
  const [selectedVariantId, setSelectedVariantId] = useState(firstAvailableVariant?.id);
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) ?? firstAvailableVariant;
  const featuredImage = selectedVariant?.image ?? item.image;

  return (
    <main className="min-h-screen bg-[#090909] pb-24 text-[#f4efe5] lg:pb-0">
      <SiteHeader />

      <section className="border-b border-white/15 px-5 py-5 sm:px-8 lg:px-12">
        <Link href={backHref} className="font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b]">
          {backLabel}
        </Link>
      </section>

      <section className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0 border-b border-white/15 bg-[#111111] lg:border-b-0 lg:border-r">
          <div className="relative aspect-square bg-white" aria-live="polite">
            <ZoomableHero key={featuredImage} image={featuredImage} title={`${item.title} — ${selectedVariant?.label ?? "Product"}`} contain />
            <span className="sr-only">Showing {selectedVariant?.label ?? item.title}</span>
          </div>
          {gallery.length > 1 ? <ProductMediaGallery images={gallery} title={item.title} /> : null}
        </div>

        <aside className="min-w-0 p-5 sm:p-8 lg:p-12">
          <div className="lg:sticky lg:top-28">
            <p className="hero-enter font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b] [overflow-wrap:anywhere]">{item.kicker}</p>
            <h1 className="title-safe-wrap hero-enter hero-enter-2 mt-4 text-[clamp(2.5rem,4vw,3.5rem)] font-black uppercase leading-[0.9]">
              {item.title}
            </h1>
            {commerce?.price ? (
              <p className="hero-enter hero-enter-3 mt-5 font-mono text-lg uppercase tracking-[0.16em] text-[#f4efe5]">{commerce.price}</p>
            ) : null}

            <p className="hero-enter hero-enter-3 mt-7 max-w-2xl text-lg leading-8 text-[#d8cfc2]">{item.summary}</p>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {item.metadata.map((meta) => (
                <span
                  key={meta}
                  className="border border-white/15 px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#c8c0b4]"
                >
                  {meta}
                </span>
              ))}
            </div>

            <section className="mt-8 border-t border-white/15 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#b9ff3b]">Details</p>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#d8cfc2]">{item.body}</p>
            </section>

            {commerce ? (
              <section className="mt-8 border border-white/15 bg-[#111111]">
                <div className="border-b border-white/15 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#b9ff3b]">Order</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#c8c0b4]">
                      {getCommerceStatusLabel(commerce.status)}
                    </p>
                  </div>
                  {commerce.note ? <p className="mt-4 text-sm leading-6 text-[#bdb3a5]">{commerce.note}</p> : null}
                </div>

                {variants.length > 0 ? (
                  <AddToBasket
                    item={item}
                    selectedVariantId={selectedVariantId}
                    onVariantChange={setSelectedVariantId}
                  />
                ) : null}
                <div className="grid grid-cols-3 border-t border-white/15">
                  {trustPoints.map((point) => (
                    <span
                      key={point}
                      className="border-r border-white/10 px-3 py-3 text-center font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-[#81786d] last:border-r-0"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
