import type { Metadata } from "next";
import { EditorialGrid, PageShell } from "@/components/PageShell";
import { sessions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sessions",
  description: "Live Irie rooms, pop-ups, listening nights, and city-led gatherings preserved as a cultural archive.",
  alternates: { canonical: "/sessions" },
};

export default function SessionsPage() {
  return (
    <PageShell
      eyebrow="Sessions"
      title="Rooms that become memory."
      intro="Live rooms, pop-ups, listening nights, and city-led gatherings captured before they disappear into the feed."
    >
      <EditorialGrid items={sessions} cta="View session" />
    </PageShell>
  );
}
