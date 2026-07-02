"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { PillButton } from "@/components/ui/PillButton";
import { siteConfig } from "@/content/site";
import "@/components/auditor/auditor.css";

const SideRays = dynamic(() => import("@/components/SideRays"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

export type ProductHeroProps = {
  /** Small uppercase tag, e.g. "GRC Suite · Product" */
  badge: string;
  /** Hero headline */
  title: string;
  /** Supporting paragraph */
  description: string;
  /** Product-specific animated visual, rendered in the right-hand slot */
  visual: ReactNode;
};

/**
 * Shared product landing banner, modeled on the Auditor Workbench hero
 * (light warm frame + SideRays atmosphere + copy/visual split). Each product
 * passes its own distinct `visual` while the frame and colour scheme stay
 * consistent.
 */
export function ProductHero({ badge, title, description, visual }: ProductHeroProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <section className="aw-hero" aria-labelledby="product-hero-title">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="aw-hero-box"
          >
            <div className="aw-hero-atmosphere" aria-hidden>
              <div className="aw-hero-atmosphere-rays">
                <SideRays
                  speed={2.5}
                  rayColor1="#ff7a00"
                  rayColor2="#ffc98a"
                  intensity={2}
                  spread={2}
                  origin="top-right"
                  tilt={0}
                  saturation={1.5}
                  blend={0.75}
                  falloff={1.6}
                  opacity={0.92}
                />
              </div>
              <div className="aw-hero-atmosphere-mesh aw-hero-atmosphere-mesh--fallback" />
            </div>

            <div className="aw-hero-body">
              <div className="aw-hero-banner-grid">
                <div className="aw-hero-copy">
                  <span className="aw-hero-badge">
                    <span className="aw-hero-badge-dot" aria-hidden />
                    {badge}
                  </span>

                  <h1 id="product-hero-title" className="aw-hero-title">
                    {title}
                  </h1>

                  <p className="aw-hero-desc">{description}</p>

                  <div className="aw-hero-cta-row">
                    <PillButton href="#" variant="orange" showArrow>
                      {siteConfig.cta.primary}
                    </PillButton>
                    <PillButton
                      href="/"
                      variant="white"
                      className="border border-[#e8e8e8] shadow-none hover:bg-white"
                    >
                      Back to Home
                    </PillButton>
                  </div>
                </div>

                <div className="aw-hero-bento">{visual}</div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
