"use client";

import {
  Cloud,
  Database,
  FileText,
  KeyRound,
  Layers,
  Plug,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./bom-suite.css";

const { integrations } = bomSuitePage;

const BENTO_SLOTS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

const INTEGRATION_ICONS: LucideIcon[] = [
  Users,
  Layers,
  KeyRound,
  Server,
  Plug,
  Database,
  Cloud,
  FileText,
];

export function BomSuiteIntegrationsSection() {
  return (
    <section
      id="integrations"
      className="bom-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="bom-integrations-heading"
    >
      <div className="bom-integrations-section-bg" aria-hidden>
        <div className="hero-warm-base" />
        <div className="hero-orange-noise" />
        <div className="hero-grain" />
        <div className="hero-grain-fine" />
      </div>

      <div className="bom-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <header className="bom-integrations-header">
            <div className="bom-integrations-header-copy">
              <p className="bom-integrations-eyebrow">{integrations.label}</p>
              <h2 className="bom-integrations-title" id="bom-integrations-heading">
                <span className="bom-integrations-title-line">{integrations.title}</span>
                <span className="bom-integrations-title-line bom-integrations-title-accent">
                  {integrations.titleHighlight}
                </span>
              </h2>
            </div>
            <p className="bom-integrations-desc">{integrations.description}</p>
          </header>
        </ScrollReveal>

        <div className="bom-integrations-bento">
          {integrations.items.map((item, index) => {
            const slot = BENTO_SLOTS[index];
            const Icon = INTEGRATION_ICONS[index] ?? Plug;

            return (
              <ScrollReveal
                key={item.name}
                duration={0.85}
                delay={0.06 + index * 0.05}
                className={`bom-integrations-card-wrap bom-integrations-card-wrap--${slot}`}
              >
                <article className={`bom-integration-bento-card bom-integration-bento-card--${slot}`}>
                  <div className="bom-integration-bento-icon" aria-hidden>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="bom-integration-bento-content">
                    <h3 className="bom-integration-bento-title">{item.name}</h3>
                    <p className="bom-integration-bento-desc">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
