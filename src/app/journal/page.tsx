import { PageShell } from "@/components/PageShell";
import { JournalArchive } from "@/components/JournalArchive";
import { archiveItems } from "@/lib/content";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Journal",
  description: "Explore the Irie archive of sessions, releases, cultural projects, zines, product drops, and partner work.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="Journal / Archive"
      title="The memory system."
      intro="The full archive: city notes, sessions, releases, zines, product drops, and partner proof — searchable in one place."
    >
      <JournalArchive items={archiveItems} />
    </PageShell>
  );
}
