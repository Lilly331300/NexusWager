"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  label?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, description, label, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(177,0,255,0.08)] via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(177,0,255,0.15)_0%,transparent_70%)]" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.3, 0, 0, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {label && (
            <span className="inline-block text-[0.75rem] font-semibold tracking-[0.05em] uppercase text-[#D447FF] mb-4 px-4 py-1.5 rounded-full bg-[rgba(177,0,255,0.1)] border border-[rgba(177,0,255,0.2)]">
              {label}
            </span>
          )}
          <h1
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {title}
          </h1>
          <p className="text-[#A8A8B8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.3)] to-transparent" />
    </section>
  );
}
