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
  Sparkles,
} from "lucide-react";
import { linkedInBlogs, nexusNews } from "../../data/blogs";

function ProjectUpdateCard({
  post,
  index,
}: {
  post: (typeof nexusNews)[number];
  index: number;
}) {
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
      className="group relative h-full overflow-hidden rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.74)] shadow-[0_0_42px_rgba(168,85,247,0.08)] backdrop-blur-xl"
    >
      <div
        className="h-[260px] bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.88),rgba(5,5,5,0.16)), url('${post.image}'), url('${post.fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="p-5 sm:p-6">
        <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
          Project Update
        </p>

        <h2 className="text-2xl font-black leading-tight text-white">
          {post.title}
        </h2>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.readTime}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">{post.excerpt}</p>

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
      </div>
    </motion.article>
  );
}

function LinkedInEssayCard({
  post,
  index,
}: {
  post: (typeof linkedInBlogs)[number];
  index: number;
}) {
  return (
    <motion.a
      href={post.externalUrl}
      target="_blank"
      rel="noreferrer"
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
      className="group relative h-full overflow-hidden rounded-[34px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.74)] shadow-[0_0_42px_rgba(168,85,247,0.08)] backdrop-blur-xl"
    >
      <div
        className="h-[260px] bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.88),rgba(5,5,5,0.16)), url('${post.image}'), url('${post.fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="p-5 sm:p-6">
        <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A7FF]">
          LinkedIn Essay
        </p>

        <h2 className="text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-[#E9D5FF]">
          {post.title}
        </h2>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-[#C9A7FF]" />
            {post.readTime}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">{post.excerpt}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#C9A7FF]">
          Open on LinkedIn
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}

export default function BlogPage() {
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
            News & Blog
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black leading-[0.88] tracking-[-0.06em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fresh Updates From the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B9B9C7]">
            Project updates, gaming industry ideas, launch notes, and ecosystem
            stories — all in one place.
          </p>
        </motion.div>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Project News
              </p>
              <h2
                className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                NexusWager Updates
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#B9B9C7]">
              Short project updates about the platform, wallet, community, game
              discovery, and launch preparation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {nexusNews.map((post, index) => (
              <ProjectUpdateCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9A7FF]">
                Founder Essays
              </p>
              <h2
                className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Gaming Culture & Industry Thoughts
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#C9A7FF]">
              <Radio className="h-4 w-4" />
              LinkedIn Articles
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {linkedInBlogs.map((post, index) => (
              <LinkedInEssayCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[38px] border border-[rgba(168,85,247,0.18)] bg-[rgba(10,10,16,0.72)] p-8 text-center shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#C9A7FF]" />
          <h2
            className="text-4xl font-black leading-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            More stories are loading into the Nexus.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#B9B9C7]">
            As NexusWager grows, this page will become the home for platform news,
            game updates, community stories, partner announcements, and ecosystem
            essays.
          </p>

          <Link
            href="/waitlist"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C9A7FF] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Join Waitlist
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}