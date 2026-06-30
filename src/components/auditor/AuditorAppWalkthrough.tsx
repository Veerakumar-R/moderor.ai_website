"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Download,
  FileSearch,
  FileText,
  Home,
  Lock,
  ShieldCheck,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { auditorApp } from "@/content/auditorWorkbench";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCENE_MS = 4600;
const SCENE_MS_COMPACT = 3600;

type WalkthroughVariant = "full" | "compact";

/* ── animated count-up (restarts each scene mount) ── */
function Count({ to, suffix = "", dur = 950 }: { to: number; suffix?: string; dur?: number }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) {
      setV(to);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur, reduce]);
  return (
    <>
      {v}
      {suffix}
    </>
  );
}

/* ── scene 1 · Dashboard ── */
function SceneDashboard() {
  return (
    <div className="aw-scene">
      <div className="aw-spot" aria-hidden />
      <div className="aw-kpi-row">
        <div className="aw-kpi aw-kpi--accent aw-focus">
          <div className="aw-kpi-label">Audit readiness</div>
          <div className="aw-kpi-val">
            <Count to={96} />
            <span>%</span>
          </div>
          <div className="aw-kpi-delta">
            <ArrowUpRight size={11} strokeWidth={2.8} /> 12% vs Q2
          </div>
          <span className="aw-callout aw-callout--tr">
            <span className="aw-callout-dot">●</span> Board-ready
          </span>
        </div>
        <div className="aw-kpi">
          <div className="aw-kpi-label">Open findings</div>
          <div className="aw-kpi-val">
            <Count to={1} />
          </div>
        </div>
        <div className="aw-kpi">
          <div className="aw-kpi-label">Controls</div>
          <div className="aw-kpi-val">
            <Count to={24} />
          </div>
        </div>
        <div className="aw-kpi">
          <div className="aw-kpi-label">Active audits</div>
          <div className="aw-kpi-val">
            <Count to={6} />
          </div>
        </div>
      </div>

      <div className="aw-dash-row">
        <div className="aw-card">
          <div className="aw-card-head">
            <span className="aw-card-title">Readiness trend</span>
            <span className="aw-card-tag">
              <ArrowUpRight size={10} strokeWidth={2.6} /> +12%
            </span>
          </div>
          <svg className="aw-spark" viewBox="0 0 260 66" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="awSpark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ff7a00" stopOpacity="0.32" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="aw-spark-area"
              d="M0,52 C34,48 54,40 86,38 C118,36 140,26 172,22 C204,18 228,12 260,8 L260,66 L0,66 Z"
              fill="url(#awSpark)"
            />
            <path
              className="aw-spark-line"
              pathLength={1}
              d="M0,52 C34,48 54,40 86,38 C118,36 140,26 172,22 C204,18 228,12 260,8"
            />
            <circle className="aw-spark-dot" cx="260" cy="8" r="3.5" />
          </svg>
        </div>
        <div className="aw-card">
          <div className="aw-card-head">
            <span className="aw-card-title">Coverage</span>
          </div>
          <div className="aw-donut-wrap">
            <svg className="aw-donut" viewBox="0 0 64 64" aria-hidden>
              <circle className="aw-donut-bg" cx="32" cy="32" r="26" />
              <circle
                className="aw-donut-fg"
                cx="32"
                cy="32"
                r="26"
                pathLength={1}
                transform="rotate(-90 32 32)"
              />
              <text className="aw-donut-center" x="32" y="36" textAnchor="middle">
                100%
              </text>
            </svg>
            <div>
              <div className="aw-donut-meta-val">24/24</div>
              <div className="aw-donut-meta-lbl">Controls with evidence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="aw-card" style={{ padding: "4px 13px" }}>
        <div className="aw-sc-list">
          <div className="aw-sc-row">
            <span className="aw-sc-row-ic">
              <ShieldCheck size={15} strokeWidth={2} />
            </span>
            <div className="aw-sc-row-main">
              <div className="aw-sc-row-title">Control AC-6 validated</div>
              <div className="aw-sc-row-sub">2 min ago · automated</div>
            </div>
            <span className="aw-sc-tag aw-sc-tag--ok">
              <Check size={9} strokeWidth={3} /> Pass
            </span>
          </div>
          <div className="aw-sc-row">
            <span className="aw-sc-row-ic">
              <FileSearch size={15} strokeWidth={2} />
            </span>
            <div className="aw-sc-row-main">
              <div className="aw-sc-row-title">AWS Config evidence synced</div>
              <div className="aw-sc-row-sub">5 min ago · MCP</div>
            </div>
            <span className="aw-sc-tag aw-sc-tag--live">
              <span className="aw-sc-tag-dot" /> Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── scene 2 · Audits ── */
function SceneAudits() {
  const rows: { name: string; sub: string; tag: "ok" | "live" | "queued"; label: string; focus?: boolean }[] = [
    { name: "Q3 Access Controls", sub: "NIST 800-53 · due Jul 12", tag: "live", label: "92%", focus: true },
    { name: "Vendor Risk Review", sub: "Quarterly · TPRM", tag: "queued", label: "Scheduled" },
    { name: "SOX ITGC", sub: "FY25 · financial systems", tag: "ok", label: "Complete" },
    { name: "Data Privacy (GDPR)", sub: "EU scope · DSARs", tag: "live", label: "In progress" },
  ];
  return (
    <div className="aw-scene">
      <div className="aw-spot" aria-hidden />
      <div className="aw-d-mini-row">
        <div className="aw-d-mini">
          <div className="aw-d-mini-val">3</div>
          <div className="aw-d-mini-lbl">In progress</div>
        </div>
        <div className="aw-d-mini">
          <div className="aw-d-mini-val">2</div>
          <div className="aw-d-mini-lbl">Scheduled</div>
        </div>
        <div className="aw-d-mini">
          <div className="aw-d-mini-val">1</div>
          <div className="aw-d-mini-lbl">Complete</div>
        </div>
      </div>
      <div className="aw-card" style={{ padding: "4px 13px" }}>
        <div className="aw-sc-list">
          {rows.map((r) => (
            <div key={r.name} className={`aw-sc-row ${r.focus ? "aw-focus" : ""}`}>
              <span className="aw-sc-row-ic">
                <ClipboardCheck size={15} strokeWidth={2} />
              </span>
              <div className="aw-sc-row-main">
                <div className="aw-sc-row-title">{r.name}</div>
                <div className="aw-sc-row-sub">{r.sub}</div>
              </div>
              <span className={`aw-sc-tag aw-sc-tag--${r.tag}`}>
                {r.tag === "ok" && <Check size={9} strokeWidth={3} />}
                {r.tag === "live" && <span className="aw-sc-tag-dot" />}
                {r.label}
              </span>
              {r.focus && <span className="aw-callout aw-callout--tr">On track · due Jul 12</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── scene 3 · Evidence ── */
function SceneEvidence() {
  const conns: { abbr: string; color: string; name: string; meta: string; focus?: boolean }[] = [
    { abbr: "O", color: "#2b66f6", name: "Okta", meta: "IAM logs · Synced" },
    { abbr: "J", color: "#1f6fff", name: "Jira", meta: "Change tickets · Synced" },
    { abbr: "A", color: "#ff9838", name: "AWS", meta: "Config · Live", focus: true },
    { abbr: "W", color: "#0a8754", name: "Workday", meta: "HR records · Synced" },
  ];
  return (
    <div className="aw-scene">
      <div className="aw-spot" aria-hidden />
      <div className="aw-card">
        <div className="aw-card-head">
          <span className="aw-card-title">Evidence collection</span>
          <span className="aw-card-tag">
            <Check size={10} strokeWidth={3} /> Auto
          </span>
        </div>
        <div className="aw-evi-stat">
          <span className="aw-evi-stat-num">
            <Count to={128} />
          </span>
          <span className="aw-evi-stat-lbl">artifacts collected · 0 manual uploads</span>
        </div>
      </div>
      <div className="aw-conn-grid">
        {conns.map((c) => (
          <div key={c.name} className={`aw-conn ${c.focus ? "aw-focus" : ""}`}>
            <span className="aw-conn-logo" style={{ background: c.color }}>
              {c.abbr}
            </span>
            <div className="aw-conn-main">
              <div className="aw-conn-name">{c.name}</div>
              <div className="aw-conn-meta">{c.meta}</div>
            </div>
            <span className={`aw-sc-tag aw-sc-tag--${c.focus ? "live" : "ok"}`}>
              {c.focus ? <span className="aw-sc-tag-dot" /> : <Check size={9} strokeWidth={3} />}
              {c.focus ? "Live" : "Synced"}
            </span>
            {c.focus && <span className="aw-callout aw-callout--tl">Auto-collected via MCP</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── scene 4 · Controls ── */
function SceneControls() {
  const reduce = useReducedMotion();
  const rows: { id: string; name: string; tag: "ok" | "warn"; label: string; focus?: boolean }[] = [
    { id: "AC-2", name: "Account Management", tag: "ok", label: "Pass" },
    { id: "AC-6", name: "Least Privilege", tag: "ok", label: "Pass" },
    { id: "CM-3", name: "Change Control", tag: "warn", label: "Finding", focus: true },
    { id: "AU-12", name: "Audit Logging", tag: "ok", label: "Pass" },
  ];
  return (
    <div className="aw-scene">
      <div className="aw-spot" aria-hidden />
      <div className="aw-card">
        <div className="aw-card-head">
          <span className="aw-card-title">Control validation</span>
          <span className="aw-card-tag" style={{ color: "var(--ember)" }}>
            <Activity size={10} strokeWidth={2.6} /> Running
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "#0a0a0a" }}>
            <Count to={92} />%
          </span>
          <span style={{ fontSize: 10.5, color: "#8a8a8a" }}>22 / 24 controls passing</span>
        </div>
        <div style={{ height: 6, borderRadius: 4, background: "#eee", overflow: "hidden", marginTop: 10 }}>
          <motion.div
            initial={reduce ? false : { width: "8%" }}
            animate={{ width: "92%" }}
            transition={{ duration: 1.2, ease: EASE }}
            style={{ height: "100%", background: "var(--ember)", borderRadius: 4 }}
          />
        </div>
      </div>
      <div className="aw-card" style={{ padding: "4px 13px" }}>
        <div className="aw-sc-list">
          {rows.map((r) => (
            <div key={r.id} className={`aw-sc-row ${r.focus ? "aw-focus" : ""}`}>
              <span
                className="aw-sc-row-ic"
                style={r.focus ? { color: "#d97706", background: "rgba(217,119,6,0.1)" } : undefined}
              >
                {r.focus ? <TriangleAlert size={15} strokeWidth={2} /> : <ShieldCheck size={15} strokeWidth={2} />}
              </span>
              <div className="aw-sc-row-main">
                <div className="aw-sc-row-title">
                  {r.id} {r.name}
                </div>
                <div className="aw-sc-row-sub">{r.focus ? "Routed to owner" : "Validated against policy"}</div>
              </div>
              <span className={`aw-sc-tag aw-sc-tag--${r.tag}`}>
                {r.tag === "ok" && <Check size={9} strokeWidth={3} />}
                {r.label}
              </span>
              {r.focus && <span className="aw-callout aw-callout--tr">Routed · SLA 48h</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── scene 5 · Reports ── */
function SceneReports() {
  return (
    <div className="aw-scene">
      <div className="aw-spot" aria-hidden />
      <div className="aw-sc-report aw-focus" style={{ position: "relative" }}>
        <span className="aw-sc-report-ic">
          <FileText size={18} />
        </span>
        <div className="aw-sc-row-main">
          <div className="aw-sc-row-title">Q3_Access_Audit.pdf</div>
          <div className="aw-sc-row-sub">PDF · 2.4 MB · 24 controls</div>
        </div>
        <span className="aw-sc-tag aw-sc-tag--ok">
          <Check size={9} strokeWidth={3} /> Verified
        </span>
        <span className="aw-callout aw-callout--tr">Evidence linked · Board-ready</span>
      </div>
      <div className="aw-rep-secs">
        {["Scope & objectives", "Evidence index", "Findings & risk", "Sign-off trail"].map((s) => (
          <div key={s} className="aw-rep-sec">
            <span className="aw-rep-sec-ic">
              <Check size={10} strokeWidth={3} />
            </span>
            {s}
          </div>
        ))}
      </div>
      <div className="aw-d-cta">
        <Download size={14} strokeWidth={2.4} /> Export audit report
      </div>
    </div>
  );
}

const SCENES: { menu: string; sub: string; Icon: LucideIcon; render: () => ReactNode }[] = [
  { menu: "Dashboard", sub: "FY26 audit program", Icon: Home, render: SceneDashboard },
  { menu: "Audits", sub: "6 active engagements", Icon: ClipboardCheck, render: SceneAudits },
  { menu: "Evidence", sub: "Auto-collected from sources", Icon: FileSearch, render: SceneEvidence },
  { menu: "Controls", sub: "NIST 800-53 · 24 controls", Icon: ShieldCheck, render: SceneControls },
  { menu: "Reports", sub: "Audit-ready exports", Icon: FileText, render: SceneReports },
];

export function AuditorAppWalkthrough({ variant = "full" }: { variant?: WalkthroughVariant }) {
  const compact = variant === "compact";
  const sceneMs = compact ? SCENE_MS_COMPACT : SCENE_MS;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const navRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [cursorTop, setCursorTop] = useState<number | null>(null);

  useEffect(() => {
    if (reduce) return;
    const id = globalThis.setInterval(() => {
      setIndex((i) => (i + 1) % SCENES.length);
    }, sceneMs);
    return () => globalThis.clearInterval(id);
  }, [reduce, sceneMs]);

  useEffect(() => {
    const el = navRefs.current[index];
    if (el) setCursorTop(el.offsetTop + el.offsetHeight / 2 - 8);
  }, [index]);

  const scene = SCENES[index];
  const Scene = scene.render;

  return (
    <div
      className={`aw-web${compact ? " aw-web--compact" : ""}`}
      data-scene={compact ? index : undefined}
      style={compact ? ({ "--aw-scene": `${sceneMs}ms` } as CSSProperties) : undefined}
      role="img"
      aria-label="Auditor Workbench web app walkthrough across Dashboard, Audits, Evidence, Controls and Reports."
    >
      {/* browser chrome */}
      <div className="aw-web-bar" aria-hidden>
        <div className="aw-web-dots">
          <span className="aw-web-dot aw-web-dot--r" />
          <span className="aw-web-dot aw-web-dot--y" />
          <span className="aw-web-dot aw-web-dot--g" />
        </div>
        <span className="aw-web-url">
          <span className="aw-web-url-lock">
            <Lock size={compact ? 9 : 11} strokeWidth={2.4} />
          </span>
          {compact ? "moderor.ai/workbench" : "app.moderor.ai/auditor-workbench"}
        </span>
        <span className="aw-web-bar-spacer" />
      </div>

      <div className="aw-web-body">
        {/* sidebar */}
        <aside className="aw-web-side" aria-hidden>
          <div className="aw-web-side-logo">
            <span className="aw-web-side-logo-mark">
              <ShieldCheck size={compact ? 13 : 15} strokeWidth={2.4} />
            </span>
            {!compact && <span className="aw-web-side-logo-text">{auditorApp.name}</span>}
          </div>
          {SCENES.map((s, i) => (
            <span
              key={s.menu}
              ref={(el) => {
                navRefs.current[i] = el;
              }}
              className={`aw-web-nav-item ${i === index ? "is-active" : ""}`}
              title={compact ? s.menu : undefined}
            >
              {i === index && (
                <motion.span
                  layoutId={compact ? "awNavActiveCompact" : "awNavActive"}
                  className="aw-web-nav-active"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="aw-web-nav-inner">
                <s.Icon size={compact ? 14 : 15} strokeWidth={2} />
                {!compact && s.menu}
              </span>
            </span>
          ))}
          {!compact && (
            <span className="aw-web-side-foot">
              <span className="aw-web-side-foot-dot" />
              Human-in-the-loop
            </span>
          )}

          {!reduce && cursorTop != null && (
            <motion.div
              className="aw-cursor"
              animate={{ top: cursorTop }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <svg viewBox="0 0 16 16">
                <path
                  d="M2 1.5 2 12.5 5.3 9.4 7.4 14 9.5 13.1 7.4 8.6 12 8.6Z"
                  fill="#0a0a0a"
                  stroke="#fff"
                  strokeWidth="0.9"
                  strokeLinejoin="round"
                />
              </svg>
              <span key={index} className="aw-cursor-ping" />
            </motion.div>
          )}
        </aside>

        {/* main panel */}
        <div className="aw-web-main">
          <div className="aw-web-head">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={reduce ? false : compact ? { opacity: 0, x: 10 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={reduce ? undefined : compact ? { opacity: 0, x: -8 } : { opacity: 0, y: -6 }}
                transition={{ duration: compact ? 0.32 : 0.3 }}
              >
                <div className="aw-web-title">{scene.menu}</div>
                <div className="aw-web-sub">{scene.sub}</div>
              </motion.div>
            </AnimatePresence>
            <span className="aw-web-live">
              <span className="aw-web-live-dot" /> Live
            </span>
          </div>

          <div className="aw-stage">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={
                  reduce
                    ? false
                    : compact
                      ? { opacity: 0, x: 10 }
                      : { opacity: 0, scale: 1.05, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={
                  reduce
                    ? undefined
                    : compact
                      ? { opacity: 0, x: -8 }
                      : { opacity: 0, scale: 0.96, filter: "blur(6px)" }
                }
                transition={{ duration: compact ? 0.34 : 0.5, ease: EASE }}
                style={{ height: "100%" }}
              >
                <Scene />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* video-style timeline scrubber */}
          <div className="aw-wt-timeline" aria-hidden>
            {SCENES.map((s, i) => (
              <div
                key={s.menu}
                className={`aw-wt-seg ${i < index ? "is-done" : ""} ${i === index ? "is-active" : ""}`}
              >
                <div className="aw-wt-seg-track">
                  <span />
                </div>
                <div className="aw-wt-seg-label">{s.menu}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
