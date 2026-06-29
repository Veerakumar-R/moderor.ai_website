"use client";

import type { CSSProperties } from "react";
import type { infrastructureCards } from "@/content/site";

type InfraCard = (typeof infrastructureCards)[number];

export function InfrastructureNodeVisual({ card }: { card: InfraCard }) {
  if (card.visual === "deploy" && "checklist" in card) {
    return (
      <div className="infra-node-mock">
        <p className="infra-node-mock-label">Deployment status</p>
        <ul className="infra-node-checklist">
          {card.checklist.map((item, i) => (
            <li key={item} className="infra-node-check-item" style={{ "--item-delay": `${i * 0.15}s` } as CSSProperties}>
              <span className="infra-node-check-icon" aria-hidden>
                <svg viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2 6 L5 9 L10 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.visual === "workflow" && "workflow" in card) {
    return (
      <div className="infra-node-mock">
        <p className="infra-node-mock-label">Integration flow</p>
        <div className="infra-node-workflow">
          {card.workflow.map((step, i) => (
            <div key={step} className="infra-node-workflow-step">
              <span className="infra-node-workflow-node">{step}</span>
              {i < card.workflow.length - 1 ? (
                <span className="infra-node-workflow-line" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (card.visual === "analytics" && "metric" in card) {
    return (
      <div className="infra-node-mock">
        <p className="infra-node-mock-label">Regional coverage</p>
        <div className="infra-node-bars" aria-hidden>
          <span className="infra-node-bar infra-node-bar--1" />
          <span className="infra-node-bar infra-node-bar--2" />
          <span className="infra-node-bar infra-node-bar--3" />
          <span className="infra-node-bar infra-node-bar--4" />
        </div>
        <div className="infra-node-metric">
          <span className="infra-node-metric-val">{card.metric}</span>
          <span className="infra-node-metric-lbl">{card.metricLabel}</span>
        </div>
      </div>
    );
  }

  if (card.visual === "insights" && "insights" in card) {
    return (
      <div className="infra-node-mock">
        <p className="infra-node-mock-label">Perimeter controls</p>
        <div className="infra-node-pills">
          {card.insights.map((pill) => (
            <span key={pill} className="infra-node-pill">
              <span className="infra-node-pill-dot" aria-hidden />
              {pill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
