export type FAQCategory = "Platform" | "Players" | "Developers" | "Wallet" | "Launch";

export type FAQItem = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
};

export const faqCategories: FAQCategory[] = [
  "Platform",
  "Players",
  "Developers",
  "Wallet",
  "Launch",
];

export const faqs: FAQItem[] = [
  {
    id: "what-is-nexuswager",
    category: "Platform",
    question: "What is NexusWager?",
    answer:
      "NexusWager is a competitive gaming ecosystem being built to connect players, game developers, partner studios, wallet systems, escrow-backed match flow, community features, and future tournament experiences.",
  },
  {
    id: "is-platform-live",
    category: "Launch",
    question: "Is NexusWager live right now?",
    answer:
      "No. NexusWager is currently in its pre-launch and development stage. The website presents the platform vision, game concepts, partner pathway, wallet preview, and waitlist before the full ecosystem goes live.",
  },
  {
    id: "can-users-play-now",
    category: "Players",
    question: "Can players play games on NexusWager now?",
    answer:
      "Not yet. The game worlds shown on the website are previews, launch candidates, partner concepts, or ecosystem examples. Real gameplay access will depend on future platform launch, integration testing, and approved game availability.",
  },
  {
    id: "what-games-will-be-added",
    category: "Players",
    question: "What types of games will NexusWager support?",
    answer:
      "NexusWager is designed to support competitive game experiences across categories such as action, racing, strategy, sports, arcade, and partner-developed game concepts. Final availability will depend on developer onboarding and platform review.",
  },
  {
    id: "how-does-escrow-work",
    category: "Wallet",
    question: "How will escrow work?",
    answer:
      "The planned escrow layer will hold supported match value during a competitive session. After the match result is verified, the system can release rewards, update wallet history, and complete settlement based on platform rules.",
  },
  {
    id: "is-wallet-functional",
    category: "Wallet",
    question: "Is the wallet system already functional?",
    answer:
      "No. The wallet page is currently a concept preview. Full wallet functionality will require backend systems, user accounts, payment rails, security controls, transaction history, and compliance review.",
  },
  {
    id: "what-are-nexus-coins",
    category: "Wallet",
    question: "What are Nexus coins?",
    answer:
      "Nexus coins are planned in-platform utility layers designed for different use cases such as access, rewards, premium competition flow, partner campaigns, and community activity. These are concept layers until the wallet system is fully implemented.",
  },
  {
    id: "developer-partner",
    category: "Developers",
    question: "Can developers bring their games to NexusWager?",
    answer:
      "Yes. NexusWager is preparing a partner pathway for developers, studios, universities, publishers, advertisers, and technology partners. Game developers will go through review, integration, testing, onboarding, and launch readiness steps.",
  },
  {
    id: "african-developers",
    category: "Developers",
    question: "Does NexusWager support African mobile game developers?",
    answer:
      "Yes. NexusWager gives special priority to African mobile indie developers and studios, with the goal of supporting visibility, monetization opportunities, and ecosystem participation for emerging game creators.",
  },
  {
    id: "how-to-join",
    category: "Launch",
    question: "How can I join early?",
    answer:
      "You can join the waitlist through the Waitlist page. The form is currently front-end only and can later be connected to a database, email system, CRM, or admin dashboard.",
  },
  {
    id: "leaderboards-live",
    category: "Players",
    question: "Are leaderboards and tournaments live?",
    answer:
      "No. Leaderboards, rankings, tournaments, and match records shown or described on the website are framework previews. They are not live player rankings or active tournaments yet.",
  },
  {
    id: "security",
    category: "Platform",
    question: "How will NexusWager handle fairness and security?",
    answer:
      "The planned system includes match verification, game integration checks, admin review, escrow logic, wallet history, and future anti-cheat or validation tools. Final security systems will depend on platform buildout and game integration requirements.",
  },
];