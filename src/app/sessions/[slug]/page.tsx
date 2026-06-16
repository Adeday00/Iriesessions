import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { getItemBySlug, sessions } from "@/lib/content";

export function generateStaticParams() {
  return sessions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(sessions, slug);
  return { title: item ? `${item.title} | Irie Sessions` : "Session | Irie Sessions" };
}

export default async function SessionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(sessions, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/sessions" backLabel="Back to sessions" />;
}
