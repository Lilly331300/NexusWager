import { notFound } from "next/navigation";
import { games } from "@/data/games";
import GameDetailClient from "@/components/games/GameDetailClient";

interface GameDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) return { title: "Game Not Found" };
  return {
    title: `${game.title} — NexusWager Game Library`,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) return notFound();

  return <GameDetailClient game={game} />;
}
