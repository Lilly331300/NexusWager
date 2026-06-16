"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "News & Blog", href: "/blog" },
  { label: "Store", href: "/store" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/78 shadow-[0_16px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex h-[82px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.08)] shadow-[0_0_28px_rgba(168,85,247,0.16)]">
            <img
              src="/assets/logo/nexuswager-logo.png"
              alt="NexusWager"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="absolute text-lg font-black text-[#C9A7FF]">N</span>
          </div>

          <div className="leading-none">
            <p
              className="text-xl font-black tracking-[-0.04em] text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NexusWager
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
              Game the Future
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2.5 text-[12px] font-black uppercase tracking-[0.12em] transition-all duration-300 ${
                  active
                    ? "bg-[#C9A7FF] text-black shadow-[0_0_24px_rgba(201,167,255,0.25)]"
                    : "text-white/58 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C9A7FF] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Join Waitlist
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050505]/94 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="container-narrow grid gap-2">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-4 text-sm font-black uppercase tracking-[0.14em] transition-all duration-300 ${
                    active
                      ? "bg-[#C9A7FF] text-black"
                      : "border border-white/10 bg-white/[0.035] text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/waitlist"
              className="mt-2 rounded-2xl bg-[#C9A7FF] px-4 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-black"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}