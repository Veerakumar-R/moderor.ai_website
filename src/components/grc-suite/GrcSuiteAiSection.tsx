"use client";

import { useReducedMotion } from "framer-motion";
import {
  Bot,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { grcSuitePage } from "@/content/site";
import ShapeGrid from "@/components/ShapeGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/infrastructure.css";
import "./grc-suite.css";

const { principle } = grcSuitePage.ai;

const PRINCIPLE_CYCLE_ICONS: LucideIcon[] = [Bot, UserCheck, ShieldCheck];
const PRINCIPLE_CARD_ICONS: LucideIcon[] = [ScanSearch, ClipboardCheck];

export function GrcSuiteAiSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="the-principle"
      className="infra-section grc-principle-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
      aria-labelledby="grc-principle-heading"
    >
      <div className="grc-section-inner">
        <div className="infra-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div
            className="infra-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            {!reduceMotion && (
              <div className="infra-shape-grid">
                <ShapeGrid
                  speed={0.12}
                  squareSize={24}
                  direction="diagonal"
                  borderColor="rgba(255, 230, 200, 0.022)"
                  hoverFillColor="rgba(255, 122, 0, 0.06)"
                  shape="square"
                  hoverTrailAmount={0}
                />
              </div>
            )}
            <div className="infra-section-vignette" />
          </div>

          <div className="infra-box-content relative z-[1]">
            <ScrollReveal duration={0.85} className="w-full">
              <header className="infra-header grc-principle-header">
                <div className="infra-label">
                  <span className="infra-label-dot" />
                  {principle.eyebrow}
                </div>
                <h2 className="infra-title grc-principle-title" id="grc-principle-heading">
                  {principle.headline}{" "}
                  <span className="text-accent-gradient">{principle.headlineAccent}</span>{" "}
                  {principle.headlineEnd}
                </h2>
                <p className="infra-intro grc-principle-intro">
                  {principle.description} {principle.descriptionLine2}
                </p>
              </header>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.12} className="w-full">
              <div className="grc-principle-body">
                <div className="grc-ai-cycle">
                  <svg
                    className="grc-ai-cycle-arrows"
                    viewBox="0 0 840 120"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient
                        id="grc-principle-flow-gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="172"
                        y1="60"
                        x2="668"
                        y2="60"
                      >
                        <stop offset="0%" stopColor="rgba(255, 122, 0, 0.15)" />
                        <stop offset="35%" stopColor="rgba(255, 184, 120, 0.55)" />
                        <stop offset="50%" stopColor="rgba(255, 210, 160, 0.95)" />
                        <stop offset="65%" stopColor="rgba(255, 184, 120, 0.55)" />
                        <stop offset="100%" stopColor="rgba(255, 122, 0, 0.15)" />
                      </linearGradient>
                      <filter
                        id="grc-principle-connector-glow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="160%"
                      >
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      className="grc-ai-cycle-track grc-ai-cycle-track--top"
                      d="M 172 48 C 298 4, 542 4, 668 48"
                      pathLength={1}
                    />
                    <path
                      className="grc-ai-cycle-flow grc-ai-cycle-flow--top"
                      d="M 172 48 C 298 4, 542 4, 668 48"
                      pathLength={1}
                    />
                    <circle className="grc-ai-cycle-node-cap grc-ai-cycle-node-cap--top-end" cx="668" cy="48" r="2.5" />

                    <path
                      className="grc-ai-cycle-track grc-ai-cycle-track--bottom"
                      d="M 668 72 C 542 116, 298 116, 172 72"
                      pathLength={1}
                    />
                    <path
                      className="grc-ai-cycle-flow grc-ai-cycle-flow--bottom"
                      d="M 668 72 C 542 116, 298 116, 172 72"
                      pathLength={1}
                    />
                    <circle className="grc-ai-cycle-node-cap grc-ai-cycle-node-cap--bottom-end" cx="172" cy="72" r="2.5" />
                  </svg>

                  <div className="grc-ai-cycle-nodes">
                    {principle.cycle.map((node, index) => {
                      const CycleIcon = PRINCIPLE_CYCLE_ICONS[index] ?? ShieldCheck;

                      return (
                        <div key={node.label} className="grc-ai-cycle-node">
                          <span className="grc-ai-cycle-icon">
                            <CycleIcon size={28} strokeWidth={1.75} />
                          </span>
                          <span className="grc-ai-cycle-label">{node.label}</span>
                          <span className="grc-ai-cycle-sub">{node.sub}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grc-ai-principle-cards">
                  {principle.cards.map((card, index) => {
                    const CardIcon = PRINCIPLE_CARD_ICONS[index] ?? ClipboardCheck;

                    return (
                      <article key={card.description.slice(0, 32)} className="grc-ai-principle-card">
                        <span className="grc-ai-principle-card-icon">
                          <CardIcon size={24} strokeWidth={1.75} />
                        </span>
                        <p className="grc-ai-principle-card-text">{card.description}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
