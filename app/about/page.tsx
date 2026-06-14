"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Code, Scale, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="What is NexusWager?"
        description="NexusWager is a premium competitive skill-based gaming ecosystem in development. It combines gaming, finance, and community into a unified platform where every action is secure, verifiable, and rewarding."
        label="About"
      />

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#D447FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                  Mission
                </h3>
                <p className="text-[#A8A8B8] leading-relaxed">
                  To create a fair, engaging, and rewarding competitive gaming ecosystem that empowers players, enables developers, and builds sustainable partnerships across Africa and beyond.
                </p>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-[#D447FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                  Vision
                </h3>
                <p className="text-[#A8A8B8] leading-relaxed">
                  To become the definitive competitive gaming marketplace — where skill is rewarded, trust is guaranteed, and the ecosystem grows through collaboration between players, creators, and partners.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it exists */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Purpose"
            title="Why NexusWager Exists"
            description="The platform addresses fundamental gaps in competitive gaming infrastructure."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Heart, title: "Player Trust", description: "Secure escrow, verified results, and transparent financial flows ensure players can compete with confidence." },
              { icon: Code, title: "Developer Enablement", description: "A structured SDK and partner pipeline that makes integration simple for indie creators and major studios alike." },
              { icon: Scale, title: "Economic Balance", description: "The N3 Commission structure ensures sustainable revenue sharing between platform, developers, and community." },
              { icon: Shield, title: "Competitive Integrity", description: "Multi-layer anti-cheat, result validation, and manual review capabilities protect the competitive environment." },
              { icon: Clock, title: "Development Status", description: "Currently in active development with phased onboarding planned for Q3 2026. Early access available through the waitlist." },
              { icon: Target, title: "African Focus", description: "Priority support for African mobile indie developers, aligning with our mission to empower emerging gaming talent." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#D447FF]" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-[#A8A8B8] leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.3)] to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Be Part of the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-[#A8A8B8] text-lg mb-8 max-w-2xl mx-auto">
              Join the waitlist to be notified when early access opens. Whether you are a player, developer, or partner, NexusWager is building something worth waiting for.
            </p>
            <GlowButton href="/#waitlist">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
