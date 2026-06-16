"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Gamepad2,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";

const steps = [
  {
    title: "Discover Game Worlds",
    text: "Players explore NexusWager game concepts, partner previews, community updates, and future competitive experiences.",
    icon: Gamepad2,
  },
  {
    title: "Join the Ecosystem",
    text: "Players, developers, and partners enter through waitlist, partner interest, or future account access.",
    icon: Users,
  },
  {
    title: "Choose a Match Format",
    text: "Future supported games can offer practice modes, competitive duels, tournaments, and seasonal formats.",
    icon: Trophy,
  },
  {
    title: "Secure Match Flow",
    text: "For supported formats, the escrow layer is planned to protect match value until results are verified.",
    icon: LockKeyhole,
  },
  {
    title: "Verify the Outcome",
    text: "Results can be checked through game integration, platform rules, backend systems, and admin review.",
    icon: ShieldCheck,
  },
  {
    title: "Settle Activity",
    text: "Wallet records, rewards, history, and future rankings can update after verification.",
    icon: Wallet,
  },
];

const walletPoints = [
  "Wallet account layer",
  "Escrow-backed match flow",
  "Nexus coin utility preview",
  "Reward and settlement history",
  "Partner campaign support",
  "Future transaction records",
];

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
            How It Works
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black leading-[0.88] tracking-[-0.06em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Play, Connect, Compete — All Inside the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B9B9C7]">
            NexusWager is being designed as one playful but powerful ecosystem for
            game discovery, partner integrations, wallet systems, escrow flow,
            tournaments, and community growth.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/games" size="lg">
              Explore Games
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/waitlist" variant="outline" size="lg">
              Join Waitlist
            </GlowButton>
          </div>
        </motion.div>

        <section className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Player Flow
            </p>
            <h2
              className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From first click to future competition.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.52,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-2xl font-black leading-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                    {step.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[42px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_60px_rgba(168,85,247,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                <Wallet className="h-4 w-4" />
                Wallet Under the Hood
              </div>

              <h2
                className="text-4xl font-black leading-tight text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The wallet is not just a page — it is part of how the platform works.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#B9B9C7] sm:text-base">
                The wallet layer is planned to support account activity, future coin
                utility, escrow-backed competition, reward settlement, and partner
                campaigns. It now lives conceptually under How It Works instead of
                sitting as a separate main navigation item.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {walletPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-[#C9A7FF]" />
                  <p className="text-sm font-bold text-white/72">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Network,
              title: "Game Gateway",
              text: "Approved games can connect to the future NexusWager ecosystem through planned integration layers.",
            },
            {
              icon: Rocket,
              title: "Launch Path",
              text: "The website introduces the vision before backend accounts, payments, and live systems are connected.",
            },
            {
              icon: Trophy,
              title: "Competition Layer",
              text: "Tournaments, rankings, match records, and reward systems are planned as future framework layers.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}