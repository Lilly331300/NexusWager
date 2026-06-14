"use client";

import { motion } from "framer-motion";
import {
  Award,
  Coins,
  Gamepad2,
  Lock,
  ShieldCheck,
  Swords,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: Gamepad2,
    title: "Choose Game",
    subtitle: "Game Library",
    description:
      "Players discover compatible titles from the NexusWager game catalogue and select the competitive mode they want to enter.",
  },
  {
    icon: Coins,
    title: "Set Wager",
    subtitle: "Match Terms",
    description:
      "Match settings are configured, including wager amount, supported coin type, game rules, and match duration.",
  },
  {
    icon: Users,
    title: "Matchmaking",
    subtitle: "Opponent Search",
    description:
      "Public or private matchmaking connects players based on availability, skill proximity, wager compatibility, and game type.",
  },
  {
    icon: Lock,
    title: "Escrow Locked",
    subtitle: "Secure Commitment",
    description:
      "Before gameplay begins, both stakes are locked into platform escrow so the match is financially secured.",
  },
  {
    icon: Swords,
    title: "Compete",
    subtitle: "Validated Gameplay",
    description:
      "Players compete through integrated games while the backend validates match parameters, identity, and result flow.",
  },
  {
    icon: Award,
    title: "Winner Paid",
    subtitle: "Resolved Payout",
    description:
      "After result validation and anti-cheat checks, escrow is resolved and the winner receives the payout.",
  },
];

const trustPoints = [
  "Mutual consent before match start",
  "No game begins without secured escrow",
  "Validated result submission",
  "Compliance-aware platform flow",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#08070D]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(177,0,255,0.1),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.24)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.24)] to-transparent" />

      <div className="container-narrow relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              align="left"
              label="Platform Flow"
              title="How NexusWager Works"
              description="A preview of the future competitive gameplay journey — from game discovery to secure escrow, validated results, and payout resolution."
            />

            <div className="mt-8 rounded-[24px] border border-[rgba(177,0,255,0.18)] bg-[rgba(10,10,16,0.72)] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(177,0,255,0.14)] text-[#D447FF]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Trust-first flow</p>
                  <p className="text-xs text-[#7C7C91]">Built for fairness and traceability</p>
                </div>
              </div>

              <div className="space-y-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-[rgba(177,0,255,0.1)] bg-[rgba(255,255,255,0.025)] px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D447FF] shadow-[0_0_10px_rgba(212,71,255,0.9)]" />
                    <span className="text-sm text-[#C9C9D7]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[26px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[rgba(177,0,255,0.05)] via-[rgba(177,0,255,0.45)] to-[rgba(177,0,255,0.05)] md:block" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="relative rounded-[24px] border border-[rgba(177,0,255,0.16)] bg-[rgba(17,17,26,0.76)] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(177,0,255,0.34)] hover:shadow-[0_0_30px_rgba(177,0,255,0.12)] md:pl-20"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4 md:mb-0">
                      <div className="flex items-center gap-4">
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B100FF] to-[#D447FF] text-white shadow-[0_0_25px_rgba(177,0,255,0.24)] md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8F8FA3]">
                            Step {index + 1} / {step.subtitle}
                          </p>
                          <h3
                            className="mt-1 text-xl font-bold text-white"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <span className="hidden rounded-full border border-[rgba(177,0,255,0.18)] bg-[rgba(177,0,255,0.08)] px-3 py-1 text-xs font-semibold text-[#D447FF] sm:inline-flex">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#A8A8B8] md:mt-4">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}