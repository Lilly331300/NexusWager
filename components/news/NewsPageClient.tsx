"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import GlowButton from "../shared/GlowButton";
import { linkedInBlogs, nexusNews, type BlogPost } from "../../data/blogs";

function NewsCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className="group relative h-full overflow-hidden rounded-[32px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.74)] shadow-[0_0_42px_rgba(168,85,247,0.08)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_48%)]" />
      </div>

      <div
        className="relative h-[260px] overflow-hidden bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.82),rgba(5,5,5,0.12)), url('${post.image}'), url('${post.fallbackImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-4 top-4 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(5,5,5,0.58)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#DCC7FF] backdrop-blur-md">
          {post.category}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A7FF]">
            {post.source}
          </p>
          <h2 className="text-2xl font-black leading-tight text-white">
            {post.title}
          </h2>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.readTime}
          </span>
        </div>

        <p className="text-sm leading-7 text-[#B9B9C7]">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(168,85,247,0.14)] bg-[rgba(168,85,247,0.06)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C9A7FF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#C9A7FF]"
        >
          Read more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

function EssayCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.externalUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className="group grid gap-4 rounded-[28px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.62)] p-4 backdrop-blur-xl md:grid-cols-[130px_1fr]"
    >
      <div
        className="h-[130px] rounded-2xl bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.7),rgba(5,5,5,0.1)), url('${post.image}'), url('${post.fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div>
        <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C9A7FF]">
          LinkedIn Essay
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="text-lg font-black leading-tight text-white transition-colors duration-300 group-hover:text-[#E9D5FF]">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#B9B9C7]">{post.excerpt}</p>
      </div>
    </motion.a>
  );
}

export default function NewsPageClient() {
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
            <Newspaper className="h-4 w-4" />
            NexusWager Newsroom
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Updates From the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            Follow project updates, ecosystem previews, coming-soon announcements,
            and selected gaming industry ideas connected to the NexusWager movement.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/blog" size="lg">
              Visit Blog
              <ArrowUpRight className="h-5 w-5" />
            </GlowButton>

            <GlowButton href="/games" variant="outline" size="lg">
              Explore Games
            </GlowButton>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Rocket,
              value: "Coming",
              label: "Platform Launch",
            },
            {
              icon: Wallet,
              value: "Wallet",
              label: "Economy Layer",
            },
            {
              icon: ShieldCheck,
              value: "Escrow",
              label: "Secure Flow",
            },
            {
              icon: Users,
              value: "Community",
              label: "Ecosystem Layer",
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

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Project Updates
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                NexusWager Coming Soon
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              These short updates introduce the direction of the NexusWager ecosystem
              before full product launch.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {nexusNews.map((post, index) => (
              <NewsCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
                <Radio className="h-4 w-4" />
                Launch Watch
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                The NexusWager movement is being prepared
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#B9B9C7] sm:text-base">
                NexusWager is still in its preparation phase. The platform is being
                positioned around competitive gaming, community interaction, wallet
                systems, partner integrations, and future game discovery.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GlowButton href="/#waitlist" size="lg">
                  Join Waitlist
                  <ArrowUpRight className="h-5 w-5" />
                </GlowButton>

                <GlowButton href="/partners" variant="outline" size="lg">
                  Partner With Us
                </GlowButton>
              </div>
            </div>

            <div
              className="min-h-[360px] rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[#11111A]"
              style={{
                backgroundImage:
                  "linear-gradient(to top,rgba(5,5,5,0.84),rgba(5,5,5,0.14)), url('/assets/ui/final-cta-controller.webp')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex h-full min-h-[360px] flex-col justify-end p-6">
                <div className="w-fit rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(5,5,5,0.55)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#DCC7FF] backdrop-blur-md">
                  Coming Soon
                </div>

                <h3 className="mt-4 max-w-md text-3xl font-black uppercase leading-tight text-white">
                  A connected future for competitive gaming
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Related Essays
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Gaming Industry Ideas
              </h2>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.14)]"
            >
              View all blogs
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {linkedInBlogs.map((post, index) => (
              <EssayCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}