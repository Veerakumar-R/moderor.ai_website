"use client";

import { useEffect, useState } from "react";
import LightRays from "@/components/LightRays";
import { bomSuitePage } from "@/content/bomSuite";
import { siteConfig } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { HeroCenterPattern } from "@/components/HeroCenterPattern";
import { BomSuiteHeroVisual } from "./BomSuiteHeroVisual";
import "@/components/grc-suite/grc-suite.css";
import "./bom-suite.css";

const { hero } = bomSuitePage;

export function BomSuiteHero() {
  const [showRays, setShowRays] = useState(false);

  useEffect(() => {
    setShowRays(true);
  }, []);

  return (
    <section className="bg-white px-5 pt-5 pb-0 sm:px-[50px] sm:pt-6">
      <div className="bom-hero-banner relative min-h-[520px] w-full overflow-hidden rounded-[28px] bg-[#0c0600] sm:min-h-[560px] lg:min-h-[640px] lg:rounded-[36px]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <div className="bom-hero-bg-layers">
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

        <div className="bom-hero-content relative z-10 flex min-h-[520px] flex-col px-6 py-14 sm:min-h-[560px] sm:px-10 lg:min-h-[640px] lg:px-14">
          <div className="bom-section-inner w-full">
            <div className="bom-hero-layout">
              <div className="bom-hero-copy">
                <div className="bom-hero-eyebrow hero-eyebrow-tag mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-white/95 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
                  {hero.badge}
                </div>

                <h1 className="flex flex-col pb-5 tracking-tight text-white">
                  <span className="whitespace-normal pb-2 text-[34px] leading-[1.08] font-normal sm:text-[46px] lg:whitespace-nowrap lg:text-[60px]">
                    {hero.title}
                  </span>
                  <span className="mt-0.5 whitespace-normal text-[34px] leading-[1.08] font-bold sm:text-[46px] lg:whitespace-nowrap lg:text-[60px]">
                    {hero.titleHighlight}
                  </span>
                </h1>

                <p className="bom-hero-description mt-5 max-w-2xl text-white">{hero.tagline}</p>

                <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-11">
                  <PillButton href="#" variant="orange" showArrow>
                    {siteConfig.cta.primary}
                  </PillButton>
                  <PillButton href={hero.productsAnchor} variant="white" showArrow>
                    {hero.secondaryCta}
                  </PillButton>
                </div>
              </div>

              <BomSuiteHeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
