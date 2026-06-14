"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Bell, Tag, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import { storeItems, storeCategories } from "@/data/store";

export default function StorePage() {
  return (
    <>
      <PageHero
        title="NexusWager Store"
        description="The official commercial distribution layer of the NexusWager ecosystem. Digital products, subscriptions, merchandise, and virtual currencies — coming soon."
        label="Coming Soon"
      />

      {/* Store preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container-narrow relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(177,0,255,0.15)] border border-[rgba(177,0,255,0.3)] text-[#D447FF] text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Store Launching Q4 2026
            </div>
            <p className="text-[#A8A8B8] text-lg max-w-2xl mx-auto">
              The Nexus Marketplace will offer subscriptions, digital products, merchandise, and virtual currencies. All transactions will be settled in Nexus Gold Coin (NXC).
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {storeCategories.slice(1).map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard className="p-4 text-center">
                  <Tag className="w-6 h-6 text-[#D447FF] mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">{cat}</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Product preview */}
          <SectionHeader
            label="Preview"
            title="Upcoming Products"
            description="A preview of what will be available when the store launches."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {storeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="relative aspect-square rounded-t-2xl overflow-hidden bg-gradient-to-br from-[rgba(177,0,255,0.2)] to-[rgba(109,40,217,0.1)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B100FF] to-[#D447FF] flex items-center justify-center shadow-[0_0_30px_rgba(177,0,255,0.4)]">
                        <ShoppingBag className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-full text-[0.6rem] font-medium bg-[rgba(177,0,255,0.2)] text-[#D447FF] border border-[rgba(177,0,255,0.3)]">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-[#D447FF] font-medium mb-1">{item.category}</span>
                    <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A8A8B8] leading-relaxed mb-4 flex-1">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-white">{item.price.toLocaleString()}</span>
                        <span className="text-xs text-[#6B6B7B] ml-1">NXC</span>
                        {item.originalPrice && (
                          <span className="text-xs text-[#6B6B7B] line-through ml-2">{item.originalPrice.toLocaleString()} NXC</span>
                        )}
                      </div>
                      <button className="p-2 rounded-lg bg-[rgba(177,0,255,0.1)] border border-[rgba(177,0,255,0.2)] text-[#D447FF] hover:bg-[rgba(177,0,255,0.2)] transition-all">
                        <Bell className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get notified */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#08070D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.3)] to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Get Notified When the Store Opens
            </h2>
            <p className="text-[#A8A8B8] mb-6 max-w-lg mx-auto">
              Be the first to know when Nexus Marketplace launches. Subscribe for exclusive early access and launch promotions.
            </p>
            <GlowButton href="/#waitlist">
              Get Notified
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
