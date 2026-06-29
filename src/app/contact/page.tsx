import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { socialLinks } from "@/lib/content";

const contactPaths = [
  ["Creative direction", "Content production, campaign worlds, and cultural storytelling."],
  ["Events & programming", "Live rooms, listening nights, dinners, pop-ups, and partner experiences."],
  ["Artist support", "Open calls, grants, release pathways, and collaborator windows."],
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Irie Global for creative direction, programming, partnerships, artist support, and cultural collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Have a cool project?"
      intro="Get in touch with Irie Global for projects, partnerships, programming, artist support, and cultural collaboration."
      meta="Stay Connected"
      compact
    >
      <section className="grid border-b border-white/15 bg-[#111111] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Stay Connected</p>
          <a
            href="mailto:info@iriesessions.global"
            className="link-underline mt-5 inline-block break-all text-3xl font-black uppercase leading-none text-[#f4efe5] sm:text-4xl lg:text-5xl"
          >
            info@iriesessions.global
          </a>
        </div>
        <div className="grid md:grid-cols-3">
          {contactPaths.map(([title, copy]) => (
            <article key={title} className="border-b border-white/15 p-6 md:border-r lg:p-7">
              <h2 className="break-words text-lg font-black uppercase leading-[0.98] lg:text-xl">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#bdb3a5] lg:text-base lg:leading-7">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid border-b border-white/15 lg:grid-cols-[1fr_1fr]">
        <div className="p-6 sm:p-10 lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Platforms</p>
          <div className="mt-8 grid gap-px overflow-hidden border border-white/15 bg-white/15">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="archive-row bg-[#090909] p-5 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] hover:bg-[#b9ff3b] hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-white/15 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Build with us</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-none md:text-7xl">
              Stream, discover, connect.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#cfc5b8]">
              The journey starts here: sound, stories, products, and rooms built with intention.
            </p>
          </div>
          <Link
            href="/opportunities"
            className="pressable mt-10 inline-flex w-fit bg-[#b9ff3b] px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-black hover:bg-[#f4efe5]"
          >
            See opportunities
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
