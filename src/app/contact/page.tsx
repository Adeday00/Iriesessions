import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const contactPaths = [
  ["Creative direction", "Campaigns, content and cultural storytelling."],
  ["Events & programming", "Experiences, listening sessions and community gatherings."],
  ["Artist support", "Open calls, releases and creative opportunities."],
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
      intro="Building ideas across music, design, film and community."
      compact
      showMetaRow={false}
    >
      <section className="grid border-b border-white/15 bg-[#111111] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Get in touch</p>
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
    </PageShell>
  );
}
