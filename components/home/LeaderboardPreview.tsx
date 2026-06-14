"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Gamepad2,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import GlowButton from "@/components/shared/GlowButton";
import { tournaments } from "@/data/tournaments";
import { communityUpdates } from "@/data/communityUpdates";

const rankingPreview = [
  {
    label: "Skill Tiers",
    value: "Coming Soon",
    description: "Players will progress through competitive tiers after verified match activity.",
  },
  {
    label: "Season Rankings",
    value: "Preview Mode",
    description: "Seasonal rankings will unlock when public matches and tournaments go live.",
  },
  {
    label: "Match History",
    value: "Planned",
    description: "Validated game results will contribute to player records and progression.",
  },
  {
    label: "Fair Play Checks",
    value: "Required",
    description: "Ranked results will depend on match validation, anti-cheat, and dispute review.",
  },
];

const futureLeaderboardFeatures = [
  "Game-specific rankings",
  "Seasonal tournament standings",
  "Win/loss performance history",
  "Verified match result records",
  "Escrow-backed competition trails",
];

export default function LeaderboardPreview() {
  const featuredTournament = tournaments[0];
  const updates = communityUpdates.slice(0, 3);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#08070D]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(177,0,255,0.1),transparent_28%)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D447FF]">
              Competition Layer
            </span>
            <h2
              className="mt-2 text-2xl font-black uppercase tracking-[0.04em] text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ranking System Preview
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A8A8B8] md:text-base">
              NexusWager is still in development, so live leaderboards are not
              active yet. This section previews the competitive ranking structure
              that will power verified matches, seasons, and tournaments after launch.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(177,0,255,0.22)] bg-[rgba(177,0,255,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D447FF]">
            <Clock className="h-4 w-4" />
            Not Live Yet
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-[rgba(177,0,255,0.18)] bg-[rgba(10,10,16,0.78)] p-6 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                  Preview Only
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Future Leaderboard Framework
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(177,0,255,0.12)] text-[#D447FF]">
                <Trophy className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-3">
              {rankingPreview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[rgba(177,0,255,0.1)] bg-[rgba(255,255,255,0.025)] px-4 py-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <span className="rounded-full border border-[rgba(177,0,255,0.18)] bg-[rgba(177,0,255,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#D447FF]">
                      {item.value}
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-[#A8A8B8]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[rgba(0,230,118,0.16)] bg-[rgba(0,230,118,0.06)] p-4">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#00E676]" />
                <p className="text-sm font-semibold text-[#00E676]">
                  No live rankings yet
                </p>
              </div>
              <p className="text-xs leading-6 text-[#B9EFD0]">
                Live rankings should only appear after game integrations,
                verified match data, result validation, and public competition
                systems are active.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative overflow-hidden rounded-[28px] border border-[rgba(177,0,255,0.24)] bg-[rgba(10,10,16,0.82)] p-6 shadow-[0_0_40px_rgba(177,0,255,0.1)] backdrop-blur-xl"
          >
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.92), rgba(5,5,5,0.24)), url('${featuredTournament.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10 flex h-full min-h-[470px] flex-col">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#D6B5FF]">
                  Tournament System
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Competition Seasons Coming Later
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#B7B7C9]">
                  Tournament cards will become active when the platform starts
                  public matches, verified games, and phased competition seasons.
                </p>
              </div>

              <div className="mt-auto rounded-[24px] border border-[rgba(177,0,255,0.18)] bg-[rgba(5,5,5,0.52)] p-5 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#D447FF]" />
                  <span className="text-sm text-[#C9C9D7]">
                    Season framework preview
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                  Example Future Prize Pool
                </p>

                <p className="mt-1 text-3xl font-bold text-white">
                  {featuredTournament.prizePool.toLocaleString()} NXC
                </p>

                <p className="mt-3 text-xs leading-6 text-[#A8A8B8]">
                  Displayed as concept data only. Actual tournament details
                  should be added when official competitions are scheduled.
                </p>

                <div className="mt-5">
                  <GlowButton href="#waitlist" size="sm" className="w-full">
                    Join Waitlist
                  </GlowButton>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-[28px] border border-[rgba(177,0,255,0.18)] bg-[rgba(10,10,16,0.78)] p-6 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                  Future Features
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  What Rankings Will Support
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(177,0,255,0.12)] text-[#D447FF]">
                <Layers3 className="h-6 w-6" />
              </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[rgba(177,0,255,0.1)] bg-[rgba(255,255,255,0.025)] p-4">
                <Gamepad2 className="mb-3 h-5 w-5 text-[#D447FF]" />
                <p className="text-lg font-bold text-white">Game-Based</p>
                <p className="mt-1 text-xs leading-5 text-[#77778B]">
                  Rankings by integrated title.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(177,0,255,0.1)] bg-[rgba(255,255,255,0.025)] p-4">
                <Users className="mb-3 h-5 w-5 text-[#D447FF]" />
                <p className="text-lg font-bold text-white">Community</p>
                <p className="mt-1 text-xs leading-5 text-[#77778B]">
                  Competition tied to social activity.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {futureLeaderboardFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(177,0,255,0.1)] bg-[rgba(255,255,255,0.025)] px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D447FF]" />
                  <p className="text-sm text-[#D6D6E5]">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(177,0,255,0.12)] bg-[rgba(255,255,255,0.025)] p-4">
              <div className="mb-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#D447FF]" />
                <p className="text-sm font-semibold text-white">
                  Development Updates
                </p>
              </div>

              <div className="space-y-3">
                {updates.map((update) => (
                  <div key={update.id}>
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[rgba(177,0,255,0.1)] px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[#D447FF]">
                        {update.type}
                      </span>
                      <span className="text-[10px] text-[#77778B]">
                        {update.date}
                      </span>
                    </div>
                    <p className="line-clamp-1 text-xs font-semibold text-white">
                      {update.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}