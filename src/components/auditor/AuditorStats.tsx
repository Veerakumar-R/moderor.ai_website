"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { auditorStats } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

function StatCell({
  value,
  suffix,
  label,
  delay,
}: {
  value: string;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isNumber = !isNaN(numeric);
  const [display, setDisplay] = useState(isNumber ? "0" : value);

  useEffect(() => {
    if (!inView || !isNumber) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(numeric * eased).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, isNumber, numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: EASE }}
      className="aw-stat-cell"
    >
      <div className={`aw-stat-num ${isNumber ? "" : "aw-stat-num--word"}`}>
        {display}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="aw-stat-label">{label}</div>
    </motion.div>
  );
}

export function AuditorStats() {
  return (
    <section className="aw-section section-alt">
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorStats.eyebrow}</SectionLabel>
        </ScrollReveal>

        <div className="aw-stats-grid">
          {auditorStats.metrics.map((m, i) => (
            <StatCell
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              delay={i * 0.07}
            />
          ))}
        </div>

        <p className="aw-stats-note">{auditorStats.note}</p>
      </div>
    </section>
  );
}
