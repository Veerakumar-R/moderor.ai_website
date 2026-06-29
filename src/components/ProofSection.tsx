"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { proofMetrics } from "@/content/site";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";

function AnimatedMetric({
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
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasDecimal = value.includes(".");
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView || isNaN(numericPart)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericPart * eased;
      setDisplay(hasDecimal ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, numericPart, hasDecimal, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ backgroundColor: "#fff4eb" }}
      className="bg-white p-8 transition-colors lg:p-10"
    >
      <p className="text-[clamp(2rem,4vw,3rem)] leading-none font-semibold text-charcoal">
        {display}
        {suffix && <span className="text-ember">{suffix}</span>}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-grey-light">{label}</p>
    </motion.div>
  );
}

function Headline() {
  return (
    <h2 className="text-[clamp(1.65rem,2.8vw,2.5rem)] leading-[1.18] font-semibold tracking-tight text-charcoal">
      <span className="block sm:whitespace-nowrap">Running in production.</span>
      <span className="block sm:whitespace-nowrap">
        <span className="text-ember">Measured in real numbers.</span>
      </span>
    </h2>
  );
}

export function ProofSection() {
  return (
    <section className="bg-white px-5 pt-20 pb-10 sm:px-[50px] sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal duration={0.85}>
          <SectionLabel>Proof. Not Promises.</SectionLabel>
        </ScrollReveal>

        <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-20">
          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0 lg:pt-1">
            <Headline />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.18} className="min-w-0 lg:pt-1">
            <p className="text-base leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
              These aren&apos;t benchmark figures. They&apos;re live production numbers from Moderor
              deployments today.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} duration={0.85} className="mt-10 lg:mt-12">
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {proofMetrics.map((metric, i) => (
              <AnimatedMetric
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                delay={i * 0.06}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
