export interface CommunityUpdate {
  id: string;
  type: "announcement" | "update" | "event" | "developer" | "community";
  title: string;
  content: string;
  date: string;
  author: string;
}

export const communityUpdates: CommunityUpdate[] = [
  {
    id: "1",
    type: "announcement",
    title: "Developer SDK Alpha Release",
    content: "The NexusWager SDK is now available in alpha for select partner developers. Access authentication, matchmaking, wallet interaction, and leaderboard services.",
    date: "2026-06-12",
    author: "Dev Team",
  },
  {
    id: "2",
    type: "event",
    title: "Season 1 Championship Preview",
    content: "Get ready for the first NexusWager Championship. 128 players, 250,000 NXC prize pool. Registration opens July 2026.",
    date: "2026-06-10",
    author: "Events Team",
  },
  {
    id: "3",
    type: "update",
    title: "Wallet System Testing Complete",
    content: "The multi-currency wallet system has passed all stress tests. Fiat, crypto, and NXC conversions are working with 99.9% reliability.",
    date: "2026-06-08",
    author: "Engineering",
  },
  {
    id: "4",
    type: "developer",
    title: "New Partner: Void Dynamics",
    content: "Welcome Void Dynamics to the NexusWager ecosystem. Their flagship title Nebula Strike is entering the Integration Center.",
    date: "2026-06-05",
    author: "Partnerships",
  },
  {
    id: "5",
    type: "community",
    title: "Community Guidelines Released",
    content: "Our community moderation framework is now live. Real-time filtering, reporting mechanisms, and admin tools ensure a safe environment.",
    date: "2026-06-01",
    author: "Community Team",
  },
];
