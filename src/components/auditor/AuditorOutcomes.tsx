"use client";

import { motion } from "framer-motion";
import { auditorOutcomes } from "@/content/auditorWorkbench";
import { MagicCard } from "../ui/magic-card";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { AuditorIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AuditorOutcomes() {
  return (
    <section className="aw-section section-alt aw-outcomes-section grc-products-section">
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorOutcomes.eyebrow}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="aw-h2">
            {auditorOutcomes.titleLead}
            <span className="text-ember">{auditorOutcomes.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <div className="aw-card-grid">
          {auditorOutcomes.cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
              className="h-full"
            >
              <MagicCard
                gradientColor="rgba(255, 122, 0, 0.22)"
                gradientFrom="#ff7a00"
                gradientTo="#ffb347"
                gradientOpacity={0.55}
                gradientSize={240}
                surfaceColor="#0b0b0b"
                borderFallback="rgba(255, 122, 0, 0.14)"
                className="grc-product-card outcome-feature-card group h-full rounded-[20px]"
              >
                <span className="grc-product-card-surface" aria-hidden />
                <span className="grc-product-card-glow" aria-hidden />
                <div className="relative z-[1] flex h-full flex-1 flex-col p-6 lg:p-7">
                  <div className="grc-product-icon" aria-hidden>
                    <span className="grc-product-icon-glow" aria-hidden />
                    <span className="grc-product-icon-svg">
                      <AuditorIcon name={card.icon} size={22} strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold tracking-tight lg:text-xl">{card.name}</h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed">{card.desc}</p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
