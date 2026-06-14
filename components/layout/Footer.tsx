"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  MessageCircle,
  Send,
  ShieldCheck,
  Twitter,
  Youtube,
} from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Games", href: "/games" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Wallet Preview", href: "/#waitlist" },
      { label: "Tournaments", href: "/games" },
      { label: "Store Preview", href: "/store" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Community", href: "/community" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner Portal", href: "/partners" },
      { label: "Apply as Partner", href: "/partners" },
      { label: "Developer Access", href: "/developers" },
      { label: "Integration Center", href: "/developers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Business Inquiry", href: "/contact" },
      { label: "Press Inquiry", href: "/contact" },
      { label: "Platform Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: MessageCircle, label: "Community", href: "/community" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Github, label: "Developer", href: "/developers" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(177,0,255,0.15)] bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(177,0,255,0.1),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(177,0,255,0.32)] to-transparent" />

      <div className="container-narrow relative z-10">
        <div className="py-14 lg:py-18">
          <div className="mb-12 overflow-hidden rounded-[30px] border border-[rgba(177,0,255,0.2)] bg-[rgba(10,10,16,0.78)] p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-2xl border border-[rgba(177,0,255,0.28)] bg-[rgba(177,0,255,0.1)]">
                    <img
                      src="/assets/logo/nexuswager-logo.png"
                      alt="NexusWager"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-black uppercase tracking-[0.02em] text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Nexus<span className="text-[#D447FF]">Wager</span>
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#77778B]">
                      Competitive Gaming Ecosystem
                    </p>
                  </div>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-[#A8A8B8]">
                  NexusWager is a premium skill-based gaming ecosystem in
                  development — built for future game discovery, secure
                  competition, escrow-backed match flow, community activity,
                  developer onboarding, and partner publishing opportunities.
                </p>
              </div>

              <div className="rounded-[24px] border border-[rgba(177,0,255,0.16)] bg-[rgba(255,255,255,0.025)] p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#8F8FA3]">
                  Pre-launch access
                </p>
                <h4 className="mt-2 text-2xl font-bold text-white">
                  Join the waitlist before phased access opens.
                </h4>
                <Link
                  href="/#waitlist"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B100FF] to-[#D447FF] px-5 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(177,0,255,0.22)]"
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F8FA3]">
                Social & Community
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(177,0,255,0.14)] bg-[rgba(255,255,255,0.025)] text-[#A8A8B8] transition-all duration-300 hover:border-[rgba(177,0,255,0.34)] hover:text-white hover:shadow-[0_0_20px_rgba(177,0,255,0.12)]"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[22px] border border-[rgba(177,0,255,0.12)] bg-[rgba(255,255,255,0.025)] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D447FF]" />
                  <span className="text-sm font-semibold text-white">
                    Trust-first platform
                  </span>
                </div>
                <p className="text-xs leading-6 text-[#8F8FA3]">
                  Built around responsible access, KYC/AML readiness, fair play,
                  secure escrow, and transparent transaction flow.
                </p>
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#A8A8B8] transition-colors hover:text-[#D447FF]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-[rgba(177,0,255,0.12)] pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-[#6B6B7B]">
              © 2026 NexusWager. All rights reserved. A product of Emperorian
              Interactive.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[#6B6B7B]">
              <span>18+ where required</span>
              <span>KYC / AML ready</span>
              <span>Fair play focused</span>
              <span>Pre-launch platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}