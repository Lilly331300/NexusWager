"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Wallet", href: "/wallet" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/blog" && pathname === "/blog") return true;
    if (href === "/partners" && pathname === "/partners") return true;
    return false;
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-2xl">
        <div className="container-narrow flex h-[82px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex min-w-fit items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/assets/logo/nexuswager-logo.png"
              alt="NexusWager"
              className="h-10 w-10 rounded-xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div>
              <p
                className="text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                NexusWager
              </p>
              <p className="-mt-1 hidden text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A7FF] sm:block">
                Competitive Gaming
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[#DCC7FF]"
                    : "text-white/58 hover:text-white"
                }`}
              >
                {link.label}

                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#C9A7FF] shadow-[0_0_12px_rgba(201,167,255,0.75)]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden min-w-fit items-center gap-3 lg:flex">
            <Link
              href="/#waitlist"
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#DCC7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.5)] hover:bg-[rgba(168,85,247,0.14)]"
            >
              Join Waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[120] bg-[#050505]/96 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-narrow flex h-[82px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/assets/logo/nexuswager-logo.png"
              alt="NexusWager"
              className="h-10 w-10 rounded-xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <p
              className="text-xl font-black uppercase tracking-[0.08em] text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NexusWager
            </p>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="container-narrow flex min-h-[calc(100vh-82px)] flex-col justify-center gap-4 pb-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center justify-between rounded-[26px] border px-5 py-5 transition-all duration-300 ${
                isActive(link.href)
                  ? "border-[rgba(168,85,247,0.34)] bg-[rgba(168,85,247,0.12)] text-white"
                  : "border-white/10 bg-white/[0.035] text-white/72 hover:border-[rgba(168,85,247,0.28)] hover:bg-[rgba(168,85,247,0.08)] hover:text-white"
              }`}
              style={{
                transitionDelay: `${index * 45}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(18px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span
                className="text-2xl font-black uppercase tracking-[0.04em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </span>

              <ArrowUpRight className="h-5 w-5 text-[#C9A7FF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}

          <Link
            href="/#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            Join Waitlist
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </>
  );
}