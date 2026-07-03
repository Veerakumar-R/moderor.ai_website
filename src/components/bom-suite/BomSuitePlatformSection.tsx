"use client";

import { useReducedMotion } from "framer-motion";
import { Cpu } from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "./bom-suite.css";

const { platform } = bomSuitePage;

export function BomSuitePlatformSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="platform"
      className="bom-platform-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="bom-platform-heading"
    >
      <div className="bom-section-inner">
        <div className="bom-platform-card relative w-full overflow-hidden rounded-[28px] lg:rounded-[36px]">
          <div
            className="bom-platform-card-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            <div className="bom-outcomes-vignette" />
            {!reduceMotion && (
              <div className="bom-outcomes-dots">
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

          <div className="bom-platform-card-content relative z-[1]">
            <div className="bom-platform-layout">
              <ScrollReveal duration={0.85} className="min-w-0">
                <SectionLabel className="bom-platform-label">{platform.label}</SectionLabel>
                <h2 className="bom-platform-title" id="bom-platform-heading">
                  {platform.title}{" "}
                  <span className="text-accent-gradient">{platform.titleHighlight}</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal duration={0.85} delay={0.12} className="min-w-0">
                <div className="bom-platform-copy">
                  {platform.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="bom-platform-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal duration={0.85} delay={0.2} className="bom-platform-visual-col">
                <div className="bom-platform-visual" aria-hidden>
                  <span className="bom-platform-visual-glow" />
                  <span className="bom-platform-visual-ring bom-platform-visual-ring--outer" />
                  <span className="bom-platform-visual-ring bom-platform-visual-ring--inner" />
                  <div className="bom-platform-visual-core">
                    <Cpu size={32} strokeWidth={1.5} />
                    <span>Control Plane</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
