"use client";

import { motion } from "framer-motion";
import { auditorCapabilities } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { AuditorIcon } from "./icons";
import { AuditorSpotlightSilk } from "./AuditorSpotlightSilk";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorCapabilities() {
  const { cards, feature } = auditorCapabilities;

  return (
    <section
      id="aw-capabilities"
      className="aw-capabilities-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      style={{ scrollMarginTop: "var(--site-header-height)" }}
    >
      <div className="aw-capabilities-bg" aria-hidden />

      <div className="relative z-[1] aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorCapabilities.eyebrow}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="aw-h2">
            {auditorCapabilities.titleLead}
            <span className="text-ember">{auditorCapabilities.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <div className="aw-cap-split">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="aw-cap-spotlight"
            aria-label={feature.name}
          >
            <AuditorSpotlightSilk />
            <div className="aw-cap-spotlight-glow" aria-hidden />

            <div className="aw-cap-spotlight-body">
              <span className="aw-cap-spotlight-icon">
                <AuditorIcon name={feature.icon} size={24} strokeWidth={1.65} />
              </span>
              <h3 className="aw-cap-spotlight-title">{feature.name}</h3>
              <p className="aw-cap-spotlight-desc">{feature.desc}</p>
            </div>
          </motion.aside>

          <div className="aw-cap-cards-grid">
            {cards.map((card, i) => (
              <motion.article
                key={card.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.05, duration: 0.52, ease: EASE }}
                className="aw-cap-stat-card group"
              >
                <span className="aw-cap-stat-icon" aria-hidden>
                  <span className="aw-cap-stat-icon-shine" aria-hidden />
                  <span className="aw-cap-stat-icon-glow" aria-hidden />
                  <AuditorIcon name={card.icon} size={18} strokeWidth={1.65} className="aw-cap-stat-icon-svg" />
                </span>
                <div className="aw-cap-stat-copy">
                  <h4 className="aw-cap-stat-name">{card.name}</h4>
                  <p className="aw-cap-stat-desc">{card.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
