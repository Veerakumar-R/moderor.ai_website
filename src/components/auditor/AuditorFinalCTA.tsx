"use client";

import Link from "next/link";
import { auditorFinalCta } from "@/content/auditorWorkbench";
import { footerLinks } from "@/content/site";
import { FinalClosingSilk } from "../FinalClosingSilk";
import { Logo } from "../ui/Logo";
import { ScrollReveal } from "../ui/ScrollReveal";
import "../final-cta.css";
import "./auditor.css";

const FOOTER_COLUMNS = [
  { title: "Suites", links: footerLinks.suites },
  { title: "Platform", links: footerLinks.platform },
  { title: "Company", links: footerLinks.company },
  { title: "Resources", links: footerLinks.resources },
] as const;

export function AuditorFinalCTA() {
  return (
    <section className="final-closing-section" aria-labelledby="aw-final-heading">
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
              <p className="final-closing-label">{auditorFinalCta.label}</p>

              <div className="final-closing-cta-top">
                <div className="final-closing-cta-lead">
                  <h2 id="aw-final-heading" className="final-closing-headline">
                    {auditorFinalCta.titleLead}{" "}
                    <span className="final-closing-headline-accent text-accent-gradient">
                      {auditorFinalCta.titleHighlight}
                    </span>
                  </h2>
                  <div className="aw-cta-lines">
                    {auditorFinalCta.lines.map((line) => (
                      <span key={line} className="aw-cta-line">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="final-closing-cta-aside">
                  <p className="final-closing-desc">
                    {auditorFinalCta.description.map((line) => (
                      <span key={line} className="final-closing-desc-line">
                        {line}
                      </span>
                    ))}
                  </p>
                  <div className="final-closing-actions">
                    <Link href="#" className="final-closing-btn final-closing-btn--primary">
                      {auditorFinalCta.primaryCta}
                    </Link>
                    <Link href="#" className="final-closing-btn final-closing-btn--secondary">
                      {auditorFinalCta.secondaryCta}
                    </Link>
                  </div>
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
                        <li key={item}>
                          <Link href="#">{item}</Link>
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
