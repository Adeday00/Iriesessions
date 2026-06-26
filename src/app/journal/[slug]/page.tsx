import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { getItemBySlug, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(projects, slug);
  return item
    ? {
        title: item.title,
        description: item.summary,
        alternates: { canonical: item.href },
        openGraph: { title: item.title, description: item.summary, images: [item.image] },
      }
    : { title: "Journal" };
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(projects, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/journal" backLabel="Back to journal" />;
}
