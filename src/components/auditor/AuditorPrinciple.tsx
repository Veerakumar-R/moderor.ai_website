"use client";

import { auditorPrinciple } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import "./auditor.css";

export function AuditorPrinciple() {
  const { how, principle } = auditorPrinciple;
  return (
    <section className="aw-principle-section" aria-labelledby="aw-principle-head">
      <ScrollReveal duration={0.85}>
        <div className="aw-principle-stage">
          <div className="aw-principle-bg" aria-hidden>
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="aw-principle-vignette" />
          </div>

          <div className="aw-principle-inner">
            <p
              className="aw-principle-label"
              style={{ color: "var(--ember)", letterSpacing: "0.13em" }}
            >
              {auditorPrinciple.eyebrow}
            </p>

            <div className="aw-principle-grid">
              <div className="aw-principle-col">
                <p className="aw-principle-label">{how.label}</p>
                <h2 id="aw-principle-head" className="aw-principle-head">
                  {how.headLead}
                  <br />
                  <span>{how.headHighlight}</span>
                </h2>
                {how.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="aw-principle-col aw-principle-col--dark">
                <p className="aw-principle-label">{principle.label}</p>
                <h2 className="aw-principle-head">
                  {principle.headLines.map((line, i) => (
                    <span key={line} style={i === 2 ? undefined : { color: "#fff" }}>
                      {line}
                      {i < principle.headLines.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                {principle.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="aw-principle-foot">
            <span className="aw-principle-foot-dot" aria-hidden />
            Attributed · Timestamped · Permanently logged
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
