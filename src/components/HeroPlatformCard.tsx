"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/site";
import { DeployPlatformLogo } from "./DeployPlatformLogo";

const ease = [0.22, 1, 0.36, 1] as const;

function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 36, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, duration: 0.85, ease },
  };
}

function StatRing({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center">
      <div className="relative flex h-[80px] w-[80px] items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80" aria-hidden>
          <circle cx="40" cy="40" r="32" fill="none" stroke="#f0f0f0" strokeWidth="4.5" />
          <circle
            className="hero-ring-animate"
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="201"
            strokeDashoffset="18"
          />
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7a00" />
              <stop offset="100%" stopColor="#ffb347" />
            </linearGradient>
          </defs>
        </svg>
        <motion.span
          className="text-[1.35rem] font-bold tracking-tight text-charcoal"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {value}
        </motion.span>
      </div>
      <p className="mt-1 max-w-[96px] text-center text-[10px] leading-snug text-grey-light">{caption}</p>
    </div>
  );
}

function StatCard({
  label,
  sub,
  tags,
  delay,
  className,
}: {
  label: string;
  sub?: string;
  tags?: string[];
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      {...reveal(delay)}
      className={`hero-stat-card hero-card-float-slow rounded-[20px] px-5 py-4 ${className ?? ""}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-grey-light uppercase">{label}</p>
        <span className="text-ember/80 text-[10px]">✦</span>
      </div>
      {tags ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="hero-stat-chip inline-flex rounded-md border border-black/[0.06] bg-white px-2 py-1 text-[10px] font-semibold tracking-tight text-charcoal"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {sub ? <p className={`${tags ? "mt-2" : "mt-2.5"} text-[11px] leading-relaxed text-grey`}>{sub}</p> : null}
    </motion.div>
  );
}

function HeroAiAtmosphere() {
  const nodes = [
    { cx: 120, cy: 100 },
    { cx: 280, cy: 95 },
    { cx: 200, cy: 108 },
    { cx: 70, cy: 158 },
    { cx: 330, cy: 152 },
  ];

  return (
    <div className="hero-ai-light relative h-[210px] w-full overflow-hidden sm:h-[224px]">
      <motion.div
        className="hero-ai-beam absolute top-0 left-1/2 h-full w-[55%] -translate-x-1/2"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-ai-beam absolute top-0 left-[8%] h-4/5 w-[22%] opacity-50"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="hero-ai-beam absolute top-0 right-[8%] h-4/5 w-[22%] opacity-50"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 420 224"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="arch-fill" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#d0d4da" />
            <stop offset="100%" stopColor="#f4f5f7" />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="210" cy="210" rx="195" ry="18" fill="rgba(0,0,0,0.04)" />

        <g className="hero-ai-orbit" opacity="0.35">
          <circle cx="210" cy="52" r="38" stroke="#ff7a00" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="248" cy="52" r="3" fill="#ff7a00" />
        </g>

        <path d="M48 210 V118 L88 98 L128 118 V210 Z" fill="url(#arch-fill)" stroke="#e2e4e8" />
        <path d="M128 210 V96 L210 72 L292 96 V210 Z" fill="url(#arch-fill)" stroke="#e8eaee" />
        <path d="M292 210 V124 L332 110 L372 124 V210 Z" fill="url(#arch-fill)" stroke="#e2e4e8" />

        <rect x="72" y="138" width="16" height="24" rx="2" fill="#fff" opacity="0.65" />
        <rect x="188" y="126" width="20" height="32" rx="2" fill="#fff" opacity="0.7" />
        <rect x="312" y="142" width="14" height="20" rx="2" fill="#fff" opacity="0.6" />

        <circle className="hero-ai-pulse" cx="210" cy="52" r="26" fill="url(#core-glow)" />
        <circle cx="210" cy="52" r="10" fill="#ff7a00" fillOpacity="0.9" />
        <circle cx="210" cy="52" r="4" fill="#fff8f2" />

        <g stroke="#ff7a00" strokeOpacity="0.2" strokeWidth="0.8">
          {nodes.map(({ cx, cy }) => (
            <line key={`${cx}-${cy}`} x1="210" y1="52" x2={cx} y2={cy} />
          ))}
        </g>

        {nodes.map(({ cx, cy }) => (
          <circle key={`node-${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#ff7a00" fillOpacity="0.65" />
        ))}
      </svg>

      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-ember/60"
          style={{ left: `${8 + i * 11}%`, top: `${20 + (i % 3) * 16}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <div className="hero-ai-scanlines pointer-events-none absolute inset-0" />
      <div className="hero-ai-shimmer pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
    </div>
  );
}

function GlassDeployCard({ delay = 0.72 }: { delay?: number }) {
  const { deployCard } = heroContent.heroCard;

  return (
    <motion.div
      {...reveal(delay)}
      className="hero-glass-deploy hero-card-float-delay rounded-[22px] p-4 sm:p-5"
    >
      <div className="relative z-[1]">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium tracking-wide text-white/90">
          {deployCard.badge}
        </span>
        <p className="mt-3 text-[10px] font-medium tracking-[0.12em] text-white/50 uppercase">
          {deployCard.subtitle}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {deployCard.platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.1 + i * 0.06, duration: 0.5, ease }}
              className="hero-glass-platform flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-center"
            >
              <DeployPlatformLogo id={platform.id} />
              <span className="text-[10px] leading-tight font-medium text-white/80">{platform.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CenterCard() {
  const { heroCard } = heroContent;

  return (
    <motion.div
      {...reveal(0.6)}
      className="hero-platform-card hero-card-float w-full overflow-hidden rounded-[26px] sm:rounded-[28px]"
    >
      <div className="flex items-center gap-5 px-6 py-6 sm:px-7 sm:py-7">
        <div className="min-w-0 flex-1 text-left">
          <h3 className="text-[1.02rem] leading-[1.4] font-semibold tracking-tight text-charcoal sm:text-[1.05rem]">
            {heroCard.mainHeadline}{" "}
            <span className="font-bold text-ember">{heroCard.mainHeadlineHighlight}</span>
          </h3>
          <p className="mt-2 max-w-[280px] text-[13px] leading-relaxed text-grey">
            {heroCard.mainSubline}
          </p>
        </div>
        <StatRing value={heroCard.ringValue} caption={heroCard.ringCaption} />
      </div>

      <div className="relative w-full overflow-hidden rounded-b-[26px] sm:rounded-b-[28px]">
        <HeroAiAtmosphere />
        <div className="absolute right-4 bottom-4 sm:right-5 sm:bottom-5">
          <motion.div
            className="flex items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex -space-x-1.5">
              {["#ff7a00", "#ffb347", "#e06d00"].map((color) => (
                <span
                  key={color}
                  className="h-[18px] w-[18px] rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </span>
            <span className="text-[11px] font-medium text-charcoal">{heroCard.floatBadge}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroPlatformCard() {
  const { heroCard } = heroContent;

  return (
    <div className="home-hero-cards pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-[36%] px-4 sm:px-8">
      <div className="hero-cards-stage pointer-events-auto relative mx-auto max-w-[1040px] rounded-[40px] px-2 pt-6 pb-2 sm:px-4">
        <div className="hidden items-end justify-center gap-5 xl:gap-7 lg:flex">
          <div className="flex w-[176px] shrink-0 flex-col gap-4 pb-[4.5rem] xl:w-[188px] xl:pb-20">
            <StatCard
              label={heroCard.productsCard.label}
              sub={heroCard.productsCard.sub}
              delay={0.64}
            />
            <StatCard
              label={heroCard.suitesCard.label}
              tags={heroCard.suitesCard.tags}
              delay={0.7}
              className="hero-card-float-delay"
            />
          </div>

          <div className="w-[min(100%,400px)] shrink-0 xl:w-[420px]">
            <CenterCard />
          </div>

          <div className="flex w-[200px] shrink-0 flex-col gap-4 pb-14 xl:w-[212px]">
            <GlassDeployCard />
            <StatCard
              label={heroCard.governanceCard.label}
              sub={heroCard.governanceCard.sub}
              delay={0.78}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          <CenterCard />
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label={heroCard.productsCard.label}
              sub={heroCard.productsCard.sub}
              delay={0.68}
            />
            <StatCard
              label={heroCard.suitesCard.label}
              tags={heroCard.suitesCard.tags}
              delay={0.72}
            />
          </div>
          <GlassDeployCard delay={0.76} />
          <StatCard
            label={heroCard.governanceCard.label}
            sub={heroCard.governanceCard.sub}
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
}
