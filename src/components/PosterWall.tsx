"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbox } from "@/components/detail/MediaLightbox";

const posters = [
  { src: "/media/flyer-wall-02.jpg", alt: "Irie Sessions event poster", label: "Irie Sessions event poster" },
  { src: "/media/flyer-wall-03.jpg", alt: "Irie live event poster", label: "Irie live event poster" },
  { src: "/media/flyer-wall-04.jpg", alt: "Irie community event poster", label: "Irie community event poster" },
  { src: "/media/flyer-wall-05.jpg", alt: "Irie archive poster", label: "Irie archive poster" },
  { src: "/media/flyer-wall-06.jpg", alt: "Irie cultural event poster", label: "Irie cultural event poster" },
  { src: "/media/flyer-wall-07.jpg", alt: "Irie past event poster", label: "Irie past event poster" },
  { src: "/media/btw-01.jpg", alt: "Be There Weekly event poster", label: "Be There Weekly event poster" },
  { src: "/media/btw-02.jpg", alt: "Be There Weekly lineup poster", label: "Be There Weekly lineup poster" },
];

export function PosterWall() {
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    if (previousIndex !== null) {
      window.requestAnimationFrame(() => triggerRefs.current[previousIndex]?.focus());
    }
  };

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
        {posters.map((poster, index) => (
          <button
            key={poster.src}
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Enlarge ${poster.alt}`}
            className="media-lift group relative aspect-[4/5] w-60 shrink-0 snap-start cursor-zoom-in overflow-hidden bg-[#151515] text-left sm:w-72 lg:w-80"
          >
            <Image src={poster.src} alt={poster.alt} fill sizes="320px" className="object-contain" />
            <span className="absolute bottom-3 right-3 border border-white/30 bg-black/70 px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white transition-colors group-hover:border-[#b9ff3b] group-hover:bg-[#b9ff3b] group-hover:text-black">
              Enlarge ↗
            </span>
          </button>
        ))}
      </div>
      {activeIndex !== null ? (
        <Lightbox images={posters} activeIndex={activeIndex} onChange={setActiveIndex} onClose={closeLightbox} />
      ) : null}
    </section>
  );
}
