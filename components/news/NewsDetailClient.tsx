"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2, Twitter, Facebook, Link2 } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import GlowButton from "@/components/shared/GlowButton";
import type { NewsArticle } from "@/data/news";
import { newsArticles } from "@/data/news";

interface NewsDetailClientProps {
  article: NewsArticle;
}

export default function NewsDetailClient({ article }: NewsDetailClientProps) {
  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <div className="container-narrow">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-[#A8A8B8] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-[rgba(177,0,255,0.3)] to-[rgba(109,40,217,0.15)] border border-[rgba(177,0,255,0.2)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#B100FF] to-[#D447FF] flex items-center justify-center shadow-[0_0_50px_rgba(177,0,255,0.5)]">
                <span className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>N</span>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(177,0,255,0.15)] text-[#D447FF] border border-[rgba(177,0,255,0.2)]">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[#6B6B7B]">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="text-sm text-[#6B6B7B]">by {article.author}</span>
          </div>

          <h1
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {article.title}
          </h1>

          {/* Share buttons */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm text-[#6B6B7B]">Share:</span>
            <button className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[#A8A8B8] hover:text-white hover:bg-[rgba(177,0,255,0.2)] transition-all">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[#A8A8B8] hover:text-white hover:bg-[rgba(177,0,255,0.2)] transition-all">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[#A8A8B8] hover:text-white hover:bg-[rgba(177,0,255,0.2)] transition-all">
              <Link2 className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-[#A8A8B8] text-lg leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <Tag className="w-4 h-4 text-[#6B6B7B]" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(177,0,255,0.1)] text-[#D447FF] border border-[rgba(177,0,255,0.15)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/news/${related.slug}`}>
                  <GlassCard className="p-4 hover:border-[rgba(177,0,255,0.4)] transition-all">
                    <span className="text-xs text-[#D447FF] font-medium">{related.category}</span>
                    <h4 className="text-sm font-semibold text-white mt-1 line-clamp-2">{related.title}</h4>
                    <span className="text-xs text-[#6B6B7B] mt-2">{related.date}</span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Waitlist CTA */}
        <GlassCard className="p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
            Stay in the Loop
          </h3>
          <p className="text-[#A8A8B8] mb-6">
            Join the NexusWager waitlist for early access and exclusive updates.
          </p>
          <GlowButton href="/#waitlist">Join Waitlist</GlowButton>
        </GlassCard>
      </div>
    </div>
  );
}
