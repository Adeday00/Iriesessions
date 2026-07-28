"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { ContentItem } from "@/lib/content";
import { SHOW_GALLERY_IMAGE_CAPTIONS } from "@/lib/ui-config";

type GalleryImage = NonNullable<ContentItem["gallery"]>[number];

function Lightbox({
  images,
  activeIndex,
  onChange,
  onClose,
}: {
  images: GalleryImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = images[activeIndex];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && hasMultiple) {
        onChange((activeIndex - 1 + images.length) % images.length);
        return;
      }

      if (event.key === "ArrowRight" && hasMultiple) {
        onChange((activeIndex + 1) % images.length);
        return;
      }

      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
        if (!controls || controls.length === 0) {
          return;
        }

        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, hasMultiple, images.length, onChange, onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged photo: ${activeImage.alt ?? activeImage.label}`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 text-[#f4efe5] backdrop-blur-sm"
    >
      <div className="relative z-10 flex min-h-20 items-center justify-between border-b border-white/15 px-4 sm:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#b9ff3b]">Photo viewer</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged photo"
          className="pressable flex h-12 items-center gap-3 border border-white/25 px-4 font-mono text-[11px] uppercase tracking-[0.18em] hover:border-[#b9ff3b] hover:bg-[#b9ff3b] hover:text-black"
        >
          Close <span aria-hidden="true" className="text-xl leading-none">×</span>
        </button>
      </div>

      <div className="relative min-h-0 flex-1" onClick={(event) => event.target === event.currentTarget && onClose()}>
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt ?? activeImage.label}
          fill
          priority
          sizes="100vw"
          className="object-contain px-3 py-16 sm:px-20 sm:py-20"
        />

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={() => onChange((activeIndex - 1 + images.length) % images.length)}
              aria-label="View previous photo"
              className="pressable absolute bottom-5 left-4 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-black/70 text-2xl hover:border-[#b9ff3b] hover:bg-[#b9ff3b] hover:text-black sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => onChange((activeIndex + 1) % images.length)}
              aria-label="View next photo"
              className="pressable absolute bottom-5 right-4 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-black/70 text-2xl hover:border-[#b9ff3b] hover:bg-[#b9ff3b] hover:text-black sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}

        {SHOW_GALLERY_IMAGE_CAPTIONS ? (
          <p className="absolute inset-x-20 bottom-6 z-10 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            {activeImage.label}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ZoomableHero({
  image,
  title,
  contain,
}: {
  image: string;
  title: string;
  contain: boolean;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const images = [{ src: image, label: title, alt: title }];

  const close = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${title} cover photo`}
        className="group absolute inset-0 cursor-zoom-in overflow-hidden text-left"
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={contain ? "object-contain p-4 sm:p-8" : "object-cover"}
        />
        {contain ? null : <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r" />}
        <span className="absolute bottom-4 right-4 border border-white/30 bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors group-hover:border-[#b9ff3b] group-hover:bg-[#b9ff3b] group-hover:text-black">
          Enlarge ↗
        </span>
      </button>
      {open ? <Lightbox images={images} activeIndex={0} onChange={() => undefined} onClose={close} /> : null}
    </>
  );
}

export function ProductMediaGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const close = () => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    if (previousIndex !== null) {
      window.requestAnimationFrame(() => triggerRefs.current[previousIndex]?.focus());
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-px border-t border-white/15 bg-white/15 sm:grid-cols-3">
        {images.map((image, index) => (
          <figure key={`${image.src}-${index}`} className="media-lift bg-[#111111]">
            <button
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge ${image.label ?? title}`}
              className="group block w-full cursor-zoom-in text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={image.src}
                  alt={image.alt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-contain p-4"
                />
                <span className="absolute bottom-3 right-3 border border-white/30 bg-black/70 px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white transition-colors group-hover:border-[#b9ff3b] group-hover:bg-[#b9ff3b] group-hover:text-black">
                  Enlarge ↗
                </span>
              </div>
              {SHOW_GALLERY_IMAGE_CAPTIONS && image.label ? (
                <span className="block px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8c0b4]">
                  {image.label}
                </span>
              ) : null}
            </button>
          </figure>
        ))}
      </div>

      {activeIndex !== null ? (
        <Lightbox images={images} activeIndex={activeIndex} onChange={setActiveIndex} onClose={close} />
      ) : null}
    </>
  );
}

export function ArchiveMediaGallery({ images, isSession }: { images: GalleryImage[]; isSession: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const close = () => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    if (previousIndex !== null) {
      window.requestAnimationFrame(() => triggerRefs.current[previousIndex]?.focus());
    }
  };

  return (
    <>
      <div
        className={`mt-5 grid gap-px overflow-hidden border border-white/15 bg-white/15 ${
          isSession ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {images.map((image, index) => (
          <Reveal
            key={image.src}
            as="article"
            delay={Math.min(index * 45, 360)}
            className={`media-lift bg-[#111111] ${isSession && index % 7 === 0 ? "col-span-2" : ""}`}
          >
            <button
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge ${image.label}`}
              className="group block w-full cursor-zoom-in text-left"
            >
              <div
                className={`relative overflow-hidden bg-[#1a1a1a] ${
                  isSession && index % 7 === 0 ? "aspect-[8/5]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt ?? ""}
                  fill
                  sizes={
                    isSession
                      ? index % 7 === 0
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 25vw, 50vw"
                      : "(min-width: 1280px) 32vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover"
                />
                <span className="absolute bottom-3 right-3 border border-white/30 bg-black/70 px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white transition-colors group-hover:border-[#b9ff3b] group-hover:bg-[#b9ff3b] group-hover:text-black">
                  Enlarge ↗
                </span>
              </div>
              {SHOW_GALLERY_IMAGE_CAPTIONS ? (
                <span className="block p-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8c0b4]">
                  {image.label}
                </span>
              ) : null}
            </button>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null ? (
        <Lightbox images={images} activeIndex={activeIndex} onChange={setActiveIndex} onClose={close} />
      ) : null}
    </>
  );
}
