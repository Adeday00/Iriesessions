import type { Metadata } from "next";
import { EditorialGrid, PageShell } from "@/components/PageShell";
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
      meta="Irie Collectibles"
    >
      <EditorialGrid
        items={artifacts}
        cta="Shop / view"
        categoryLabels={["Publication", "Headwear", "Jewelry"]}
        kickerLabels={["Print / Edition", "Wear / Edition", "Object / Edition"]}
      />
    </PageShell>
  );
}
