import { notFound } from "next/navigation";
import GameDetailClient from "../../../components/games/GameDetailClient";
import { games } from "../../../data/games";

type GameDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) {
    return {
      title: "Game Not Found | NexusWager",
      description: "The requested NexusWager game preview could not be found.",
    };
  }

  return {
    title: `${game.title} | NexusWager Game Preview`,
    description: game.shortDescription,
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) {
    notFound();
  }

  return <GameDetailClient game={game} />;
}