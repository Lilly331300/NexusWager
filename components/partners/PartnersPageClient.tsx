"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Code2,
  Gamepad2,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import {
  partnerBenefits,
  partnerCategories,
  partnerJourney,
} from "../../data/partners";

const categoryIcons = [
  Gamepad2,
  Globe2,
  Megaphone,
  GraduationCap,
  Building2,
  Layers3,
];

const journeyIcons = [
  Handshake,
  BadgeCheck,
  Code2,
  Layers3,
  ShieldCheck,
  Users,
  Rocket,
];

export default function PartnersPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_6%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(217,70,239,0.12),transparent_30%),linear-gradient(180deg,#050505_0%,#090712_48%,#050505_100%)]" />
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
            <Handshake className="h-4 w-4" />
            Partner Ecosystem
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build With{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              NexusWager
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            NexusWager is preparing a partner ecosystem for independent game
            developers, studios, publishers, universities, advertisers, and
            strategic technology collaborators who want to help shape the future of
            competitive gaming.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="#partner-interest" size="lg">
              Apply Interest
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/games" variant="outline" size="lg">
              View Game Concepts
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              value: "Games",
              label: "Developer Pipeline",
            },
            {
              icon: ShieldCheck,
              value: "Review",
              label: "Quality Control",
            },
            {
              icon: Layers3,
              value: "SDK",
              label: "Integration Layer",
            },
            {
              icon: Users,
              value: "Community",
              label: "Ecosystem Growth",
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
                Partner Categories
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Who Can Partner With NexusWager?
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              NexusWager is designed to support both technical and strategic
              partners, with a special priority pathway for African mobile indie
              developers and studios.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {partnerCategories.map((category, index) => {
              const Icon = categoryIcons[index] ?? Sparkles;

              return (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_48%)]" />
                  </div>

                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
                      {category.priority}
                    </p>

                    <h3 className="text-2xl font-black leading-tight text-white">
                      {category.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(168,85,247,0.14)] bg-[rgba(168,85,247,0.06)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C9A7FF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
              Partner Journey
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              From First Contact to Go-Live
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
              Every partner follows a structured pathway designed to balance
              accessibility, technical readiness, quality control, and ecosystem
              alignment.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.3)] to-transparent lg:block" />

            <div className="grid gap-5">
              {partnerJourney.map((stage, index) => {
                const Icon = journeyIcons[index] ?? Sparkles;

                return (
                  <motion.article
                    key={stage.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative grid gap-4 rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] p-5 backdrop-blur-xl lg:grid-cols-[90px_1fr]"
                  >
                    <div className="flex items-center gap-4 lg:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.12)] text-[#C9A7FF]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="mt-0 text-2xl font-black text-white lg:mt-4">
                        {stage.stage}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                        {stage.description}
                      </p>

                      <div className="mt-5 grid gap-3 md:grid-cols-3">
                        {stage.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A7FF]" />
                            <p className="text-sm leading-6 text-white/68">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {partnerBenefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
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
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-black text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="partner-interest" className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.62)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Partner Interest
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Start the conversation
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">
                This form is a front-end placeholder for now. Later, it can be
                connected to email, Supabase, a CRM, or a backend partner intake
                workflow.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Submit your partner interest",
                  "Share your game, studio, or organization details",
                  "Receive review and onboarding guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.76)] p-5 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-6"
            >
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[rgba(168,85,247,0.12)] text-[#C9A7FF]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Interest captured
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#B9B9C7]">
                    This is a front-end confirmation for now. When backend or
                    email integration is added, submissions can be delivered to the
                    NexusWager team automatically.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#DCC7FF]"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <div className="grid gap-4">
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
                      Organization / Studio
                    </span>
                    <input
                      name="organization"
                      placeholder="Studio, university, company, or team name"
                      className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                        Partner Type
                      </span>
                      <select
                        name="partnerType"
                        className="h-12 rounded-2xl border border-white/10 bg-[#121018] px-4 text-sm text-white outline-none transition-all duration-300 focus:border-[rgba(168,85,247,0.38)]"
                      >
                        <option>Game Developer</option>
                        <option>Game Studio</option>
                        <option>Publisher</option>
                        <option>University</option>
                        <option>Advertiser</option>
                        <option>Technology Partner</option>
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                        Region
                      </span>
                      <input
                        name="region"
                        placeholder="Nigeria, Africa, Global..."
                        className="h-12 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      What are you building?
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Tell us about your game, studio, product, community, or partnership idea."
                      className="resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[rgba(168,85,247,0.38)]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Submit Partner Interest
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}