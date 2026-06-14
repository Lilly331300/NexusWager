"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  Gamepad2,
  HelpCircle,
  Layers3,
  LockKeyhole,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import { faqs, faqCategories, type FAQCategory, type FAQItem } from "../../data/faqs";

const categoryIcons: Record<FAQCategory, typeof Layers3> = {
  Platform: Layers3,
  Players: Gamepad2,
  Developers: Users,
  Wallet: Wallet,
  Launch: Rocket,
};

function FAQAccordion({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = categoryIcons[item.category];

  return (
    <motion.article
      layout
      className="overflow-hidden rounded-[26px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] backdrop-blur-xl"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
            {item.category}
          </p>
          <h3 className="text-base font-black leading-tight text-white sm:text-lg">
            {item.question}
          </h3>
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="text-sm leading-7 text-[#B9B9C7]">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function FaqPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqs.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.12),transparent_28%),linear-gradient(180deg,#050505_0%,#090712_48%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />

      <section className="container-narrow relative z-10 pt-28 pb-20 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:border-[rgba(168,85,247,0.3)] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions About{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              NexusWager
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            Clear answers about the NexusWager platform vision, pre-launch status,
            game concepts, wallet layer, escrow system, developer pathway, and
            future ecosystem plans.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/waitlist" size="lg">
              Join Waitlist
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/how-it-works" variant="outline" size="lg">
              How It Works
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Layers3,
              value: "Platform",
              label: "Ecosystem Vision",
            },
            {
              icon: Gamepad2,
              value: "Games",
              label: "Concept Previews",
            },
            {
              icon: Wallet,
              value: "Wallet",
              label: "Utility Layer",
            },
            {
              icon: ShieldCheck,
              value: "Trust",
              label: "Escrow & Review",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.64)] p-5 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-2xl font-black uppercase text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-16 rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.58)] p-4 shadow-[0_0_46px_rgba(168,85,247,0.08)] backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                <Search className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                  Search FAQ
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Filter by topic, question, or keyword.
                </p>
              </div>
            </div>

            <div className="relative w-full lg:max-w-[380px]">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search questions..."
                className="h-12 w-full rounded-full border border-white/10 bg-white/[0.045] pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[rgba(168,85,247,0.38)] focus:bg-white/[0.07]"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {["All", ...faqCategories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category as FAQCategory | "All")}
                className={`min-w-fit rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-[#C9A7FF]/45 bg-[#C9A7FF]/16 text-[#F1E7FF]"
                    : "border-white/10 bg-white/[0.035] text-white/48 hover:border-[rgba(168,85,247,0.28)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4">
          {filteredFaqs.map((item) => (
            <FAQAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? "" : item.id)}
            />
          ))}

          {filteredFaqs.length === 0 && (
            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-10 text-center">
              <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#C9A7FF]" />
              <h3 className="text-2xl font-black text-white">
                No matching questions found
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/55">
                Try another search term or select a different category.
              </p>
            </div>
          )}
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Still Curious?
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Follow the project as it develops
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
                NexusWager is still being prepared. Join the waitlist or explore
                the ecosystem pages to understand the platform vision, game layer,
                wallet structure, partner path, and launch direction.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/waitlist" size="lg">
                  Join Waitlist
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/partners" variant="outline" size="lg">
                  Become a Partner
                </GlowButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: BadgeCheck,
                  title: "Pre-Launch Clarity",
                  text: "The FAQ clearly explains that NexusWager is not live yet.",
                },
                {
                  icon: Gamepad2,
                  title: "Game Concept Guidance",
                  text: "Visitors can understand that game worlds are previews and not active gameplay.",
                },
                {
                  icon: LockKeyhole,
                  title: "Escrow Education",
                  text: "Players can learn how the planned escrow and settlement system will work.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(168,85,247,0.1)] text-[#C9A7FF]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}