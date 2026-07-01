"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { auditorHero } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

function KpiMetric({
  value,
  suffix,
  label,
  decimals = 0,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = value * eased;
      setDisplay(decimals > 0 ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, reduce]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : String(display);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: EASE }}
      whileHover={{ backgroundColor: "#fff4eb" }}
      className="aw-hero-kpi"
    >
      <p className="aw-hero-kpi-num">
        {formatted}
        {suffix ? <span>{suffix}</span> : null}
      </p>
      <p className="aw-hero-kpi-label">{label}</p>
    </motion.div>
  );
}

export function AuditorHeroKpiStrip() {
  const { kpiSection, kpis } = auditorHero;

  return (
    <div className="aw-hero-kpi-section" aria-label="Auditor Workbench live metrics">
      <ScrollReveal duration={0.85}>
        <SectionLabel className="aw-hero-kpi-eyebrow">{kpiSection.eyebrow}</SectionLabel>
      </ScrollReveal>

      <div className="aw-hero-kpi-intro">
        <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
          <h2 className="aw-hero-kpi-title">
            <span className="block">{kpiSection.titleLead}</span>
            <span className="block text-ember">{kpiSection.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.16} className="min-w-0">
          <p className="aw-hero-kpi-note">{kpiSection.note}</p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} duration={0.85} className="aw-hero-kpi-strip-wrap">
        <div className="aw-hero-kpi-strip">
          {kpis.map((kpi, i) => (
            <KpiMetric
              key={kpi.label}
              value={kpi.value}
              suffix={kpi.suffix}
              label={kpi.label}
              decimals={kpi.decimals}
              delay={i * 0.06}
            />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
