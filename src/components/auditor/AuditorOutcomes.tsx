"use client";

import { motion } from "framer-motion";
import { auditorOutcomes } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { AuditorIcon } from "./icons";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorOutcomes() {
  return (
    <section className="aw-section section-alt">
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorOutcomes.eyebrow}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="aw-h2">{auditorOutcomes.title}</h2>
        </ScrollReveal>

        <div className="aw-card-grid">
          {auditorOutcomes.cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
              className="aw-outcome-card"
            >
              <span className="aw-icon-chip">
                <AuditorIcon name={card.icon} size={20} />
              </span>
              <h3 className="aw-card-name">{card.name}</h3>
              <p className="aw-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
