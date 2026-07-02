"use client";

import { Fragment } from "react";
import { useReducedMotion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Cpu,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { platformPage } from "@/content/site";
import ShapeGrid from "@/components/ShapeGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/infrastructure.css";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const { principle } = platformPage;

const PRINCIPLE_CYCLE_ICONS: LucideIcon[] = [BrainCircuit, Bot, ShieldCheck];
const PRINCIPLE_CARD_ICONS: LucideIcon[] = [Cpu, Layers];

function chipsFromSub(sub: string) {
  return sub
    .split(".")
    .map((part) => part.trim())
    .filter(Boolean);
}

export function PlatformPrincipleSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="the-principle"
      className="infra-section grc-principle-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
      aria-labelledby="platform-principle-heading"
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
                <h2 className="infra-title grc-principle-title" id="platform-principle-heading">
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
                <div className="platform-stack">
                  {principle.cycle.map((node, index) => {
                    const CycleIcon = PRINCIPLE_CYCLE_ICONS[index] ?? ShieldCheck;
                    const isGovern = index === principle.cycle.length - 1;
                    const chips = chipsFromSub(node.sub);

                    return (
                      <Fragment key={node.label}>
                        <div
                          className={`platform-stack-layer${isGovern ? " platform-stack-layer--govern" : ""}`}
                        >
                          <span className="platform-stack-icon" aria-hidden>
                            <CycleIcon size={24} strokeWidth={1.75} />
                          </span>
                          <span className="platform-stack-body">
                            <span className="platform-stack-label">{node.label}</span>
                            <span className="platform-stack-sub">{node.sub}</span>
                          </span>
                          <span className="platform-stack-chips">
                            {chips.map((chip) => (
                              <span key={chip} className="platform-stack-chip">
                                {chip}
                              </span>
                            ))}
                          </span>
                        </div>
                        {index < principle.cycle.length - 1 && (
                          <span className="platform-stack-connector" aria-hidden />
                        )}
                      </Fragment>
                    );
                  })}
                </div>

                <div className="grc-ai-principle-cards">
                  {principle.cards.map((card, index) => {
                    const CardIcon = PRINCIPLE_CARD_ICONS[index] ?? Layers;

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
