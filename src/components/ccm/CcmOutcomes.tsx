"use client";

import { motion } from "framer-motion";
import { ccmOutcomes } from "@/content/continuousComplianceMonitoring";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { CcmIcon } from "./icons";
import "./ccm.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  ccmOutcomes.cards.slice(0, 4),
  ccmOutcomes.cards.slice(4, 8),
  ccmOutcomes.cards.slice(8, 12),
] as const;

export function CcmOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = ccmOutcomes;

  return (
    <section className="aw-section ccm-outcomes-section" aria-labelledby="ccm-outcomes-heading">
      <div className="ccm-outcomes-section-bg" aria-hidden />
      <div className="ccm-outcomes-section-grid" aria-hidden />
      <div className="ccm-outcomes-orb ccm-outcomes-orb--1" aria-hidden />
      <div className="ccm-outcomes-orb ccm-outcomes-orb--2" aria-hidden />
      <div className="ccm-outcomes-section-lines" aria-hidden />

      <div className="aw-inner ccm-outcomes-inner">
        <div className="ccm-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 ccm-outcomes-title" id="ccm-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="ccm-outcomes-header-meta">
              <span className="ccm-outcomes-cap-pill">
                <span className="ccm-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="ccm-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="ccm-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="ccm-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="ccm-outcomes-card group h-full"
                >
                    <span className="ccm-outcomes-card-bloom" aria-hidden />
                    <span className="ccm-outcomes-card-shine" aria-hidden />
                    <span className="ccm-outcomes-card-accent" aria-hidden />

                    <div className="ccm-outcomes-card-inner">
                      <span className="ccm-outcomes-card-icon" aria-hidden>
                        <span className="ccm-outcomes-card-icon-ring" aria-hidden />
                        <span className="ccm-outcomes-card-icon-glow" aria-hidden />
                        <CcmIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="ccm-outcomes-card-title">{card.name}</h3>
                      <p className="ccm-outcomes-card-desc">{card.desc}</p>
                    </div>
                  </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
