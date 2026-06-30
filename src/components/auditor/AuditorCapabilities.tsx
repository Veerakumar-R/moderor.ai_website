"use client";

import { motion } from "framer-motion";
import { auditorCapabilities } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { AuditorIcon } from "./icons";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorCapabilities() {
  const { feature } = auditorCapabilities;
  return (
    <section id="aw-capabilities" className="aw-section" style={{ scrollMarginTop: "var(--site-header-height)" }}>
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorCapabilities.eyebrow}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="aw-h2">{auditorCapabilities.title}</h2>
        </ScrollReveal>

        <div className="aw-cap-grid">
          {auditorCapabilities.cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.55, ease: EASE }}
              className="aw-cap-card"
            >
              <span className="aw-cap-icon">
                <AuditorIcon name={card.icon} size={17} />
              </span>
              <h3 className="aw-cap-name">{card.name}</h3>
              <p className="aw-cap-desc">{card.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="aw-cap-feature"
          >
            <span className="aw-cap-icon">
              <AuditorIcon name={feature.icon} size={20} />
            </span>
            <div>
              <h3 className="aw-cap-feature-name">{feature.name}</h3>
              <p className="aw-cap-feature-desc">{feature.desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
