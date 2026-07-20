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

let sessionNumber = 0;
const sessionsByDate = [...sessions]
  .sort((first, second) => getSessionTimestamp(second.kicker) - getSessionTimestamp(first.kicker))
  .map((session) => {
    if (session.slug === "be-there-weekly") return session;

    sessionNumber += 1;
    return {
      ...session,
      title: `IRIE Global: Session ${String(sessionNumber).padStart(3, "0")}`,
    };
  });

export default function SessionsPage() {
  return (
    <PageShell
      eyebrow="Sessions"
      title="Rooms that become memory."
      intro="Live rooms, pop-ups, listening nights, and city-led gatherings captured before they disappear into the feed."
    >
      <EditorialGrid items={sessionsByDate} cta="View session" showSummaries={false} />
    </PageShell>
  );
}
