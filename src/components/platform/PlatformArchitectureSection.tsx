"use client";

import {
  Atom,
  BookOpen,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  FolderTree,
  Gem,
  Plug,
  Server,
  ShieldCheck,
  Smile,
  Sparkles,
  UserCog,
  Webhook,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { platformPage } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/problem.css";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const { architecture } = platformPage;

const ICONS: Record<string, LucideIcon> = {
  Atom,
  BookOpen,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  FolderTree,
  Gem,
  Plug,
  Server,
  ShieldCheck,
  Smile,
  Sparkles,
  UserCog,
  Webhook,
  Wind,
  Workflow,
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Cmp = ICONS[name] ?? Bot;
  return <Cmp size={size} strokeWidth={1.75} aria-hidden />;
}

type Group = (typeof architecture.left.groups)[number];

function SideColumn({ title, groups }: { title: string; groups: readonly Group[] }) {
  return (
    <div className="platform-arch-col">
      <p className="platform-arch-col-title">{title}</p>
      {groups.map((group) => (
        <div key={group.title} className="platform-arch-card">
          <p className="platform-arch-card-title">{group.title}</p>
          {group.items.map((item) => (
            <div key={item.name} className="platform-arch-item">
              <span className="platform-arch-item-icon" aria-hidden>
                <Icon name={item.icon} />
              </span>
              <span className="platform-arch-item-name">{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function PlatformArchitectureSection() {
  const { left, right, application, core, deployment } = architecture;

  return (
    <section
      id="architecture"
      className="problem-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="platform-arch-heading"
    >
      <div className="problem-mesh" aria-hidden />

      <div className="relative z-[1] grc-section-inner">
        <ScrollReveal duration={0.85}>
          <div className="platform-arch-header">
            <p className="grc-suite-tag platform-arch-eyebrow">
              <span className="grc-suite-tag-dot" aria-hidden />
              {architecture.eyebrow}
            </p>
            <h2 className="grc-suite-headline platform-arch-headline" id="platform-arch-heading">
              <span className="grc-suite-headline-lead">{architecture.headline}</span>{" "}
              <span className="grc-suite-headline-accent">{architecture.headlineAccent}</span>
            </h2>
            <p className="platform-arch-intro">{architecture.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal duration={0.9} delay={0.12}>
          <div className="platform-arch">
            <SideColumn title={left.title} groups={left.groups} />

            <div className="platform-arch-center">
              <div className="platform-arch-app">
                <h3 className="platform-arch-app-title">
                  <Sparkles size={18} strokeWidth={2} aria-hidden />
                  {application.title}
                </h3>
                <div className="platform-arch-app-grid">
                  {application.items.map((item) => (
                    <span key={item} className="platform-arch-app-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="platform-arch-core">
                <span className="platform-arch-core-title">{core.title}</span>
                <div className="platform-arch-pillars">
                  {core.pillars.map((pillar) => (
                    <div key={pillar.name} className="platform-arch-pillar">
                      <div className="platform-arch-pillar-head">
                        <span className="platform-arch-pillar-icon" aria-hidden>
                          <Icon name={pillar.icon} size={22} />
                        </span>
                        <span className="platform-arch-pillar-text">
                          <span className="platform-arch-pillar-name">{pillar.name}</span>
                          <span className="platform-arch-pillar-sub">{pillar.sub}</span>
                        </span>
                      </div>
                      <div className="platform-arch-chips">
                        {pillar.chips.map((chip) => (
                          <span key={chip} className="platform-arch-chip">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="platform-arch-deploy">
                <p className="platform-arch-deploy-title">{deployment.title}</p>
                <div className="platform-arch-deploy-grid">
                  {deployment.items.map((item) => (
                    <span key={item.name} className="platform-arch-deploy-item">
                      <Icon name={item.icon} size={20} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <SideColumn title={right.title} groups={right.groups} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
