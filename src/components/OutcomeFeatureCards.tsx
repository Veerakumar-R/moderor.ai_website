"use client";

import { useReducedMotion } from "framer-motion";
import type { outcomeFeatureCards } from "@/content/site";
import { OutcomeAppMarquee } from "./OutcomeAppMarquee";
import { OutcomeOrbitRadar } from "./OutcomeOrbitRadar";
import { OutcomeBomMesh } from "./OutcomeBomMesh";
import { MagicCard } from "./ui/magic-card";
import { ScrollReveal } from "./ui/ScrollReveal";

type FeatureCard = (typeof outcomeFeatureCards)[number];

function GrcVisual({ card, reduceMotion }: { card: FeatureCard; reduceMotion: boolean }) {
  if (card.visual !== "grc" || !("orbitItems" in card)) return null;

  return (
    <OutcomeOrbitRadar
      centerLabel={card.centerLabel}
      items={card.orbitItems}
      reduceMotion={reduceMotion}
      orbitDuration={48}
    />
  );
}

function BomVisual({ card, reduceMotion }: { card: FeatureCard; reduceMotion: boolean }) {
  if (card.visual !== "bom" || !("bomProducts" in card)) return null;

  return (
    <OutcomeBomMesh
      centerLabel={card.centerLabel}
      products={card.bomProducts}
      reduceMotion={reduceMotion}
    />
  );
}

function AppVisual({ card, reduceMotion }: { card: FeatureCard; reduceMotion: boolean }) {
  if (card.visual !== "app" || !("marqueeRows" in card)) return null;

  return <OutcomeAppMarquee rows={card.marqueeRows} reduceMotion={reduceMotion} />;
}

function CardVisual({ card, reduceMotion }: { card: FeatureCard; reduceMotion: boolean }) {
  if (card.visual === "grc") return <GrcVisual card={card} reduceMotion={reduceMotion} />;
  if (card.visual === "bom") return <BomVisual card={card} reduceMotion={reduceMotion} />;
  if (card.visual === "app") return <AppVisual card={card} reduceMotion={reduceMotion} />;
  return null;
}

export function OutcomeFeatureCards({ cards }: { cards: typeof outcomeFeatureCards }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="outcome-feature-grid mt-14 lg:mt-20">
      {cards.map((card, index) => (
        <ScrollReveal key={card.id} delay={0.42 + index * 0.16} duration={1.05} className="h-full">
          <MagicCard
            gradientColor="rgba(255, 122, 0, 0.16)"
            gradientFrom="#ff7a00"
            gradientTo="#ffd080"
            gradientOpacity={0.7}
            gradientSize={240}
            className="outcome-feature-card group h-full rounded-[20px]"
          >
            <div className="relative z-[1] flex h-full flex-1 flex-col p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.12em] text-grey-muted uppercase">
                    {card.subtitle}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-charcoal lg:text-xl">
                    {card.title}
                  </h3>
                </div>
                <a
                  href={card.ctaHref}
                  aria-label={`Learn more about ${card.title}`}
                  className="outcome-card-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-charcoal transition-all duration-300 group-hover:border-ember/30 group-hover:bg-ember group-hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-grey-light">{card.description}</p>

              <div className="outcome-mockup-wrap mt-6">
                <CardVisual card={card} reduceMotion={!!reduceMotion} />
              </div>
            </div>
          </MagicCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
