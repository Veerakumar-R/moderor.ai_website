"use client";

import { useReducedMotion } from "framer-motion";

type ControlRadarVisual = {
  type: "control-radar";
  panelTitle: string;
  statusLabel: string;
  metrics: { label: string; value: string }[];
  blips: { angle: number; distance: number; status: "healthy" | "warning" | "critical" }[];
};

type ApprovalFlowVisual = {
  type: "approval-flow";
  steps: {
    title: string;
    detail: string;
    state: "complete" | "active" | "queued";
    initials?: string;
    assignee?: string;
  }[];
};

type AssistantVisual = {
  type: "assistant";
  panelTitle: string;
  userMessage: string;
  assistantMessage: string;
  actionLabel: string;
  placeholder: string;
};

type FeatureVisualType = ControlRadarVisual["type"] | ApprovalFlowVisual["type"] | AssistantVisual["type"];

function blipPosition(angle: number, distance: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  const radius = distance * 0.42;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function GrcAiControlRadarVisual({ visual }: { visual: ControlRadarVisual }) {
  const reduceMotion = useReducedMotion();
  const { panelTitle, statusLabel, metrics, blips } = visual;

  return (
    <div className="grc-ai-panel">
      <span className="grc-ai-mockup-sheen" aria-hidden />
      <div className="grc-ai-radar-head">
        <p className="grc-ai-radar-title">{panelTitle}</p>
        <span className="grc-ai-radar-live">
          <span className="grc-ai-radar-live-dot" aria-hidden />
          {statusLabel}
        </span>
      </div>

      <div className="grc-ai-radar-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="grc-ai-radar-metric">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="grc-ai-radar-stage">
        <span className="grc-ai-radar-ring grc-ai-radar-ring--1" aria-hidden />
        <span className="grc-ai-radar-ring grc-ai-radar-ring--2" aria-hidden />
        <span className="grc-ai-radar-ring grc-ai-radar-ring--3" aria-hidden />
        <span
          className={`grc-ai-radar-sweep${reduceMotion ? "" : " grc-ai-radar-sweep--spin"}`}
          aria-hidden
        />
        <span className="grc-ai-radar-core" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </span>

        {blips.map((blip, index) => (
          <span
            key={`${blip.angle}-${blip.distance}`}
            className={`grc-ai-radar-blip grc-ai-radar-blip--${blip.status}${reduceMotion ? "" : " grc-ai-radar-blip--pulse"}`}
            style={{
              ...blipPosition(blip.angle, blip.distance),
              animationDelay: reduceMotion ? undefined : `${index * 0.35}s`,
            }}
            aria-hidden
          />
        ))}
      </div>

      <div className="grc-ai-radar-legend" aria-hidden>
        <span className="grc-ai-radar-legend-item">
          <i className="grc-ai-radar-legend-dot grc-ai-radar-legend-dot--healthy" />
          Healthy
        </span>
        <span className="grc-ai-radar-legend-item">
          <i className="grc-ai-radar-legend-dot grc-ai-radar-legend-dot--warning" />
          At risk
        </span>
        <span className="grc-ai-radar-legend-item">
          <i className="grc-ai-radar-legend-dot grc-ai-radar-legend-dot--critical" />
          Critical
        </span>
      </div>
    </div>
  );
}

function stepIcon(state: ApprovalFlowVisual["steps"][number]["state"]) {
  if (state === "complete") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (state === "active") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  );
}

export function GrcAiApprovalFlowVisual({ visual }: { visual: ApprovalFlowVisual }) {
  const reduceMotion = useReducedMotion();
  const { steps } = visual;

  return (
    <div className="grc-ai-panel grc-ai-panel--flow">
      <span className="grc-ai-mockup-sheen" aria-hidden />
      <div className="grc-ai-flow">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`grc-ai-flow-step grc-ai-flow-step--${step.state}${reduceMotion ? "" : " grc-ai-flow-step--enter"}`}
            style={reduceMotion ? undefined : { animationDelay: `${0.12 + index * 0.14}s` }}
          >
            <div className="grc-ai-flow-rail" aria-hidden>
              <span className={`grc-ai-flow-node grc-ai-flow-node--${step.state}`}>
                {step.initials ? (
                  <span className="grc-ai-flow-avatar">{step.initials}</span>
                ) : (
                  stepIcon(step.state)
                )}
              </span>
              {index < steps.length - 1 ? (
                <span
                  className={`grc-ai-flow-connector${step.state === "complete" && !reduceMotion ? " grc-ai-flow-connector--active" : ""}`}
                />
              ) : null}
            </div>

            <div className="grc-ai-flow-copy">
              <div className="grc-ai-flow-head">
                <p className="grc-ai-flow-title">{step.title}</p>
                <span className={`grc-ai-flow-badge grc-ai-flow-badge--${step.state}`}>
                  {step.state === "complete" ? "Done" : step.state === "active" ? "In review" : "Queued"}
                </span>
              </div>
              <p className="grc-ai-flow-detail">{step.detail}</p>
              {step.assignee ? (
                <p className="grc-ai-flow-assignee">{step.assignee}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GrcAiAssistantVisual({ visual }: { visual: AssistantVisual }) {
  const reduceMotion = useReducedMotion();
  const { panelTitle, userMessage, assistantMessage, actionLabel, placeholder } = visual;

  return (
    <div className="grc-ai-assistant">
      <div className="grc-ai-assistant-head">
        <p className="grc-ai-assistant-title">{panelTitle}</p>
        <button type="button" className="grc-ai-assistant-menu" tabIndex={-1} aria-label="More options">
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="grc-ai-assistant-thread">
        <div className={`grc-ai-assistant-bubble grc-ai-assistant-bubble--user${reduceMotion ? "" : " grc-ai-assistant-bubble--in"}`}>
          {userMessage}
        </div>

        <div className={`grc-ai-assistant-row${reduceMotion ? "" : " grc-ai-assistant-row--in"}`}>
          <span className="grc-ai-assistant-avatar" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3 4 9v10h16V9l-8-6Z" strokeLinejoin="round" />
              <path d="M9 14h6M12 11v6" strokeLinecap="round" />
            </svg>
          </span>
          <div className="grc-ai-assistant-bubble grc-ai-assistant-bubble--ai">{assistantMessage}</div>
        </div>
      </div>

      <div className="grc-ai-assistant-compose">
        <div className="grc-ai-assistant-input">{placeholder}</div>
        <div className="grc-ai-assistant-footer">
          <button type="button" className="grc-ai-assistant-action" tabIndex={-1}>
            {actionLabel}
          </button>
          <div className="grc-ai-assistant-tools" aria-hidden>
            <span className="grc-ai-assistant-tool">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v18M8 8v8M16 6v12" strokeLinecap="round" />
              </svg>
            </span>
            <span className="grc-ai-assistant-tool">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m16 8-8 8M8 8h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="grc-ai-assistant-tool">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <span className="grc-ai-assistant-send" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function GrcAiFeatureIcon({ variant }: { variant: FeatureVisualType }) {
  return (
    <span className="grc-ai-feature-icon" aria-hidden>
      {variant === "control-radar" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      ) : variant === "approval-flow" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 6h8M8 12h5M8 18h8" strokeLinecap="round" />
          <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
          <path d="M16 9h2v2h-2z" fill="currentColor" stroke="none" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 10h8M8 14h5" strokeLinecap="round" />
          <path d="M6 4h12a2 2 0 0 1 2 2v12l-4-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}
