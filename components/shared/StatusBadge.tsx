import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "coming-soon" | "in-review" | "early-access" | "tournament-ready" | "partner-preview";
  className?: string;
}

const statusConfig = {
  "coming-soon": { label: "Coming Soon", class: "bg-[rgba(177,0,255,0.15)] text-[#D447FF] border-[rgba(177,0,255,0.3)]" },
  "in-review": { label: "In Review", class: "bg-[rgba(255,193,7,0.15)] text-[#FFC107] border-[rgba(255,193,7,0.3)]" },
  "early-access": { label: "Early Access", class: "bg-[rgba(0,230,118,0.15)] text-[#00E676] border-[rgba(0,230,118,0.3)]" },
  "tournament-ready": { label: "Tournament Ready", class: "bg-[rgba(212,71,255,0.15)] text-[#D447FF] border-[rgba(212,71,255,0.3)]" },
  "partner-preview": { label: "Partner Preview", class: "bg-[rgba(240,92,255,0.15)] text-[#F05CFF] border-[rgba(240,92,255,0.3)]" },
};

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border",
        config.class,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
