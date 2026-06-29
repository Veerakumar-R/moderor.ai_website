"use client";

import { motion, useReducedMotion } from "framer-motion";
import { infrastructureCards, infrastructureSection } from "@/content/site";
import { DeployPlatformLogo } from "./DeployPlatformLogo";
import { InfrastructureConnectors } from "./InfrastructureConnectors";
import { InfrastructureNodeVisual } from "./InfrastructureNodeVisual";
import { InfrastructureOrb } from "./InfrastructureOrb";
import ShapeGrid from "./ShapeGrid";
import { ScrollReveal } from "./ui/ScrollReveal";
import "./infrastructure.css";

const floatVariants = [
  { y: [0, -5, 0], duration: 5.2 },
  { y: [0, -7, 0], duration: 6.1 },
  { y: [0, -4, 0], duration: 5.6 },
  { y: [0, -6, 0], duration: 5.9 },
];

export function InfrastructureSection() {
  const reduceMotion = useReducedMotion();

  const byPosition = {
    tl: infrastructureCards.find((c) => c.position === "tl")!,
    bl: infrastructureCards.find((c) => c.position === "bl")!,
    tr: infrastructureCards.find((c) => c.position === "tr")!,
    br: infrastructureCards.find((c) => c.position === "br")!,
  };

  return (
    <section
      id="platform"
      className="infra-section bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
    >
      <div className="infra-section-inner mx-auto w-full max-w-[1400px]">
        <div className="infra-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div className="infra-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
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
            <ScrollReveal duration={0.85}>
              <header className="infra-header">
                <div className="infra-label">
                  <span className="infra-label-dot" />
                  {infrastructureSection.label}
                </div>
                <h2 className="infra-title">
                  {infrastructureSection.title}{" "}
                  <span className="text-accent-gradient">{infrastructureSection.titleHighlight}</span>
                </h2>
                <p className="infra-intro">{infrastructureSection.description}</p>
              </header>
            </ScrollReveal>

            <div className="infra-diagram">
              <InfrastructureConnectors reduceMotion={!!reduceMotion} />

              <div className="infra-diagram-center">
                <InfrastructureOrb reduceMotion={!!reduceMotion} />
              </div>

              {(["tl", "bl", "tr", "br"] as const).map((pos, index) => {
                const card = byPosition[pos];
                const float = floatVariants[index];

                return (
                  <ScrollReveal
                    key={card.id}
                    delay={0.35 + index * 0.14}
                    duration={1.05}
                    className={`infra-node-slot infra-node-slot--${pos}`}
                  >
                    <motion.article
                      animate={reduceMotion ? undefined : { y: float.y }}
                      transition={{
                        duration: float.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="infra-card"
                    >
                      <div className="infra-card-visual">
                        <span className="infra-inner-glow" aria-hidden />
                        <div className="infra-card-logo-badge">
                          <DeployPlatformLogo id={card.id} className="infra-card-logo" />
                        </div>
                        <InfrastructureNodeVisual card={card} />
                      </div>

                      <div className="infra-card-body">
                        <div className="infra-card-head">
                          <p className="infra-card-label">{card.cardLabel}</p>
                          <span
                            className={`infra-node-tag ${
                              card.tagVariant === "air" ? "infra-node-tag--air" : "infra-node-tag--live"
                            }`}
                          >
                            {card.tag}
                          </span>
                        </div>
                        <h3 className="infra-card-title">{card.name}</h3>
                        <p className="infra-card-desc">{card.note}</p>
                      </div>
                    </motion.article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
