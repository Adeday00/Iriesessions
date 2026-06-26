import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { getItemBySlug, releases } from "@/lib/content";

export function generateStaticParams() {
  return releases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(releases, slug);
  return item
    ? {
        title: item.title,
        description: item.summary,
        alternates: { canonical: item.href },
        openGraph: { title: item.title, description: item.summary, images: [item.image] },
      }
    : { title: "Music" };
}

export default async function MusicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(releases, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/music" backLabel="Back to music" />;
}
