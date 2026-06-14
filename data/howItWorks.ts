export type HowStep = {
  stage: string;
  title: string;
  description: string;
};

export type EcosystemLayer = {
  title: string;
  description: string;
};

export type UserPath = {
  title: string;
  description: string;
  points: string[];
};

export const howSteps: HowStep[] = [
  {
    stage: "01",
    title: "Discover Game Worlds",
    description:
      "Players explore approved game concepts, partner games, tournament previews, and future competitive experiences inside the NexusWager platform.",
  },
  {
    stage: "02",
    title: "Create a Nexus Account",
    description:
      "Players will access the ecosystem through a secure account layer connected to their wallet, match activity, history, rewards, and community identity.",
  },
  {
    stage: "03",
    title: "Select Match Type",
    description:
      "Players choose supported match formats such as practice modes, competitive duels, seasonal challenges, or future tournament brackets.",
  },
  {
    stage: "04",
    title: "Escrow Locks Match Value",
    description:
      "For supported competitive sessions, the platform will hold the match value securely until the result is verified and settlement is complete.",
  },
  {
    stage: "05",
    title: "Play Through Integrated Games",
    description:
      "Approved games connect to NexusWager through a planned integration layer that can support sessions, outcomes, verification, and platform activity.",
  },
  {
    stage: "06",
    title: "Verify Results",
    description:
      "Match outcomes are planned to be checked through game integration, rules, admin controls, and verification logic before any settlement happens.",
  },
  {
    stage: "07",
    title: "Settle Rewards",
    description:
      "After verification, the system can release rewards, update wallet history, record activity, and support future rankings or tournament progress.",
  },
];

export const ecosystemLayers: EcosystemLayer[] = [
  {
    title: "Player App",
    description:
      "The player-facing layer where users discover games, manage accounts, join matches, access wallet features, and participate in community activity.",
  },
  {
    title: "Game Integration Gateway",
    description:
      "A planned bridge between NexusWager and approved games, allowing sessions, results, match state, and game metadata to communicate with the platform.",
  },
  {
    title: "Matchmaking Layer",
    description:
      "The system designed to help players find structured competitive sessions, private challenges, tournament entries, and future ranked formats.",
  },
  {
    title: "Wallet & Escrow Layer",
    description:
      "The financial trust layer planned to support wallet balances, match escrow, settlement, transaction history, and future coin utility.",
  },
  {
    title: "Admin & Review Layer",
    description:
      "A control layer for reviewing games, monitoring ecosystem activity, checking reports, managing partners, and supporting quality control.",
  },
  {
    title: "Community Layer",
    description:
      "A social layer for updates, discussions, player identity, developer visibility, community rooms, and future ecosystem engagement.",
  },
];

export const userPaths: UserPath[] = [
  {
    title: "For Players",
    description:
      "Players will use NexusWager to discover competitive game worlds, join structured matches, manage wallet activity, and participate in future tournaments.",
    points: [
      "Discover game worlds",
      "Join future match formats",
      "Use wallet and escrow features",
      "Track activity and rewards",
    ],
  },
  {
    title: "For Developers",
    description:
      "Developers can prepare games for the NexusWager ecosystem through a planned review, integration, testing, and partner onboarding process.",
    points: [
      "Submit partner interest",
      "Enter review pipeline",
      "Prepare SDK integration",
      "Gain ecosystem visibility",
    ],
  },
  {
    title: "For Partners",
    description:
      "Studios, publishers, universities, advertisers, and technology partners can collaborate around distribution, infrastructure, campaigns, and growth.",
    points: [
      "Access partner pathway",
      "Support platform growth",
      "Collaborate on campaigns",
      "Explore ecosystem utility",
    ],
  },
];