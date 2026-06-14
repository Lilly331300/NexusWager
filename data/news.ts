export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "platform-development-update-q2-2026",
    title: "Platform Development Update: Q2 2026 Progress Report",
    category: "Development",
    excerpt: "NexusWager's core infrastructure is taking shape. The escrow system, matchmaking engine, and wallet integration are now in advanced testing phases.",
    content: `NexusWager's engineering team has made significant strides in Q2 2026. The core platform infrastructure is now in advanced testing, with key systems including the escrow engine, matchmaking service, and multi-coin wallet integration showing strong performance metrics.

Key milestones achieved:
- Escrow system: 99.9% uptime in stress testing with 10,000 concurrent transactions
- Matchmaking engine: Sub-2-second pairing for 1v1 competitive matches
- Wallet integration: Multi-currency support with real-time conversion rates
- Anti-cheat framework: Integration with leading detection systems
- SDK alpha: Available for select partner developers

The team is now focused on the public beta infrastructure, community systems, and the tournament framework. We expect to begin phased developer onboarding in Q3 2026.`,
    date: "2026-06-10",
    author: "NexusWager Engineering Team",
    image: "/assets/news/platform-update.jpg",
    featured: true,
    tags: ["Development", "Infrastructure", "Beta"],
  },
  {
    id: "2",
    slug: "game-onboarding-pipeline-opens",
    title: "Game Onboarding Pipeline Opens for Partner Developers",
    category: "Game Onboarding",
    excerpt: "The NexusWager Integration Center is now accepting game submissions from verified partner developers. Learn about the 7-stage partner journey.",
    content: `We are excited to announce that the NexusWager Integration Center is now open for game submissions from our verified partner network. This marks a critical milestone in our ecosystem development.

The partner journey follows our established 7-stage framework:
1. Entry Stage - Initial application and strategic alignment review
2. Ingest/Ejection - Technical feasibility and concept approval
3. Incubation - Deep technical evaluation and engineering collaboration
4. Integration Center - SDK integration and asset configuration
5. Testing & QA - Comprehensive quality assurance
6. Onboarding & Setup - Portal configuration and knowledge transfer
7. Welcome & Go-Live - Official launch and platform featuring

Priority is given to African mobile indie developers and studios, aligning with our mission to empower emerging gaming talent across the continent.`,
    date: "2026-06-05",
    author: "Partner Relations Team",
    image: "/assets/news/game-onboarding.jpg",
    featured: false,
    tags: ["Partners", "Developers", "Games"],
  },
  {
    id: "3",
    slug: "nexus-wallet-system-preview",
    title: "Nexus Wallet System: A Preview of the Financial Core",
    category: "Platform Updates",
    excerpt: "An inside look at the NexusWager Wallet — the multi-currency financial engine powering deposits, conversions, wagers, and payouts.",
    content: `The NexusWager Wallet is designed as the financial backbone of the entire ecosystem. It supports four distinct virtual currencies, each serving a unique purpose in the platform economy.

Nexus Gold Coin (NXC): The primary transactional currency. 1 USD = 1000 NXC. Convertible to fiat and crypto. No expiry.

Nexus Green Coin (NGC): Engagement and onboarding currency. Earned through activity, referrals, and daily logins. Not convertible to fiat. Features a decay mechanism to encourage active participation.

Nexus Black Coin: Loss-recovery mechanism. 1% of each wagered amount on losses is saved. After 10 losses, accumulated value converts to NXC.

Nexus Silver Coin: Win-based reward currency. 1% of winnings reserved. After 10 wins, accumulated value converts to NXC.

The wallet integrates with Paystack, Opay, and crypto gateways for seamless on/off-ramping. All transactions are logged with full audit trails for compliance and transparency.`,
    date: "2026-05-28",
    author: "Product Team",
    image: "/assets/news/wallet-preview.jpg",
    featured: false,
    tags: ["Wallet", "Finance", "NXC"],
  },
  {
    id: "4",
    slug: "community-layer-announcement",
    title: "Community Layer: Building the Social Core of NexusWager",
    category: "Community",
    excerpt: "The NexusWager Community Forum introduces a three-tab architecture for real-time interaction, social graph management, and official announcements.",
    content: `The Community Forum represents the social backbone of NexusWager — a space where players, developers, and administrators converge beyond gameplay.

The three-tab architecture:

General Room: A real-time, high-energy public space for open community interaction. Messages are ephemeral, creating a live, current conversation flow.

Contacts & Social Graph: Personal interaction layer for managing friendships, presence tracking, private messaging, and team chat.

Developer & Admin Channel: Controlled broadcast channel for official updates, tournament announcements, bounties, and system notices.

This system is designed to feel immediate and expressive while maintaining structure and moderation. Integration with the broader platform ensures that community interactions naturally lead to matches, tournaments, and partnerships.`,
    date: "2026-05-20",
    author: "Community Team",
    image: "/assets/news/community.jpg",
    featured: false,
    tags: ["Community", "Social", "Features"],
  },
];

export const newsCategories = ["All", "Platform Updates", "Development", "Game Onboarding", "Partner News", "Community", "Patch Notes"];
