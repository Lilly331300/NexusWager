"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Eye,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import { games } from "@/data/games";

const filters = [
  "All",
  "Action",
  "Strategy",
  "Sports",
  "Racing",
  "Partner Concepts",
  "Tournament Concepts",
  "Free Access Concepts",
];

const conceptStatusMap = {
  "coming-soon": {
    label: "Concept Preview",
    className:
      "border-[rgba(177,0,255,0.34)] bg-[rgba(177,0,255,0.16)] text-[#D447FF]",
  },
  "in-review": {
    label: "In Development",
    className:
      "border-[rgba(255,193,7,0.34)] bg-[rgba(255,193,7,0.14)] text-[#FFC107]",
  },
  "early-access": {
    label: "Launch Candidate",
    className:
      "border-[rgba(0,230,118,0.3)] bg-[rgba(0,230,118,0.12)] text-[#00E676]",
  },
  "tournament-ready": {
    label: "Tournament Concept",
    className:
      "border-[rgba(212,71,255,0.34)] bg-[rgba(212,71,255,0.14)] text-[#D447FF]",
  },
  "partner-preview": {
    label: "Partner Slot",
    className:
      "border-[rgba(240,92,255,0.34)] bg-[rgba(240,92,255,0.14)] text-[#F05CFF]",
  },
};

const filterGame = (game: (typeof games)[number], active: string) => {
  if (active === "All") return true;

  if (["Action", "Strategy", "Sports", "Racing"].includes(active)) {
    return game.genre === active;
  }

  if (active === "Partner Concepts") {
    return game.status === "partner-preview" || game.status === "in-review";
  }

  if (active === "Tournament Concepts") {
    return game.tournamentReady || game.status === "tournament-ready";
  }

  if (active === "Free Access Concepts") {
    return game.freeToPlay;
  }

  return true;
};

export default function FeaturedGames() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGames = useMemo(() => {
    return games.filter((game) => filterGame(game, activeFilter)).slice(0, 5);
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden py-8 lg:py-10">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(177,0,255,0.07),transparent_30%)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(177,0,255,0.26)] bg-[rgba(177,0,255,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D447FF]">
              <Sparkles className="h-4 w-4" />
              Concept Game Library
            </div>

            <h2
              className="text-2xl font-black uppercase tracking-[0.04em] text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Game Worlds Preview
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A8A8B8] md:text-base">
              A cinematic preview of the competitive experiences NexusWager is
              being built to support. These are concept worlds and ecosystem
              previews, not live playable games yet. Final partner titles and
              launch games will be announced as onboarding and development
              progress.
            </p>
          </div>

          <Link
            href="/games"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(177,0,255,0.18)] bg-[rgba(255,255,255,0.025)] px-4 py-2.5 text-sm font-semibold text-[#D447FF] transition-all hover:border-[rgba(177,0,255,0.36)] hover:text-[#F05CFF]"
          >
            Explore Concepts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-lg border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[rgba(177,0,255,0.45)] bg-gradient-to-r from-[#B100FF] to-[#D447FF] text-white shadow-[0_0_22px_rgba(177,0,255,0.2)]"
                  : "border-[rgba(177,0,255,0.16)] bg-[rgba(17,17,26,0.55)] text-[#A8A8B8] hover:border-[rgba(177,0,255,0.32)] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          >
            {filteredGames.map((game, index) => {
              const status = conceptStatusMap[game.status];

              return (
                <motion.article
                  key={game.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group overflow-hidden rounded-[18px] border border-[rgba(177,0,255,0.15)] bg-[rgba(10,10,16,0.82)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(177,0,255,0.35)] hover:shadow-[0_0_30px_rgba(177,0,255,0.14)]"
                >
                  <div className="relative h-[190px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-[#11111A] transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.9),rgba(5,5,5,0.08)), url('${game.image}')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />

                    <div className="absolute left-3 top-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${status.className}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {status.label}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,5,0.48)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#CFCFE1] backdrop-blur-md">
                      Concept Art
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8A8B8]">
                        {game.genre} World
                      </p>

                      <h3
                        className="text-base font-black uppercase tracking-[0.04em] text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {game.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5">
                    <p className="mb-3 line-clamp-2 min-h-[40px] text-xs leading-5 text-[#A8A8B8]">
                      {game.shortDescription}
                    </p>

                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {game.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-2 py-1 text-[10px] text-[#A8A8B8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-[rgba(177,0,255,0.11)] bg-[rgba(255,255,255,0.025)] p-2">
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#77778B]">
                          Mode
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          {game.playerMode}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[rgba(177,0,255,0.11)] bg-[rgba(255,255,255,0.025)] p-2">
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#77778B]">
                          Support
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          Future
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={`/games/${game.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-[rgba(177,0,255,0.2)] bg-[rgba(177,0,255,0.08)] px-3 py-2 text-xs font-semibold text-white transition-all hover:border-[rgba(177,0,255,0.4)]"
                      >
                        <Eye className="h-3.5 w-3.5 text-[#D447FF]" />
                        Preview World
                      </Link>

                      <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(177,0,255,0.18)] bg-[rgba(177,0,255,0.06)] text-[#D447FF] transition-all hover:border-[rgba(177,0,255,0.36)] hover:text-white">
                        <Bell className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 rounded-[20px] border border-[rgba(177,0,255,0.16)] bg-[rgba(177,0,255,0.06)] px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(177,0,255,0.13)] text-[#D447FF]">
                <Gamepad2 className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Concept visuals only
                </p>
                <p className="mt-1 max-w-3xl text-xs leading-6 text-[#A8A8B8]">
                  These game worlds are designed to preview the type of competitive
                  experiences NexusWager may support. They are not live playable
                  titles yet. Real partner titles will be announced as development,
                  licensing, onboarding, and integration progress.
                </p>
              </div>
            </div>

            <Link
              href="#waitlist"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#B100FF] to-[#D447FF] px-4 py-2.5 text-xs font-bold text-white shadow-[0_0_24px_rgba(177,0,255,0.18)]"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}