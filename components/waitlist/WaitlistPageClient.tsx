"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  CheckCircle2,
  Gamepad2,
  Handshake,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import {
  interestOptions,
  launchMilestones,
  waitlistRoles,
} from "../../data/waitlist";

const roleIcons = [Gamepad2, Layers3, Handshake];
const milestoneIcons = [Rocket, Users, Wallet, ShieldCheck];

export default function WaitlistPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
            <BellRing className="h-4 w-4" />
            Early Access Waitlist
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              NexusWager
            </span>{" "}
            Waitlist
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            Be part of the early NexusWager community before the full competitive
            gaming ecosystem goes live. Join as a player, developer, studio,
            partner, or early supporter.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="#join" size="lg">
              Join Now
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/how-it-works" variant="outline" size="lg">
              How It Works
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              value: "Players",
              label: "Early Community",
            },
            {
              icon: Layers3,
              value: "Developers",
              label: "Game Pipeline",
            },
            {
              icon: Wallet,
              value: "Wallet",
              label: "Future Utility",
            },
            {
              icon: Rocket,
              value: "Launch",
              label: "Coming Soon",
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
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Who Should Join?
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Built for the first wave
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              The waitlist is for early people who want to follow the project before
              accounts, wallets, games, and partner systems go live.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {waitlistRoles.map((role, index) => {
              const Icon = roleIcons[index] ?? Sparkles;

              return (
                <motion.article
                  key={role.title}
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

                  <h3 className="text-2xl font-black text-white">{role.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                    {role.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.62)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Launch Preview
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              What comes after the waitlist?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
              NexusWager is still in preparation. The waitlist helps organize early
              interest before the platform opens access to real accounts,
              integrations, backend systems, and community activity.
            </p>

            <div className="mt-6 grid gap-3">
              {launchMilestones.map((milestone, index) => {
                const Icon = milestoneIcons[index] ?? BadgeCheck;

                return (
                  <motion.div
                    key={milestone.title}
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

                    <h3 className="font-bold text-white">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {milestone.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <form
            id="join"
            onSubmit={handleSubmit}
            className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.76)] p-5 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-6"
          >
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[rgba(168,85,247,0.12)] text-[#C9A7FF]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="text-3xl font-black text-white">
                  You are on the list
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#B9B9C7]">
                  This is a front-end confirmation for now. When backend or email
                  integration is added, waitlist submissions can be saved and sent to
                  the NexusWager team automatically.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/games"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-black"
                  >
                    Explore Games
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#DCC7FF]"
                  >
                    Submit another
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                    Join Early
                  </p>

                  <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-white">
                    Waitlist Form
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                    This form is currently front-end only. We can connect it later to
                    Supabase, email, CRM, database, or an admin dashboard.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      Email
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                    Interest Type
                  </span>
                  <select
                    name="interest"
                    className="h-12 rounded-2xl border border-white/10 bg-[#121018] px-4 text-sm text-white outline-none transition-all duration-300 focus:border-[rgba(168,85,247,0.38)]"
                  >
                    {interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      Country / Region
                    </span>
                    <input
                      name="region"
                      placeholder="Nigeria, Africa, Global..."
                      className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      Organization
                    </span>
                    <input
                      name="organization"
                      placeholder="Optional"
                      className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us what you are interested in: games, wallet, tournaments, partnership, developer access, community, or launch updates."
                    className="resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Join Waitlist
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs leading-6 text-white/38">
                  No live account is created yet. This is an early interest form
                  prepared for future backend integration.
                </p>
              </div>
            )}
          </form>
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Stay Close to Launch
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Be part of the early NexusWager circle
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                The waitlist page is designed to become the main conversion point
                for early users, developers, partners, and supporters before the
                full platform launch.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/blog" size="lg">
                  Read Blog
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
                  icon: BellRing,
                  title: "Early Updates",
                  text: "Receive future project updates, launch news, and ecosystem progress.",
                },
                {
                  icon: Gamepad2,
                  title: "Game Preview Access",
                  text: "Follow new game worlds, concepts, and partner pipeline updates.",
                },
                {
                  icon: ShieldCheck,
                  title: "Launch Readiness",
                  text: "Stay informed as NexusWager prepares accounts, wallets, and partner tools.",
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