export type PartnerCategory = {
  id: string;
  title: string;
  priority: string;
  description: string;
  tags: string[];
};

export type PartnerStage = {
  id: string;
  stage: string;
  title: string;
  description: string;
  points: string[];
};

export type PartnerBenefit = {
  title: string;
  description: string;
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "african-mobile-indie",
    title: "African Mobile Indie Developers",
    priority: "Priority Tier One",
    description:
      "NexusWager gives special priority to African mobile indie developers and studios, supporting visibility, monetization opportunities, and access to a competitive gaming ecosystem.",
    tags: ["African Talent", "Mobile Games", "Indie Studios", "High Priority"],
  },
  {
    id: "international-indie",
    title: "International Indie Studios",
    priority: "Priority Tier Two",
    description:
      "Independent studios outside Africa can bring genre diversity, global ideas, and unique competitive game concepts into the NexusWager ecosystem.",
    tags: ["Global Indie", "Game Studios", "Creative Concepts"],
  },
  {
    id: "publishers-marketers",
    title: "Publishers & Marketing Partners",
    priority: "Priority Tier Three",
    description:
      "Publishers, marketers, and ecosystem promoters can collaborate with NexusWager to support discovery, campaigns, brand visibility, and growth initiatives.",
    tags: ["Publishing", "Marketing", "Growth", "Visibility"],
  },
  {
    id: "university-developers",
    title: "University Developers",
    priority: "Priority Tier Four",
    description:
      "Universities and student development programs can use NexusWager as a practical pathway for emerging talent to learn publishing, integration, and monetization.",
    tags: ["Students", "Universities", "Education", "Emerging Talent"],
  },
  {
    id: "advertising-partners",
    title: "Advertising Partners",
    priority: "Commercial Partner",
    description:
      "Brand and advertising partners can explore future promotional opportunities inside community, tournament, and game discovery layers.",
    tags: ["Advertising", "Campaigns", "Brand Placement"],
  },
  {
    id: "technology-partners",
    title: "Strategic Technology Partners",
    priority: "Strategic Partner",
    description:
      "Technology providers can collaborate around payments, wallets, analytics, anti-cheat, SDK infrastructure, security, and ecosystem growth.",
    tags: ["Infrastructure", "Payments", "Security", "Analytics"],
  },
];

export const partnerJourney: PartnerStage[] = [
  {
    id: "entry",
    stage: "01",
    title: "Entry Stage",
    description:
      "The partner begins by expressing interest through the NexusWager website, where the team identifies the type of partnership and strategic fit.",
    points: [
      "Partner interest submission",
      "Category identification",
      "Initial priority classification",
    ],
  },
  {
    id: "ingest",
    stage: "02",
    title: "Strategic Review",
    description:
      "The team reviews the partner’s concept, market suitability, technical readiness, and alignment with the NexusWager ecosystem.",
    points: [
      "Discovery call",
      "Concept evaluation",
      "Greenlight or rejection decision",
    ],
  },
  {
    id: "incubation",
    stage: "03",
    title: "Incubation Stage",
    description:
      "Approved partners move into a deeper evaluation stage where technical readiness, performance, security, and compatibility are reviewed.",
    points: [
      "Engineering handshake",
      "Build submission",
      "Technical and compliance assessment",
    ],
  },
  {
    id: "integration",
    stage: "04",
    title: "Integration Center",
    description:
      "The partner game or ecosystem service is prepared for NexusWager integration through SDK configuration, metadata setup, and technical onboarding.",
    points: [
      "SDK integration",
      "Asset configuration",
      "Storefront and game page setup",
    ],
  },
  {
    id: "testing",
    stage: "05",
    title: "Testing & Quality Assurance",
    description:
      "Integrated builds are tested for SDK behavior, matchmaking reliability, wallet interaction, leaderboard logic, performance, and compatibility.",
    points: [
      "SDK functionality tests",
      "Matchmaking and wallet checks",
      "Cross-device performance review",
    ],
  },
  {
    id: "onboarding",
    stage: "06",
    title: "Onboarding & Setup",
    description:
      "The partner receives access to the developer environment, final storefront setup, identity configuration, and documentation support.",
    points: [
      "Developer portal setup",
      "Partner identity configuration",
      "Knowledge transfer and handover",
    ],
  },
  {
    id: "go-live",
    stage: "07",
    title: "Welcome & Go-Live",
    description:
      "The approved partner becomes visible inside the NexusWager ecosystem with launch support, community announcements, and future promotional opportunities.",
    points: [
      "Platform visibility",
      "Community announcements",
      "Launch and growth support",
    ],
  },
];

export const partnerBenefits: PartnerBenefit[] = [
  {
    title: "Low Entry Barrier",
    description:
      "NexusWager is designed to make early partner access approachable for indie developers, studios, and strategic collaborators.",
  },
  {
    title: "Competitive Infrastructure",
    description:
      "Partners can align with matchmaking, wallet, escrow, leaderboard, and future tournament systems instead of building every layer alone.",
  },
  {
    title: "Developer Visibility",
    description:
      "Approved games and partner concepts can gain visibility through the ecosystem, community updates, and future featured placements.",
  },
  {
    title: "Structured Integration",
    description:
      "The partner journey gives developers a clear pathway from first contact to review, integration, testing, onboarding, and launch readiness.",
  },
];