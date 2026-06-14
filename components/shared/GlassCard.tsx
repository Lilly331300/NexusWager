"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.3, 0, 0, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-[rgba(17,17,26,0.7)] backdrop-blur-xl",
        "border border-[rgba(177,0,255,0.2)]",
        hover && "transition-all duration-300 hover:border-[rgba(177,0,255,0.4)] hover:shadow-[0_0_30px_rgba(177,0,255,0.15),0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1",
        glow && "shadow-[0_0_20px_rgba(177,0,255,0.1)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
