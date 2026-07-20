"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

const posters = [
  { src: "/media/flyer-wall-02.jpg", alt: "Irie Sessions event poster" },
  { src: "/media/flyer-wall-03.jpg", alt: "Irie live event poster" },
  { src: "/media/flyer-wall-04.jpg", alt: "Irie community event poster" },
  { src: "/media/flyer-wall-05.jpg", alt: "Irie archive poster" },
  { src: "/media/flyer-wall-06.jpg", alt: "Irie cultural event poster" },
  { src: "/media/flyer-wall-07.jpg", alt: "Irie past event poster" },
  { src: "/media/btw-01.jpg", alt: "Be There Weekly event poster" },
  { src: "/media/btw-02.jpg", alt: "Be There Weekly lineup poster" },
];

export function PosterWall() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const distance = Math.min(track.clientWidth * 0.78, 640) * direction;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    const atStart = track.scrollLeft <= 8;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: distance, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(interval);
  }, [move]);

  return (
    <section className="border-b border-white/15 bg-[#0c0c0c] py-12 sm:py-16">
      <div className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Past events</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.9] md:text-6xl">
            Irie poster wall.
          </h2>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous posters"
            className="pressable grid size-11 place-items-center border border-white/20 font-mono text-lg text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next posters"
            className="pressable grid size-11 place-items-center border border-white/20 font-mono text-lg text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        data-testid="poster-track"
        className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {posters.map((poster) => (
          <Link
            key={poster.src}
            href="/journal/irie-flyer-wall"
            className="media-lift relative aspect-[4/5] w-60 shrink-0 snap-start overflow-hidden bg-[#151515] sm:w-72 lg:w-80"
          >
            <Image src={poster.src} alt={poster.alt} fill sizes="320px" className="object-contain" />
          </Link>
        ))}
      </div>
    </section>
  );
}
