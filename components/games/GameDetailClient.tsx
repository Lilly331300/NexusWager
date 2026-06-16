"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Gamepad2,
  ImageIcon,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Trophy,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import { games, gameStatuses, type Game } from "../../data/games";

type GameDetailClientProps = {
  game: Game;
};

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

export default function GameDetailClient({ game }: GameDetailClientProps) {
  const status = gameStatuses[game.status];

  const gallery = game.screenshots.length > 0 ? game.screenshots : [game.image];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  const relatedGames = useMemo(
    () => games.filter((item) => game.relatedGames.includes(item.slug)),
    [game.relatedGames]
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
        >
          <Link
            href="/games"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:border-[rgba(168,85,247,0.3)] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Games
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-md ${
                    statusStyles[game.status]
                  }`}
                >
                  {status.label}
                </span>

                <span className="rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#C9A7FF]">
                  {game.genre}
                </span>
              </div>

              <h1
                className="text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.04em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {game.title}
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                {game.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <GlowButton href="/waitlist" size="lg">
                  Notify Me
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/partners" variant="outline" size="lg">
                  Partner Access
                </GlowButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.74)] p-3 shadow-[0_0_60px_rgba(168,85,247,0.12)] backdrop-blur-xl">
              <div
                className="min-h-[430px] rounded-[32px] bg-[#11111A]"
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.86),rgba(5,5,5,0.08)), url('${selectedImage}'), url('${game.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex min-h-[430px] flex-col justify-end p-6">
                  <div className="w-fit rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(5,5,5,0.58)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#DCC7FF] backdrop-blur-md">
                    Concept Visual
                  </div>

                  <h2 className="mt-4 max-w-md text-3xl font-black uppercase leading-tight text-white">
                    Game world preview
                  </h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {gallery.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`h-24 rounded-2xl border bg-[#11111A] transition-all duration-300 ${
                      selectedImage === image
                        ? "border-[#C9A7FF]/70"
                        : "border-white/10 hover:border-[#C9A7FF]/35"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.55),rgba(5,5,5,0.04)), url('${image}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <span className="sr-only">View screenshot</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              value: game.playerMode,
              label: "Player Mode",
            },
            {
              icon: Trophy,
              value: game.tournamentReady ? "Planned" : "Review",
              label: "Tournament Layer",
            },
            {
              icon: Wallet,
              value: game.wagerEnabled ? "Planned" : "Not Set",
              label: "Wager Flow",
            },
            {
              icon: BadgeCheck,
              value: game.releaseDate,
              label: "Target Window",
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

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.62)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Game Overview
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Built for future competitive sessions
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
              This page is a preview for the {game.title} game world inside the
              NexusWager ecosystem. It does not represent a live game, live player
              count, active ranking system, or running tournament.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(168,85,247,0.14)] bg-[rgba(168,85,247,0.06)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C9A7FF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <Layers3 className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-black text-white">
                Competitive Modes
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {game.competitiveModes.map((mode) => (
                  <div
                    key={mode}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A7FF]" />
                    <p className="text-sm text-white/68">{mode}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-black text-white">Planned Features</h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {game.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A7FF]" />
                    <p className="text-sm text-white/68">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Screenshot Preview
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Visual concept gallery
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              These visuals are concept assets from the project folder and can be
              replaced with final screenshots after game integration.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.52,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-h-[260px] rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[#11111A] p-4"
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.78),rgba(5,5,5,0.1)), url('${image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex h-full min-h-[230px] flex-col justify-end">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
                    <ImageIcon className="h-3.5 w-3.5 text-[#C9A7FF]" />
                    Screenshot {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {relatedGames.length > 0 && (
          <section className="mt-20">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                  Related Game Worlds
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  Explore more previews
                </h2>
              </div>

              <Link
                href="/games"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.14)]"
              >
                View all games
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedGames.map((item) => (
                <Link
                  key={item.slug}
                  href={`/games/${item.slug}`}
                  className="group overflow-hidden rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
                >
                  <div
                    className="h-[210px] bg-[#11111A]"
                    style={{
                      backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.82),rgba(5,5,5,0.12)), url('${item.image}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />

                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A7FF]">
                      {item.genre}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Launch Readiness
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Follow this game world as the ecosystem develops
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                Join the waitlist to follow NexusWager game previews, partner
                updates, wallet progress, and future platform launch announcements.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/waitlist" size="lg">
                  Join Waitlist
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/games" variant="outline" size="lg">
                  View All Games
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: LockKeyhole,
                  title: "Escrow Flow",
                  text: "Designed for future supported matches with secure settlement logic.",
                },
                {
                  icon: Trophy,
                  title: "Tournament Framework",
                  text: "Prepared for structured events, brackets, and seasonal competition concepts.",
                },
                {
                  icon: ShieldCheck,
                  title: "Review Layer",
                  text: "Game access depends on future testing, integration checks, and platform approval.",
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
        </section>
      </section>
    </main>
  );
}