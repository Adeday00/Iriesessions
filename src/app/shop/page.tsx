import type { Metadata } from "next";
import { EditorialGrid, PageShell, SplitFeature } from "@/components/PageShell";
import { artifacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop limited Irie headwear, jewelry, print objects, and artifacts connected to the music and community.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <PageShell
      eyebrow="Shop"
      title="Take a piece of the story."
      intro="Explore limited editions inspired by our music, events, and creative collaborations, from books and prints to apparel, jewelry, and collectible objects."
    >
      <EditorialGrid
        items={artifacts}
        cta="Shop / view"
        categoryLabels={["Publication", "Headwear", "Jewelry"]}
        kickerLabels={["Print / Edition", "Wear / Edition", "Object / Edition"]}
      />
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
