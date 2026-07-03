"use client";

import Link from "next/link";
import {
  Headphones,
  MessageSquare,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/problem.css";
import "./bom-suite.css";

const { products } = bomSuitePage;

const PRODUCT_ICONS: LucideIcon[] = [Users, ShieldCheck, ShieldCheck, MessageSquare];

function ProductsHeadline() {
  const { title, titleHighlight } = products;

  return (
    <h2 className="bom-suite-headline bom-products-headline">
      <span className="bom-suite-headline-lead">{title}</span>
      <span className="bom-suite-headline-accent">{titleHighlight}</span>
    </h2>
  );
}

function ProductCardArrow({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      aria-label={`Learn more about ${name}`}
      className="outcome-card-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-charcoal transition-all duration-300 group-hover:border-ember/30 group-hover:bg-ember group-hover:text-white"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </Link>
  );
}

function BomProductIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="bom-product-icon" aria-hidden>
      <span className="bom-product-icon-glow" aria-hidden />
      <Icon size={22} strokeWidth={1.75} className="bom-product-icon-svg" />
    </div>
  );
}

export function BomSuiteProductsSection() {
  return (
    <section
      id="products"
      className="bom-products-section problem-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="problem-mesh" aria-hidden />

      <div className="relative z-[1] bom-section-inner">
        <ScrollReveal duration={0.85}>
          <p className="bom-suite-tag">
            <span className="bom-suite-tag-dot" aria-hidden />
            {products.label}
          </p>
        </ScrollReveal>

        <div className="bom-products-header">
          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0 lg:pt-1">
            <ProductsHeadline />
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.18} className="min-w-0 lg:pt-1">
            <p className="text-base font-normal leading-relaxed text-grey-light lg:text-[17px] lg:leading-[1.7]">
              {products.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="bom-products-grid bom-products-grid--four">
          {products.items.map((product, index) => {
            const Icon = PRODUCT_ICONS[index] ?? Headphones;

            return (
              <ScrollReveal key={product.name} delay={0.42 + index * 0.08} duration={1.05} className="h-full">
                <MagicCard
                  gradientColor="rgba(255, 122, 0, 0.22)"
                  gradientFrom="#ff7a00"
                  gradientTo="#ffb347"
                  gradientOpacity={0.55}
                  gradientSize={240}
                  surfaceColor="#0b0b0b"
                  borderFallback="rgba(255, 122, 0, 0.14)"
                  className="bom-product-card outcome-feature-card group h-full rounded-[20px]"
                >
                  <span className="bom-product-card-surface" aria-hidden />
                  <span className="bom-product-card-glow" aria-hidden />
                  <div className="relative z-[1] flex h-full flex-1 flex-col p-6 lg:p-7">
                    <div className="bom-product-card-arrow">
                      <ProductCardArrow name={product.name} href={product.href} />
                    </div>
                    <BomProductIcon icon={Icon} />
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
