"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { satHero } from "@/content/smartAlertTriage";
import { PillButton } from "../ui/PillButton";
import { SatHeroVisual } from "./SatHeroVisual";
import "./sat.css";

const LineWaves = dynamic(() => import("@/components/LineWaves"), { ssr: false });
const SideRays = dynamic(() => import("@/components/SideRays"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

export function SatHero() {
  return (
    <section className="aw-hero" aria-labelledby="sat-hero-title">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="aw-hero-box"
      >
        <div className="aw-hero-atmosphere" aria-hidden>
          <div className="aw-hero-atmosphere-right-glow" />
          <div className="aw-hero-atmosphere-linewaves">
            <LineWaves
              speed={0}
              innerLineCount={32}
              outerLineCount={36}
              warpIntensity={1}
              rotation={-45}
              edgeFadeWidth={0}
              colorCycleSpeed={0}
              brightness={0.2}
              color1="#ffffff"
              color2="#ffffff"
              color3="#ffffff"
              enableMouseInteraction={false}
              mouseInfluence={0}
            />
          </div>
          <div className="aw-hero-atmosphere-rays">
            <SideRays
              speed={2.2}
              rayColor1="#ff8a2a"
              rayColor2="#ffe0b8"
              intensity={1.35}
              spread={1.85}
              origin="top-right"
              tilt={-4}
              saturation={1.9}
              blend={0.62}
              falloff={1.85}
              opacity={0.68}
            />
          </div>
          <div className="aw-hero-atmosphere-mesh aw-hero-atmosphere-mesh--fallback" />
        </div>

        <div className="aw-hero-body">
          <div className="aw-hero-banner-grid">
            <div className="aw-hero-copy">
              <span className="aw-hero-badge">
                <span className="aw-hero-badge-dot" aria-hidden />
                {satHero.badge}
              </span>

              <h1 id="sat-hero-title" className="aw-hero-title">
                <span className="aw-hero-title-line">{satHero.titleLine1}</span>
                <span className="aw-hero-title-line">{satHero.titleLine2}</span>
              </h1>

              <p className="aw-hero-desc">{satHero.description}</p>

              <div className="aw-hero-cta-row">
                <PillButton href="#sat-capabilities" variant="orange" showArrow>
                  {satHero.primaryCta}
                </PillButton>
                <PillButton
                  href="#sat-capabilities"
                  variant="white"
                  className="border border-[#e8e8e8] shadow-none hover:bg-white"
                >
                  {satHero.secondaryCta}
                </PillButton>
              </div>
            </div>

            <SatHeroVisual />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
