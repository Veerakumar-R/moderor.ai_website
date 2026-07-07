"use client";

import { motion } from "framer-motion";
import { ormOutcomes } from "@/content/operationalRiskManagement";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OrmIcon } from "./icons";
import "./orm.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  ormOutcomes.cards.slice(0, 4),
  ormOutcomes.cards.slice(4, 8),
  ormOutcomes.cards.slice(8, 12),
] as const;

export function OrmOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = ormOutcomes;

  return (
    <section className="aw-section orm-outcomes-section" aria-labelledby="orm-outcomes-heading">
      <div className="orm-outcomes-section-bg" aria-hidden />
      <div className="orm-outcomes-section-grid" aria-hidden />
      <div className="orm-outcomes-orb orm-outcomes-orb--1" aria-hidden />
      <div className="orm-outcomes-orb orm-outcomes-orb--2" aria-hidden />
      <div className="orm-outcomes-section-lines" aria-hidden />

      <div className="aw-inner orm-outcomes-inner">
        <div className="orm-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 orm-outcomes-title" id="orm-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="orm-outcomes-header-meta">
              <span className="orm-outcomes-cap-pill">
                <span className="orm-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="orm-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="orm-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="orm-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="orm-outcomes-card group h-full"
                >
                    <span className="orm-outcomes-card-bloom" aria-hidden />
                    <span className="orm-outcomes-card-shine" aria-hidden />
                    <span className="orm-outcomes-card-accent" aria-hidden />

                    <div className="orm-outcomes-card-inner">
                      <span className="orm-outcomes-card-icon" aria-hidden>
                        <span className="orm-outcomes-card-icon-ring" aria-hidden />
                        <span className="orm-outcomes-card-icon-glow" aria-hidden />
                        <OrmIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="orm-outcomes-card-title">{card.name}</h3>
                      <p className="orm-outcomes-card-desc">{card.desc}</p>
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
