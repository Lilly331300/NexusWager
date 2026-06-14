export interface Game {
  id: string;
  slug: string;
  title: string;
  genre: string;
  status:
    | "coming-soon"
    | "in-review"
    | "early-access"
    | "tournament-ready"
    | "partner-preview";
  description: string;
  shortDescription: string;
  developer: string;
  tags: string[];
  playerMode: string;
  wagerEnabled: boolean;
  tournamentReady: boolean;
  freeToPlay: boolean;
  releaseDate: string;
  rating: number;
  players: number;
  image: string;
  screenshots: string[];
  features: string[];
  competitiveModes: string[];
  leaderboardPreview: { name: string; score: number; rank: number }[];
  relatedGames: string[];
}

export const games: Game[] = [
  {
    id: "1",
    slug: "nebula-strike",
    title: "Nebula Strike",
    genre: "Action",
    status: "coming-soon",
    description:
      "A futuristic tactical action concept designed for skill-based competitive sessions, structured match rules, escrow-backed competition flow, and future anti-cheat validation.",
    shortDescription:
      "A tactical sci-fi action concept built for future competitive matchmaking.",
    developer: "Void Dynamics",
    tags: ["PvP", "Tactical", "Sci-Fi", "Competitive"],
    playerMode: "1v1 / 2v2",
    wagerEnabled: true,
    tournamentReady: true,
    freeToPlay: false,
    releaseDate: "Q3 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/nebula-strike.jpg",
    screenshots: [],
    features: [
      "Skill-Based Matchmaking",
      "Escrow Flow Planned",
      "Anti-Cheat Validation",
      "Tournament Framework",
    ],
    competitiveModes: [
      "Ranked 1v1 Concept",
      "Ranked 2v2 Concept",
      "Tournament Concept",
      "Practice Mode",
    ],
    leaderboardPreview: [],
    relatedGames: ["quantum-racer", "cyber-arena"],
  },
  {
    id: "2",
    slug: "quantum-racer",
    title: "Quantum Racer",
    genre: "Racing",
    status: "early-access",
    description:
      "A high-speed anti-gravity racing concept prepared for time trials, head-to-head racing, seasonal challenges, and future competitive access through the NexusWager ecosystem.",
    shortDescription:
      "Anti-gravity racing concept with speed challenges and future seasonal competition.",
    developer: "Velocity Labs",
    tags: ["Racing", "Sci-Fi", "Speed", "Arcade"],
    playerMode: "1v1 / 4-Player",
    wagerEnabled: true,
    tournamentReady: true,
    freeToPlay: true,
    releaseDate: "Q2 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/quantum-racer.jpg",
    screenshots: [],
    features: [
      "Time Trial Framework",
      "Seasonal Event Concept",
      "Competitive Race Flow",
      "Leaderboard Layer Planned",
    ],
    competitiveModes: [
      "Time Trial Concept",
      "Head-to-Head Concept",
      "Season Championship",
      "Daily Challenge",
    ],
    leaderboardPreview: [],
    relatedGames: ["nebula-strike", "arena-tactics"],
  },
  {
    id: "3",
    slug: "arena-tactics",
    title: "Arena Tactics",
    genre: "Strategy",
    status: "partner-preview",
    description:
      "A turn-based tactical strategy concept where players command squads in competitive arena scenarios, with planned support for ranked seasons and structured tournament play.",
    shortDescription:
      "Turn-based squad strategy concept for tactical competitive sessions.",
    developer: "Strategic Minds Studio",
    tags: ["Strategy", "Turn-Based", "Tactical", "PvP"],
    playerMode: "1v1",
    wagerEnabled: true,
    tournamentReady: false,
    freeToPlay: false,
    releaseDate: "Q4 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/arena-tactics.jpg",
    screenshots: [],
    features: [
      "Squad Command",
      "Ranked Season Concept",
      "Tournament Brackets Planned",
      "Partner Integration Preview",
    ],
    competitiveModes: [
      "Ranked Duel Concept",
      "Season League Concept",
      "Tournament Bracket Concept",
    ],
    leaderboardPreview: [],
    relatedGames: ["nebula-strike", "cyber-arena"],
  },
  {
    id: "4",
    slug: "cyber-arena",
    title: "Cyber Arena",
    genre: "Action",
    status: "in-review",
    description:
      "A cyberpunk arena combat concept prepared for real-time competitive sessions, character loadouts, dynamic combat spaces, and future wager-enabled match structures.",
    shortDescription:
      "Cyberpunk arena combat concept with real-time PvP and future match systems.",
    developer: "Neon Forge",
    tags: ["PvP", "Cyberpunk", "Arena", "Combat"],
    playerMode: "1v1 / 3v3",
    wagerEnabled: true,
    tournamentReady: true,
    freeToPlay: true,
    releaseDate: "Q3 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/cyber-arena.jpg",
    screenshots: [],
    features: [
      "Dynamic Arena Concept",
      "Character Customization",
      "Wager Flow Planned",
      "Leaderboard Layer Planned",
    ],
    competitiveModes: [
      "Ranked 1v1 Concept",
      "Ranked 3v3 Concept",
      "Tournament Mode Concept",
    ],
    leaderboardPreview: [],
    relatedGames: ["nebula-strike", "arena-tactics"],
  },
  {
    id: "5",
    slug: "grid-iron-pro",
    title: "Grid Iron Pro",
    genre: "Sports",
    status: "tournament-ready",
    description:
      "A competitive sports simulation concept designed for strategic play-calling, seasonal leagues, tournament brackets, and secure competitive match structures.",
    shortDescription:
      "Sports simulation concept with seasonal leagues and tournament flow.",
    developer: "Field Dynamics",
    tags: ["Sports", "Football", "Simulation", "Competitive"],
    playerMode: "1v1",
    wagerEnabled: true,
    tournamentReady: true,
    freeToPlay: false,
    releaseDate: "Q2 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/grid-iron-pro.jpg",
    screenshots: [],
    features: [
      "Physics-Based Play Concept",
      "Seasonal League Framework",
      "Tournament Brackets",
      "Secure Match Flow",
    ],
    competitiveModes: [
      "Ranked Season Concept",
      "Tournament Bracket Concept",
      "Casual Match Concept",
    ],
    leaderboardPreview: [],
    relatedGames: ["quantum-racer", "cyber-arena"],
  },
  {
    id: "6",
    slug: "void-horizon",
    title: "Void Horizon",
    genre: "Strategy",
    status: "coming-soon",
    description:
      "A space strategy concept focused on resource management, territory control, alliance play, and future competitive campaign systems inside the NexusWager ecosystem.",
    shortDescription:
      "Space strategy concept with resource control and competitive campaigns.",
    developer: "Cosmic Works",
    tags: ["Strategy", "Space", "Resource", "PvP"],
    playerMode: "1v1 / 2v2",
    wagerEnabled: false,
    tournamentReady: false,
    freeToPlay: true,
    releaseDate: "Q4 2026",
    rating: 0,
    players: 0,
    image: "/assets/games/void-horizon.jpg",
    screenshots: [],
    features: [
      "Resource Management",
      "Territorial Control",
      "Alliance Play Concept",
      "Seasonal Campaign Framework",
    ],
    competitiveModes: [
      "Ranked 1v1 Concept",
      "Ranked 2v2 Concept",
      "Seasonal Campaign",
    ],
    leaderboardPreview: [],
    relatedGames: ["arena-tactics", "nebula-strike"],
  },
];

export const genres = [
  "All",
  "Action",
  "Strategy",
  "Sports",
  "Racing",
  "New",
  "Trending",
  "Free to Play",
  "Wager Enabled",
];

export const gameStatuses = {
  "coming-soon": {
    label: "Concept Preview",
    class: "status-coming-soon",
  },
  "in-review": {
    label: "In Review",
    class: "status-in-review",
  },
  "early-access": {
    label: "Launch Candidate",
    class: "status-early-access",
  },
  "tournament-ready": {
    label: "Tournament Concept",
    class: "status-tournament-ready",
  },
  "partner-preview": {
    label: "Partner Slot",
    class: "status-partner-preview",
  },
};