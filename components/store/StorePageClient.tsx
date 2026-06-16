"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Clock3,
  Gamepad2,
  Gift,
  LockKeyhole,
  Package,
  Rocket,
  Shirt,
  Sparkles,
  Store,
  Ticket,
  Trophy,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";

const storeItems = [
  {
    title: "Player Drops",
    label: "Coming Soon",
    text: "Future profile items, badges, identity cosmetics, and early player collectibles.",
    icon: Gift,
  },
  {
    title: "Tournament Passes",
    label: "Coming Soon",
    text: "Access passes for future events, brackets, community competitions, and seasonal experiences.",
    icon: Ticket,
  },
  {
    title: "Creator Bundles",
    label: "Coming Soon",
    text: "Partner and developer bundles designed for future game visibility and ecosystem campaigns.",
    icon: Boxes,
  },
  {
    title: "Nexus Merch",
    label: "Coming Soon",
    text: "Physical and digital NexusWager branded drops for the community.",
    icon: Shirt,
  },
];

export default function StorePageClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#090712_48%,#050505_100%)]" />
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

          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
            <Store className="h-4 w-4" />
            Store Coming Soon
          </div>

          <h1
            className="text-[clamp(3.4rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.07em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Nexus Store Is{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Loading
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B9B9C7]">
            A future home for player drops, tournament passes, partner bundles,
            ecosystem collectibles, gaming merch, and special community items.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/waitlist" size="lg">
              Get Store Updates
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/games" variant="outline" size="lg">
              Explore Games
            </GlowButton>
          </div>
        </motion.div>

        <section className="mt-20 overflow-hidden rounded-[46px] border border-[rgba(168,85,247,0.22)] bg-[rgba(10,10,16,0.78)] p-6 shadow-[0_0_80px_rgba(168,85,247,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-200">
                <Sparkles className="h-4 w-4" />
                Not Live Yet
              </div>

              <h2
                className="text-4xl font-black leading-tight text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A playful marketplace layer for the future Nexus community.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#B9B9C7] sm:text-base">
                The Store is a preview-only section for now. It is designed to show
                where future community items, partner drops, digital collectibles,
                game access items, and brand merchandise can live after platform
                launch.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "No live purchases yet",
                  "No checkout connected",
                  "No payment system active",
                  "Waitlist-only updates",
                ].map((point) => (
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

            <div className="relative min-h-[420px] overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-black/30 p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.22),transparent_55%)]" />

              <div className="relative grid h-full min-h-[380px] place-items-center rounded-[30px] border border-white/10 bg-white/[0.035]">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[32px] bg-[#C9A7FF] text-black shadow-[0_0_60px_rgba(201,167,255,0.35)]">
                    <Package className="h-12 w-12" />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#C9A7FF]">
                    Store Status
                  </p>

                  <h3
                    className="mt-3 text-5xl font-black text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Coming Soon
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/55">
                    Storefront, product logic, checkout, and inventory features are
                    planned for a future phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {storeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
                  {item.label}
                </p>

                <h3
                  className="text-3xl font-black leading-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-20 rounded-[42px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-8 text-center shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl">
          <Clock3 className="mx-auto mb-4 h-8 w-8 text-[#C9A7FF]" />

          <h2
            className="text-4xl font-black leading-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Store access unlocks later.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7]">
            For now, join the waitlist to follow future store drops, game updates,
            partner announcements, and launch progress.
          </p>

          <Link
            href="/waitlist"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Join Waitlist
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}