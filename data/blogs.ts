export type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  source: "LinkedIn" | "NexusWager News";
  externalUrl?: string;
  image: string;
  fallbackImage: string;
  excerpt: string;
  readTime: string;
  tags: string[];
};

export const linkedInBlogs: BlogPost[] = [
  {
    id: "aaa-gaming-vs-ugc",
    title: "The Next Great Threat to AAA Gaming Is Not Another Studio. It Is You.",
    date: "June 7, 2026",
    category: "Gaming Industry",
    source: "LinkedIn",
    externalUrl:
      "https://www.linkedin.com/pulse/next-great-threat-aaa-gaming-another-studio-you-mwfke/",
    image: "/assets/blog/aaa-gaming-ugc.jpg",
    fallbackImage: "/assets/ui/final-cta-controller.webp",
    excerpt:
      "A deep look at how user-generated content, creator economies, and community-built gaming worlds are challenging traditional AAA studios and reshaping interactive entertainment.",
    readTime: "8 min read",
    tags: ["UGC", "Creator Economy", "Gaming", "NexusWager"],
  },
  {
    id: "gaming-guilds-family-dinner",
    title: "The Modern Family Dinner: How Gaming Guilds Replaced the Dining Table",
    date: "May 31, 2026",
    category: "Gaming Culture",
    source: "LinkedIn",
    externalUrl:
      "https://www.linkedin.com/pulse/modern-family-dinner-how-gaming-guilds-replaced-ekice/",
    image: "/assets/blog/gaming-guilds-family-dinner.jpg",
    fallbackImage: "/assets/news/community.jpg",
    excerpt:
      "Gaming is no longer only entertainment. It is becoming a new digital living room where families, friends, and communities connect across distance through shared play.",
    readTime: "7 min read",
    tags: ["Community", "Family Gaming", "Gaming Culture", "NexusWager"],
  },
  {
    id: "game-distribution-control",
    title: "Who Controls the Games You Play? The Untold Story of Game Distribution",
    date: "May 17, 2026",
    category: "Game Distribution",
    source: "LinkedIn",
    externalUrl:
      "https://www.linkedin.com/pulse/who-controls-games-you-play-untold-story-game-distribution-pzane/",
    image: "/assets/blog/game-distribution-control.jpg",
    fallbackImage: "/assets/ui/final-cta-controller.webp",
    excerpt:
      "Game distribution has evolved from physical shelves into digital ecosystems controlled by platforms, algorithms, cloud infrastructure, subscriptions, and creator-driven marketplaces.",
    readTime: "9 min read",
    tags: ["Distribution", "Cloud Gaming", "Digital Ownership", "NexusWager"],
  },
];

export const nexusNews: BlogPost[] = [
  {
    id: "nexuswager-coming-soon",
    title: "NexusWager Is Preparing a New Competitive Gaming Ecosystem",
    date: "Coming Soon",
    category: "Platform Update",
    source: "NexusWager News",
    image: "/assets/news/nexus-coming-soon.jpg",
    fallbackImage: "/assets/ui/final-cta-controller.webp",
    excerpt:
      "NexusWager is being built as a connected competitive gaming platform where players, developers, and partners can interact through games, wallets, community tools, and secure competition flows.",
    readTime: "2 min read",
    tags: ["Coming Soon", "Platform", "Gaming Ecosystem"],
  },
  {
    id: "wallet-matchmaking-escrow",
    title: "Wallet, Matchmaking, and Escrow Will Power the NexusWager Core",
    date: "Product Preview",
    category: "Product News",
    source: "NexusWager News",
    image: "/assets/news/nexus-wallet-escrow.jpg",
    fallbackImage: "/assets/ui/final-cta-controller.webp",
    excerpt:
      "The platform is being designed around secure wallet interactions, player matchmaking, and escrow-backed competition so that every competitive match can be structured, traceable, and fair.",
    readTime: "2 min read",
    tags: ["Wallet", "Escrow", "Matchmaking"],
  },
  {
    id: "community-developer-partner-layer",
    title: "NexusWager Will Connect Players, Developers, and Partners",
    date: "Ecosystem Preview",
    category: "Community",
    source: "NexusWager News",
    image: "/assets/news/nexus-community-layer.jpg",
    fallbackImage: "/assets/news/community.jpg",
    excerpt:
      "Beyond gameplay, NexusWager is preparing a community and partner layer where players can connect, developers can integrate games, and ecosystem partners can grow with the platform.",
    readTime: "2 min read",
    tags: ["Community", "Developers", "Partners"],
  },
];

export const allBlogPosts: BlogPost[] = [...linkedInBlogs, ...nexusNews];