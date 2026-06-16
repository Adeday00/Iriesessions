import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { getItemBySlug, opportunities } from "@/lib/content";

export function generateStaticParams() {
  return opportunities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(opportunities, slug);
  return { title: item ? `${item.title} | Irie Sessions` : "Opportunities | Irie Sessions" };
}

export default async function OpportunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(opportunities, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/opportunities" backLabel="Back to opportunities" />;
}
