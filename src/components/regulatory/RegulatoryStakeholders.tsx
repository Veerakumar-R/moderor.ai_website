"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { regulatoryStakeholders } from "@/content/regulatoryCompliance";
import ShapeGrid from "../ShapeGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { RegulatoryIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/infrastructure.css";
import "./regulatory.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function RegulatoryStakeholders() {
  const reduceMotion = useReducedMotion();
  const [gridReady, setGridReady] = useState(false);
  const { label, titleLead, titleHighlight, description, cards } = regulatoryStakeholders;

  useEffect(() => {
    if (reduceMotion) return;

    const frame = requestAnimationFrame(() => {
      setGridReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <section
      className="infra-section rc-stakeholders-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
      aria-labelledby="rc-stakeholders-heading"
    >
      <div className="infra-section-inner mx-auto w-full max-w-[1400px]">
        <div className="infra-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div
            className="infra-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            {!reduceMotion && gridReady && (
              <div className="infra-shape-grid rc-stakeholders-shape-grid">
                <ShapeGrid
                  speed={0.12}
                  squareSize={24}
                  direction="diagonal"
                  borderColor="rgba(255, 230, 200, 0.022)"
                  hoverFillColor="rgba(255, 122, 0, 0.06)"
                  shape="square"
                  hoverTrailAmount={0}
                />
              </div>
            )}
            <div className="infra-section-vignette" />
          </div>

          <div className="infra-box-content rc-stakeholders-content relative z-[1]">
            <header className="infra-header rc-sh-header">
              <ScrollReveal duration={0.85} className="min-w-0">
                <div className="infra-label">
                  <span className="infra-label-dot" />
                  {label}
                </div>
                <h2 className="infra-title" id="rc-stakeholders-heading">
                  {titleLead}
                  <span className="text-accent-gradient">{titleHighlight}</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
                <p className="rc-sh-description">{description}</p>
              </ScrollReveal>
            </header>

            <div className="rc-sh-cards-grid">
              {cards.map((card, i) => (
                <motion.article
                  key={card.tagline}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: EASE }}
                  className="infra-card aw-sh-infra-card group"
                >
                  <div className="grc-product-icon aw-sh-grc-icon" aria-hidden>
                    <span className="grc-product-icon-glow" aria-hidden />
                    <span className="grc-product-icon-svg">
                      <RegulatoryIcon name={card.icon} size={22} strokeWidth={1.65} />
                    </span>
                  </div>
                  <p className="infra-card-label aw-sh-tagline">{card.tagline}</p>
                  <h3 className="infra-card-title aw-sh-card-title">{card.title}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
