import { EditorialGrid, PageShell } from "@/components/PageShell";
import { sessions } from "@/lib/content";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Sessions",
  description: "Live Irie rooms, pop-ups, listening nights, and city-led gatherings preserved as a cultural archive.",
  path: "/sessions",
});

function getSessionTimestamp(kicker: string) {
  const timestamp = Date.parse(kicker.split(" / ")[0]);
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

const sessionsByDate = [...sessions].sort(
  (first, second) => getSessionTimestamp(second.kicker) - getSessionTimestamp(first.kicker),
);

export default function SessionsPage() {
  return (
    <PageShell
      eyebrow="Sessions"
      title="Rooms that become memory."
      intro="Live rooms, pop-ups, listening nights, and city-led gatherings captured before they disappear into the feed."
    >
      <EditorialGrid items={sessionsByDate} cta="View session" />
    </PageShell>
  );
}
