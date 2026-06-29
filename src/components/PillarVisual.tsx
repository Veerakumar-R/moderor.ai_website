"use client";

type PillarVisualType = "auth" | "policy" | "trace" | "audit";

export function PillarVisual({ type }: { type: PillarVisualType }) {
  if (type === "auth") return <AuthVisual />;
  if (type === "policy") return <PolicyVisual />;
  if (type === "trace") return <TraceVisual />;
  return <AuditVisual />;
}

function AuthVisual() {
  return (
    <div className="gov-visual gov-visual--auth">
      <span className="gov-ripple gov-ripple--1" aria-hidden />
      <span className="gov-ripple gov-ripple--2" aria-hidden />
      <span className="gov-ripple gov-ripple--3" aria-hidden />
      <span className="gov-fp-wrap" aria-hidden>
        <svg
          viewBox="0 0 24 24"
          className="gov-fingerprint"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path className="gov-fp-line gov-fp-1" d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
          <path className="gov-fp-line gov-fp-2" d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
          <path className="gov-fp-line gov-fp-3" d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
          <path className="gov-fp-line gov-fp-4" d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
          <path className="gov-fp-line gov-fp-5" d="M8.65 22c.21-.66.45-1.32.57-2" />
          <path className="gov-fp-line gov-fp-6" d="M14 13.12c0 2.38 0 6.38-1 8.88" />
          <path className="gov-fp-line gov-fp-7" d="M21.8 16c.2-2 .131-5.354 0-6" />
          <path className="gov-fp-line gov-fp-8" d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
        </svg>
        <span className="gov-fp-scan" />
        <span className="gov-fp-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </span>
    </div>
  );
}

function PolicyVisual() {
  return (
    <div className="gov-visual gov-visual--policy">
      <div className="gov-chart-panel">
        <div className="gov-policy-bars" aria-hidden>
          <span className="gov-bar gov-bar--1" />
          <span className="gov-bar gov-bar--2" />
          <span className="gov-bar gov-bar--3" />
          <span className="gov-bar gov-bar--4" />
        </div>
        <svg viewBox="0 0 140 28" className="gov-chart-line" aria-hidden>
          <path
            className="gov-line-draw"
            d="M4 22 L28 18 L52 20 L76 12 L100 14 L124 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="gov-badge-float" aria-hidden>
        <svg viewBox="0 0 24 24" className="gov-svg gov-svg--policy" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polyline points="4 17 9 12 13 15 20 8" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="15 8 20 8 20 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function TraceVisual() {
  // A connected lineage chain: model → data → approver → outcome
  const trace = "M22 40 H52 L70 80 H100";
  const nodes = [
    { cx: 22, cy: 40 },
    { cx: 52, cy: 40 },
    { cx: 70, cy: 80 },
    { cx: 100, cy: 80 },
  ];

  return (
    <div className="gov-visual gov-visual--trace">
      <svg viewBox="0 0 120 120" className="gov-trace-scene" aria-hidden>
        <path
          className="gov-trace-base"
          d={trace}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.18"
        />
        <path
          className="gov-trace-draw"
          d={trace}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="gov-trace-flow"
          d={trace}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {nodes.map((node, i) => (
          <g key={`trace-node-${i}`} className={`gov-trace-node gov-trace-node--${i + 1}`}>
            <circle cx={node.cx} cy={node.cy} r="7.5" fill="#0c0a08" stroke="currentColor" strokeWidth="2" />
            <circle className="gov-trace-node-core" cx={node.cx} cy={node.cy} r="2.6" fill="currentColor" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function AuditVisual() {
  return (
    <div className="gov-visual gov-visual--audit">
      <div className="gov-audit-frame">
        <span className="gov-corner gov-corner--tl" aria-hidden />
        <span className="gov-corner gov-corner--tr" aria-hidden />
        <span className="gov-corner gov-corner--bl" aria-hidden />
        <span className="gov-corner gov-corner--br" aria-hidden />
        <span className="gov-scan-beam" aria-hidden />
        <svg viewBox="0 0 80 88" className="gov-audit-shield" aria-hidden>
          <path
            className="gov-stroke-draw"
            d="M40 8 L68 20 V44 C68 62 56 74 40 80 C24 74 12 62 12 44 V20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path className="gov-check-draw" d="M28 44 L36 52 L52 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="gov-audit-glow-line" aria-hidden />
      </div>
    </div>
  );
}
