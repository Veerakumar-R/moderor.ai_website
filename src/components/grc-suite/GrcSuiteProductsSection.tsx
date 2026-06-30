"use client";

import Link from "next/link";
import {
  Bell,
  ClipboardCheck,
  GitBranch,
  LineChart,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { grcSuitePage } from "@/content/site";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/problem.css";
import "./grc-suite.css";

const { products } = grcSuitePage;

const PRODUCT_ICONS: LucideIcon[] = [
  ShieldCheck,
  ClipboardCheck,
  Users,
  Bell,
  Scale,
  GitBranch,
  Sparkles,
  LineChart,
];

function GrcProductIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="grc-product-icon" aria-hidden>
      <span className="grc-product-icon-glow" aria-hidden />
      <Icon size={22} strokeWidth={1.75} className="grc-product-icon-svg" />
    </div>
  );
}

function ProductsHeadline() {
  const { title, titleHighlight } = products;

  return (
    <h2 className="grc-suite-headline grc-products-headline">
      <span className="grc-suite-headline-lead">{title}</span>
      <span className="grc-suite-headline-accent">{titleHighlight}</span>
    </h2>
  );
}

function ProductCardArrow({ name }: { name: string }) {
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

export function GrcSuiteProductsSection() {
  return (
    <section
      id="products"
      className="grc-products-section problem-section relative"
    >
      <div className="problem-mesh" aria-hidden />

      <div className="relative z-[1] grc-section-inner">
        <ScrollReveal duration={0.85}>
          <p className="grc-suite-tag">
            <span className="grc-suite-tag-dot" aria-hidden />
            {products.label}
          </p>
        </ScrollReveal>

        <div className="grc-products-header">
          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0 lg:pt-1">
            <ProductsHeadline />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.18} className="min-w-0 lg:pt-1">
            <p className="text-base font-normal leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
              {products.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="grc-products-grid">
          {products.items.map((product, index) => {
            const Icon = PRODUCT_ICONS[index] ?? ShieldCheck;

            return (
              <ScrollReveal
                key={product.name}
                delay={0.42 + index * 0.08}
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
                      <ProductCardArrow name={product.name} />
                    </div>
                    <GrcProductIcon icon={Icon} />
                    <h3 className="mt-4 pr-12 text-lg font-bold tracking-tight text-charcoal lg:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm font-normal leading-relaxed text-grey-light">{product.description}</p>
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
