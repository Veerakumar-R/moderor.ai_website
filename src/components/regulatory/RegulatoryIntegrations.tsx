"use client";

import { useReducedMotion } from "framer-motion";
import { regulatoryIntegrations } from "@/content/regulatoryCompliance";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RegulatoryIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";
import "./regulatory.css";

function IntegrationRow({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <article className="platform-impact-row rc-integration-row">
      <span className="platform-impact-icon rc-integration-icon" aria-hidden>
        <RegulatoryIcon name={icon} size={20} strokeWidth={1.7} />
      </span>
      <h3 className="platform-impact-label rc-integration-label">{name}</h3>
    </article>
  );
}

export function RegulatoryIntegrations() {
  const reduceMotion = useReducedMotion();
  const { label, title, titleHighlight, description, items } = regulatoryIntegrations;

  return (
    <section
      id="rc-integrations"
      className="grc-outcomes-section rc-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="rc-integrations-heading"
    >
      <div className="grc-section-inner">
        <div className="grc-outcomes-card relative w-full rounded-[28px] lg:rounded-[36px]">
          <div
            className="grc-outcomes-card-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            <div className="grc-outcomes-vignette" />
            {!reduceMotion && (
              <div className="grc-outcomes-dots">
                <DotGrid
                  dotSize={4}
                  gap={16}
                  baseColor="#3a2c20"
                  activeColor="#ff7a00"
                  proximity={110}
                  shockRadius={220}
                  shockStrength={4}
                  resistance={750}
                  returnDuration={1.4}
                />
              </div>
            )}
          </div>

          <div className="grc-outcomes-card-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <header className="rc-integrations-header">
                <div className="rc-integrations-header-copy">
                  <div className="grc-outcomes-eyebrow">
                    <span className="grc-outcomes-eyebrow-dot" />
                    {label}
                  </div>
                  <h2 className="grc-outcomes-title rc-integrations-title" id="rc-integrations-heading">
                    <span className="rc-integrations-title-line">{title}</span>
                    <span className="rc-integrations-title-line grc-outcomes-title-accent">
                      {titleHighlight}
                    </span>
                  </h2>
                </div>
                <p className="rc-integrations-desc">{description}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="platform-impact-grid rc-integrations-grid">
                {items.map((item) => (
                  <IntegrationRow key={item.name} name={item.name} icon={item.icon} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
