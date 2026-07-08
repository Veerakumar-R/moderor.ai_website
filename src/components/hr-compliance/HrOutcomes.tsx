"use client";

import { motion } from "framer-motion";
import { hrOutcomes } from "@/content/hrCompliance";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { HrIcon } from "./icons";
import "./hr.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  hrOutcomes.cards.slice(0, 4),
  hrOutcomes.cards.slice(4, 8),
  hrOutcomes.cards.slice(8, 12),
] as const;

export function HrOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = hrOutcomes;

  return (
    <section className="aw-section hr-outcomes-section" aria-labelledby="hr-outcomes-heading">
      <div className="hr-outcomes-section-bg" aria-hidden />
      <div className="hr-outcomes-section-grid" aria-hidden />
      <div className="hr-outcomes-orb hr-outcomes-orb--1" aria-hidden />
      <div className="hr-outcomes-orb hr-outcomes-orb--2" aria-hidden />
      <div className="hr-outcomes-section-lines" aria-hidden />

      <div className="aw-inner hr-outcomes-inner">
        <div className="hr-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 hr-outcomes-title" id="hr-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="hr-outcomes-header-meta">
              <span className="hr-outcomes-cap-pill">
                <span className="hr-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="hr-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="hr-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="hr-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="hr-outcomes-card group h-full"
                >
                    <span className="hr-outcomes-card-bloom" aria-hidden />
                    <span className="hr-outcomes-card-shine" aria-hidden />
                    <span className="hr-outcomes-card-accent" aria-hidden />

                    <div className="hr-outcomes-card-inner">
                      <span className="hr-outcomes-card-icon" aria-hidden>
                        <span className="hr-outcomes-card-icon-ring" aria-hidden />
                        <span className="hr-outcomes-card-icon-glow" aria-hidden />
                        <HrIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="hr-outcomes-card-title">{card.name}</h3>
                      <p className="hr-outcomes-card-desc">{card.desc}</p>
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
