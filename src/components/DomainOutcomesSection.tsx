"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { outcomePanels, outcomeTabs } from "@/content/site";
import { DomainLeftVisual } from "./DomainLeftVisual";
import { DomainMetricCard } from "./DomainMetricCard";
import { DomainOutcomesCardBackground } from "./DomainOutcomesCardBackground";
import { ScrollReveal } from "./ui/ScrollReveal";

const TAB_COUNT = outcomeTabs.length;

function DomainCardContent({
  active,
  reduceMotion,
}: {
  active: number;
  reduceMotion: boolean;
}) {
  const panel = outcomePanels[active];
  const tab = outcomeTabs[active];
  const products = panel.products;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={active}
        role="tabpanel"
        aria-label={tab.title}
        initial={reduceMotion ? false : { opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="domain-outcomes-card-content"
      >
        <span className="domain-outcomes-suite-badge">{tab.sub}</span>
        <h3 className="domain-outcomes-content-headline">{panel.headline}</h3>
        <p className="domain-outcomes-content-desc">{panel.description}</p>

        <div className="domain-outcomes-content-metrics">
          {panel.metrics.map((metric, metricIndex) => (
            <DomainMetricCard
              key={metric.label}
              value={metric.num}
              label={metric.label}
              tabKey={active}
              metricIndex={metricIndex}
            />
          ))}
        </div>

        <div className="domain-outcomes-product-grid">
          {products.map((product) => (
            <div key={product.name} className="domain-outcomes-product-tile">
              <p className="domain-outcomes-product-name">{product.name}</p>
              <p className="domain-outcomes-product-desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function DomainOutcomesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  // Scroll-jacking (and the tall 100vh-per-tab track) is a desktop-only
  // interaction. On mobile/tablet it leaves dead scroll space, so gate it on
  // a ≥1024px viewport in addition to reduced-motion preference.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const scrollEnabled = !reduceMotion && isDesktop;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!scrollEnabled) return;
    const next = Math.min(TAB_COUNT - 1, Math.max(0, Math.floor(v * TAB_COUNT)));
    setActive((prev) => (prev === next ? prev : next));
  });

  const scrollToTab = useCallback(
    (index: number) => {
      const el = containerRef.current;
      if (!el || !scrollEnabled) {
        setActive(index);
        return;
      }
      const top = el.getBoundingClientRect().top + window.scrollY;
      const step = el.offsetHeight / TAB_COUNT;
      window.scrollTo({ top: top + step * index + 1, behavior: "smooth" });
    },
    [scrollEnabled],
  );

  return (
    <section
      id="outcomes-by-domain"
      className="domain-outcomes-section border-b border-border bg-white px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
    >
      <div
        ref={containerRef}
        className="domain-outcomes-scroll-track"
        style={scrollEnabled ? { height: `${TAB_COUNT * 100}vh` } : undefined}
      >
        <div className="domain-outcomes-sticky">
          <div className="mx-auto w-full max-w-[1400px]">
            <ScrollReveal duration={0.85} once>
              <div className="domain-outcomes-box relative w-full overflow-hidden rounded-[28px] bg-[#0c0600] lg:rounded-[36px]">
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
                <div className="hero-warm-base" />
                <div className="hero-orange-noise" />
                <div className="hero-grain" />
                <div className="hero-grain-fine" />
                <div className="domain-outcomes-vignette" />
              </div>

              <div className="domain-outcomes-layout relative z-[1]">
                <div className="domain-outcomes-dark-aside">
                  <h2 className="domain-outcomes-section-title">
                    Explore outcomes by <span className="text-accent-gradient">domain</span>
                  </h2>

                  <nav className="domain-outcomes-nav" role="tablist" aria-label="Outcome domains">
                    {outcomeTabs.map((item, i) => {
                      const isActive = active === i;
                      return (
                        <button
                          key={item.title}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => scrollToTab(i)}
                          className={`domain-outcomes-nav-item ${isActive ? "domain-outcomes-nav-item-active" : ""}`}
                        >
                          <span className="domain-outcomes-nav-gutter" aria-hidden>
                            {isActive ? (
                              <motion.span layoutId="domain-nav-arrow" className="domain-outcomes-nav-arrow">
                                →
                              </motion.span>
                            ) : null}
                          </span>
                          <span className="domain-outcomes-nav-label">{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>

                  <DomainLeftVisual index={active} />
                </div>

                <div className="domain-outcomes-white-card">
                  <DomainOutcomesCardBackground reduceMotion={!!reduceMotion} />
                  <div className="domain-outcomes-card-content-shell">
                    <DomainCardContent active={active} reduceMotion={!!reduceMotion} />
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
