"use client";

import { useReducedMotion } from "framer-motion";
import { satIntegrations } from "@/content/smartAlertTriage";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SatIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";
import "./sat.css";

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
    <article className="platform-impact-row sat-integration-row">
      <span className="platform-impact-icon sat-integration-icon" aria-hidden>
        <SatIcon name={icon} size={20} strokeWidth={1.7} />
      </span>
      <div className="sat-integration-copy">
        <h3 className="platform-impact-label sat-integration-label">{name}</h3>
        <p className="sat-integration-desc">{desc}</p>
      </div>
    </article>
  );
}

export function SatIntegrations() {
  const reduceMotion = useReducedMotion();
  const { label, title, titleHighlight, description, items } = satIntegrations;

  return (
    <section
      id="sat-integrations"
      className="grc-outcomes-section sat-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="sat-integrations-heading"
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
              <header className="sat-integrations-header">
                <div className="sat-integrations-header-copy">
                  <div className="grc-outcomes-eyebrow">
                    <span className="grc-outcomes-eyebrow-dot" />
                    {label}
                  </div>
                  <h2 className="grc-outcomes-title sat-integrations-title" id="sat-integrations-heading">
                    <span className="sat-integrations-title-line">{title}</span>
                    <span className="sat-integrations-title-line grc-outcomes-title-accent">
                      {titleHighlight}
                    </span>
                  </h2>
                </div>
                <p className="sat-integrations-desc">{description}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="platform-impact-grid sat-integrations-grid">
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
