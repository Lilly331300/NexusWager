"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { linkedInBlogs, nexusNews, type BlogPost } from "@/data/blogs";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const CardContent = (
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
      className="group relative h-full overflow-hidden rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.74)] shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_45%)]" />
      </div>

      <div
        className="relative h-[250px] overflow-hidden bg-[#11111A]"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.78),rgba(5,5,5,0.1)), url('${post.image}'), url('${post.fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-4 top-4 rounded-full border border-[rgba(168,85,247,0.22)] bg-[rgba(5,5,5,0.58)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D9C5FF] backdrop-blur-md">
          {post.category}
        </div>

        {post.source === "LinkedIn" && (
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
            LinkedIn
          </div>
        )}
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

        <h2 className="text-xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-[#E9D5FF] sm:text-2xl">
          {post.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#B9B9C7]">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(168,85,247,0.16)] bg-[rgba(168,85,247,0.07)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C9A7FF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C9A7FF]">
          {post.externalUrl ? "Read on LinkedIn" : "Read update"}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );

  if (post.externalUrl) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        {CardContent}
      </a>
    );
  }

  return <div className="h-full">{CardContent}</div>;
}

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(217,70,239,0.12),transparent_28%),linear-gradient(180deg,#050505_0%,#090712_45%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />

      <section className="container-narrow relative z-10 pt-28 pb-20 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
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
            NexusWager Blog
          </div>

          <h1
            className="text-[clamp(3rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ideas Shaping the{" "}
            <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
              Future of Gaming
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#B9B9C7] sm:text-base">
            Curated thought pieces, ecosystem updates, and project news around gaming
            communities, creator economies, competitive platforms, and the future
            NexusWager is building.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
                LinkedIn Articles
              </p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Founder & Ecosystem Essays
              </h2>
            </div>

            <Sparkles className="hidden h-8 w-8 text-[#C9A7FF] sm:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {linkedInBlogs.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
                Project News
              </p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                NexusWager Updates
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {nexusNews.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}