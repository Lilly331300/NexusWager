export interface PartnerStage {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export const partnerStages: PartnerStage[] = [
  {
    number: 1,
    title: "Entry Stage",
    description: "Initial application through the official website. Strategic alignment review, partner categorization, and priority assignment based on developer tier.",
    icon: "DoorOpen",
    duration: "1-3 days",
  },
  {
    number: 2,
    title: "Ingest / Ejection",
    description: "Discovery call, concept approval process, and technical requirements checklist. Strategic assessment combined with legal documentation preparation.",
    icon: "Filter",
    duration: "3-7 days",
  },
  {
    number: 3,
    title: "Incubation",
    description: "Engineering handshake between NexusWager and partner teams. Build submission, technical review, compliance assessment, and deep evaluation.",
    icon: "FlaskConical",
    duration: "1-2 weeks",
  },
  {
    number: 4,
    title: "Integration Center",
    description: "SDK integration, asset configuration, storefront setup, and build/patch tool integration. Key generation for secure production access.",
    icon: "Plug",
    duration: "1-2 weeks",
  },
  {
    number: 5,
    title: "Testing & QA",
    description: "Comprehensive quality assurance covering SDK functionality, matchmaking reliability, wallet interactions, leaderboard updates, and cross-device compatibility.",
    icon: "ShieldCheck",
    duration: "1-2 weeks",
  },
  {
    number: 6,
    title: "Onboarding & Setup",
    description: "Portal configuration, storefront setup, identity configuration, and knowledge transfer. Formal handover of partner portal control.",
    icon: "Settings",
    duration: "3-5 days",
  },
  {
    number: 7,
    title: "Welcome & Go-Live",
    description: "Official launch within the NexusWager ecosystem. Platform featuring, community announcements, tournament consideration, and marketing support.",
    icon: "Rocket",
    duration: "Ongoing",
  },
];

export const partnerCategories = [
  { type: "Independent Developers", description: "Solo creators and small teams building competitive games", icon: "User" },
  { type: "Game Studios", description: "Established studios with multiple titles and proven track records", icon: "Building2" },
  { type: "Publishers", description: "Content distributors and marketing partners", icon: "BookOpen" },
  { type: "Universities", description: "Educational institutions and student development teams", icon: "GraduationCap" },
  { type: "Advertisers", description: "Brand partners seeking targeted gaming audience engagement", icon: "Megaphone" },
  { type: "Investors", description: "Strategic investors supporting ecosystem growth", icon: "TrendingUp" },
  { type: "Strategic Technology Partners", description: "Technology providers enhancing platform capabilities", icon: "Cpu" },
];

export const partnerBenefits = [
  "Game publishing pathway with structured integration",
  "SDK integration process with full documentation",
  "Technical review and quality assurance support",
  "Storefront setup and visibility configuration",
  "Community announcements and marketing campaigns",
  "Tournament consideration and event integration",
  "Future sandbox environment for independent testing",
  "Revenue sharing through N3 Commission structure",
];
