import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Irie Global brings artists, creatives and communities together through music, experiences and cultural storytelling.",
  path: "/about",
});

const principles = [
  "Creativity is infrastructure.",
  "Culture is collective power.",
  "Build rooms, not audiences.",
  "Think global. Create local.",
];

const pillars = [
  ["People", "Artists, curators and communities are the starting point for everything we build."],
  ["Togetherness", "Culture grows when people share rooms, ideas and experiences."],
  ["Access", "Opportunity and access keep creative ecosystems moving forward."],
  ["Platforms", "Music, storytelling, experiences and products give ideas somewhere to live."],
];

const impact = [
  ["Founded", "2017"],
  ["Artists Supported", "20+"],
  ["Projects", "30+"],
  ["Cities", "40+"],
  ["Countries", "25+"],
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Where ideas become culture"
      intro="Irie Global brings artists, creatives and communities together through music, experiences and cultural storytelling, rooted in connection and the belief that culture moves further when we build it together."
      meta="Founded 2017"
    >
      <section className="grid border-b border-white/15 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <div className="grid min-h-[300px] min-w-0 place-items-center border-b border-white/15 bg-[#0c0c0c] p-8 lg:min-h-[620px] lg:border-b-0 lg:border-r">
          <Image
            src="/irie-logo.png"
            alt="Irie"
            width={360}
            height={211}
            sizes="(min-width: 1024px) 320px, 58vw"
            className="h-auto w-[min(58vw,280px)] lg:w-[min(30vw,360px)]"
          />
        </div>
        <div className="grid min-w-0 content-center gap-8 p-6 sm:p-10 lg:p-14">
          <p className="max-w-3xl text-2xl leading-10 text-[#e6ddcf] md:text-3xl md:leading-[1.4]">
            Founded in Brooklyn in 2017, Irie Sessions began as a community-led event series and
            has since evolved into Irie Global, a creative ecosystem spanning music releases,
            artist development, storytelling, experiences and products.
          </p>
          <div className="grid gap-6 border-t border-white/15 pt-8 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-8 text-[#cfc5b8]">
              Everything we build is designed to help artists and ideas connect, grow and move
              culture forward.
            </p>
            <p className="max-w-xl text-lg leading-8 text-[#cfc5b8]">
              We believe culture should be participated in, not simply consumed.
            </p>
          </div>
        </div>
      </section>

      <section className="grid border-b border-white/15 bg-[#111111] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <div className="min-w-0 border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
            Our principles
          </p>
          <h2 className="title-safe-wrap mt-5 max-w-xl text-4xl font-black uppercase leading-none md:text-5xl xl:text-6xl">
            Language we build by.
          </h2>
        </div>
        <ol className="grid min-w-0">
          {principles.map((principle, index) => (
            <li
              key={principle}
              className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-white/15 p-6 sm:grid-cols-[72px_1fr] sm:p-8"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-[#81786d]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl font-black uppercase leading-none sm:text-3xl">
                {principle}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid border-b border-white/15 bg-[#090909] md:grid-cols-2 xl:grid-cols-4">
        {pillars.map(([title, copy]) => (
          <article key={title} className="border-b border-white/15 p-6 md:border-r lg:p-8">
            <h2 className="text-3xl font-black uppercase">{title}</h2>
            <p className="mt-5 text-base leading-7 text-[#bdb3a5]">{copy}</p>
          </article>
        ))}
      </section>

      <section className="border-b border-white/15 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">
          Built over time
        </p>
        <div className="mt-8 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {impact.map(([label, value]) => (
            <div key={label} className="bg-[#0c0c0c] p-6 lg:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d]">
                {label}
              </p>
              <p className="mt-4 text-5xl font-black uppercase leading-none text-[#f4efe5]">
                {value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-5xl text-4xl font-black uppercase leading-[0.95] md:text-6xl">
          We believe culture grows through collaboration, not competition.
        </p>
      </section>
    </PageShell>
  );
}
