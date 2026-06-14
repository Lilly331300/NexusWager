export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  wins: number;
  losses: number;
  winRate: number;
  tier: string;
  avatar: string;
  change: "up" | "down" | "same";
  changeAmount: number;
}

export const globalLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "StarLord_99", score: 9850, wins: 342, losses: 28, winRate: 92.4, tier: "Professional", avatar: "SL", change: "up", changeAmount: 2 },
  { rank: 2, name: "NebulaKing", score: 9420, wins: 315, losses: 35, winRate: 90.0, tier: "Professional", avatar: "NK", change: "same", changeAmount: 0 },
  { rank: 3, name: "VoidWalker", score: 9180, wins: 298, losses: 42, winRate: 87.6, tier: "Professional", avatar: "VW", change: "up", changeAmount: 5 },
  { rank: 4, name: "SpeedDemon", score: 8900, wins: 280, losses: 48, winRate: 85.4, tier: "Advanced", avatar: "SD", change: "down", changeAmount: 1 },
  { rank: 5, name: "CyberNinja", score: 8750, wins: 265, losses: 55, winRate: 82.8, tier: "Advanced", avatar: "CN", change: "up", changeAmount: 3 },
  { rank: 6, name: "TacticianX", score: 8600, wins: 250, losses: 60, winRate: 80.6, tier: "Advanced", avatar: "TX", change: "same", changeAmount: 0 },
  { rank: 7, name: "TouchdownKing", score: 8400, wins: 238, losses: 62, winRate: 79.3, tier: "Advanced", avatar: "TK", change: "down", changeAmount: 2 },
  { rank: 8, name: "QuantumLeap", score: 8200, wins: 225, losses: 68, winRate: 76.8, tier: "Intermediate", avatar: "QL", change: "up", changeAmount: 4 },
  { rank: 9, name: "GridMaster", score: 7950, wins: 210, losses: 75, winRate: 73.7, tier: "Intermediate", avatar: "GM", change: "same", changeAmount: 0 },
  { rank: 10, name: "NexusRookie", score: 7800, wins: 198, losses: 82, winRate: 70.7, tier: "Intermediate", avatar: "NR", change: "up", changeAmount: 1 },
];

export const tiers = ["Professional", "Advanced", "Intermediate", "Rookie", "Beginner"];
