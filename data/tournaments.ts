export interface Tournament {
  id: string;
  title: string;
  game: string;
  status: "upcoming" | "registration" | "active" | "completed";
  entryFee: number;
  prizePool: number;
  startDate: string;
  endDate: string;
  format: string;
  participants: number;
  maxParticipants: number;
  image: string;
}

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "Season 1 Championship",
    game: "Nebula Strike",
    status: "upcoming",
    entryFee: 5000,
    prizePool: 250000,
    startDate: "2026-08-01",
    endDate: "2026-08-15",
    format: "Single Elimination",
    participants: 0,
    maxParticipants: 128,
    image: "/assets/games/nebula-strike.jpg",
  },
  {
    id: "2",
    title: "Quantum Grand Prix",
    game: "Quantum Racer",
    status: "registration",
    entryFee: 2500,
    prizePool: 100000,
    startDate: "2026-07-15",
    endDate: "2026-07-20",
    format: "Time Trial",
    participants: 64,
    maxParticipants: 256,
    image: "/assets/games/quantum-racer.jpg",
  },
  {
    id: "3",
    title: "Tactical Masters League",
    game: "Arena Tactics",
    status: "upcoming",
    entryFee: 3000,
    prizePool: 150000,
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    format: "League Format",
    participants: 0,
    maxParticipants: 64,
    image: "/assets/games/arena-tactics.jpg",
  },
];

export const tournamentFormats = ["Single Elimination", "Double Elimination", "League Format", "Swiss System", "Time Trial"];
