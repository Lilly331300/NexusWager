"use client";

import { motion } from "framer-motion";
import { Code, Plug, Shield, Wallet, Trophy, Send, Cloud, Check, ArrowRight, BookOpen, Key, Server, BarChart3 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import WaitlistForm from "@/components/shared/WaitlistForm";

const sdkFeatures = [
  { icon: Key, title: "Authentication", description: "Secure player authentication through the NexusWager system with token-based session management." },
  { icon: Server, title: "Matchmaking", description: "Initiate and manage game sessions with public and private matchmaking integration." },
  { icon: Wallet, title: "Wallet Interaction", description: "Interface with the multi-currency wallet system for wagers, payouts, and balance queries." },
  { icon: Trophy, title: "Leaderboard Services", description: "Submit scores and trigger automatic leaderboard updates across game-specific and global rankings." },
  { icon: Send, title: "Result Submission", description: "Securely transmit match results to the NexusWager backend with anti-cheat validation." },
  { icon: Shield, title: "Anti-Cheat Compatibility", description: "Built-in hooks for integrating with leading anti-cheat detection systems." },
];

const integrationSteps = [
  { number: "01", title: "SDK Download", description: "Access the NexusWager SDK with full documentation and sample implementations." },
  { number: "02", title: "Authentication Setup", description: "Configure player authentication and session management in your game client." },
  { number: "03", title: "Matchmaking Integration", description: "Connect to the matchmaking service for public and private challenge flows." },
  { number: "04", title: "Wallet Hooks", description: "Implement wallet interactions for wager validation and result-based payouts." },
  { number: "05", title: "Result Pipeline", description: "Set up secure result submission with the NexusWager Gateway." },
  { number: "06", title: "Testing & QA", description: "Validate integration through the Testing & QA stage before go-live." },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        title="Developer Access Opening in Phases"
        description="The NexusWager SDK and Integration Center are being prepared for phased developer onboarding. Join the developer waitlist for early access."
        label="Developer Portal"
      >
        <GlowButton href="#developer-waitlist">
          Join Developer Waitlist
          <ArrowRight className="w-5 h-5" />
        </GlowButton>
      </PageHero>

      {/* SDK Overview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="SDK"
            title="NexusWager SDK Overview"
            description="A comprehensive toolkit for integrating competitive gaming features into your titles."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sdkFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#D447FF]" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-[#A8A8B8] leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Flow"
            title="Integration Process"
            description="Six steps from SDK access to live integration."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="p-5 h-full">
                  <span className="text-2xl font-bold text-[rgba(177,0,255,0.3)]" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {step.number}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">{step.title}</h4>
                  <p className="text-xs text-[#A8A8B8] leading-relaxed">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Sandbox */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(177,0,255,0.15)] border border-[rgba(177,0,255,0.3)] text-[#D447FF] text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Future Feature
            </div>
            <h2
              className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Sandbox Environment
            </h2>
            <p className="text-[#A8A8B8] text-lg leading-relaxed mb-8">
              A dedicated sandbox environment is planned for future release, enabling partners to test integrations independently, validate SDK functionality, simulate financial flows, and verify matchmaking interactions before entering formal review.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <GlassCard className="p-4">
                <Check className="w-5 h-5 text-[#00E676] mb-2" />
                <p className="text-sm text-[#A8A8B8]">Test SDK endpoints in isolation</p>
              </GlassCard>
              <GlassCard className="p-4">
                <Check className="w-5 h-5 text-[#00E676] mb-2" />
                <p className="text-sm text-[#A8A8B8]">Simulate wallet transactions</p>
              </GlassCard>
              <GlassCard className="p-4">
                <Check className="w-5 h-5 text-[#00E676] mb-2" />
                <p className="text-sm text-[#A8A8B8]">Verify matchmaking logic</p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Waitlist */}
      <section id="developer-waitlist" className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Early Access"
            title="Join the Developer Waitlist"
            description="Be among the first to access the NexusWager SDK and Integration Center."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto mt-12"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
