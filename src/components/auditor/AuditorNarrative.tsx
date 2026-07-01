"use client";

import Image from "next/image";
import { auditorNarrative } from "@/content/auditorWorkbench";
import { ScrollReveal } from "../ui/ScrollReveal";
import "@/components/human.css";
import "./auditor.css";

export function AuditorNarrative() {
  const { problem, solution, tagline, titleLead, titleHighlight } = auditorNarrative;

  return (
    <section className="aw-narrative-section relative border-b border-border px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="human-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
          <div
            className="human-box-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />

            <div className="aw-narrative-ribbon-bg">
              <Image
                src="/images/auditor-workbench/narrative-light-ribbon.png"
                alt=""
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="aw-narrative-ribbon-img"
                priority={false}
              />
              <div className="aw-narrative-ribbon-tint" />
            </div>

            <div className="hero-orange-noise aw-narrative-bg-veil" />
            <div className="hero-grain aw-narrative-bg-veil" />
            <div className="hero-grain-fine aw-narrative-bg-veil" />
            <div className="human-vignette aw-narrative-vignette" />
          </div>

          <div className="aw-narrative-infra-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <div className="human-eyebrow aw-narrative-label">
                <span className="human-eyebrow-dot" />
                {tagline}
              </div>
            </ScrollReveal>

            <div className="aw-narrative-body">
              <div className="aw-narrative-copy">
                <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
                  <h2 className="aw-narrative-title">
                    <span>{titleLead}</span>{" "}
                    <span className="text-accent-gradient">{titleHighlight}</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal duration={0.85} delay={0.16} className="min-w-0">
                  <div className="aw-narrative-intro aw-narrative-intro--dark">
                    {problem.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal duration={0.85} delay={0.24} className="min-w-0">
                <div className="aw-narrative-intro aw-narrative-intro--dark">
                  {solution.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
