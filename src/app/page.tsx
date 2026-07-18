import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/motion/Reveal";
import { PosterWall } from "@/components/PosterWall";
import { featuredArchiveItems } from "@/lib/content";

const pillars = [
  {
    title: "Sessions",
    kicker: "Gather / Experience / Connect",
    copy: "Spaces for music, conversation, and creative exchange.",
    image: "/media/session-paris-04.jpg",
  },
  {
    title: "Music",
    kicker: "Listen / Watch / Discover",
    copy: "An archive of sound, process, and the people behind it.",
    image: "/media/lust-on-the-coast.jpg",
  },
  {
    title: "Shop",
    kicker: "Wear / Read / Collect",
    copy: "Objects, books, apparel, and editions designed to carry culture beyond the moment.",
    image: "/media/hat-black-front.jpg",
  },
];

const heroActions = [
  { label: "Browse archive", href: "/journal" },
  { label: "Listen now", href: "/music" },
];

const programming = [
  {
    kind: "Live event",
    title: "Book Launch - BORDERS: The Visualscaping Zine",
    date: "March 7, 2026",
    href: "/sessions/borders-visualscaping-zine-launch",
  },
  {
    kind: "Live event",
    title: "Soho House Paris",
    date: "March 6, 2026",
    href: "/sessions/irie-global-paris-soho-house-preview",
  },
  {
    kind: "Live event",
    title: "Paris",
    date: "January 10, 2026",
    href: "/sessions/irie-global-paris-january-2026",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f4efe5]">
      <section className="relative min-h-screen">
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover opacity-45"
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
            <h1 className="hero-enter hero-enter-2 max-w-full text-[clamp(3rem,14vw,9.25rem)] font-black uppercase leading-[0.86] text-[#f4efe5] lg:text-[clamp(5.5rem,9.5vw,9.25rem)]">
              <span className="block lg:whitespace-nowrap">Think Global.</span>
              <span className="block text-[#b9ff3b] lg:whitespace-nowrap">Create Local.</span>
            </h1>
            <div className="hero-enter hero-enter-3 mt-8 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-[1fr_0.8fr]">
              <p className="max-w-2xl text-lg leading-8 text-[#ded5c7] sm:text-xl md:text-2xl">
                Irie Global is a culture-driven company building platforms across music, media,
                fashion, and technology.
              </p>
              <div className="font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#a9a095]">
                <span className="block text-[#f4efe5]">Our key pillars</span>
                People / Togetherness / Giving back
              </div>
            </div>
            <div className="hero-enter hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row">
              {heroActions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`pressable min-h-14 w-full px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] sm:w-fit ${
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
      <section className="grid border-b border-white/15 bg-[#0c0c0c] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-white/15 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Events & Programming</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none md:text-6xl">
            We create moments that move culture.
          </h2>
        </div>
        <div className="grid">
          {programming.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              className="archive-row grid gap-3 border-b border-white/15 p-5 hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[140px_1fr_140px] sm:items-center lg:p-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{event.kind}</span>
              <span className="text-2xl font-black uppercase leading-none md:text-3xl">{event.title}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70 sm:text-right">{event.date}</span>
            </Link>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="grid border-y border-white/15 bg-[#111111] md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="media-lift group border-white/15 p-5 md:border-r lg:p-8">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
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
        <PosterWall />
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
            className="pressable group mt-8 inline-flex w-fit items-center gap-2 border border-white/25 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] hover:border-[#b9ff3b] hover:text-[#b9ff3b]"
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
              className="archive-row grid grid-cols-[1fr_auto] gap-4 bg-[#090909] p-5 hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[1fr_180px_90px]"
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
          <form
            id="newsletter"
            name="newsletter"
            method="POST"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="company-website"
            className="self-end"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden" aria-hidden="true">
              <label>
                Do not fill this out: <input name="company-website" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.22em] text-[#bdb3a5]">
              Get drops, grants, and session windows
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="min-h-14 flex-1 border border-white/20 bg-white/5 px-4 text-base text-[#f4efe5] outline-none transition placeholder:text-[#847b70] focus:border-[#b9ff3b]"
              />
              <button type="submit" className="pressable min-h-14 bg-[#b9ff3b] px-6 font-mono text-xs uppercase tracking-[0.2em] text-black hover:bg-[#f4efe5]">
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
