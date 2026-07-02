"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { auditorStakeholders } from "@/content/auditorWorkbench";
import ShapeGrid from "../ShapeGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { AuditorIcon } from "./icons";
import "@/components/infrastructure.css";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorStakeholders() {
  const reduceMotion = useReducedMotion();
  const [gridReady, setGridReady] = useState(false);
  const { label, titleLead, titleHighlight, cards } = auditorStakeholders;

  useEffect(() => {
    if (reduceMotion) return;

    const frame = requestAnimationFrame(() => {
      setGridReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <section className="infra-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
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
              <div className="infra-shape-grid">
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

          <div className="infra-box-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <header className="infra-header">
                <div className="infra-label">
                  <span className="infra-label-dot" />
                  {label}
                </div>
                <h2 className="infra-title">
                  {titleLead}{" "}
                  <span className="text-accent-gradient">{titleHighlight}</span>
                </h2>
              </header>
            </ScrollReveal>

            <div className="aw-sh-cards-grid">
              {cards.map((card, i) => (
                <motion.article
                  key={card.tagline}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 2) * 0.1, duration: 0.6, ease: EASE }}
                  className="infra-card aw-sh-infra-card"
                >
                  <span className="aw-sh-icon" aria-hidden>
                    <span className="aw-sh-icon-shine" aria-hidden />
                    <span className="aw-sh-icon-glow" aria-hidden />
                    <AuditorIcon name={card.icon} size={18} strokeWidth={1.65} className="aw-sh-icon-svg" />
                  </span>
                  <p className="infra-card-label aw-sh-tagline">{card.tagline}</p>
                  <h3 className="infra-card-title aw-sh-card-title">{card.title}</h3>
                  <p className="infra-card-desc aw-sh-paragraph">{card.paragraph}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
