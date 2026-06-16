import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { archiveItems } from "@/lib/content";

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="Journal / Archive"
      title="The memory system."
      intro="The full archive: city notes, sessions, releases, zines, product drops, collaborator credits, and partner proof in one place."
    >
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15">
          {archiveItems.map(([title, type, year, href]) => (
            <Link
              key={title}
              href={href}
              className="grid gap-4 bg-[#090909] p-5 transition hover:bg-[#b9ff3b] hover:text-black sm:grid-cols-[1fr_220px_120px]"
            >
              <span className="text-2xl font-black uppercase">{title}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75">{type}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] opacity-75 sm:text-right">{year}</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
