import { EditorialGrid, PageShell, SplitFeature } from "@/components/PageShell";
import { artifacts } from "@/lib/content";

export default function ShopPage() {
  return (
    <PageShell
      eyebrow="Shop"
      title="Shop the artifacts."
      intro="Limited headwear, jewelry, print objects, and product drops connected to the sound, story, and community behind the platform."
    >
      <EditorialGrid items={artifacts} cta="Shop / view" />
      <SplitFeature
        image="/media/hat-black-white-text.jpg"
        eyebrow="Limited edition"
        title="Objects with a reason."
        copy="Current product details include corduroy cotton hats with 3D embroidered text, sterling silver Irie stud earrings, and BORDERS: The Visualscaping Zine as a limited first edition archival print publication."
        cta="Join the list"
        href="/opportunities"
      />
    </PageShell>
  );
}
