"use client";

import { grcSuitePage } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./grc-suite.css";

const { ai } = grcSuitePage;
const { howItWorks, principle } = ai;

function HowItWorksIcon({ step }: { step: number }) {
  if (step === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M8 9c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.4-.7 2.6-1.8 3.3L12 18l-2.2-5.7A4 4 0 0 1 8 9Z"
          strokeLinejoin="round"
        />
        <path d="M9 3.5h6M12 2v2" strokeLinecap="round" />
      </svg>
    );
  }

  if (step === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6H6Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" strokeLinejoin="round" />
      <path d="m9.5 12.5 1.8 1.8L15 10.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrincipleCycleIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="7" width="14" height="11" rx="2" />
        <circle cx="9.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
        <path d="M9 15h6" strokeLinecap="round" />
        <path d="M12 4v3M8 4h8" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" strokeLinejoin="round" />
        <path d="m9.5 12.5 1.8 1.8L15 10.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6H6Z" />
    </svg>
  );
}

function PrincipleCardIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 6h8M8 10h8M8 14h5" strokeLinecap="round" />
      <path d="M6 4h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="m14.5 15.5 1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GrcSuiteAiSection() {
  return (
    <section
      id="human-governed-ai"
      className="grc-ai-section px-5 sm:px-[50px]"
      aria-labelledby="grc-ai-heading"
    >
      <div className="grc-section-inner">
        <ScrollReveal duration={0.85}>
          <p className="grc-suite-tag grc-ai-section-tag">
            <span className="grc-suite-tag-dot" aria-hidden />
            {ai.label}
          </p>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <div className="grc-ai-panel">
            <div className="grc-ai-panel-bg" aria-hidden>
              <div className="grc-ai-panel-dots" />
              <div className="grc-ai-panel-vignette" />
            </div>

            <div className="grc-ai-panel-grid">
              <div className="grc-ai-col grc-ai-col--how">
                <p className="grc-ai-eyebrow grc-ai-eyebrow--ember">{howItWorks.eyebrow}</p>
                <h2 className="grc-ai-col-headline" id="grc-ai-heading">
                  {howItWorks.headline}
                </h2>

                <div className="grc-ai-flow">
                  {howItWorks.steps.map((step, index) => (
                    <div key={step.label} className="grc-ai-flow-step">
                      <div className="grc-ai-flow-node">
                        <span className="grc-ai-flow-icon">
                          <HowItWorksIcon step={index} />
                        </span>
                        <span className="grc-ai-flow-label">{step.label}</span>
                        <p className="grc-ai-flow-desc">{step.description}</p>
                      </div>
                      {index < howItWorks.steps.length - 1 ? (
                        <span className="grc-ai-flow-arrow" aria-hidden>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M5 12h12M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>

                <blockquote className="grc-ai-closing">
                  <p className="grc-ai-closing-lead">{howItWorks.closingLead}</p>
                  <p className="grc-ai-closing-accent">{howItWorks.closingHighlight}</p>
                </blockquote>
              </div>

              <div className="grc-ai-divider" aria-hidden />

              <div className="grc-ai-col grc-ai-col--principle">
                <p className="grc-ai-eyebrow grc-ai-eyebrow--warm">{principle.eyebrow}</p>
                <h2 className="grc-ai-col-headline grc-ai-col-headline--principle">
                  {principle.headline}{" "}
                  <em className="grc-ai-headline-accent">{principle.headlineAccent}</em>{" "}
                  {principle.headlineEnd}
                </h2>

                <div className="grc-ai-cycle">
                  <svg className="grc-ai-cycle-arrows" viewBox="0 0 360 120" aria-hidden>
                    <path
                      className="grc-ai-cycle-arrow grc-ai-cycle-arrow--top"
                      d="M48 28 C120 4, 240 4, 312 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      markerEnd="url(#grc-ai-arrow-head)"
                    />
                    <path
                      className="grc-ai-cycle-arrow grc-ai-cycle-arrow--bottom"
                      d="M312 92 C240 116, 120 116, 48 92"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      markerEnd="url(#grc-ai-arrow-head)"
                    />
                    <defs>
                      <marker
                        id="grc-ai-arrow-head"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>

                  <div className="grc-ai-cycle-nodes">
                    {principle.cycle.map((node, index) => (
                      <div key={node.label} className="grc-ai-cycle-node">
                        <span className="grc-ai-cycle-icon">
                          <PrincipleCycleIcon index={index} />
                        </span>
                        <span className="grc-ai-cycle-label">{node.label}</span>
                        <span className="grc-ai-cycle-sub">{node.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grc-ai-principle-cards">
                  {principle.cards.map((card, index) => (
                    <article key={card.description.slice(0, 32)} className="grc-ai-principle-card">
                      <span className="grc-ai-principle-card-icon">
                        <PrincipleCardIcon index={index} />
                      </span>
                      <p className="grc-ai-principle-card-text">{card.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
