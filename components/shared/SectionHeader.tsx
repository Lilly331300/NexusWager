"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.3, 0, 0, 1] }}
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <span className="inline-block text-[0.75rem] font-semibold tracking-[0.05em] uppercase text-[#D447FF] mb-4">
          {label}
        </span>
      )}
      <h2
        className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] tracking-tight mb-4"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[#A8A8B8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
