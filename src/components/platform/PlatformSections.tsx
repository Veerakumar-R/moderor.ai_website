"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { platformPage } from "@/content/site";
import Waves from "@/components/Waves";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/governed.css";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const content = platformPage;

const PLATFORM_WHY_WAVES_PROPS = {
  lineColor: "rgba(255, 160, 90, 0.17)",
  backgroundColor: "transparent",
  waveSpeedX: 0.0125,
  waveSpeedY: 0.01,
  waveAmpX: 40,
  waveAmpY: 20,
  friction: 0.9,
  tension: 0.01,
  maxCursorMove: 120,
  xGap: 12,
  yGap: 36,
} as const;

export function PlatformBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="grc-breadcrumb px-5 sm:px-[50px]">
      <div className="grc-section-inner">
        <ol className="grc-breadcrumb-inner">
          {content.breadcrumb.map((item, index) => {
            const isCurrent = "current" in item;

            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden>/</span>}
                {isCurrent ? (
                  <span className="grc-breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="grc-breadcrumb-link">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export function PlatformWhySection() {
  const { why } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="grc-why-section px-5 sm:px-[50px]"
      aria-labelledby="platform-why-heading"
    >
      <div className="governed-bg" aria-hidden>
        <span className="governed-blob governed-blob--1" />
        <span className="governed-blob governed-blob--2" />
      </div>

      {!reduceMotion && (
        <div className="grc-why-waves" aria-hidden>
          <Waves {...PLATFORM_WHY_WAVES_PROPS} />
        </div>
      )}

      <div className="grc-section-inner grc-why-content">
        <ScrollReveal duration={0.85}>
          <div className="grc-why-grid">
            <div className="grc-why-head-col">
              <p className="grc-suite-tag grc-why-tag">
                <span className="grc-suite-tag-dot" aria-hidden />
                {why.tag}
              </p>

              <h2 className="grc-suite-headline" id="platform-why-heading">
                <span className="grc-suite-headline-lead">{why.title}</span>
                <span className="grc-suite-headline-accent">{why.titleHighlight}</span>
              </h2>
            </div>

            <div className="grc-why-copy-col">
              {why.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="grc-why-paragraph">
                  {paragraph}
                </p>
              ))}

              <div className="platform-why-gap">
                <p className="platform-why-gap-label">{why.bulletsLabel}</p>
                <ul className="platform-why-gap-list">
                  {why.bullets.map((bullet) => (
                    <li key={bullet} className="platform-why-gap-item">
                      <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="grc-why-paragraph platform-why-closing">{why.closing}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
