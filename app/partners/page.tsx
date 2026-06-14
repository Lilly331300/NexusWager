"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DoorOpen, Filter, FlaskConical, Plug, ShieldCheck, Settings, Rocket, Check, Loader2, ArrowRight, Users, Building2, BookOpen, GraduationCap, Megaphone, TrendingUp, Cpu } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import { partnerStages, partnerCategories, partnerBenefits } from "@/data/partnerStages";

const stageIcons: Record<string, React.ElementType> = {
  DoorOpen, Filter, FlaskConical, Plug, ShieldCheck, Settings, Rocket,
};

const categoryIcons: Record<string, React.ElementType> = {
  User: Users, Building2, BookOpen, GraduationCap, Megaphone, TrendingUp, Cpu,
};

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    partnerType: "Independent Developers",
    website: "",
    projectName: "",
    developmentStage: "Concept",
    gameEngine: "Unity",
    description: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Build, Publish, and Grow With NexusWager"
        description="NexusWager is creating a structured ecosystem where game developers, studios, publishers, advertisers, universities, investors, and strategic partners can connect with a future competitive gaming marketplace."
        label="Partner Ecosystem"
      >
        <GlowButton href="#partner-form">
          Apply as a Partner
          <ArrowRight className="w-5 h-5" />
        </GlowButton>
      </PageHero>

      {/* Why Partner */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Opportunity"
            title="Why Partner With NexusWager"
            description="Join a growing ecosystem designed to empower creators and reward quality."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(17,17,26,0.5)] border border-[rgba(177,0,255,0.1)] hover:border-[rgba(177,0,255,0.3)] transition-all"
              >
                <Check className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span className="text-sm text-[#A8A8B8]">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Categories"
            title="Partner Types"
            description="NexusWager welcomes diverse partners across the gaming and technology landscape."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerCategories.map((cat, index) => {
              const Icon = categoryIcons[cat.icon] || Users;
              return (
                <motion.div
                  key={cat.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#D447FF]" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{cat.type}</h4>
                    <p className="text-sm text-[#A8A8B8] leading-relaxed">{cat.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7-Stage Journey */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Process"
            title="Seven-Stage Partner Journey"
            description="A structured pathway from initial interest to full ecosystem integration."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerStages.map((stage, index) => {
              const Icon = stageIcons[stage.icon] || DoorOpen;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard className="p-5 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B100FF] to-[#D447FF] flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(177,0,255,0.3)]">
                        {stage.number}
                      </div>
                      <span className="text-xs text-[#6B6B7B]">{stage.duration}</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[rgba(177,0,255,0.15)] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#D447FF]" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{stage.title}</h4>
                    <p className="text-xs text-[#A8A8B8] leading-relaxed">{stage.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Priority for African developers */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
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
              <Users className="w-4 h-4" />
              Priority Initiative
            </div>
            <h2
              className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Priority for African Mobile Indie Developers
            </h2>
            <p className="text-[#A8A8B8] text-lg leading-relaxed">
              NexusWager is committed to empowering African gaming talent. Independent developers and studios across the continent receive priority consideration in our partner pipeline, with dedicated support for visibility, monetization, and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="partner-form" className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="Apply Now"
            title="Partner Application"
            description="Submit your interest in joining the NexusWager ecosystem. Our team will review and contact you when onboarding opens."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mt-12"
          >
            {isSubmitted ? (
              <div className="text-center p-8 rounded-2xl bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)]">
                <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#00E676]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Application Received</h3>
                <p className="text-[#A8A8B8]">
                  Your partner interest has been received. The NexusWager team will contact you when partner onboarding opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Full Name *</label>
                    <input
                      type="text" required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Email *</label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Company / Studio</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Partner Type</label>
                    <select
                      value={formData.partnerType}
                      onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
                    >
                      {partnerCategories.map((cat) => (
                        <option key={cat.type} value={cat.type} className="bg-[#11111A]">{cat.type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Website / Portfolio</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Project / Game Name</label>
                    <input
                      type="text"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Development Stage</label>
                    <select
                      value={formData.developmentStage}
                      onChange={(e) => setFormData({ ...formData, developmentStage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-[#11111A]">Concept</option>
                      <option className="bg-[#11111A]">Prototype</option>
                      <option className="bg-[#11111A]">Alpha</option>
                      <option className="bg-[#11111A]">Beta</option>
                      <option className="bg-[#11111A]">Production Ready</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Game Engine</label>
                  <select
                    value={formData.gameEngine}
                    onChange={(e) => setFormData({ ...formData, gameEngine: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-[#11111A]">Unity</option>
                    <option className="bg-[#11111A]">Unreal Engine</option>
                    <option className="bg-[#11111A]">Godot</option>
                    <option className="bg-[#11111A]">Custom</option>
                    <option className="bg-[#11111A]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Short Description</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all resize-none"
                    placeholder="Describe your project..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Reason for Partnering</label>
                  <textarea
                    rows={3}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all resize-none"
                    placeholder="Why do you want to partner with NexusWager?"
                  />
                </div>
                <GlowButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Partner Interest"
                  )}
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
