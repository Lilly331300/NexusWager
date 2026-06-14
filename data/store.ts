export interface StoreItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  status: "coming-soon" | "available" | "limited";
  tags: string[];
}

export const storeItems: StoreItem[] = [
  {
    id: "1",
    title: "NexusWager Bronze Subscription",
    category: "Subscription",
    description: "Entry-level premium membership with access to selected subscription features and basic Green Coin allocation.",
    price: 5000,
    image: "/assets/store/bronze-card.jpg",
    status: "coming-soon",
    tags: ["Subscription", "Bronze", "Monthly"],
  },
  {
    id: "2",
    title: "NexusWager Silver Subscription",
    category: "Subscription",
    description: "Intermediate membership with enhanced rewards, exclusive tournament access, and increased Green Coin allocation.",
    price: 7500,
    image: "/assets/store/silver-card.jpg",
    status: "coming-soon",
    tags: ["Subscription", "Silver", "Monthly"],
  },
  {
    id: "3",
    title: "NexusWager Gold Subscription",
    category: "Subscription",
    description: "Highest membership tier with comprehensive benefits, unlimited Green Coin access, and priority customer support.",
    price: 10000,
    image: "/assets/store/gold-card.jpg",
    status: "coming-soon",
    tags: ["Subscription", "Gold", "Monthly"],
  },
  {
    id: "4",
    title: "NexusWager Tournament Pass",
    category: "Digital Product",
    description: "Seasonal tournament pass granting access to exclusive competitive events and premium leaderboard features.",
    price: 2500,
    image: "/assets/store/tournament-pass.jpg",
    status: "coming-soon",
    tags: ["Tournament", "Pass", "Seasonal"],
  },
  {
    id: "5",
    title: "NexusWager Premium Merch Bundle",
    category: "Merchandise",
    description: "Limited edition branded apparel including premium hoodie, cap, and collectible pins.",
    price: 15000,
    image: "/assets/store/merch-bundle.jpg",
    status: "coming-soon",
    tags: ["Merchandise", "Limited", "Apparel"],
  },
  {
    id: "6",
    title: "Nexus Gold Coin Starter Pack",
    category: "Coins",
    description: "Starter pack containing 10,000 NXC for new players entering the ecosystem.",
    price: 10000,
    originalPrice: 12000,
    image: "/assets/store/nxc-pack.jpg",
    status: "coming-soon",
    tags: ["NXC", "Starter", "Coins"],
  },
];

export const storeCategories = ["All", "Subscription", "Digital Product", "Merchandise", "Coins"];
