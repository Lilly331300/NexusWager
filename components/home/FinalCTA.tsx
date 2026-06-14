"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";
import WaitlistForm from "@/components/shared/WaitlistForm";

const trustItems = [
  "Early access updates",
  "Partner opportunities",
  "Developer onboarding",
  "Community announcements",
];

export default function FinalCTA() {
  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070D] via-[#050505] to-[#08070D]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(177,0,255,0.18),transparent_36%)]" />
      <div
        className="absolute inset-y-0 right-0 hidden w-[46%] opacity-40 lg:block"
        style={{
          backgroundImage: "url('/assets/ui/final-cta-controller.webp')",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.32)] to-transparent" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62 }}
          className="overflow-hidden rounded-[34px] border border-[rgba(177,0,255,0.26)] bg-[rgba(10,10,16,0.78)] p-6 shadow-[0_0_60px_rgba(177,0,255,0.1)] backdrop-blur-xl md:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(177,0,255,0.3)] bg-[rgba(177,0,255,0.12)] px-4 py-2 text-sm font-semibold text-[#D447FF]">
                <Sparkles className="h-4 w-4" />
                NexusWager Is In Development
              </div>

              <h2
                className="max-w-3xl text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-[3.5rem] lg:text-[4.4rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Be Part of the Next{" "}
                <span className="text-gradient">Gaming Revolution</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#A8A8B8] md:text-lg">
                Join players, developers, studios, publishers, investors, and
                strategic partners getting early updates as the NexusWager
                ecosystem moves toward phased launch.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[rgba(177,0,255,0.12)] bg-[rgba(255,255,255,0.025)] px-4 py-3"
                  >
                    <Zap className="h-4 w-4 text-[#D447FF]" />
                    <span className="text-sm text-[#D6D6E5]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-[#77778B]">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D447FF]" />
                  18+ where required
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D447FF]" />
                  KYC / AML ready
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D447FF]" />
                  Fair play focused
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D447FF]" />
                  Escrow-based flow
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-[rgba(177,0,255,0.22)] bg-[rgba(5,5,5,0.48)] p-5 shadow-[0_0_35px_rgba(177,0,255,0.08)] backdrop-blur-xl">
              <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                Join Waitlist
              </p>
              <WaitlistForm variant="inline" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}