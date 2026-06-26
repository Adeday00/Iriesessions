import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail/DetailPage";
import { artifacts, getItemBySlug } from "@/lib/content";

const shopItems = artifacts.filter((item) => item.href.startsWith("/shop/"));

export function generateStaticParams() {
  return shopItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(shopItems, slug);
  return item
    ? {
        title: item.title,
        description: item.summary,
        alternates: { canonical: item.href },
        openGraph: { title: item.title, description: item.summary, images: [item.image] },
      }
    : { title: "Shop" };
}

export default async function ShopDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItemBySlug(shopItems, slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/shop" backLabel="Back to shop" />;
}
