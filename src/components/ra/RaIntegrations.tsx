"use client";

import { useReducedMotion } from "framer-motion";
import { raIntegrations } from "@/content/riskAssessment";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { RaIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";
import "./ra.css";

function IntegrationRow({
  name,
  icon,
  desc,
}: {
  name: string;
  icon: string;
  desc: string;
}) {
  return (
    <article className="platform-impact-row ra-integration-row">
      <span className="platform-impact-icon ra-integration-icon" aria-hidden>
        <RaIcon name={icon} size={20} strokeWidth={1.7} />
      </span>
      <div className="ra-integration-copy">
        <h3 className="platform-impact-label ra-integration-label">{name}</h3>
        <p className="ra-integration-desc">{desc}</p>
      </div>
    </article>
  );
}

export function RaIntegrations() {
  const reduceMotion = useReducedMotion();
  const { label, title, titleHighlight, description, items } = raIntegrations;

  return (
    <section
      id="ra-integrations"
      className="grc-outcomes-section ra-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="ra-integrations-heading"
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
              <header className="ra-integrations-header">
                <div className="ra-integrations-header-copy">
                  <div className="grc-outcomes-eyebrow">
                    <span className="grc-outcomes-eyebrow-dot" />
                    {label}
                  </div>
                  <h2 className="grc-outcomes-title ra-integrations-title" id="ra-integrations-heading">
                    <span className="ra-integrations-title-line">{title}</span>
                    <span className="ra-integrations-title-line grc-outcomes-title-accent">
                      {titleHighlight}
                    </span>
                  </h2>
                </div>
                <p className="ra-integrations-desc">{description}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="platform-impact-grid ra-integrations-grid">
                {items.map((item) => (
                  <IntegrationRow
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    desc={item.desc}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
