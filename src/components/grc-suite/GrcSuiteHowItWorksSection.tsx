"use client";

import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Bot, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import { grcSuitePage } from "@/content/site";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/pilot.css";
import "./grc-suite.css";

const { howItWorks } = grcSuitePage.ai;

const HOW_IT_WORKS_ICONS: LucideIcon[] = [Bot, UserCheck, ShieldCheck];

type ConnectorGeometry = {
  width: number;
  height: number;
  path: string;
};

function HowItWorksIconRing({ children }: { children: ReactNode }) {
  return (
    <div className="grc-how-flow-icon-ring">
      <svg className="grc-how-flow-icon-ring-svg" viewBox="0 0 82 82" aria-hidden>
        <circle
          cx="41"
          cy="41"
          r="40.375"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </div>
  );
}

function HowItWorksConnector({ gridRef }: { gridRef: React.RefObject<HTMLDivElement | null> }) {
  const [geometry, setGeometry] = useState<ConnectorGeometry | null>(null);

  const updatePath = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || window.innerWidth < 768) {
      setGeometry(null);
      return;
    }

    const rings = grid.querySelectorAll<HTMLElement>(".grc-how-flow-icon-ring");
    if (rings.length < 3) return;

    const gridRect = grid.getBoundingClientRect();
    const width = gridRect.width;
    if (width <= 0) return;

    const point = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - gridRect.left,
        y: rect.top + rect.height / 2 - gridRect.top,
      };
    };

    const left = point(rings[0]);
    const center = point(rings[1]);
    const right = point(rings[2]);
    const radius = rings[0].offsetWidth / 2;

    const startX = left.x + radius;
    const startY = left.y;
    const endX = right.x - radius;
    const endY = right.y;
    const midX = center.x;
    const midY = center.y;
    const svgHeight = Math.ceil(Math.max(startY, midY, endY) + radius + 2);

    const path = [
      `M ${startX} ${startY}`,
      `C ${(startX + midX) / 2} ${startY}`,
      `${(startX + midX) / 2} ${midY}`,
      `${midX} ${midY}`,
      `C ${(midX + endX) / 2} ${midY}`,
      `${(midX + endX) / 2} ${endY}`,
      `${endX} ${endY}`,
    ].join(" ");

    setGeometry({ width, height: svgHeight, path });
  }, [gridRef]);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => updatePath());

    const grid = gridRef.current;
    if (!grid) return () => cancelAnimationFrame(frame);

    const observer = new ResizeObserver(() => updatePath());
    observer.observe(grid);

    const rings = grid.querySelectorAll<HTMLElement>(".grc-how-flow-icon-ring");
    rings.forEach((ring) => observer.observe(ring));

    window.addEventListener("resize", updatePath);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [gridRef, updatePath]);

  if (!geometry) return null;

  return (
    <svg
      className="grc-how-flow-connector"
      style={{ height: geometry.height }}
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={geometry.path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeDasharray="3 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function GrcSuiteHowItWorksSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="how-it-works"
      className="pilot-section grc-how-it-works-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="grc-how-heading"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="grc-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">{howItWorks.eyebrow}</SectionLabel>
              <h2 className="pilot-headline" id="grc-how-heading">
                {howItWorks.headline}{" "}
                <span className="pilot-headline-accent">{howItWorks.headlineAccent1}</span>{" "}
                {howItWorks.headlineConnector}{" "}
                <span className="pilot-headline-accent">{howItWorks.headlineAccent2}</span>.
              </h2>
            </header>
          </div>
        </ScrollReveal>

        <ScrollReveal duration={0.9} delay={0.12}>
          <div className="grc-how-panel">
            <div className="grc-how-flow">
              <div className="grc-how-flow-grid" ref={gridRef}>
                <HowItWorksConnector gridRef={gridRef} />

                {howItWorks.steps.map((step, index) => {
                  const Icon = HOW_IT_WORKS_ICONS[index] ?? ShieldCheck;
                  const isCenter = index === 1;

                  return (
                    <article
                      key={step.label}
                      className={`grc-how-flow-step${isCenter ? " grc-how-flow-step--center" : ""}`}
                    >
                      <HowItWorksIconRing>
                        <div className="grc-product-icon grc-how-flow-icon-core" aria-hidden>
                          <span className="grc-product-icon-glow" aria-hidden />
                          <Icon size={28} strokeWidth={1.75} className="grc-product-icon-svg" />
                        </div>
                      </HowItWorksIconRing>
                      <h3 className="grc-how-flow-title">{step.label}</h3>
                      <p className="grc-how-flow-desc">{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
