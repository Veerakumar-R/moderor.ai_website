"use client";

import Link from "next/link";
import {
  Boxes,
  Cloud,
  Eye,
  FileSearch,
  GitBranch,
  Layers,
  Network,
  Plug,
  RefreshCw,
  ScrollText,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { platformPage } from "@/content/site";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/problem.css";
import "@/components/grc-suite/grc-suite.css";

const { capabilities } = platformPage;

const CAPABILITY_ICONS: LucideIcon[] = [
  Boxes, // Agent Orchestration
  ShieldCheck, // Enterprise Governance
  Layers, // Multi-Model Intelligence
  FileSearch, // Knowledge Intelligence
  Plug, // Enterprise Connectivity
  GitBranch, // Workflow Automation
  UserCheck, // Human-in-the-Loop
  ShieldCheck, // Enterprise Security
  Eye, // Enterprise Observability
  Cloud, // Deployment Flexibility
  RefreshCw, // Lifecycle Management
  ScrollText, // Explainability & Auditability
];

function CapabilityIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="grc-product-icon" aria-hidden>
      <span className="grc-product-icon-glow" aria-hidden />
      <Icon size={22} strokeWidth={1.75} className="grc-product-icon-svg" />
    </div>
  );
}

function CapabilitiesHeadline() {
  const { title, titleHighlight } = capabilities;

  return (
    <h2 className="grc-suite-headline grc-products-headline">
      <span className="grc-suite-headline-lead">{title}</span>
      <span className="grc-suite-headline-accent">{titleHighlight}</span>
    </h2>
  );
}

function CapabilityCardArrow({ name }: { name: string }) {
  return (
    <Link
      href="#"
      aria-label={`Learn more about ${name}`}
      className="outcome-card-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-charcoal transition-all duration-300 group-hover:border-ember/30 group-hover:bg-ember group-hover:text-white"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </Link>
  );
}

export function PlatformCapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="grc-products-section problem-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="problem-mesh" aria-hidden />

      <div className="relative z-[1] grc-section-inner">
        <ScrollReveal duration={0.85}>
          <p className="grc-suite-tag">
            <span className="grc-suite-tag-dot" aria-hidden />
            {capabilities.label}
          </p>
        </ScrollReveal>

        <div className="grc-products-header">
          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0 lg:pt-1">
            <CapabilitiesHeadline />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.18} className="min-w-0 lg:pt-1">
            <p className="text-base font-normal leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
              {capabilities.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="grc-products-grid">
          {capabilities.items.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[index] ?? Network;

            return (
              <ScrollReveal
                key={capability.name}
                delay={0.42 + index * 0.06}
                duration={1.05}
                className="h-full"
              >
                <MagicCard
                  gradientColor="rgba(255, 122, 0, 0.22)"
                  gradientFrom="#ff7a00"
                  gradientTo="#ffb347"
                  gradientOpacity={0.55}
                  gradientSize={240}
                  surfaceColor="#0b0b0b"
                  borderFallback="rgba(255, 122, 0, 0.14)"
                  className="grc-product-card outcome-feature-card group h-full rounded-[20px]"
                >
                  <span className="grc-product-card-surface" aria-hidden />
                  <span className="grc-product-card-glow" aria-hidden />
                  <div className="relative z-[1] flex h-full flex-1 flex-col p-6 lg:p-7">
                    <div className="grc-product-card-arrow">
                      <CapabilityCardArrow name={capability.name} />
                    </div>
                    <CapabilityIcon icon={Icon} />
                    <h3 className="mt-4 pr-12 text-lg font-bold tracking-tight text-charcoal lg:text-xl">
                      {capability.name}
                    </h3>
                    <p className="mt-4 text-sm font-normal leading-relaxed text-grey-light">
                      {capability.description}
                    </p>
                  </div>
                </MagicCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
