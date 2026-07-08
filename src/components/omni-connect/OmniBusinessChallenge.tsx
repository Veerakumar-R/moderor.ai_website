"use client";

import { omniChallenge } from "@/content/omniConnect";
import { PlatformWhyVisual } from "@/components/platform/PlatformWhyVisual";
import { ScrollReveal } from "../ui/ScrollReveal";
import "@/components/grc-suite/grc-suite.css";
import "@/components/platform/platform.css";

export function OmniBusinessChallenge() {
  const { tag, title, titleHighlight, paragraphs, visualBadge, visualTitle, visualClosing, bullets } =
    omniChallenge;

  return (
    <section
      className="platform-why-section px-5 py-16 sm:px-[50px] sm:py-20 lg:py-24"
      aria-labelledby="omni-challenge-heading"
    >
      <div className="grc-section-inner">
        <div className="platform-why-layout">
          <ScrollReveal duration={0.85} className="platform-why-visual-col">
            <PlatformWhyVisual
              title={visualTitle}
              bullets={bullets}
              badge={visualBadge}
              closing={visualClosing}
            />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.1} className="platform-why-content-stack">
            <div className="platform-why-content-body">
              <p className="grc-suite-tag platform-why-tag">
                <span className="grc-suite-tag-dot" aria-hidden />
                {tag}
              </p>

              <h2 className="platform-why-headline" id="omni-challenge-heading">
                <span className="platform-why-headline-lead">{title}</span>{" "}
                <span className="platform-why-headline-accent">{titleHighlight}</span>
              </h2>

              <div className="platform-why-copy">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="platform-why-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
