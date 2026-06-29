import type { Metadata } from "next";
import { EditorialGrid, PageShell } from "@/components/PageShell";
import { releases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Music",
  description: "Irie Sessions releases with cover art, credits, visuals, collaborators, and direct listening links.",
  alternates: { canonical: "/music" },
};

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
