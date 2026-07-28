import { PageShell } from "@/components/PageShell";
import { createPageMetadata } from "@/lib/site";

const contactPaths = [
  ["Creative direction", "Campaigns, visual identity and cultural storytelling."],
  ["Events & programming", "Experiences, listening sessions and community gatherings."],
  ["Artist development", "Music releases, creative opportunities and long-term support."],
];

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Irie Global for creative direction, programming, partnerships, artist support, and cultural collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={
        <>
          <span className="block">Let’s build</span>
          <span className="block">what’s next.</span>
        </>
      }
      intro="Building ideas across music, design, film and community."
      compact
      showMetaRow={false}
    >
      <section className="grid border-b border-white/15 bg-[#111111] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Next</p>
          <a
            href="mailto:info@iriesessions.global"
            className="link-underline mt-5 inline-block text-2xl font-black uppercase leading-none text-[#f4efe5] sm:text-4xl"
          >
            <span>info@</span>
            <span className="block">iriesessions.global</span>
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
