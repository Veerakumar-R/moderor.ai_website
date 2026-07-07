"use client";

import { motion } from "framer-motion";
import { satOutcomes } from "@/content/smartAlertTriage";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { SatIcon } from "./icons";
import "./sat.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  satOutcomes.cards.slice(0, 4),
  satOutcomes.cards.slice(4, 8),
  satOutcomes.cards.slice(8, 12),
] as const;

export function SatOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = satOutcomes;

  return (
    <section className="aw-section sat-outcomes-section" aria-labelledby="sat-outcomes-heading">
      <div className="sat-outcomes-section-bg" aria-hidden />
      <div className="sat-outcomes-section-grid" aria-hidden />
      <div className="sat-outcomes-orb sat-outcomes-orb--1" aria-hidden />
      <div className="sat-outcomes-orb sat-outcomes-orb--2" aria-hidden />
      <div className="sat-outcomes-section-lines" aria-hidden />

      <div className="aw-inner sat-outcomes-inner">
        <div className="sat-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 sat-outcomes-title" id="sat-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="sat-outcomes-header-meta">
              <span className="sat-outcomes-cap-pill">
                <span className="sat-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="sat-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="sat-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="sat-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="sat-outcomes-card group h-full"
                >
                    <span className="sat-outcomes-card-bloom" aria-hidden />
                    <span className="sat-outcomes-card-shine" aria-hidden />
                    <span className="sat-outcomes-card-accent" aria-hidden />

                    <div className="sat-outcomes-card-inner">
                      <span className="sat-outcomes-card-icon" aria-hidden>
                        <span className="sat-outcomes-card-icon-ring" aria-hidden />
                        <span className="sat-outcomes-card-icon-glow" aria-hidden />
                        <SatIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="sat-outcomes-card-title">{card.name}</h3>
                      <p className="sat-outcomes-card-desc">{card.desc}</p>
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
