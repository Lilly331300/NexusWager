"use client";

import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: GlowButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl cursor-pointer",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-base",
    size === "lg" && "px-8 py-4 text-lg",
    variant === "primary" &&
      "bg-gradient-to-r from-[#B100FF] to-[#D447FF] text-white hover:shadow-[0_0_40px_rgba(177,0,255,0.4)] hover:-translate-y-0.5 active:translate-y-0",
    variant === "outline" &&
      "border-[1.5px] border-[rgba(177,0,255,0.4)] text-[#D447FF] hover:border-[rgba(177,0,255,0.8)] hover:bg-[rgba(177,0,255,0.1)] hover:text-[#F05CFF] hover:shadow-[0_0_20px_rgba(177,0,255,0.15)]",
    variant === "ghost" &&
      "text-[#A8A8B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]",
    disabled && "opacity-50 cursor-not-allowed hover:transform-none hover:shadow-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
}
