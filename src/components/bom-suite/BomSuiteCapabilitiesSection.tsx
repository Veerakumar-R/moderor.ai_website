"use client";

import {
  Bot,
  Eye,
  GitBranch,
  Link2,
  Monitor,
  ShieldCheck,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/pilot.css";
import "./bom-suite.css";

const { capabilities } = bomSuitePage;

const CAPABILITY_ICONS: LucideIcon[] = [
  Bot,
  GitBranch,
  Monitor,
  UserCheck,
  Sparkles,
  Link2,
  Eye,
  ShieldCheck,
];

export function BomSuiteCapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="pilot-section bom-capabilities-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="bom-capabilities-heading"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="bom-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">{capabilities.label}</SectionLabel>
              <h2 className="pilot-headline" id="bom-capabilities-heading">
                {capabilities.title}{" "}
                <span className="pilot-headline-accent">{capabilities.titleHighlight}</span>
              </h2>
              <p className="pilot-desc">{capabilities.description}</p>
            </header>
          </div>
        </ScrollReveal>

        <div className="bom-capabilities-grid">
          {capabilities.items.map((item, index) => {
            const Icon = CAPABILITY_ICONS[index] ?? ShieldCheck;

            return (
              <ScrollReveal key={item.name} duration={0.85} delay={0.1 + index * 0.06}>
                <article className="bom-capability-card">
                  <div className="bom-product-icon bom-capability-icon" aria-hidden>
                    <span className="bom-product-icon-glow" aria-hidden />
                    <Icon size={22} strokeWidth={1.75} className="bom-product-icon-svg" />
                  </div>
                  <h3 className="bom-capability-title">{item.name}</h3>
                  <p className="bom-capability-desc">{item.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
