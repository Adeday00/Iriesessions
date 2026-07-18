import { EditorialGrid, PageShell } from "@/components/PageShell";
import { releases } from "@/lib/content";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Music",
  description: "Irie Sessions releases with cover art, credits, visuals, collaborators, and direct listening links.",
  path: "/music",
});

export default function MusicPage() {
  return (
    <PageShell
      eyebrow="Music"
      title="Every record has a story."
      intro="Explore the complete story behind every release, from cover art and credits to visuals, collaborators, lyrics, and the moments that shaped the music."
    >
      <EditorialGrid items={releases} cta="Open release" />
    </PageShell>
  );
}
