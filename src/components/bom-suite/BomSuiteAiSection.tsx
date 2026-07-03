"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import { AuditorSpotlightSilk } from "@/components/auditor/AuditorSpotlightSilk";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./bom-suite.css";

const { principle } = bomSuitePage.ai;

const EASE = [0.22, 1, 0.36, 1] as const;

const GOVERNANCE_CARD_ICONS: LucideIcon[] = [
  ShieldCheck,
  ScanSearch,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
];

export function BomSuiteAiSection() {
  const { feature, cards } = principle;

  return (
    <section
      id="the-principle"
      className="bom-ai-governance-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="bom-principle-heading"
    >
      <div className="bom-ai-governance-bg" aria-hidden />

      <div className="bom-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <header className="bom-ai-governance-header">
            <div className="bom-ai-governance-header-copy">
              <h2 className="bom-ai-governance-title" id="bom-principle-heading">
                <span className="bom-ai-governance-title-line">{principle.titleLead}</span>
                <span className="bom-ai-governance-title-line bom-ai-governance-title-accent">
                  {principle.titleHighlight}
                </span>
              </h2>
            </div>
            <p className="bom-ai-governance-desc">{principle.description}</p>
          </header>
        </ScrollReveal>

        <div className="bom-ai-governance-split">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="bom-ai-gov-spotlight"
            aria-label={feature.name}
          >
            <AuditorSpotlightSilk />
            <div className="bom-ai-gov-spotlight-glow" aria-hidden />

            <div className="bom-ai-gov-spotlight-body">
              <span className="bom-ai-gov-spotlight-icon" aria-hidden>
                <UserCheck size={24} strokeWidth={1.65} />
              </span>
              <h3 className="bom-ai-gov-spotlight-title">{feature.name}</h3>
              <p className="bom-ai-gov-spotlight-desc">{feature.description}</p>
            </div>
          </motion.aside>

          <div className="bom-ai-gov-cards-grid">
            {cards.map((card, index) => {
              const Icon = GOVERNANCE_CARD_ICONS[index] ?? ShieldCheck;

              return (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (index % 3) * 0.05, duration: 0.52, ease: EASE }}
                  className="bom-ai-gov-card"
                >
                  <span className="bom-ai-gov-card-icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.65} />
                  </span>
                  <div className="bom-ai-gov-card-copy">
                    <h4 className="bom-ai-gov-card-title">{card.name}</h4>
                    <p className="bom-ai-gov-card-desc">{card.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
