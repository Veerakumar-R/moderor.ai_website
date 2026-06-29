"use client";

import { outcomesSectionContent, outcomeFeatureCards } from "@/content/site";
import { OutcomeFeatureCards } from "./OutcomeFeatureCards";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";

function Headline() {
  const { headlineLine1, headlineLine2Accent, headlineLine2After } = outcomesSectionContent;

  return (
    <h2 className="text-[clamp(1.65rem,2.8vw,2.5rem)] leading-[1.18] font-semibold tracking-tight text-charcoal">
      <span className="block sm:whitespace-nowrap">{headlineLine1}</span>
      <span className="block sm:whitespace-nowrap">
        <span className="text-ember">{headlineLine2Accent}</span>
        {headlineLine2After}
      </span>
    </h2>
  );
}

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="outcomes-section relative px-5 pt-20 pb-10 sm:px-[50px] sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14"
    >
      <div className="outcomes-section-bg" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-[1400px]">
        <ScrollReveal duration={0.85}>
          <SectionLabel>Outcomes from Day One</SectionLabel>
        </ScrollReveal>

        <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-20">
          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0 lg:pt-1">
            <Headline />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.18} className="min-w-0 lg:pt-1">
            <p className="text-base leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
              {outcomesSectionContent.description}
            </p>
          </ScrollReveal>
        </div>

        <OutcomeFeatureCards cards={outcomeFeatureCards} />
      </div>
    </section>
  );
}
