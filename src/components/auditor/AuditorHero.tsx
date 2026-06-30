"use client";

import { motion } from "framer-motion";
import { auditorHero } from "@/content/auditorWorkbench";
import { PillButton } from "../ui/PillButton";
import { AuditorHeroPreviewCard } from "./AuditorHeroPreviewCard";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorHero() {
  return (
    <section className="aw-hero" aria-labelledby="aw-hero-title">
      {/* Banner — full width like homepage hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="aw-hero-box"
      >
        <div className="aw-hero-atmosphere" aria-hidden>
          <div className="aw-hero-atmosphere-gradient" />
          <div className="aw-hero-atmosphere-slats" />
          <div className="aw-hero-atmosphere-slats aw-hero-atmosphere-slats--soft" />
        </div>

        <div className="aw-hero-banner-grid">
          <div className="aw-hero-copy">
            <span className="aw-hero-badge">
              <span className="aw-hero-badge-dot" aria-hidden />
              {auditorHero.badge}
            </span>

            <h1 id="aw-hero-title" className="aw-hero-title">
              <span className="aw-hero-title-line">{auditorHero.titleLine1}</span>
              <span className="aw-hero-title-line">{auditorHero.titleLine2}</span>
            </h1>

            <p className="aw-hero-desc">{auditorHero.description}</p>

            <div className="aw-hero-cta-row">
              <PillButton href="#aw-capabilities" variant="orange" showArrow>
                {auditorHero.primaryCta}
              </PillButton>
              <PillButton
                href="#aw-capabilities"
                variant="white"
                className="border border-[#e8e8e8] shadow-none hover:bg-white"
              >
                {auditorHero.secondaryCta}
              </PillButton>
            </div>
          </div>

          <AuditorHeroPreviewCard />
        </div>
      </motion.div>
    </section>
  );
}
