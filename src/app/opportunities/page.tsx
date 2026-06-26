import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Open calls, grants, commissions, and partnership opportunities from Irie Global.",
  alternates: { canonical: "/opportunities" },
};

const opportunities = [
  ["Open calls", "Artist submissions, producer calls, visual commissions, and city-specific collaborator windows."],
  ["Irie Global Grant", "A home for grant criteria, application windows, alumni stories, and release outcomes."],
  ["Partnerships", "A clearer route for venues, festivals, cultural brands, and creative teams to build with Irie."],
];

export default function OpportunitiesPage() {
  return (
    <PageShell
      eyebrow="Opportunities"
      title="Make reciprocity visible."
      intro="Grants, commissions, partner rooms, and open calls that feed opportunity back into artists, collaborators, and cities."
    >
      <section className="grid border-y border-white/15 bg-[#111111] md:grid-cols-3">
        {opportunities.map(([title, copy]) => (
          <article key={title} className="border-white/15 p-6 md:border-r lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#b9ff3b]">Pathway</p>
            <h2 className="mt-5 text-4xl font-black uppercase">{title}</h2>
            <p className="mt-5 text-lg leading-8 text-[#cfc5b8]">{copy}</p>
          </article>
        ))}
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <form
          name="opportunities"
          method="POST"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="company-website"
          className="grid gap-6 border border-white/15 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:p-12"
        >
          <input type="hidden" name="form-name" value="opportunities" />
          <p className="hidden" aria-hidden="true">
            <label>
              Do not fill this out: <input name="company-website" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#b9ff3b]">Interest form</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-none">Build the next room.</h2>
          </div>
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              autoComplete="name"
              aria-label="Name"
              required
              className="min-h-14 border border-white/20 bg-white/5 px-4 outline-none transition-colors placeholder:text-[#847b70] focus:border-[#b9ff3b]"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              aria-label="Email"
              required
              className="min-h-14 border border-white/20 bg-white/5 px-4 outline-none transition-colors placeholder:text-[#847b70] focus:border-[#b9ff3b]"
              placeholder="Email"
            />
            <textarea
              name="message"
              required
              minLength={20}
              aria-label="Tell us what you want to build"
              className="min-h-36 border border-white/20 bg-white/5 p-4 outline-none transition-colors placeholder:text-[#847b70] focus:border-[#b9ff3b]"
              placeholder="Tell us what you want to build"
            />
            <button type="submit" className="min-h-14 bg-[#b9ff3b] px-6 font-mono text-xs uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#f4efe5]">
              Submit interest
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
