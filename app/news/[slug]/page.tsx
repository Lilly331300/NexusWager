import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import NewsDetailClient from "@/components/news/NewsDetailClient";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — NexusWager News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return notFound();

  return <NewsDetailClient article={article} />;
}
