import { EditorialGrid, PageShell } from "@/components/PageShell";
import { releases } from "@/lib/content";

export default function MusicPage() {
  return (
    <PageShell
      eyebrow="Music"
      title="Releases with a full paper trail."
      intro="Cover art, credits, videos, stream links, collaborators, and notes from the world around each record."
    >
      <EditorialGrid items={releases} cta="Open release" />
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 border border-white/15 p-6 sm:p-10 lg:grid-cols-3 lg:p-12">
          {[
            ["Credits", "The producers, writers, and collaborators behind each record."],
            ["Visuals", "Cover art, videos, and the imagery built around the sound."],
            ["Links", "Every stream and watch path, gathered in one place."],
          ].map(([label, copy]) => (
            <div key={label}>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#b9ff3b]">{label}</p>
              <p className="mt-4 text-lg leading-8 text-[#cfc5b8]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
