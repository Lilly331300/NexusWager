"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Filter,
  Gamepad2,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";
import { games, gameStatuses, genres, type Game } from "../../data/games";
import GlowButton from "../shared/GlowButton";

const statusStyles: Record<Game["status"], string> = {
  "coming-soon":
    "border-white/10 bg-white/[0.05] text-white/72 shadow-[0_0_20px_rgba(255,255,255,0.04)]",
  "in-review":
    "border-amber-300/20 bg-amber-300/[0.08] text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.08)]",
  "early-access":
    "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.08)]",
  "tournament-ready":
    "border-[#C9A7FF]/25 bg-[#C9A7FF]/10 text-[#E9D5FF] shadow-[0_0_24px_rgba(201,167,255,0.12)]",
  "partner-preview":
    "border-fuchsia-300/20 bg-fuchsia-300/[0.08] text-fuchsia-200 shadow-[0_0_20px_rgba(217,70,239,0.08)]",
};

function getFilteredGames(selectedGenre: string, searchQuery: string) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return games.filter((game) => {
    const matchesSearch =
      !normalizedQuery ||
      game.title.toLowerCase().includes(normalizedQuery) ||
      game.genre.toLowerCase().includes(normalizedQuery) ||
      game.developer.toLowerCase().includes(normalizedQuery) ||
      game.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

    if (!matchesSearch) return false;

    if (selectedGenre === "All") return true;

    if (selectedGenre === "New") {
      return ["coming-soon", "in-review", "partner-preview"].includes(game.status);
    }

    if (selectedGenre === "Trending") {
      return ["early-access", "tournament-ready"].includes(game.status);
    }

    if (selectedGenre === "Free to Play") {
      return game.freeToPlay;
    }

    if (selectedGenre === "Wager Enabled") {
      return game.wagerEnabled;
    }

    return game.genre === selectedGenre;
  });
}

function GameCard({ game, index }: { game: Game; index: number }) {
  const status = gameStatuses[game.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.018,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className="group relative overflow-hidden rounded-[32px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.76)] shadow-[0_0_42px_rgba(168,85,247,0.08)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_48%)]" />
      </div>

      <div
        className="relative h-[245px] overflow-hidden bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.86),rgba(5,5,5,0.18)), url('${game.image}'), url('/assets/ui/final-cta-controller.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span
            className={`rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] backdrop-blur-md ${
              statusStyles[game.status]
            }`}
          >
            {status.label}
          </span>

          {game.freeToPlay && (
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200 backdrop-blur-md">
              Free Access Concept
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A7FF]">
            {game.genre}
          </p>
          <h3 className="text-3xl font-black uppercase leading-none text-white">
            {game.title}
          </h3>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <p className="text-sm leading-7 text-[#B9B9C7]">{game.shortDescription}</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
              Player Mode
            </p>
            <p className="mt-1 text-sm font-bold text-white">{game.playerMode}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
              Target Window
            </p>
            <p className="mt-1 text-sm font-bold text-white">{game.releaseDate}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(168,85,247,0.14)] bg-[rgba(168,85,247,0.06)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C9A7FF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {game.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm text-[#D7D7E2]">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#waitlist"
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            Notify Me
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>

          <Link
            href="/partners"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[rgba(168,85,247,0.22)] bg-[rgba(168,85,247,0.06)] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#DCC7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.42)] hover:bg-[rgba(168,85,247,0.12)]"
          >
            Partner Access
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function GamesPageClient() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = useMemo(
    () => getFilteredGames(selectedGenre, searchQuery),
    [selectedGenre, searchQuery]
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.12),transparent_28%),linear-gradient(180deg,#050505_0%,#090712_48%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />

      <section className="container-narrow relative z-10 pt-28 pb-20 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:border-[rgba(168,85,247,0.3)] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
            <Gamepad2 className="h-4 w-4" />
            Game Worlds Preview
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              NexusWager
            </span>{" "}
            Game Layer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            A preview of competitive game worlds, partner concepts, tournament
            frameworks, and future experiences being prepared for the NexusWager
            ecosystem.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/#waitlist" size="lg">
              Join Waitlist
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/partners" variant="outline" size="lg">
              Become a Partner
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              value: `${games.length}`,
              label: "Preview Worlds",
            },
            {
              icon: Wallet,
              value: "Escrow",
              label: "Secure Match Flow",
            },
            {
              icon: ShieldCheck,
              value: "SDK",
              label: "Gateway Planned",
            },
            {
              icon: Trophy,
              value: "Events",
              label: "Tournament Framework",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-5 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-2xl font-black uppercase text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.58)] p-4 shadow-[0_0_46px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <Filter className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                  Filter Game Concepts
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Search by genre, title, developer, status, or feature.
                </p>
              </div>
            </div>

            <div className="relative w-full lg:max-w-[340px]">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search games..."
                className="h-12 w-full rounded-full border border-white/10 bg-white/[0.045] pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[rgba(168,85,247,0.38)] focus:bg-white/[0.07]"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => setSelectedGenre(genre)}
                className={`min-w-fit rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition-all duration-300 ${
                  selectedGenre === genre
                    ? "border-[#C9A7FF]/45 bg-[#C9A7FF]/16 text-[#F1E7FF]"
                    : "border-white/10 bg-white/[0.035] text-white/48 hover:border-[rgba(168,85,247,0.28)] hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="mt-12 rounded-[30px] border border-white/10 bg-white/[0.035] p-10 text-center">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#C9A7FF]" />
            <h3 className="text-2xl font-black text-white">No game concepts found</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/55">
              Try a different filter or search term to explore more NexusWager game
              world previews.
            </p>
          </div>
        )}

        <div className="mt-16 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Partner Game Pipeline
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Bring your game into the NexusWager ecosystem
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                NexusWager is preparing a structured pathway for independent
                developers, studios, publishers, and strategic partners to integrate
                competitive game experiences through a controlled review and
                integration pipeline.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/partners" size="lg">
                  Explore Partner Access
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/blog" variant="outline" size="lg">
                  Read Ecosystem Blog
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Layers3,
                  title: "Integration Center",
                  text: "A future structured environment for onboarding game concepts and partner builds.",
                },
                {
                  icon: Clock3,
                  title: "Review Pipeline",
                  text: "Concepts move through screening, compatibility checks, and ecosystem alignment.",
                },
                {
                  icon: Zap,
                  title: "Visibility Framework",
                  text: "Approved concepts can receive platform visibility, community exposure, and event consideration.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}