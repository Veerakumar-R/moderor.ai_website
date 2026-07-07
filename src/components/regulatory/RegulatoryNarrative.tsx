"use client";

import Image from "next/image";
import { regulatoryNarrative } from "@/content/regulatoryCompliance";
import { ScrollReveal } from "../ui/ScrollReveal";
import "@/components/human.css";
import "./regulatory.css";

export function RegulatoryNarrative() {
  const { problem, solution, tagline, titleLead, titleHighlight, centerImage } = regulatoryNarrative;

  return (
    <section className="aw-narrative-section relative border-b border-border px-5 pt-8 pb-32 sm:px-[50px] sm:pt-10 sm:pb-36 lg:pt-12 lg:pb-44 xl:pb-52">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="human-box aw-narrative-box relative w-full overflow-visible rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
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
            <div className="aw-narrative-body">
              <div className="aw-narrative-copy">
                <ScrollReveal duration={0.85} className="min-w-0">
                  <div className="human-eyebrow aw-narrative-label">
                    <span className="human-eyebrow-dot" />
                    {tagline}
                  </div>
                </ScrollReveal>

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

              <ScrollReveal duration={0.85} delay={0.2} className="aw-narrative-media min-w-0">
                <div className="aw-narrative-media-glow" aria-hidden />
                <div className="aw-narrative-media-frame">
                  <Image
                    src={centerImage.src}
                    alt={centerImage.alt}
                    fill
                    quality={100}
                    sizes="(min-width: 1280px) 640px, (min-width: 1024px) 480px, 90vw"
                    className="aw-narrative-media-img"
                    priority={false}
                  />
                  <div className="aw-narrative-media-shine" aria-hidden />
                  <div className="aw-narrative-media-tint" aria-hidden />
                </div>
              </ScrollReveal>

              <ScrollReveal duration={0.85} delay={0.24} className="aw-narrative-aside min-w-0">
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
