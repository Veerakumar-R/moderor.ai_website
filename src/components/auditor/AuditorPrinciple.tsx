"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { auditorPrinciple } from "@/content/auditorWorkbench";
import { GovernedSectionSparkles } from "../GovernedHeaderDeco";
import { ScrollReveal } from "../ui/ScrollReveal";
import "@/components/infrastructure.css";
import "../governed.css";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

type PrincipleCardProps = {
  label: string;
  title: ReactNode;
  body: string[];
  visual: ReactNode;
  delay?: number;
  reduceMotion: boolean;
};

function PrincipleCard({ label, title, body, visual, delay = 0, reduceMotion }: PrincipleCardProps) {
  return (
    <motion.article
      className="aw-principle-bento-card"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <div className="aw-principle-card-visual">{visual}</div>
      <div className="aw-principle-card-main">
        <span className="aw-principle-card-label">{label}</span>
        <h3 className="aw-principle-card-title">{title}</h3>
        <div className="aw-principle-card-desc">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function HowItWorksVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const steps = [
    { label: "Evidence", muted: false },
    { label: "Controls", muted: true },
  ];
  const outputs = [
    { label: "Findings", muted: true },
    { label: "Review", muted: false },
  ];

  return (
    <div className="aw-principle-mock aw-principle-mock--how" aria-hidden>
      <div className="aw-principle-mock-ambient" />
      <div className="aw-principle-mock-grid" />

      <div className="aw-principle-flow-shell governed-card-inner aw-principle-mock-inner">
        <span className="governed-inner-glow" aria-hidden />
        <div className="aw-principle-flow-stage">
          <div className="aw-principle-flow-col aw-principle-flow-col--side">
            <span className="aw-principle-mock-group-label">Input</span>
            <div className="aw-principle-flow-chip-stack">
              {steps.map((step) => (
                <span
                  key={step.label}
                  className={`aw-principle-mock-chip ${step.muted ? "aw-principle-mock-chip--muted" : ""}`}
                >
                  {step.label}
                </span>
              ))}
            </div>
          </div>

          <div className="aw-principle-flow-bridge" aria-hidden>
            <span className="aw-principle-flow-bridge-line" />
            <span className="aw-principle-flow-bridge-arrow" />
          </div>

          <motion.div
            className="aw-principle-mock-panel aw-principle-mock-panel--center"
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="aw-principle-mock-hub">
              <div className="aw-principle-mock-hub-core">
                <div className="aw-principle-mock-hub-glow" aria-hidden />
                <div className="aw-principle-mock-orbit" aria-hidden>
                  <svg viewBox="0 0 72 72">
                    <circle className="aw-principle-mock-orbit-track" cx="36" cy="36" r="30" />
                    <circle className="aw-principle-mock-orbit-progress" cx="36" cy="36" r="30" pathLength={1} />
                  </svg>
                </div>
                <span className="aw-principle-mock-bot">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="5" y="7" width="14" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="9.5" cy="12" r="1.1" fill="currentColor" />
                    <circle cx="14.5" cy="12" r="1.1" fill="currentColor" />
                    <path d="M9 5.5h6M12 5.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <span className="aw-principle-mock-status">
                <span className="aw-principle-mock-status-dot" />
                Running
              </span>
            </div>
          </motion.div>

          <div className="aw-principle-flow-bridge" aria-hidden>
            <span className="aw-principle-flow-bridge-line" />
            <span className="aw-principle-flow-bridge-arrow" />
          </div>

          <div className="aw-principle-flow-col aw-principle-flow-col--side">
            <span className="aw-principle-mock-group-label">Output</span>
            <div className="aw-principle-flow-chip-stack">
              {outputs.map((step) => (
                <span
                  key={step.label}
                  className={`aw-principle-mock-chip ${step.muted ? "aw-principle-mock-chip--muted" : ""}`}
                >
                  {step.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TraceabilityVisual() {
  const rows = [
    { label: "Finding drafted", state: "AI recommended", time: "09:14" },
    { label: "Auditor review", state: "Approved", time: "09:22" },
    { label: "Remediation logged", state: "Attributed", time: "09:31" },
  ];

  return (
    <div className="aw-principle-mock aw-principle-mock--trace" aria-hidden>
      <div className="aw-principle-mock-ambient" />
      <div className="aw-principle-mock-grid" />

      <div className="aw-principle-trace-shell governed-card-inner aw-principle-mock-inner">
        <span className="governed-inner-glow" aria-hidden />
        <header className="aw-principle-trace-head">
          <span className="aw-principle-trace-head-copy">
            <span className="aw-principle-trace-head-icon" aria-hidden>
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 2.5h9A1.5 1.5 0 0 1 14 4v7.2a1.5 1.5 0 0 1-1.5 1.5H9.2L8 14.5l-1.2-1.8H3.5A1.5 1.5 0 0 1 2 11.2V4a1.5 1.5 0 0 1 1.5-1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path d="M5 6.2h6M5 8.4h4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="aw-principle-trace-head-title">Audit trail</span>
          </span>
          <span className="aw-principle-trace-badge">Verified</span>
        </header>

        <ul className="aw-principle-trace-list">
          {rows.map((row, index) => (
            <li key={row.label} className="aw-principle-trace-item">
              <div className="aw-principle-trace-rail" aria-hidden>
                <span className="aw-principle-trace-node">{index + 1}</span>
                {index < rows.length - 1 ? <span className="aw-principle-trace-line" /> : null}
              </div>
              <div className="aw-principle-trace-main">
                <span className="aw-principle-trace-label">{row.label}</span>
                <span className="aw-principle-trace-state">{row.state}</span>
              </div>
              <div className="aw-principle-trace-end">
                <span className="aw-principle-trace-time">{row.time}</span>
                <span className="aw-principle-trace-check" aria-hidden>
                  <svg viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.4 6.2 5 8.6 9.6 3.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AuditorPrinciple() {
  const reduceMotion = !!useReducedMotion();
  const { label, titleLead, titleHighlight, how, principle } = auditorPrinciple;

  return (
    <section
      className="infra-section aw-principle-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
      aria-labelledby="aw-principle-head"
    >
      <div className="infra-section-inner mx-auto w-full max-w-[1400px]">
        <div className="aw-principle-box relative w-full overflow-hidden rounded-[28px] lg:rounded-[36px]">
          <div
            className="aw-principle-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="aw-principle-mesh" />
            <div className="governed-bg aw-principle-governed-bg">
              <span className="governed-blob governed-blob--1" />
              <span className="governed-blob governed-blob--2" />
            </div>
            <GovernedSectionSparkles idPrefix="aw-principle" />
          </div>

          <div className="infra-box-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <header className="infra-header aw-principle-header">
                <div className="infra-label">
                  <span className="infra-label-dot" />
                  {label}
                </div>
                <h2 id="aw-principle-head" className="infra-title aw-principle-infra-title">
                  <span className="aw-principle-title-lead">{titleLead}</span>
                  <span className="text-accent-gradient">{titleHighlight}</span>
                </h2>
              </header>
            </ScrollReveal>

            <div className="aw-principle-cards-grid">
              <PrincipleCard
                label={how.label}
                title={
                  <>
                    <span className="aw-principle-title-lead">{how.cardTitleLead}</span>
                    <span className="text-ember">{how.cardTitleHighlight}</span>
                  </>
                }
                body={how.body}
                visual={<HowItWorksVisual reduceMotion={reduceMotion} />}
                reduceMotion={reduceMotion}
              />

              <PrincipleCard
                label={principle.label}
                title={
                  <span className="aw-principle-card-title-line">
                    {principle.cardTitleLead}
                    <span className="text-ember">{principle.cardTitleHighlight}</span>
                  </span>
                }
                body={principle.body}
                visual={<TraceabilityVisual />}
                delay={0.08}
                reduceMotion={reduceMotion}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
