"use client";

import { useReducedMotion } from "framer-motion";
import { ormIntegrations } from "@/content/operationalRiskManagement";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { OrmIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";
import "./orm.css";

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
    <article className="platform-impact-row orm-integration-row">
      <span className="platform-impact-icon orm-integration-icon" aria-hidden>
        <OrmIcon name={icon} size={20} strokeWidth={1.7} />
      </span>
      <div className="orm-integration-copy">
        <h3 className="platform-impact-label orm-integration-label">{name}</h3>
        <p className="orm-integration-desc">{desc}</p>
      </div>
    </article>
  );
}

export function OrmIntegrations() {
  const reduceMotion = useReducedMotion();
  const { label, title, titleHighlight, description, items } = ormIntegrations;

  return (
    <section
      id="orm-integrations"
      className="grc-outcomes-section orm-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="orm-integrations-heading"
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
              <header className="orm-integrations-header">
                <div className="orm-integrations-header-copy">
                  <div className="grc-outcomes-eyebrow">
                    <span className="grc-outcomes-eyebrow-dot" />
                    {label}
                  </div>
                  <h2 className="grc-outcomes-title orm-integrations-title" id="orm-integrations-heading">
                    <span className="orm-integrations-title-line">{title}</span>
                    <span className="orm-integrations-title-line grc-outcomes-title-accent">
                      {titleHighlight}
                    </span>
                  </h2>
                </div>
                <p className="orm-integrations-desc">{description}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="platform-impact-grid orm-integrations-grid">
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
