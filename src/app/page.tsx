import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/motion/Reveal";
import { featuredArchiveItems } from "@/lib/content";

const pillars = [
  {
    title: "Sessions",
    kicker: "Paris / Lagos / New York",
    copy: "Live rooms, pop-ups, listening nights, and recaps that turn a date on the calendar into a cultural memory.",
    image: "/media/session-paris-04.jpg",
  },
  {
    title: "Music",
    kicker: "Releases / Visuals / Credits",
    copy: "Albums, singles, videos, and the credits behind them — with a clear path to listen.",
    image: "/media/lust-on-the-coast.jpg",
  },
  {
    title: "Artifacts",
    kicker: "Zines / Merch / Objects",
    copy: "What stays after the room clears: zines, drops, photo essays, and print.",
    image: "/media/hat-black-front.jpg",
  },
];

const heroActions = [
  { label: "Browse archive", href: "/journal" },
  { label: "Listen now", href: "/music" },
];

const signalItems = [
  ["Latest release", "I forgot to press send", "/music/i-forgot-to-press-send"],
  ["Product drop", "Women Make Things 10X Better", "/shop/women-make-things-10x-better-hat"],
  ["Open channel", "Irie Global Grant", "/opportunities/irie-global-grant"],
] as const;

const eventPhotos = [
  { src: "/media/session-paris-01.jpg", alt: "Women Make Things hats on display in Paris" },
  { src: "/media/session-mar6-01.jpg", alt: "Irie session arrival frame" },
  { src: "/media/btw-01.jpg", alt: "Be There Weekly event artwork" },
  { src: "/media/btw-photo-03.jpg", alt: "Be There Weekly guest moment" },
  { src: "/media/btw-live-02.jpg", alt: "Be There Weekly dance floor" },
  { src: "/media/btw-live-08.jpg", alt: "Be There Weekly portrait" },
  { src: "/media/session-jan10-01.jpg", alt: "Irie session at night" },
  { src: "/media/session-jan10-04.jpg", alt: "Irie January session archive still" },
  { src: "/media/session-paris-05.jpg", alt: "The room at Soho House Paris" },
  { src: "/media/session-paris-03.jpg", alt: "Irie in Paris" },
  { src: "/media/session-jan10-03.jpg", alt: "Irie Paris session" },
  { src: "/media/session-paris-10.jpg", alt: "Soho House Paris closing image" },
  { src: "/media/culture-shock-02.jpg", alt: "Culture Shock live archive" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f4efe5]">
      <section className="relative min-h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/media/irie-trailer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(185,255,59,0.20),transparent_28%),linear-gradient(90deg,rgba(9,9,9,0.96),rgba(9,9,9,0.60)_48%,rgba(9,9,9,0.90))]" />

        <SiteHeader overlay />

        <div className="relative z-10 grid min-h-[100svh] content-end px-5 pb-8 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-6xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.42em] text-[#b9ff3b]">
              Diasporic culture studio
            </p>
            <h1 className="max-w-full text-[clamp(3rem,14vw,9.25rem)] font-black uppercase leading-[0.86] text-[#f4efe5] lg:text-[clamp(5.5rem,9.5vw,9.25rem)]">
              <span className="block lg:whitespace-nowrap">Think Global.</span>
              <span className="block text-[#b9ff3b] lg:whitespace-nowrap">Create Local.</span>
            </h1>
            <div className="mt-8 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-[1fr_0.8fr_0.8fr]">
              <p className="max-w-2xl text-lg leading-8 text-[#ded5c7] sm:text-xl md:text-2xl">
                Irie Global is a cultural ecosystem designing the future of creative expression
                through music, media, fashion, events, and technology.
              </p>
              <div className="font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#a9a095]">
                <span className="block text-[#f4efe5]">Next room</span>
                Sessions / Music / Artifacts
              </div>
              <div className="font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#a9a095]">
                <span className="block text-[#f4efe5]">Operating line</span>
                People / Togetherness / Giving back
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {heroActions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`min-h-14 w-full px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] transition sm:w-fit ${
                    index === 0
                      ? "bg-[#b9ff3b] text-black hover:bg-[#f4efe5]"
                      : "border border-white/25 text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Reveal>
      <section className="grid border-y border-white/15 bg-[#090909] md:grid-cols-3">
        {signalItems.map(([label, title, href]) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col border-white/15 p-5 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] md:border-r lg:p-8"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b9ff3b]">
              {label}
            </span>
            <span className="mt-3 block text-2xl font-black uppercase leading-none md:text-3xl">
              {title}
            </span>
            <span
              aria-hidden
              className="mt-4 font-mono text-sm text-[#b9ff3b] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        ))}
      </section>
      </Reveal>

      <Reveal>
      <section className="grid border-y border-white/15 bg-[#111111] md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} id={pillar.title.toLowerCase()} className="group border-white/15 p-5 md:border-r lg:p-8">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b9ff3b]">
                {pillar.kicker}
              </p>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight">{pillar.title}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#bdb3a5]">{pillar.copy}</p>
          </article>
        ))}
      </section>
      </Reveal>

      <Reveal>
      <section className="border-b border-white/15 bg-[#0c0c0c] py-12 sm:py-16">
        <div className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">From the room</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.9] md:text-6xl">
              Sessions, not posts.
            </h2>
          </div>
          <Link
            href="/sessions"
            className="group hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#b9ff3b] transition-colors duration-300 hover:text-[#f4efe5] sm:inline-flex"
          >
            All sessions
            <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="mt-8 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-12">
          {eventPhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/sessions"
              className="group relative aspect-[4/5] w-60 shrink-0 snap-start overflow-hidden bg-[#1a1a1a] sm:w-72"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="journal" className="grid gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Archive wall</p>
          <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-none md:text-7xl">
            Featured traces from the archive.
          </h2>
          <Link
            href="/journal"
            className="group mt-8 inline-flex w-fit items-center gap-2 border border-white/25 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] transition-colors duration-300 hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
          >
            Browse the full archive
            <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15">
          {featuredArchiveItems.map(([title, type, year, href]) => (
            <Link
              key={title}
              href={href}
              className="grid grid-cols-[1fr_auto] gap-4 bg-[#090909] p-5 transition hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[1fr_180px_90px]"
            >
              <span className="text-xl font-bold uppercase">{title}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75">{type}</span>
              <span className="hidden text-right font-mono text-xs uppercase tracking-[0.16em] opacity-75 sm:block">
                {year}
              </span>
            </Link>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="shop" className="grid border-y border-white/15 bg-[#e9e2d5] text-[#101010] lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image src="/media/hat-black-front.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex min-h-[520px] flex-col justify-between p-6 sm:p-10 lg:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.34em]">Artifact commerce</p>
          <div>
            <h2 className="max-w-xl text-5xl font-black uppercase leading-none md:text-7xl">
              Wear the archive.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-black/70">
              Drops connect back to the city, sound, and story that made them necessary.
              Merch becomes memory, not inventory.
            </p>
          </div>
          <Link
            href="/shop"
            className="w-fit bg-black px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] transition hover:bg-[#b9ff3b] hover:text-black"
          >
            Shop artifacts
          </Link>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="opportunities" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 border border-white/15 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
              Opportunities
            </p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-none md:text-7xl">
              Build the next room with us.
            </h2>
          </div>
          <form id="newsletter" name="newsletter" method="POST" data-netlify="true" className="self-end">
            <input type="hidden" name="form-name" value="newsletter" />
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.22em] text-[#bdb3a5]">
              Get drops, grants, and session windows
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="min-h-14 flex-1 border border-white/20 bg-white/5 px-4 text-base text-[#f4efe5] outline-none transition placeholder:text-[#847b70] focus:border-[#b9ff3b]"
              />
              <button className="min-h-14 bg-[#b9ff3b] px-6 font-mono text-xs uppercase tracking-[0.2em] text-black transition hover:bg-[#f4efe5]">
                Join list
              </button>
            </div>
          </form>
        </div>
      </section>
      </Reveal>
      <SiteFooter />
    </main>
  );
}
