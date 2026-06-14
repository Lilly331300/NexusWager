export type WalletCoin = {
  name: string;
  label: string;
  description: string;
  useCase: string;
};

export type WalletFlowStep = {
  stage: string;
  title: string;
  description: string;
};

export type WalletFeature = {
  title: string;
  description: string;
};

export const walletCoins: WalletCoin[] = [
  {
    name: "Nexus Gold",
    label: "Primary Utility Coin",
    description:
      "A planned premium in-platform coin for higher-value competitive actions, selected tournaments, and future platform utility.",
    useCase: "Premium competition flow",
  },
  {
    name: "Nexus Green",
    label: "Access & Activity Coin",
    description:
      "A planned coin layer for community activity, player rewards, low-friction access, and ecosystem engagement.",
    useCase: "Community and access utility",
  },
  {
    name: "Nexus Black",
    label: "Partner & Elite Layer",
    description:
      "A planned advanced utility layer for partner campaigns, elite events, and selected ecosystem privileges.",
    useCase: "Partner and elite access",
  },
  {
    name: "Nexus Silver",
    label: "Entry-Level Utility Coin",
    description:
      "A planned entry-level coin designed for basic platform interactions, early access flows, and smaller competitive actions.",
    useCase: "Entry-level interaction",
  },
];

export const walletFlow: WalletFlowStep[] = [
  {
    stage: "01",
    title: "Fund Wallet",
    description:
      "Players will be able to prepare their NexusWager wallet through supported payment and conversion options once the platform is live.",
  },
  {
    stage: "02",
    title: "Choose Match",
    description:
      "Players select supported game modes, match types, or future tournaments from approved game worlds.",
  },
  {
    stage: "03",
    title: "Escrow Lock",
    description:
      "For supported competitive matches, the platform will hold the match stake securely while the session is active.",
  },
  {
    stage: "04",
    title: "Result Verification",
    description:
      "Match outcomes will be checked through game integration, platform rules, and verification logic before settlement.",
  },
  {
    stage: "05",
    title: "Settlement",
    description:
      "After verification, the system will release rewards, handle fees, and update the player wallet record.",
  },
];

export const walletFeatures: WalletFeature[] = [
  {
    title: "Escrow-Backed Match Flow",
    description:
      "The wallet layer is designed to support competitive matches by locking match value until outcomes are verified.",
  },
  {
    title: "Multi-Coin Platform Logic",
    description:
      "NexusWager is designed around multiple in-platform coin types for different access, reward, and partner use cases.",
  },
  {
    title: "Transaction History",
    description:
      "Players will be able to view future wallet actions, match settlements, rewards, and platform activity history.",
  },
  {
    title: "Partner Utility Layer",
    description:
      "The wallet system can support partner campaigns, developer incentives, tournament rewards, and ecosystem promotions.",
  },
];