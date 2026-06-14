export type WaitlistRole = {
  title: string;
  description: string;
};

export type LaunchMilestone = {
  title: string;
  description: string;
};

export type InterestOption = {
  label: string;
  value: string;
};

export const waitlistRoles: WaitlistRole[] = [
  {
    title: "Players",
    description:
      "Join early to follow NexusWager game worlds, competitive previews, future tournaments, wallet updates, and launch announcements.",
  },
  {
    title: "Game Developers",
    description:
      "Register interest as a developer or studio preparing to explore future NexusWager integration, SDK access, and partner review.",
  },
  {
    title: "Strategic Partners",
    description:
      "Join as a publisher, advertiser, university, community group, investor, or infrastructure partner interested in the ecosystem.",
  },
];

export const launchMilestones: LaunchMilestone[] = [
  {
    title: "Website Foundation",
    description:
      "The NexusWager brand, platform story, game previews, partner pages, wallet concept, and ecosystem pages are being prepared.",
  },
  {
    title: "Community Formation",
    description:
      "Early players, developers, and partners can join the waitlist before community channels, updates, and launch campaigns expand.",
  },
  {
    title: "Platform Buildout",
    description:
      "Future phases will connect accounts, backend systems, partner intake, wallet logic, game integrations, and admin tools.",
  },
  {
    title: "Launch Preparation",
    description:
      "The final pre-launch stage will focus on testing, partner readiness, game integration, security review, and public release planning.",
  },
];

export const interestOptions: InterestOption[] = [
  {
    label: "Player",
    value: "player",
  },
  {
    label: "Game Developer",
    value: "developer",
  },
  {
    label: "Game Studio",
    value: "studio",
  },
  {
    label: "Publisher / Marketing Partner",
    value: "publisher",
  },
  {
    label: "University / Student Developer",
    value: "university",
  },
  {
    label: "Advertiser",
    value: "advertiser",
  },
  {
    label: "Technology Partner",
    value: "technology",
  },
  {
    label: "Investor / Strategic Partner",
    value: "investor",
  },
];