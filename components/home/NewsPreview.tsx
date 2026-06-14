"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import { nexusNews } from "@/data/blogs";

export default function NewsPreview() {
  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_80%_50%,rgba(217,70,239,0.1),transparent_34%)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.24)] bg-[rgba(168,85,247,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A7FF]">
              <Newspaper className="h-4 w-4" />
              News & Blog
            </div>

            <h2
              className="text-[clamp(2.3rem,5vw,4.7rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NexusWager{" "}
              <span className="bg-gradient-to-r from-[#C9A7FF] via-[#A855F7] to-[#E9D5FF] bg-clip-text text-transparent">
                Updates
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#B9B9C7] sm:text-base">
              Short project updates, coming-soon news, and selected thought pieces
              about the future of gaming, competition, community, and developer
              ecosystems.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(168,85,247,0.28)] bg-[rgba(168,85,247,0.08)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A7FF] transition-all duration-300 hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.14)]"
          >
            View all blogs
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {nexusNews.map((item, index) => (
            <motion.article
              key={item.id}
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
              className="group overflow-hidden rounded-[30px] border border-[rgba(168,85,247,0.16)] bg-[rgba(10,10,16,0.72)] shadow-[0_0_36px_rgba(168,85,247,0.08)] backdrop-blur-xl"
            >
              <div
                className="relative h-[210px] bg-[#11111A]"
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(5,5,5,0.78),rgba(5,5,5,0.12)), url('${item.image}'), url('${item.fallbackImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute left-4 top-4 rounded-full border border-[rgba(168,85,247,0.22)] bg-[rgba(5,5,5,0.55)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D9C5FF] backdrop-blur-md">
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  <CalendarDays className="h-3.5 w-3.5 text-[#C9A7FF]" />
                  {item.date}
                </div>

                <h3 className="text-lg font-black leading-tight text-white transition-colors duration-300 group-hover:text-[#E9D5FF]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#B9B9C7]">
                  {item.excerpt}
                </p>

                <Link
                  href="/blog"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A7FF]"
                >
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}