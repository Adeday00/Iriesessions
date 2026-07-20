import { CollaborationIndex } from "@/components/CollaborationIndex";
import { PageShell } from "@/components/PageShell";
import { collaborationItems } from "@/lib/content";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Collaborations",
  description:
    "Explore Irie Global collaborations across music, fashion, culture, community, and creative partnerships.",
  path: "/collaborations",
});

export default function CollaborationsPage() {
  return (
    <PageShell
      eyebrow="Collaborations"
      title="Created together."
      intro="Projects, partnerships, and cultural exchanges created alongside the people shaping Irie's world."
      meta="Creative partnerships"
    >
      <CollaborationIndex items={collaborationItems} />
    </PageShell>
  );
}
