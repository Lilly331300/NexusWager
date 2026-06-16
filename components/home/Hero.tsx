"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Gamepad2,
  Layers3,
  Shield,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import GlowButton from "@/components/shared/GlowButton";

const mainFootballer = "/assets/hero/hero-character-football.png";
const supportingFootballers = "/assets/hero/hero-footballer-support.png";
const stadiumImage = "/assets/hero/nexus-stadium-natural-poster.jpg";
const stadiumVideo = "/assets/hero/nexus-stadium-natural.mp4";
const fallbackStadiumImage = "/assets/hero/nexus-football-stadium-bg.webp";
const fallbackCinematicImage = "/assets/hero/nexus-hero-cinematic-bg.webp";
const communityImage = "/assets/news/community.jpg";
const controllerImage = "/assets/ui/final-cta-controller.webp";

const features = [
  { icon: Zap, label: "Skill-Based Matchmaking" },
  { icon: Shield, label: "Secure Match Flow" },
  { icon: Wallet, label: "Wallet Layer" },
  { icon: Layers3, label: "Tournament Framework" },
  { icon: Users, label: "Gaming Community" },
  { icon: Code, label: "Partner Game Pipeline" },
];

const platformModules = [
  {
    title: "Game Access",
    label: "Player Entry",
    value: "Preview",
  },
  {
    title: "Match Flow",
    label: "Competition",
    value: "Planned",
  },
  {
    title: "Partner SDK",
    label: "Integration",
    value: "Future",
  },
];

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${7 + ((index * 19) % 86)}%`,
  top: `${10 + ((index * 23) % 74)}%`,
  delay: index * 0.16,
  duration: 3.1 + (index % 5) * 0.42,
  color:
    index % 3 === 0
      ? "rgba(34,211,238,0.72)"
      : index % 3 === 1
        ? "rgba(52,211,153,0.62)"
        : "rgba(251,191,36,0.58)",
}));

const featureCardHover = {
  y: -6,
  scale: 1.05,
  zIndex: 60,
  transition: {
    type: "spring" as const,
    stiffness: 270,
    damping: 18,
  },
};

const tinyCardHover = {
  y: -5,
  scale: 1.06,
  zIndex: 80,
  transition: {
    type: "spring" as const,
    stiffness: 270,
    damping: 18,
  },
};

export default function Hero() {
  const [cardsExpanded, setCardsExpanded] = useState(false);

  return (
    <section className="relative min-h-[880px] overflow-hidden pt-24 pb-14 lg:pt-28 lg:pb-16">
      <div className="absolute inset-0 bg-[#050607]" />

      {/* Natural stadium fallback background */}
      <div
        className="absolute inset-0 scale-[1.04] opacity-[0.78]"
        style={{
          backgroundImage: `url('${stadiumImage}'), url('${fallbackStadiumImage}'), url('${fallbackCinematicImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Natural stadium video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.42]"
        autoPlay
        muted
        loop
        playsInline
        poster={stadiumImage}
      >
        <source src={stadiumVideo} type="video/mp4" />
      </video>

      {/* Natural cinematic overlays — less purple, more stadium blue/green/gold */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.16),transparent_31%),radial-gradient(circle_at_78%_24%,rgba(52,211,153,0.1),transparent_32%),radial-gradient(circle_at_64%_82%,rgba(251,191,36,0.1),transparent_30%),linear-gradient(180deg,rgba(5,6,7,0.72)_0%,rgba(5,6,7,0.34)_43%,rgba(5,6,7,0.96)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.82)_0%,rgba(5,6,7,0.52)_43%,rgba(5,6,7,0.28)_100%)]" />

      {/* Soft light sweeps */}
      <motion.div
        aria-hidden
        animate={{ x: ["-25%", "125%"] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-[19%] h-px w-[34%] bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent blur-[1px]"
      />

      <motion.div
        aria-hidden
        animate={{ x: ["120%", "-30%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 1.1,
        }}
        className="absolute bottom-[24%] h-px w-[40%] bg-gradient-to-r from-transparent via-emerald-200/28 to-transparent blur-[1px]"
      />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1 w-1 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            animate={{
              opacity: [0.05, 0.5, 0.05],
              scale: [0.55, 1.25, 0.55],
              y: [0, -16, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/32 to-transparent" />

      <div className="container-narrow relative z-10">
        <div className="grid min-h-[755px] items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-40 max-w-[660px]"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 14px rgba(34,211,238,0.08)",
                  "0 0 28px rgba(34,211,238,0.2)",
                  "0 0 14px rgba(34,211,238,0.08)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.75)]" />
              Competitive Gaming Ecosystem
            </motion.div>

            <h1
              className="max-w-[640px] text-[2.8rem] font-black uppercase leading-[0.9] tracking-[0.012em] text-white sm:text-[3.5rem] md:text-[4.35rem] xl:text-[5.05rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Future of{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                Competitive Gaming
              </span>{" "}
              Is Coming
            </h1>

            <p className="mt-6 max-w-[590px] text-sm leading-7 text-[#C9D2D8] sm:text-base md:text-lg">
              NexusWager is building a connected competitive gaming ecosystem
              where players discover game worlds, challenge opponents, compete
              securely, manage wallet balances, and join a growing community of
              players, developers, studios, and partners.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <GlowButton
                href="#waitlist"
                size="lg"
                className="min-w-[190px] !bg-none bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 !text-black hover:shadow-[0_0_44px_rgba(34,211,238,0.26)]"
              >
                Join Waitlist
                <ChevronRight className="h-5 w-5" />
              </GlowButton>

              <GlowButton
                href="/partners"
                variant="outline"
                size="lg"
                className="min-w-[190px] !border-cyan-300/38 !text-cyan-100 hover:!border-cyan-200/70 hover:!bg-cyan-300/[0.08] hover:!text-white hover:shadow-[0_0_26px_rgba(34,211,238,0.14)]"
              >
                Become a Partner
              </GlowButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.34 + index * 0.055,
                    }}
                    whileHover={featureCardHover}
                    className="group relative cursor-pointer rounded-2xl border border-cyan-300/10 bg-[rgba(8,18,22,0.46)] px-3 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.075] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/[0.1] text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[12px] leading-4 text-[#D9E3E8]">
                        {feature.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-cyan-300/16 bg-[rgba(8,18,22,0.64)] p-3 shadow-[0_0_36px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:hidden">
              <motion.div
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-[245px] rounded-[18px] bg-[#11111A]"
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(5,6,7,0.76),rgba(5,6,7,0.08)), url('${stadiumImage}'), url('${fallbackStadiumImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative ml-auto h-[790px] max-w-[1120px]">
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="absolute left-[17%] top-[7%] h-[580px] w-[580px] rounded-full border border-cyan-300/10"
              />

              <motion.div
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
                className="absolute right-[3%] top-[10%] h-[500px] w-[500px] rounded-full border border-dashed border-emerald-200/10"
              />

              <div className="absolute left-[60%] top-[54%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),rgba(52,211,153,0.05),transparent_68%)] blur-2xl" />

              <motion.div
                aria-hidden
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.24, 0.4, 0.24],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[170px] bottom-[54px] z-10 h-[680px] w-[900px] opacity-40 blur-[0.2px]"
                style={{
                  backgroundImage: `url('${supportingFootballers}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  backgroundSize: "auto 100%",
                  filter: "drop-shadow(0 0 34px rgba(34,211,238,0.16))",
                }}
              />

              <motion.div
                animate={{
                  y: [0, -14, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-[-180px] bottom-[-118px] z-30 h-[930px] w-[760px]"
              >
                <div className="absolute inset-x-12 bottom-[58px] h-[140px] rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.18),transparent_68%)] blur-xl" />

                <div
                  className="relative z-10 h-full w-full"
                  style={{
                    backgroundImage: `url('${mainFootballer}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "auto 100%",
                    filter:
                      "drop-shadow(0 0 44px rgba(34,211,238,0.2)) drop-shadow(0 0 26px rgba(251,191,36,0.1))",
                  }}
                />
              </motion.div>

              <div
                className="absolute left-[-30px] top-[88px] z-[60] h-[650px] w-[820px]"
                onMouseEnter={() => setCardsExpanded(true)}
                onMouseLeave={() => setCardsExpanded(false)}
              >
                <motion.div
                  animate={{
                    x: cardsExpanded ? -48 : 0,
                    y: cardsExpanded ? -36 : 0,
                    scale: cardsExpanded ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                    damping: 19,
                  }}
                  className="absolute left-0 top-0 z-[65] w-[455px] cursor-pointer overflow-hidden rounded-[30px] border border-cyan-300/18 bg-[rgba(7,16,20,0.78)] p-5 shadow-[0_0_50px_rgba(34,211,238,0.1)] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{ y: [0, -9, 0], rotate: [0, -0.6, 0] }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-[#8BA1AA]">
                          Nexus Command
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                          Platform Control Layer
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/[0.1] text-cyan-200">
                        <Gamepad2 className="h-5 w-5" />
                      </div>
                    </div>

                    <div
                      className="mb-4 h-[180px] rounded-2xl border border-cyan-300/12 bg-[#11111A]"
                      style={{
                        backgroundImage: `linear-gradient(to top,rgba(5,6,7,0.72),rgba(5,6,7,0.08)), url('${controllerImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="grid grid-cols-3 gap-2">
                      {platformModules.map((item) => (
                        <motion.div
                          key={item.title}
                          whileHover={featureCardHover}
                          className="cursor-pointer rounded-2xl border border-cyan-300/10 bg-white/[0.025] p-3 transition-all duration-300 hover:border-cyan-300/28 hover:bg-cyan-300/[0.065]"
                        >
                          <p className="text-[10px] uppercase tracking-[0.12em] text-[#7D939B]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[11px] font-semibold text-cyan-200">
                            {item.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    x: cardsExpanded ? 68 : 0,
                    y: cardsExpanded ? -42 : 0,
                    scale: cardsExpanded ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                    damping: 19,
                  }}
                  className="absolute right-0 top-[38px] z-[72] w-[290px] cursor-pointer rounded-[28px] border border-emerald-300/18 bg-[rgba(7,16,20,0.9)] p-5 shadow-[0_0_40px_rgba(52,211,153,0.1)] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{ y: [0, 9, 0], rotate: [0, 0.8, 0] }}
                    transition={{
                      duration: 5.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.35,
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.16em] text-[#8BA1AA]">
                        Nexus Wallet
                      </span>

                      <motion.span
                        animate={{ opacity: [0.25, 0.85, 0.25] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.75)]"
                      />
                    </div>

                    <p className="text-[11px] text-[#7D939B]">Preview Balance</p>
                    <p className="mt-1 text-2xl font-bold text-white">12,450.85 NXC</p>

                    <div className="mt-5 space-y-2">
                      {[
                        ["Nexus Gold", "8,250.50"],
                        ["Nexus Green", "2,750.20"],
                        ["Silver", "1,020.15"],
                      ].map(([label, amount]) => (
                        <motion.div
                          key={label}
                          whileHover={featureCardHover}
                          className="flex cursor-pointer items-center justify-between rounded-xl border border-emerald-300/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-emerald-300/24 hover:bg-emerald-300/[0.06]"
                        >
                          <span className="text-xs text-[#B8C6CC]">{label}</span>
                          <span className="text-xs font-semibold text-white">{amount}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    x: cardsExpanded ? -42 : 0,
                    y: cardsExpanded ? 64 : 0,
                    scale: cardsExpanded ? 1.09 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                    damping: 19,
                  }}
                  className="absolute left-[72px] bottom-[8px] z-[70] w-[350px] cursor-pointer overflow-hidden rounded-[28px] border border-cyan-300/18 bg-[rgba(7,16,20,0.84)] p-4 shadow-[0_0_40px_rgba(34,211,238,0.1)] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0], rotate: [0, 0.7, 0] }}
                    transition={{
                      duration: 5.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.65,
                    }}
                  >
                    <div
                      className="relative h-[175px] overflow-hidden rounded-2xl border border-cyan-300/12 bg-[#11111A]"
                      style={{
                        backgroundImage: `linear-gradient(to top,rgba(5,6,7,0.74),rgba(5,6,7,0.12)), url('${communityImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-[rgba(5,6,7,0.42)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-100 backdrop-blur-md">
                        <Users className="h-3 w-3" />
                        Community
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs uppercase tracking-[0.14em] text-[#BFEAF5]">
                          Community Layer
                        </p>
                        <p className="mt-1 text-lg font-bold text-white">
                          Players, Developers & Partners
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Built for ecosystem growth
                        </p>
                        <p className="mt-1 text-[11px] text-[#8BA1AA]">
                          Community rooms, updates, and partner visibility
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/[0.1] text-cyan-200">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    x: cardsExpanded ? 62 : 0,
                    y: cardsExpanded ? 70 : 0,
                    scale: cardsExpanded ? 1.09 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                    damping: 19,
                  }}
                  className="absolute right-[28px] bottom-[26px] z-[68] w-[310px] cursor-pointer overflow-hidden rounded-[28px] border border-amber-200/18 bg-[rgba(7,16,20,0.84)] p-4 shadow-[0_0_40px_rgba(251,191,36,0.08)] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, -0.7, 0] }}
                    transition={{
                      duration: 6.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                  >
                    <div
                      className="relative h-[150px] overflow-hidden rounded-2xl border border-amber-200/12 bg-[#11111A]"
                      style={{
                        backgroundImage: `linear-gradient(to top,rgba(5,6,7,0.7),rgba(5,6,7,0.1)), url('${controllerImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200/20 bg-[rgba(5,6,7,0.42)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-100 backdrop-blur-md">
                        <Sparkles className="h-3 w-3" />
                        Access
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs uppercase tracking-[0.14em] text-amber-100">
                          Game Access
                        </p>
                        <p className="mt-1 text-base font-bold text-white">
                          Controller-Ready Experience
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Designed for future play
                        </p>
                        <p className="mt-1 text-[11px] text-[#8BA1AA]">
                          Game discovery, access, and ecosystem utility
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200/[0.1] text-amber-100">
                        <Gamepad2 className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-[260px] h-[120px] w-[460px] rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.18),transparent_66%)] blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}