"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hrHero } from "@/content/hrCompliance";
import { PillButton } from "../ui/PillButton";
import { HrHeroBento } from "./HrHeroBento";
import "./hr.css";

const LineWaves = dynamic(() => import("@/components/LineWaves"), { ssr: false });
const SideRays = dynamic(() => import("@/components/SideRays"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

export function HrHero() {
  return (
    <section className="aw-hero" aria-labelledby="hr-hero-title">
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
                {hrHero.badge}
              </span>

              <h1 id="hr-hero-title" className="aw-hero-title">
                <span className="aw-hero-title-line">{hrHero.titleLine1}</span>
                <span className="aw-hero-title-line">{hrHero.titleLine2}</span>
              </h1>

              <p className="aw-hero-desc">{hrHero.description}</p>

              <div className="aw-hero-cta-row">
                <PillButton href="#hr-capabilities" variant="orange" showArrow>
                  {hrHero.primaryCta}
                </PillButton>
                <PillButton
                  href="#hr-capabilities"
                  variant="white"
                  className="border border-[#e8e8e8] shadow-none hover:bg-white"
                >
                  {hrHero.secondaryCta}
                </PillButton>
              </div>
            </div>

            <HrHeroBento />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
