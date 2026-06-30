"use client";

import Link from "next/link";
import { finalCta, footerLinks, siteConfig } from "@/content/site";
import { FinalClosingSilk } from "./FinalClosingSilk";
import { Logo } from "./ui/Logo";
import { PillButton } from "./ui/PillButton";
import { ScrollReveal } from "./ui/ScrollReveal";
import "./final-cta.css";

const FOOTER_COLUMNS = [
  { title: "Suites", links: footerLinks.suites },
  { title: "Platform", links: footerLinks.platform },
  { title: "Company", links: footerLinks.company },
  { title: "Resources", links: footerLinks.resources },
] as const;

type FinalCTAProps = {
  label?: string;
  title?: string;
  titleHighlight?: string;
  description?: string | readonly string[];
};

export function FinalCTA({
  label = finalCta.label,
  title = finalCta.title,
  titleHighlight = finalCta.titleHighlight,
  description = finalCta.description,
}: FinalCTAProps = {}) {
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <section className="final-closing-section" aria-labelledby="final-closing-heading">
      <div className="final-closing-shell">
        <div className="final-closing-shell-bg" aria-hidden>
          <div className="hero-warm-base" />
          <FinalClosingSilk />
          <div className="hero-orange-noise" />
          <div className="final-closing-shell-vignette" />
        </div>

        <div className="final-closing-shell-inner">
          <ScrollReveal duration={0.85}>
            <div className="final-closing-cta">
              <p className="final-closing-label">{label}</p>

              <div className="final-closing-cta-top">
                <div className="final-closing-cta-lead">
                  <h2 id="final-closing-heading" className="final-closing-headline">
                    {title}{" "}
                    <span className="final-closing-headline-accent text-accent-gradient">
                      {titleHighlight}
                    </span>
                  </h2>
                  <div className="final-closing-actions">
                    <PillButton href="#" variant="orange" showArrow>
                      {siteConfig.cta.primary}
                    </PillButton>
                  </div>
                </div>

                <div className="final-closing-cta-aside">
                  <p className="final-closing-desc">
                    {descriptionLines.map((line) => (
                      <span key={line} className="final-closing-desc-line">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <footer className="final-closing-footer-card">
            <div className="final-closing-footer-top">
              <div className="final-closing-footer-brand">
                <Logo className="h-7 w-auto" href="/" />

                <form
                  className="final-closing-newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    className="final-closing-newsletter-input"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <button type="submit" className="final-closing-newsletter-submit">
                    Submit
                  </button>
                </form>
              </div>

              <div className="final-closing-footer-links">
                {FOOTER_COLUMNS.map((col) => (
                  <div key={col.title} className="final-closing-footer-col">
                    <h4>{col.title}</h4>
                    <ul>
                      {col.links.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="final-closing-footer-bottom">
              <p>© {new Date().getFullYear()} moderor.ai. All rights reserved.</p>
              <div className="final-closing-footer-legal">
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Trust Center</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
