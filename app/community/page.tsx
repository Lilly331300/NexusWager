"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Megaphone, Shield, Bell, Calendar, ArrowRight, Zap, Heart, Eye } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import { communityUpdates } from "@/data/communityUpdates";

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="The NexusWager Community"
        description="A real-time social layer connecting players, developers, and partners. Join the conversation, discover rivals, and stay informed."
        label="Social Core"
      />

      {/* Three-tab preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Architecture"
            title="Three-Tab Community System"
            description="Designed for speed, persistence, and broadcast reliability."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "General Room",
                description: "A real-time, high-energy public space for open community interaction. Messages are ephemeral, creating a live, current conversation flow.",
                color: "#D447FF",
                features: ["Real-time messaging", "Emoji reactions", "Image sharing", "Live discovery"],
              },
              {
                icon: Users,
                title: "Contacts & Social Graph",
                description: "Personal interaction layer for managing friendships, presence tracking, private messaging, and team chat.",
                color: "#00E676",
                features: ["Friend management", "Online status", "Private chat", "Team channels"],
              },
              {
                icon: Megaphone,
                title: "Developer & Admin Channel",
                description: "Controlled broadcast channel for official updates, tournament announcements, bounties, and system notices.",
                color: "#F05CFF",
                features: ["Official announcements", "Tournament updates", "Bounty alerts", "System notices"],
              },
            ].map((tab, index) => (
              <motion.div
                key={tab.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: tab.color + "20" }}>
                    <tab.icon className="w-6 h-6" style={{ color: tab.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {tab.title}
                  </h3>
                  <p className="text-sm text-[#A8A8B8] leading-relaxed mb-4">{tab.description}</p>
                  <ul className="space-y-1.5">
                    {tab.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-[#A8A8B8]">
                        <Zap className="w-3 h-3" style={{ color: tab.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community updates */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Activity"
            title="Community Updates"
            description="Recent announcements, events, and ecosystem activity."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityUpdates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard className="p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[0.6rem] font-medium ${
                        update.type === "announcement"
                          ? "bg-[rgba(177,0,255,0.15)] text-[#D447FF]"
                          : update.type === "event"
                          ? "bg-[rgba(255,193,7,0.15)] text-[#FFC107]"
                          : update.type === "developer"
                          ? "bg-[rgba(0,230,118,0.15)] text-[#00E676]"
                          : "bg-[rgba(240,92,255,0.15)] text-[#F05CFF]"
                      }`}
                    >
                      {update.type}
                    </span>
                    <span className="text-[0.6rem] text-[#6B6B7B]">{update.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{update.title}</h4>
                  <p className="text-xs text-[#A8A8B8] leading-relaxed">{update.content}</p>
                  <div className="flex items-center gap-3 mt-3 text-[0.6rem] text-[#6B6B7B]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      by {update.author}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,230,118,0.15)] border border-[rgba(0,230,118,0.3)] text-[#00E676] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Safety First
            </div>
            <h2
              className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Moderation & Safety
            </h2>
            <p className="text-[#A8A8B8] text-lg leading-relaxed mb-8">
              The NexusWager community is built on proactive and reactive moderation. Content filtering, user reporting, administrative tools, and blocking controls ensure a safe environment for all participants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <GlassCard className="p-4">
                <Shield className="w-5 h-5 text-[#00E676] mb-2" />
                <p className="text-sm text-[#A8A8B8]">Proactive content filtering and monitoring</p>
              </GlassCard>
              <GlassCard className="p-4">
                <Bell className="w-5 h-5 text-[#D447FF] mb-2" />
                <p className="text-sm text-[#A8A8B8]">User reporting mechanisms with admin review</p>
              </GlassCard>
              <GlassCard className="p-4">
                <Heart className="w-5 h-5 text-[#F05CFF] mb-2" />
                <p className="text-sm text-[#A8A8B8]">User blocking and restriction controls</p>
              </GlassCard>
              <GlassCard className="p-4">
                <Eye className="w-5 h-5 text-[#A8A8B8] mb-2" />
                <p className="text-sm text-[#A8A8B8]">Administrative moderation dashboard</p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.3)] to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Join the Community
          </h2>
          <p className="text-[#A8A8B8] mb-6 max-w-lg mx-auto">
            Be part of the NexusWager community from day one. Connect with players, developers, and partners.
          </p>
          <GlowButton href="/#waitlist">Join Waitlist</GlowButton>
        </div>
      </section>
    </>
  );
}
