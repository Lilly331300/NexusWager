"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  DoorOpen,
  Filter,
  FlaskConical,
  Plug,
  Rocket,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { partnerStages } from "@/data/partnerStages";

const stageIconMap: Record<string, React.ElementType> = {
  DoorOpen,
  Filter,
  FlaskConical,
  Plug,
  ShieldCheck,
  Settings,
  Rocket,
};

const partnerNotes = [
  "Structured partner intake through the official website",
  "Technical review before any game enters integration",
  "Quality assurance before public platform visibility",
  "Priority support pathway for African mobile indie developers and studios",
];

export default function PartnerPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(177,0,255,0.1),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "url('/assets/partners/partner-portal-showcase.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.78)] via-[rgba(5,5,5,0.9)] to-[#050505]" />

      <div className="container-narrow relative z-10">
        <div className="overflow-hidden rounded-[30px] border border-[rgba(177,0,255,0.2)] bg-[rgba(10,10,16,0.82)] p-6 shadow-[0_0_45px_rgba(177,0,255,0.08)] backdrop-blur-xl md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(177,0,255,0.3)] bg-[rgba(177,0,255,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D447FF]">
                <BookOpen className="h-4 w-4" />
                Partner Platform Preview
              </span>

              <h2
                className="mt-5 text-[2rem] font-black uppercase leading-[1.02] tracking-[0.025em] text-white md:text-[2.7rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Publishing Pathway for the NexusWager Ecosystem
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#A8A8B8]">
                NexusWager is being designed with a structured partner pathway
                for future game submissions, technical reviews, integration,
                quality assurance, onboarding, and eventual go-live support.
              </p>

              <div className="mt-7 rounded-2xl border border-[rgba(0,230,118,0.22)] bg-[rgba(0,230,118,0.075)] px-5 py-4">
                <p className="text-sm font-semibold text-[#00E676]">
                  Priority pathway for African mobile indie developers and studios.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#B9EFD0]">
                  The partner framework is built to support emerging game talent
                  while keeping quality, compliance, and readiness at the center
                  of the publishing process.
                </p>
              </div>

              <div className="mt-7 space-y-3">
                {partnerNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-3 rounded-2xl border border-[rgba(177,0,255,0.12)] bg-[rgba(255,255,255,0.025)] px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D447FF]" />
                    <p className="text-sm leading-6 text-[#D6D6E5]">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                    7-Stage Journey
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    From Entry to Go-Live
                  </h3>
                </div>

                <span className="hidden rounded-full border border-[rgba(177,0,255,0.18)] bg-[rgba(177,0,255,0.08)] px-4 py-2 text-xs font-semibold text-[#D447FF] sm:inline-flex">
                  Framework Preview
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {partnerStages.map((stage, index) => {
                  const Icon = stageIconMap[stage.icon] || DoorOpen;

                  return (
                    <motion.div
                      key={stage.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="relative overflow-hidden rounded-[22px] border border-[rgba(177,0,255,0.16)] bg-[rgba(17,17,26,0.72)] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[rgba(177,0,255,0.34)] hover:shadow-[0_0_28px_rgba(177,0,255,0.1)]"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(177,0,255,0.14)] text-[#D447FF] shadow-[0_0_18px_rgba(177,0,255,0.12)]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#B100FF] to-[#D447FF] text-sm font-bold text-white">
                          {stage.number}
                        </div>
                      </div>

                      <div className="mb-2 text-[11px] uppercase tracking-[0.14em] text-[#8F8FA3]">
                        {stage.duration}
                      </div>

                      <h4 className="text-base font-semibold text-white">
                        {stage.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#A8A8B8]">
                        {stage.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}