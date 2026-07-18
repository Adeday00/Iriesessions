import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { getItemBySlug, sessions } from "@/lib/content";
import { createPageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return sessions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(sessions, slug);
  return item
    ? createPageMetadata({
        title: item.title,
        description: item.summary,
        path: item.href,
        image: item.image,
      })
    : { title: "Sessions" };
}

export default async function SessionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(sessions, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/sessions" backLabel="Back to sessions" />;
}
