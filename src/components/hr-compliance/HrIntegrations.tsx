"use client";

import { useReducedMotion } from "framer-motion";
import { hrIntegrations } from "@/content/hrCompliance";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "../ui/ScrollReveal";
import { HrIcon } from "./icons";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";
import "./hr.css";

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
    <article className="platform-impact-row hr-integration-row">
      <span className="platform-impact-icon hr-integration-icon" aria-hidden>
        <HrIcon name={icon} size={20} strokeWidth={1.7} />
      </span>
      <div className="hr-integration-copy">
        <h3 className="platform-impact-label hr-integration-label">{name}</h3>
        <p className="hr-integration-desc">{desc}</p>
      </div>
    </article>
  );
}

export function HrIntegrations() {
  const reduceMotion = useReducedMotion();
  const { label, title, titleHighlight, description, items } = hrIntegrations;

  return (
    <section
      id="hr-integrations"
      className="grc-outcomes-section hr-integrations-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="hr-integrations-heading"
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
              <header className="hr-integrations-header">
                <div className="hr-integrations-header-copy">
                  <div className="grc-outcomes-eyebrow">
                    <span className="grc-outcomes-eyebrow-dot" />
                    {label}
                  </div>
                  <h2 className="grc-outcomes-title hr-integrations-title" id="hr-integrations-heading">
                    <span className="hr-integrations-title-line">{title}</span>
                    <span className="hr-integrations-title-line grc-outcomes-title-accent">
                      {titleHighlight}
                    </span>
                  </h2>
                </div>
                <p className="hr-integrations-desc">{description}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="platform-impact-grid hr-integrations-grid">
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
