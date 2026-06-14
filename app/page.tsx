import Hero from "@/components/home/Hero";
import FeaturedGames from "@/components/home/FeaturedGames";
import HowItWorks from "@/components/home/HowItWorks";
import WalletTrust from "@/components/home/WalletTrust";
import LeaderboardPreview from "@/components/home/LeaderboardPreview";
import PartnerPreview from "@/components/home/PartnerPreview";
import NewsPreview from "@/components/home/NewsPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <HowItWorks />
      <WalletTrust />
      <LeaderboardPreview />
      <PartnerPreview />
      <NewsPreview />
      <FinalCTA />
    </>
  );
}
