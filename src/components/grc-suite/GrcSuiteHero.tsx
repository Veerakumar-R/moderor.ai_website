"use client";

import { useEffect, useState } from "react";
import LightRays from "@/components/LightRays";
import { grcSuitePage, siteConfig } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { HeroCenterPattern } from "@/components/HeroCenterPattern";
import { GrcSuiteHeroVisual } from "./GrcSuiteHeroVisual";
import "./grc-suite.css";

const { hero } = grcSuitePage;

export function GrcSuiteHero() {
  const [showRays, setShowRays] = useState(false);

  useEffect(() => {
    setShowRays(true);
  }, []);

  return (
    <section className="bg-white px-5 pt-5 pb-0 sm:px-[50px] sm:pt-6">
      <div className="grc-hero-banner relative min-h-[520px] w-full overflow-visible rounded-[28px] bg-[#0c0600] sm:min-h-[560px] lg:min-h-[640px] lg:rounded-[36px]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <div className="grc-hero-bg-layers">
            <div className="hero-warm-base" aria-hidden />

            {showRays ? (
              <div className="absolute inset-0 z-[1] opacity-80">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#ff7a00"
                  raysSpeed={1}
                  lightSpread={0.5}
                  rayLength={3}
                  followMouse
                  mouseInfluence={0.1}
                  noiseAmount={0}
                  distortion={0}
                  pulsating={false}
                  fadeDistance={1}
                  saturation={1}
                />
              </div>
            ) : null}

            <div className="hero-orange-mesh" aria-hidden />
            <div className="hero-orange-noise" aria-hidden />
            <div className="hero-grain" aria-hidden />
            <div className="absolute inset-0 z-[2] bg-gradient-to-br from-[#ff7a00]/6 via-transparent to-black/28" />
          </div>

          <HeroCenterPattern showLeftSparkle={false} rightSparkleClassName="right-[7%] top-[10%]" />
        </div>

        <div className="grc-hero-content relative z-10 flex min-h-[520px] flex-col px-6 py-14 sm:min-h-[560px] sm:px-10 lg:min-h-[640px] lg:px-14">
          <div className="grc-section-inner w-full">
            <div className="grc-hero-layout">
              <div className="grc-hero-copy">
                <div className="grc-hero-eyebrow hero-eyebrow-tag mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-white/95 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
                  {hero.badge}
                </div>

                <h1 className="flex flex-col pb-5 tracking-tight text-white">
                  <span className="whitespace-nowrap pb-2 text-[60px] leading-[1.08] font-normal">
                    {hero.title}
                  </span>
                  <span className="mt-0.5 whitespace-nowrap text-[60px] leading-[1.08] font-bold">
                    {hero.titleHighlight}
                  </span>
                </h1>

                <p className="grc-hero-description mt-5 max-w-2xl text-white">
                  {hero.tagline}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-11">
                  <PillButton href="#" variant="orange" showArrow>
                    {siteConfig.cta.primary}
                  </PillButton>
                  <PillButton href={hero.productsAnchor} variant="white" showArrow>
                    {hero.secondaryCta}
                  </PillButton>
                </div>
              </div>

              <GrcSuiteHeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
