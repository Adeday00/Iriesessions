import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const pillars = [
  ["People", "We center artists, curators, and creative minds, building meaningful relationships that fuel everything we create."],
  ["Togetherness", "We foster connection through shared cultural experiences, storytelling, and collective expression."],
  ["Giving Back", "We create access and opportunity for emerging talent, ensuring culture grows forward with integrity."],
  ["Platforms", "Irie Sessions is the flagship platform: releases, original series, live events, stories, products, and collaborators."],
];

const work = [
  "Artist development platforms",
  "Community-driven experiences",
  "Creative direction & content production",
  "Cultural programming & events",
];

const collaborators = [
  { name: "Chopstix", role: "Producer", image: "/media/collab-chopstix.jpg" },
  { name: "Michael Brun", role: "Bayo × Irie", image: "/media/collab-michael-brun.jpg" },
  { name: "Mohogany", role: "DJ / Transitions", image: "/media/collab-mohogany.jpg" },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Who We Are"
      intro="Irie Global is a culture-driven company building platforms across music, media, fashion, and technology."
    >
      <section className="grid border-y border-white/15 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid min-h-[220px] place-items-center bg-[#0c0c0c] p-8 sm:min-h-[320px] lg:min-h-[560px] lg:p-10">
          <Image
            src="/irie-logo.png"
            alt="Irie"
            width={360}
            height={211}
            sizes="(min-width: 1024px) 360px, 58vw"
            className="h-auto w-[min(44vw,180px)] sm:w-[min(46vw,240px)] lg:w-[min(58vw,360px)]"
          />
        </div>
        <div className="grid content-center gap-7 p-6 sm:p-10 lg:p-14">
          <h2 className="max-w-2xl text-4xl font-black uppercase leading-none md:text-7xl">
            Build culture, not just document it.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#cfc5b8] md:text-xl md:leading-9">
            Founded in 2017 as a community-led event series celebrating Afrobeats and Caribbean
            music, Irie has grown into a creative ecosystem supporting artists, creators, and
            cultural ideas shaping the future.
          </p>
          <p className="max-w-2xl text-lg leading-8 text-[#bdb3a5]">
            Through content, experiences, and creative direction, Irie Global develops platforms
            that showcase emerging talent and document the creative process led by Irie Sessions,
            its flagship platform.
          </p>
          <p className="max-w-2xl text-base leading-7 text-[#9f968a] md:text-lg md:leading-8">
            Everything we build is rooted in community, collaboration, and the belief that culture
            is meant to be experienced, not just observed.
          </p>
        </div>
      </section>

      <section className="grid border-b border-white/15 bg-[#090909] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">What we do</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none md:text-6xl">
            Platforms for artists, rooms, and ideas.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2">
          {work.map((item) => (
            <div key={item} className="border-b border-white/15 p-6 sm:border-r lg:p-8">
              <p className="font-mono text-xs uppercase leading-6 tracking-[0.22em] text-[#cfc5b8]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-b border-white/15 bg-[#111111] md:grid-cols-2 xl:grid-cols-4">
        {pillars.map(([title, copy]) => (
          <article key={title} className="border-white/15 p-6 md:border-r lg:p-8">
            <h3 className="text-3xl font-black uppercase">{title}</h3>
            <p className="mt-5 text-base leading-7 text-[#bdb3a5]">{copy}</p>
          </article>
        ))}
      </section>

      <section className="border-b border-white/15 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Collaborators</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-none md:text-6xl">
          The people in the room.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-3">
          {collaborators.map((person) => (
            <figure key={person.name} className="media-lift group bg-[#0c0c0c]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 p-5">
                <span className="text-2xl font-black uppercase">{person.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d]">{person.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 border border-white/15 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Think Global / Create Local</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Creativity is infrastructure.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#bdb3a5] md:text-lg md:leading-8">
              Irie Global designs ecosystems where artists, brands, and ideas can grow with
              intention, longevity, and global relevance.
            </p>
          </div>
          <Link
            href="/opportunities"
            className="pressable group inline-flex w-fit shrink-0 items-center gap-2 bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black hover:bg-[#f4efe5]"
          >
            See opportunities
            <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
