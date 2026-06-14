"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Users, Code, Newspaper, HelpCircle, ArrowRight, Check, Loader2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import { faqs, faqCategories } from "@/data/faqs";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", inquiryType: "General", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const filteredFaqs = activeFaqCategory === "All" ? faqs : faqs.filter((f) => f.category === activeFaqCategory);

  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Have questions about NexusWager? Reach out to our team for support, partnership inquiries, or press information."
        label="Contact"
      />

      {/* Contact options */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: HelpCircle, title: "Support", description: "General questions and technical support", href: "#contact-form" },
              { icon: Users, title: "Partners", description: "Partner and developer inquiries", href: "/partners" },
              { icon: Code, title: "Developers", description: "SDK and integration questions", href: "/developers" },
              { icon: Newspaper, title: "Press", description: "Media and investor inquiries", href: "#contact-form" },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <a href={option.href}>
                  <GlassCard className="p-5 h-full text-center hover:border-[rgba(177,0,255,0.4)] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(177,0,255,0.15)] flex items-center justify-center mx-auto mb-3">
                      <option.icon className="w-5 h-5 text-[#D447FF]" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{option.title}</h4>
                    <p className="text-xs text-[#A8A8B8]">{option.description}</p>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <div id="contact-form" className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center p-8 rounded-2xl bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)]">
                <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#00E676]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-[#A8A8B8]">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Name *</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                <div>
                  <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-[#11111A]">General</option>
                    <option className="bg-[#11111A]">Support</option>
                    <option className="bg-[#11111A]">Partnership</option>
                    <option className="bg-[#11111A]">Press / Media</option>
                    <option className="bg-[#11111A]">Investor Relations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Message *</label>
                  <textarea
                    rows={5} required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <GlowButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </GlowButton>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.2)] to-transparent" />
        <div className="container-narrow relative z-10">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about NexusWager, the platform, and the ecosystem."
          />

          <div className="flex flex-wrap gap-2 mb-8 mt-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFaqCategory === cat
                    ? "bg-gradient-to-r from-[#B100FF] to-[#D447FF] text-white shadow-[0_0_20px_rgba(177,0,255,0.3)]"
                    : "bg-[rgba(17,17,26,0.8)] text-[#A8A8B8] border border-[rgba(177,0,255,0.15)] hover:border-[rgba(177,0,255,0.4)] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard className="p-6">
                  <h4 className="text-base font-bold text-white mb-3">{faq.question}</h4>
                  <p className="text-sm text-[#A8A8B8] leading-relaxed">{faq.answer}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
