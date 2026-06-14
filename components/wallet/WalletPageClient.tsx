"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Coins,
  CreditCard,
  Gamepad2,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import { walletCoins, walletFeatures, walletFlow } from "../../data/wallet";

const coinStyles = [
  "from-yellow-300/18 via-yellow-400/8 to-transparent border-yellow-300/20 text-yellow-200",
  "from-emerald-300/18 via-emerald-400/8 to-transparent border-emerald-300/20 text-emerald-200",
  "from-purple-300/18 via-purple-400/8 to-transparent border-purple-300/20 text-purple-200",
  "from-slate-200/18 via-slate-300/8 to-transparent border-slate-200/20 text-slate-200",
];

const flowIcons = [CreditCard, Gamepad2, LockKeyhole, ShieldCheck, RefreshCcw];

export default function WalletPageClient() {
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
            <Wallet className="h-4 w-4" />
            Wallet System Preview
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Trust Layer for{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Competitive Play
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            NexusWager is preparing a wallet and escrow layer for future competitive
            gaming sessions, coin utility, partner rewards, match settlement, and
            secure player activity.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/#waitlist" size="lg">
              Join Waitlist
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/games" variant="outline" size="lg">
              Explore Games
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Wallet,
              value: "Wallet",
              label: "Platform Account Layer",
            },
            {
              icon: LockKeyhole,
              value: "Escrow",
              label: "Secure Match Flow",
            },
            {
              icon: Coins,
              value: "Coins",
              label: "Multi-Coin Utility",
            },
            {
              icon: ShieldCheck,
              value: "Trust",
              label: "Verification Logic",
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

        <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Wallet Concept
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Designed for match value, reward movement, and ecosystem utility
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
              The NexusWager wallet is planned as the financial and utility layer of
              the ecosystem. It is designed to support future deposits, coin
              conversion, escrow-backed matches, reward distribution, partner
              campaigns, and player transaction history.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Match escrow support",
                "Multi-coin utility",
                "Future reward settlement",
                "Partner campaign support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                >
                  <CheckIcon />
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.74)] p-5 shadow-[0_0_54px_rgba(168,85,247,0.1)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_50%)]" />

            <div className="relative rounded-[30px] border border-white/10 bg-black/28 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
                    Wallet Preview
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    Nexus Account
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.12)] text-[#C9A7FF]">
                  <Wallet className="h-6 w-6" />
                </div>
              </div>

              <div className="rounded-[26px] border border-[rgba(168,85,247,0.18)] bg-[rgba(168,85,247,0.08)] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Preview Status
                </p>
                <p className="mt-2 text-4xl font-black uppercase text-white">
                  In Development
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Balances, transfers, escrow, and settlement will become functional
                  after backend and payment integration.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  {
                    label: "Escrow Engine",
                    value: "Planned",
                  },
                  {
                    label: "Coin Conversion",
                    value: "Planned",
                  },
                  {
                    label: "Match Settlement",
                    value: "Planned",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                  >
                    <span className="text-sm text-white/55">{item.label}</span>
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#C9A7FF]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Coin Utility
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Nexus Coin Layers
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              The platform is designed around multiple planned coin layers for
              different player, partner, access, and reward functions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {walletCoins.map((coin, index) => (
              <motion.article
                key={coin.name}
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
                className={`relative overflow-hidden rounded-[30px] border bg-gradient-to-b p-5 backdrop-blur-xl ${
                  coinStyles[index] ?? coinStyles[0]
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/24">
                  <Coins className="h-6 w-6" />
                </div>

                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] opacity-80">
                  {coin.label}
                </p>

                <h3 className="text-2xl font-black text-white">{coin.name}</h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {coin.description}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/38">
                    Planned Use Case
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/80">
                    {coin.useCase}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Escrow Journey
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              How a Future Match Settlement Could Work
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
              This is a preview of the planned flow. The final version will depend on
              game integrations, backend verification, payment rails, and compliance
              requirements.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {walletFlow.map((step, index) => {
              const Icon = flowIcons[index] ?? Sparkles;

              return (
                <motion.article
                  key={step.stage}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
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

                  <h3 className="mt-2 text-xl font-black text-white">
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

        <section className="mt-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {walletFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[28px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-5 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <BadgeCheck className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-black text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Trust Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Built to support fair competition and secure settlement
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                The wallet page is a preview of the infrastructure NexusWager is
                preparing. Full functionality will require backend systems, game
                gateway integrations, user accounts, transaction logic, and security
                controls.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/#waitlist" size="lg">
                  Join Waitlist
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/partners" variant="outline" size="lg">
                  Become a Partner
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: LockKeyhole,
                  title: "Escrow Control",
                  text: "Designed to lock supported match value until outcomes are verified.",
                },
                {
                  icon: Trophy,
                  title: "Reward Logic",
                  text: "Prepared for future match rewards, tournament prizes, and community incentives.",
                },
                {
                  icon: Layers3,
                  title: "Platform Utility",
                  text: "Built to connect game worlds, partners, players, and transaction history.",
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

function CheckIcon() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
      <BadgeCheck className="h-4 w-4" />
    </div>
  );
}