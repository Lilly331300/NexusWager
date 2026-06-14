"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  CheckCircle2,
  Gamepad2,
  GitBranch,
  Handshake,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import {
  ecosystemLayers,
  howSteps,
  userPaths,
} from "../../data/howItWorks";

const stepIcons = [
  Gamepad2,
  Users,
  Trophy,
  LockKeyhole,
  Braces,
  ShieldCheck,
  Wallet,
];

const layerIcons = [
  Gamepad2,
  Network,
  GitBranch,
  Wallet,
  ShieldCheck,
  Users,
];

const pathIcons = [Gamepad2, Braces, Handshake];

export default function HowItWorksPageClient() {
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
            <Layers3 className="h-4 w-4" />
            How NexusWager Works
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One Ecosystem for{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Competitive Gaming
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            NexusWager is being designed as a connected platform where players,
            games, developers, wallets, escrow, matchmaking, tournaments, and
            community activity can work together inside one ecosystem.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/games" size="lg">
              Explore Games
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/wallet" variant="outline" size="lg">
              View Wallet Layer
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              value: "Games",
              label: "Discovery Layer",
            },
            {
              icon: Network,
              value: "Gateway",
              label: "Integration Layer",
            },
            {
              icon: LockKeyhole,
              value: "Escrow",
              label: "Trust Layer",
            },
            {
              icon: Users,
              value: "Community",
              label: "Growth Layer",
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

        <section className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Player Flow
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              From game discovery to future settlement
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
              This is a simplified preview of how a player journey could work once
              the NexusWager platform is live and connected to backend systems,
              game integrations, wallet logic, and verification tools.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-7">
            {howSteps.map((step, index) => {
              const Icon = stepIcons[index] ?? Sparkles;

              return (
                <motion.article
                  key={step.stage}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-[28px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-5 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
                    Step {step.stage}
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Ecosystem Architecture
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Multiple layers working together
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
                NexusWager is not only a game listing site. The planned platform
                combines account identity, game discovery, wallet tools, escrow,
                developer integration, community features, and admin review systems.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/partners" size="lg">
                  Partner With Us
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/blog" variant="outline" size="lg">
                  Read Blog
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {ecosystemLayers.map((layer, index) => {
                const Icon = layerIcons[index] ?? Layers3;

                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-bold text-white">{layer.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {layer.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                User Paths
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Built for players, developers, and partners
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              Each group enters NexusWager differently, but all paths connect into
              the same competitive gaming ecosystem.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {userPaths.map((path, index) => {
              const Icon = pathIcons[index] ?? BadgeCheck;

              return (
                <motion.article
                  key={path.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.52,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  }}
                  className="rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-black text-white">{path.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                    {path.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {path.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A7FF]" />
                        <p className="text-sm text-white/68">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Launch Direction
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                The system is being prepared step by step
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                The current website introduces the vision. Future phases can connect
                backend accounts, real waitlist collection, wallet logic, partner
                submissions, admin dashboards, game SDK flows, and community systems.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/#waitlist" size="lg">
                  Join Waitlist
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/news" variant="outline" size="lg">
                  Read Updates
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Rocket,
                  title: "Website Foundation",
                  text: "Introduce the project, show the ecosystem, and collect early interest.",
                },
                {
                  icon: Braces,
                  title: "Integration Phase",
                  text: "Prepare game SDK, developer onboarding, and partner review workflows.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Platform Layer",
                  text: "Build account, wallet, verification, escrow, and admin control systems.",
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