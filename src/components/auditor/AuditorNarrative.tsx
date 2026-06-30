"use client";

import { auditorNarrative } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "./auditor.css";

export function AuditorNarrative() {
  return (
    <section className="aw-section">
      <div className="aw-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{auditorNarrative.eyebrow}</SectionLabel>
        </ScrollReveal>

        <div className="aw-narrative-grid">
          <ScrollReveal duration={0.85} delay={0.08} className="aw-narrative-problem min-w-0">
            {auditorNarrative.problem.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.16} direction="left" className="min-w-0">
            <div className="aw-solution-card">
              <h2 className="aw-solution-head">
                {auditorNarrative.solutionHeadLead}
                <br />
                <span>{auditorNarrative.solutionHeadHighlight}</span>
              </h2>
              {auditorNarrative.solution.map((para) => (
                <p key={para}>{para}</p>
              ))}

              <div className="aw-ledger" aria-hidden>
                {auditorNarrative.ledger.map((row, i) => (
                  <div key={row.phase} className="aw-ledger-row">
                    <span className="aw-ledger-phase">
                      <span className="aw-ledger-num">{i + 1}</span>
                      {row.phase}
                    </span>
                    <span className="aw-ledger-state">
                      <span className="aw-ledger-state-dot" />
                      {row.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
