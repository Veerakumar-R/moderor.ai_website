"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { humanFlowSteps } from "@/content/site";
import { ScrollReveal } from "./ui/ScrollReveal";
import DotGrid from "./DotGrid";
import "./human.css";

const Check = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2.4 6.2 5 8.6 9.6 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type LineMetrics = {
  top: number;
  height: number;
  fill: number;
};

function Wizard({ reduceMotion }: { reduceMotion: boolean }) {
  const n = humanFlowSteps.length;
  const [active, setActive] = useState(reduceMotion ? n - 1 : 0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [lineMetrics, setLineMetrics] = useState<LineMetrics>({ top: 16, height: 0, fill: 0 });

  const updateLineMetrics = useCallback(() => {
    const container = stepsRef.current;
    const nodes = nodeRefs.current.filter((node): node is HTMLSpanElement => node !== null);
    if (!container || nodes.length < 2) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = nodes[0].getBoundingClientRect();
    const lastRect = nodes[nodes.length - 1].getBoundingClientRect();
    const startY = firstRect.top - containerRect.top + firstRect.height / 2;
    const endY = lastRect.top - containerRect.top + lastRect.height / 2;
    const lineHeight = Math.max(0, endY - startY);

    const activeIndex = Math.min(active, nodes.length - 1);
    const activeRect = nodes[activeIndex].getBoundingClientRect();
    const activeY = activeRect.top - containerRect.top + activeRect.height / 2;
    const fillHeight = Math.max(0, Math.min(activeY - startY, lineHeight));

    setLineMetrics({ top: startY, height: lineHeight, fill: fillHeight });
  }, [active]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => setActive((a) => (a + 1) % n), 2300);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion, n]);

  useEffect(() => {
    const frame = requestAnimationFrame(updateLineMetrics);

    const container = stepsRef.current;
    if (!container) {
      return () => cancelAnimationFrame(frame);
    }

    const observer = new ResizeObserver(updateLineMetrics);
    observer.observe(container);
    window.addEventListener("resize", updateLineMetrics);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updateLineMetrics);
    };
  }, [updateLineMetrics]);

  return (
    <div className="human-wizard">
      <div className="human-wizard-head">
        <span className="human-wizard-head-title">Governance flow</span>
        <span className="human-wizard-prog">
          <span className="human-wizard-prog-dot" aria-hidden />
          Step {active + 1} / {n}
        </span>
      </div>

      <div className="human-wizard-steps" ref={stepsRef}>
        <div className="human-wizard-track" aria-hidden>
          <span
            className="human-wizard-line"
            style={{ top: lineMetrics.top, height: lineMetrics.height }}
          />
          <span
            className="human-wizard-line-fill"
            style={{ top: lineMetrics.top, height: lineMetrics.fill }}
          />
        </div>

        {humanFlowSteps.map((step, i) => {
          const done = reduceMotion || i < active;
          const isActive = !reduceMotion && i === active;
          const cls = done ? "is-done" : isActive ? "is-active" : "is-pending";
          return (
            <div key={step.num} className={`human-step ${cls} ${step.highlight ? "is-key" : ""}`}>
              <span
                className="human-step-node"
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                aria-hidden
              >
                {done ? <Check /> : <span>{step.num}</span>}
              </span>
              <div className="human-step-card">
                <div className="human-step-row">
                  <span className="human-step-label">{step.label}</span>
                  {step.highlight && <span className="human-step-badge">Approval</span>}
                </div>
                <span className="human-step-sub">{step.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HumanControlSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="human-section relative border-b border-border px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="human-box relative w-full rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div className="human-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            <div className="human-vignette" />
            {!reduceMotion && (
              <div className="human-dots">
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

          <div className="human-box-content relative z-[1]">
            <ScrollReveal duration={0.85} className="human-left min-w-0">
              <div className="human-eyebrow">
                <span className="human-eyebrow-dot" />
                Human in Command
              </div>
              <h2 className="human-title">
                AI Executes. <span className="text-accent-gradient">Humans Govern.</span>
              </h2>
              <p className="human-desc">
                Agents monitor continuously. Exceptions are escalated. Humans approve critical actions.
                Everything is logged. Nothing auto-remediates without a decision.
              </p>
              <p className="human-tagline">
                Detection is automatic. <strong>Judgment is not.</strong> You stay in control.
              </p>
            </ScrollReveal>

            <ScrollReveal duration={0.85} delay={0.15} className="human-right min-w-0">
              <Wizard reduceMotion={!!reduceMotion} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
