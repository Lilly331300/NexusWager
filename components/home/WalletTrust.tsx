"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Eye,
  FileCheck,
  Fingerprint,
  Lock,
  Shield,
  Wallet,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const coins = [
  {
    name: "Nexus Gold Coin",
    symbol: "NXC",
    role: "Primary Value Coin",
    description:
      "The main transactional currency for future competitive play, wallet balance, conversion, and payout flows.",
    color: "#FFD86B",
  },
  {
    name: "Nexus Green Coin",
    symbol: "NGC",
    role: "Engagement Coin",
    description:
      "Designed for onboarding, activity rewards, referrals, practice wagering, and early ecosystem participation.",
    color: "#00E676",
  },
  {
    name: "Nexus Silver Coin",
    symbol: "NSC",
    role: "Win Reward Coin",
    description:
      "A future reward mechanism tied to consistent wins and long-term performance across competitive matches.",
    color: "#D7D7E2",
  },
  {
    name: "Nexus Black Coin",
    symbol: "NBC",
    role: "Recovery Coin",
    description:
      "A loss-recovery reward layer built to support retention and keep players engaged after repeated losses.",
    color: "#9C7CFF",
  },
];

const trustFeatures = [
  {
    icon: Shield,
    label: "Secure Wallet",
    description: "A centralized wallet layer for balances, transaction history, and future conversion flows.",
  },
  {
    icon: CreditCard,
    label: "Fiat & Crypto Ready",
    description: "Structured to support local payment rails, cards, crypto gateways, and conversion logic.",
  },
  {
    icon: Lock,
    label: "Escrow Backed",
    description: "Future wagered funds are locked before gameplay and released only after validation.",
  },
  {
    icon: FileCheck,
    label: "Audit Trail",
    description: "Every wallet movement is designed to be traceable, reviewable, and reconciliation-ready.",
  },
  {
    icon: Eye,
    label: "Fair Play Review",
    description: "Results can be validated against match data, rules, and anti-cheat signals.",
  },
  {
    icon: Fingerprint,
    label: "KYC / AML Ready",
    description: "Compliance pathways are planned for withdrawals, identity verification, and risk review.",
  },
];

export default function WalletTrust() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(177,0,255,0.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(212,71,255,0.08),transparent_26%)]" />

      <div className="container-narrow relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              label="Financial Core"
              title="Secure Wallet Built on Trust"
              description="The NexusWager wallet layer is designed as the economic engine for future competitive gameplay, escrow-backed matches, coin flows, and transparent player balances."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-[20px] border border-[rgba(177,0,255,0.13)] bg-[rgba(17,17,26,0.66)] p-4 backdrop-blur-xl transition-all duration-300 hover:border-[rgba(177,0,255,0.32)]"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(177,0,255,0.12)] text-[#D447FF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{feature.label}</h4>
                    <p className="mt-2 text-xs leading-6 text-[#A8A8B8]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[30px] border border-[rgba(177,0,255,0.22)] bg-[rgba(10,10,16,0.82)] p-6 shadow-[0_0_50px_rgba(177,0,255,0.09)] backdrop-blur-xl"
          >
            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(177,0,255,0.22),transparent_65%)]" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                    Wallet Preview
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Multi-Coin Economy
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B100FF] to-[#D447FF] text-white shadow-[0_0_28px_rgba(177,0,255,0.3)]">
                  <Wallet className="h-6 w-6" />
                </div>
              </div>

              <div className="mb-6 rounded-[24px] border border-[rgba(177,0,255,0.16)] bg-[rgba(255,255,255,0.025)] p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                  Total ecosystem balance
                </p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-4xl font-bold text-white">12,450.85</p>
                  <span className="rounded-full border border-[rgba(0,230,118,0.22)] bg-[rgba(0,230,118,0.08)] px-3 py-1 text-xs font-semibold text-[#00E676]">
                    Preview Mode
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                {coins.map((coin, index) => (
                  <motion.div
                    key={coin.symbol}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: index * 0.06 }}
                    className="group rounded-[20px] border border-[rgba(177,0,255,0.12)] bg-[rgba(255,255,255,0.025)] p-4 transition-all duration-300 hover:border-[rgba(177,0,255,0.3)]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold shadow-[0_0_22px_rgba(177,0,255,0.12)]"
                        style={{
                          color: coin.color,
                          borderColor: `${coin.color}44`,
                          backgroundColor: `${coin.color}12`,
                        }}
                      >
                        {coin.symbol}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-white">{coin.name}</h4>
                          <span className="rounded-full bg-[rgba(177,0,255,0.1)] px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[#D447FF]">
                            {coin.role}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#A8A8B8]">
                          {coin.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}