"use client";

import { useRef } from "react";
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
import { AnimatedBeam } from "@/components/ui/animated-beam";
import "@/components/infrastructure.css";
import "./grc-suite.css";

const { principle } = grcSuitePage.ai;

const PRINCIPLE_CYCLE_ICONS: LucideIcon[] = [Bot, UserCheck, ShieldCheck];
const PRINCIPLE_CARD_ICONS: LucideIcon[] = [ScanSearch, ClipboardCheck];

const BEAM_DURATION = 8;
const BEAM_PAUSE = 1.2;
const BEAM_CYCLE = BEAM_DURATION + BEAM_PAUSE;
const BEAM_REPEAT_DELAY = BEAM_DURATION + BEAM_PAUSE * 2;

const BEAM_THEME = {
  pathColor: "rgba(255, 184, 120, 0.38)",
  pathWidth: 2.25,
  pathOpacity: 0.42,
  gradientStartColor: "#ff7a00",
  gradientStopColor: "#ffd8a8",
  duration: BEAM_DURATION,
  repeatDelay: BEAM_REPEAT_DELAY,
  ease: "linear" as const,
};

function PrincipleCycleBeams({
  containerRef,
  agentsRef,
  actionsRef,
  animate,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  agentsRef: React.RefObject<HTMLDivElement | null>;
  actionsRef: React.RefObject<HTMLDivElement | null>;
  animate: boolean;
}) {
  const beamProps = {
    containerRef,
    className: "grc-ai-cycle-beam",
    animated: animate,
    ...BEAM_THEME,
  };

  return (
    <div className="grc-ai-cycle-beams" aria-hidden>
      <AnimatedBeam
        fromRef={agentsRef}
        toRef={actionsRef}
        curvature={52}
        {...beamProps}
      />
      <AnimatedBeam
        fromRef={actionsRef}
        toRef={agentsRef}
        curvature={-52}
        reverse
        delay={BEAM_CYCLE}
        {...beamProps}
      />
    </div>
  );
}

export function GrcSuiteAiSection() {
  const reduceMotion = useReducedMotion();
  const cycleRef = useRef<HTMLDivElement>(null);
  const agentsRef = useRef<HTMLDivElement>(null);
  const humanRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const iconRefs = [agentsRef, humanRef, actionsRef] as const;

  return (
    <section
      id="the-principle"
      className="infra-section grc-principle-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
      aria-labelledby="grc-principle-heading"
    >
      <div className="grc-section-inner">
        <div className="infra-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div
            className="infra-box-bg pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            {!reduceMotion && (
              <div className="infra-shape-grid grc-principle-shape-grid">
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

          <div className="infra-box-content grc-principle-content relative z-[2]">
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
                <div className="grc-ai-cycle" ref={cycleRef}>
                  <PrincipleCycleBeams
                    containerRef={cycleRef}
                    agentsRef={agentsRef}
                    actionsRef={actionsRef}
                    animate={!reduceMotion}
                  />

                  <div className="grc-ai-cycle-nodes">
                    {principle.cycle.map((node, index) => {
                      const CycleIcon = PRINCIPLE_CYCLE_ICONS[index] ?? ShieldCheck;
                      const isCenter = index === 1;
                      const iconRef = iconRefs[index] ?? actionsRef;

                      return (
                        <div
                          key={node.label}
                          className={`grc-ai-cycle-node${isCenter ? " grc-ai-cycle-node--center" : " grc-ai-cycle-node--side"}`}
                        >
                          <div className="grc-ai-cycle-icon" ref={iconRef}>
                            <CycleIcon size={28} strokeWidth={1.75} />
                          </div>
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
