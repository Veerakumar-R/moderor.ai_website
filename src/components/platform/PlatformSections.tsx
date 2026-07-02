"use client";

import Link from "next/link";
import { platformPage } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlatformWhyVisual } from "@/components/platform/PlatformWhyVisual";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const content = platformPage;

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

  return (
    <section
      className="platform-why-section px-5 py-16 sm:px-[50px] sm:py-20 lg:py-24"
      aria-labelledby="platform-why-heading"
    >
      <div className="grc-section-inner">
        <div className="platform-why-layout">
          <ScrollReveal duration={0.85} className="platform-why-visual-col">
            <PlatformWhyVisual title={why.visualTitle} bullets={why.bullets} />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.1} className="platform-why-content-stack">
            <div className="platform-why-content-body">
              <p className="grc-suite-tag platform-why-tag">
                <span className="grc-suite-tag-dot" aria-hidden />
                {why.tag}
              </p>

              <h2 className="platform-why-headline" id="platform-why-heading">
                <span className="platform-why-headline-lead">{why.title}</span>{" "}
                <span className="platform-why-headline-accent">{why.titleHighlight}</span>
              </h2>

              <div className="platform-why-copy">
                {why.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="platform-why-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <p className="platform-why-closing">{why.closing}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
