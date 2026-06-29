"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { frameworks } from "@/content/site";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import "./frameworks.css";

const DESCRIPTION =
  "Moderor agents are grounded in the regulatory frameworks that govern your industry — mapped to controls, cited in findings, and referenced in every audit export.";

function Headline() {
  return (
    <h2 className="frameworks-headline">
      <span className="block sm:whitespace-nowrap">The frameworks your auditors</span>
      <span className="block sm:whitespace-nowrap">
        expect. <span className="text-ember">Already built in.</span>
      </span>
    </h2>
  );
}

export function FrameworksSection() {
  return (
    <section className="frameworks-section px-5 pt-20 pb-10 sm:px-[50px] sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14">
      <div className="frameworks-section-bg" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-[1400px]">
        <div className="frameworks-layout">
          <ScrollReveal duration={0.85} delay={0.12} className="frameworks-stage-wrap">
            <div className="frameworks-stage">
              <div className="frameworks-stage-grid" aria-hidden />

              <div className="frameworks-zigzag">
                {frameworks.map((fw) => (
                  <div
                    key={fw.name}
                    className="frameworks-cell"
                    style={
                      {
                        "--fw-grid-col": fw.gridColumn,
                        "--fw-grid-row": fw.gridRow,
                      } as CSSProperties
                    }
                  >
                    <div className="frameworks-tile">
                      <Image
                        src={fw.logo}
                        alt={`${fw.name} logo`}
                        width={76}
                        height={76}
                        className={`frameworks-tile-logo-img${
                          fw.name === "RBI" || fw.name === "ISO 27001"
                            ? " frameworks-tile-logo-img--boost"
                            : ""
                        }`}
                      />
                    </div>
                    <p className="frameworks-tile-name">{fw.name}</p>
                    <p className="frameworks-tile-type">{fw.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="frameworks-copy">
            <ScrollReveal duration={0.85}>
              <SectionLabel>Every Regulation. One Platform.</SectionLabel>
            </ScrollReveal>

            <ScrollReveal duration={0.85} delay={0.08} className="mt-6 lg:mt-8">
              <Headline />
            </ScrollReveal>

            <ScrollReveal duration={0.85} delay={0.16} className="mt-5 lg:mt-6">
              <p className="max-w-xl text-base leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
                {DESCRIPTION}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
