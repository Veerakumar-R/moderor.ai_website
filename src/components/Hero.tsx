"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { heroContent, siteConfig } from "@/content/site";
import { PillButton } from "./ui/PillButton";
import { HeroCenterPattern } from "./HeroCenterPattern";
import { HeroPlatformCard } from "./HeroPlatformCard";
import { HeroCurveGlow } from "./HeroCurveGlow";
import BlurText from "./BlurText";

const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

export function Hero() {
  return (
    <section className="bg-white px-5 pt-5 pb-40 sm:px-[50px] sm:pt-6 sm:pb-44 lg:pb-48">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-[660px] w-full overflow-visible rounded-[28px] bg-[#0c0600] sm:min-h-[720px] lg:min-h-[780px] lg:rounded-[36px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <div className="hero-warm-base" aria-hidden />

          <div className="absolute inset-0 z-[1]">
            <LightRays
              raysOrigin="top-center"
              raysColor="#ff7a00"
              raysSpeed={1}
              lightSpread={0.55}
              rayLength={3}
              followMouse
              mouseInfluence={0.1}
              noiseAmount={0.08}
              distortion={0}
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>

          <div className="hero-orange-mesh" aria-hidden />
          <div className="hero-orange-noise" aria-hidden />
          <div className="hero-grain" aria-hidden />
          <div className="hero-grain-fine" aria-hidden />

          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#ff7a00]/10 via-transparent to-black/35" />

          <HeroCenterPattern />
        </div>

        <div className="relative z-10 flex min-h-[660px] flex-col items-center px-6 pt-14 pb-56 text-center sm:min-h-[720px] sm:pt-16 sm:pb-64 lg:min-h-[780px] lg:pt-20 lg:pb-72">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="hero-eyebrow-tag mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-white/95 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
            {heroContent.eyebrow}
          </motion.div>

          <h1 className="flex w-full flex-col items-center tracking-tight text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="whitespace-nowrap text-[clamp(1.35rem,4.6vw,3.85rem)] leading-[1.08] font-light"
            >
              {heroContent.title}
            </motion.span>
            <BlurText
              text={heroContent.titleHighlight}
              delay={140}
              animateBy="words"
              direction="top"
              threshold={0.2}
              rootMargin="-40px"
              className="mt-0.5 whitespace-nowrap text-[clamp(1.35rem,4.6vw,3.85rem)] leading-[1.08] font-bold"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-[17px]"
          >
            {heroContent.bannerSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="pointer-events-auto mt-8 flex flex-wrap items-stretch justify-center gap-3"
          >
            <PillButton href="#outcomes" variant="orange" showArrow>
              Explore Outcomes
            </PillButton>
            <PillButton href="#platform" variant="white" showArrow>
              {siteConfig.cta.ghost}
            </PillButton>
          </motion.div>
        </div>

        <HeroCurveGlow />

        <HeroPlatformCard />
      </motion.div>
    </section>
  );
}

