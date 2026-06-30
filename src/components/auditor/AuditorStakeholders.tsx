"use client";

import { motion } from "framer-motion";
import { auditorStakeholders } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorStakeholders() {
  return (
    <section className="aw-section section-alt">
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorStakeholders.eyebrow}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="aw-h2">{auditorStakeholders.title}</h2>
        </ScrollReveal>

        <div className="aw-sh-grid">
          {auditorStakeholders.cards.map((card, i) => (
            <motion.div
              key={card.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6, ease: EASE }}
              className="aw-sh-card"
            >
              <span className="aw-sh-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="aw-sh-role">{card.role}</div>
              <p className="aw-sh-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
