"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Gamepad2,
  Layers3,
  Trophy,
  Wallet,
} from "lucide-react";
import { games, gameStatuses, type Game } from "../../data/games";

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

function FeaturedGameCard({ game, index }: { game: Game; index: number }) {
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
      <Link href={`/games/${game.slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">View {game.title} details</span>
      </Link>

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
        <p className="text-sm leading-7 text-[#B9B9C7]">
          {game.shortDescription}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
              Player Mode
            </p>
            <p className="mt-1 text-sm font-bold text-white">{game.playerMode}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
              Target
            </p>
            <p className="mt-1 text-sm font-bold text-white">{game.releaseDate}</p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {game.features.slice(0, 2).map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm text-[#D7D7E2]">{feature}</p>
            </div>
          ))}
        </div>

        <div className="relative z-30 mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/games/${game.slug}`}
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            View Details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>

          <Link
            href="/waitlist"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[rgba(168,85,247,0.22)] bg-[rgba(168,85,247,0.06)] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#DCC7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.42)] hover:bg-[rgba(168,85,247,0.12)]"
          >
            Notify Me
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedGames() {
  return (
    <section id="games" className="relative overflow-hidden bg-[#050505] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(217,70,239,0.1),transparent_30%)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
              <Gamepad2 className="h-4 w-4" />
              Game Worlds Preview
            </div>

            <h2
              className="text-[clamp(2.4rem,5vw,4.6rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Competitive game worlds being prepared for the Nexus
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
              Explore future game concepts, partner slots, tournament frameworks,
              and competitive experiences designed for the NexusWager ecosystem.
            </p>
          </div>

          <Link
            href="/games"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.14)]"
          >
            View all games
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game, index) => (
            <FeaturedGameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Layers3,
              title: "Game Integration",
              text: "Approved game worlds can connect through a future structured ecosystem layer.",
            },
            {
              icon: Trophy,
              title: "Tournament Framework",
              text: "Competitive formats, brackets, and seasonal concepts are part of the future roadmap.",
            },
            {
              icon: Wallet,
              title: "Wallet & Escrow",
              text: "Selected match flows can connect to planned wallet and escrow systems after launch.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[26px] border border-[rgba(168,85,247,0.14)] bg-[rgba(10,10,16,0.58)] p-5 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}