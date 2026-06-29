"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { problemContent } from "@/content/site";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import DotGrid from "./DotGrid";
import "./problem.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const listVar: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const rowVar: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type VisualProps = { reduceMotion: boolean };

/* ── tiny inline icons ── */
const Check = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2.4 6.2 5 8.6 9.6 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DlIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M6 1.6v5.4m0 0 2.1-2.1M6 7 3.9 4.9M2.6 9.9h6.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 1.5h5L13 5.5v9H4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M8.6 1.7V5.4H12.6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);
const Cursor = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M2 1.5 2 12.5 5.3 9.4 7.4 14 9.5 13.1 7.4 8.6 12 8.6Z" fill="#1c1c1c" stroke="#fff" strokeWidth="0.9" strokeLinejoin="round" />
  </svg>
);
const Shield = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 2.2 13 4.2v3.6c0 3-2 5.1-5 6-3-.9-5-3-5-6V4.2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const Lock = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="3.6" y="7" width="8.8" height="6.4" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M5.6 7V5.2a2.4 2.4 0 0 1 4.8 0V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const Server = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="2.6" y="3" width="10.8" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    <rect x="2.6" y="9" width="10.8" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="11.4" cy="5" r="0.8" fill="currentColor" />
    <circle cx="11.4" cy="11" r="0.8" fill="currentColor" />
  </svg>
);

/* ── illustrated profile avatar ── */
type AvatarCfg = { bg: string; skin: string; hair: string; shirt: string; long?: boolean; beard?: boolean };

function Avatar({ cfg }: { cfg: AvatarCfg }) {
  return (
    <svg viewBox="0 0 40 40" className="pm-gov-avatar-svg" aria-hidden>
      <rect width="40" height="40" rx="11" fill={cfg.bg} />
      {cfg.long && <path d="M11.8 15.5h2.4V27h-2.4zM25.8 15.5h2.4V27h-2.4z" fill={cfg.hair} />}
      <path d="M5 40c0-9.5 6.5-14.2 15-14.2S35 30.5 35 40z" fill={cfg.shirt} />
      <circle cx="20" cy="17.5" r="8" fill={cfg.skin} />
      {cfg.beard && (
        <path d="M13 19c0 5.5 3 8.5 7 8.5s7-3 7-8.5c0 3.5-3 5-7 5s-7-1.5-7-5z" fill={cfg.hair} opacity="0.92" />
      )}
      <path d="M11.8 18C11.2 10.5 15.5 7 20 7s8.8 3.5 8.2 11c-1.4-4.8-4-6.8-8.2-6.8s-6.8 2-8.2 6.8z" fill={cfg.hair} />
    </svg>
  );
}

/* ── Governance: live exception-routing console ── */
const GOV_ROWS: { name: string; sub: string; avatar: AvatarCfg }[] = [
  { name: "Priya Sharma", sub: "SOD breach · Finance", avatar: { bg: "#ffe4cf", skin: "#e8b48c", hair: "#2e1f1a", shirt: "#ff8a4c", long: true } },
  { name: "Arjun Mehta", sub: "Vendor risk · ACME-442", avatar: { bg: "#dde8ff", skin: "#d9a06e", hair: "#1f1712", shirt: "#4f7df0", beard: true } },
  { name: "Lena Cruz", sub: "PII access · Support", avatar: { bg: "#f0e4ff", skin: "#f0c9a8", hair: "#8a4b2a", shirt: "#9b6be8", long: true } },
  { name: "Marco Diaz", sub: "Model drift · Pricing", avatar: { bg: "#dff3e4", skin: "#d9a877", hair: "#3a2a1c", shirt: "#36a85e" } },
];

const AGENT_STEPS = ["Scanning control matrix", "Validating against policy", "Matching named owner"];

function GovernanceVisual({ reduceMotion }: VisualProps) {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(247);
  const [agentStep, setAgentStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setActive((a) => (a + 1) % GOV_ROWS.length);
      setCount((c) => c + 1);
    }, 2600);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    setAgentStep(0);
    const id = globalThis.setInterval(() => {
      setAgentStep((s) => Math.min(s + 1, AGENT_STEPS.length - 1));
    }, 650);
    return () => globalThis.clearInterval(id);
  }, [active, reduceMotion]);

  return (
    <div className="pm-gov">
      <div className="pm-gov-head">
        <span className="pm-gov-head-title">Exception routing</span>
        <span className="pm-gov-live">
          <span className="pm-gov-live-dot" aria-hidden />
          {count.toLocaleString()} routed
        </span>
      </div>

      <motion.div
        className="pm-gov-list"
        variants={reduceMotion ? undefined : listVar}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {GOV_ROWS.map((r, i) => {
          const state = reduceMotion ? "ok" : i < active ? "ok" : i === active ? "wait" : "queued";
          const reviewing = state === "wait";
          return (
            <motion.div
              key={r.name}
              className={`pm-gov-row ${reviewing ? "pm-gov-row--active" : ""}`}
              variants={reduceMotion ? undefined : rowVar}
            >
              <div className="pm-gov-row-head">
                <span className="pm-gov-avatar" aria-hidden>
                  <Avatar cfg={r.avatar} />
                </span>
                <span className="pm-gov-row-info">
                  <span className="pm-gov-row-name">{r.name}</span>
                  <span className="pm-gov-row-sub">{r.sub}</span>
                </span>
                <motion.span
                  key={state}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`pm-gov-status pm-gov-status--${state}`}
                >
                  {state === "ok" && (
                    <>
                      <Check />
                      Approved
                    </>
                  )}
                  {state === "wait" && (
                    <>
                      <span className="pm-gov-status-dot" aria-hidden />
                      Reviewing
                    </>
                  )}
                  {state === "queued" && "Queued"}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {reviewing && (
                  <motion.div
                    className="pm-gov-agent"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <div className="pm-gov-agent-inner">
                      <span className="pm-gov-agent-spin" aria-hidden />
                      <span className="pm-gov-agent-text">{AGENT_STEPS[agentStep]}…</span>
                      <span className="pm-gov-agent-dots" aria-hidden>
                        {AGENT_STEPS.map((_, di) => (
                          <span key={di} className={`pm-gov-agent-dot ${di <= agentStep ? "is-on" : ""}`} />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="pm-gov-foot">
        <span className="pm-gov-foot-check" aria-hidden>
          <Check />
        </span>
        100% routed to a named owner · 0 anonymous
      </div>
    </div>
  );
}

/* ── Compliance: audit trail verifying sequentially ── */
const TRAIL: [string, string][] = [
  ["Model used", "GPT-4o"],
  ["Data touched", "PII masked"],
  ["Human sign-off", "J. Patel"],
  ["Outcome", "Logged"],
];
// stages: 0-3 verify · 4 verified · 5 cursor→download · 6 downloading · 7 downloaded
const TRAIL_DUR = [600, 600, 600, 600, 1000, 1100, 1350, 1700];

function ComplianceVisual({ reduceMotion }: VisualProps) {
  const [stage, setStage] = useState(reduceMotion ? 4 : 0);

  useEffect(() => {
    if (reduceMotion) return;
    let cur = 0;
    let t = globalThis.setTimeout(function step() {
      cur = (cur + 1) % 8;
      setStage(cur);
      t = globalThis.setTimeout(step, TRAIL_DUR[cur]);
    }, TRAIL_DUR[0]);
    return () => globalThis.clearTimeout(t);
  }, [reduceMotion]);

  const verified = stage >= 4;

  return (
    <div className="pm-audit">
      <div className="pm-audit-head">
        <span className="pm-audit-title">Audit trail</span>
        <motion.span
          key={verified ? "v" : "p"}
          initial={reduceMotion ? false : { opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={`pm-audit-export ${verified ? "pm-audit-export--2" : ""}`}
        >
          {!verified && (
            <>
              <span className="pm-audit-spinner" aria-hidden />
              Verifying
            </>
          )}
          {verified && (
            <>
              <Check />
              Verified
            </>
          )}
        </motion.span>
      </div>

      <ul className="pm-audit-list">
        {TRAIL.map(([k, v], i) => {
          const done = reduceMotion || stage > i || stage >= 4;
          const isActive = !reduceMotion && stage === i;
          return (
            <li key={k} className={`pm-audit-row ${done ? "is-done" : ""} ${isActive ? "is-active" : ""}`}>
              <span className="pm-audit-box" aria-hidden>
                {done && <Check />}
              </span>
              <span className="pm-audit-key">{k}</span>
              <span className="pm-audit-val">{v}</span>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {stage >= 5 && !reduceMotion && (
          <motion.div
            className="pm-dl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden
          >
            <motion.div
              className="pm-dl-card"
              initial={{ scale: 0.9, y: 6, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <span className="pm-dl-fileicon" aria-hidden>
                <FileIcon />
              </span>
              <span className="pm-dl-fileinfo">
                <span className="pm-dl-fname">audit_log.pdf</span>
                <span className="pm-dl-fmeta">PDF · 248 KB</span>
              </span>
              <div className={`pm-dl-cta ${stage === 7 ? "is-done" : ""}`}>
                {stage === 6 && (
                  <motion.span
                    key="bar"
                    className="pm-dl-bar"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                    aria-hidden
                  />
                )}
                <span className="pm-dl-cta-icon">
                  {stage === 5 && <DlIcon />}
                  {stage === 6 && <span className="pm-dl-spin" aria-hidden />}
                  {stage === 7 && <Check />}
                </span>
              </div>
            </motion.div>

            <motion.span
              className="pm-dl-cursor"
              initial={{ x: 22, y: 20, opacity: 0, scale: 1 }}
              animate={
                stage === 5
                  ? { x: 4, y: 2, opacity: 1, scale: 1 }
                  : stage === 6
                    ? { x: 4, y: [2, 6, 2], opacity: 1, scale: [1, 0.8, 1] }
                    : { x: 10, y: 7, opacity: 0.85, scale: 1 }
              }
              transition={{ duration: stage === 6 ? 0.5 : 0.85, ease: EASE }}
            >
              <Cursor />
            </motion.span>

            {stage === 6 && <span className="pm-dl-ripple" aria-hidden />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Production scale: enforced controls (cycling focus) ── */
function ScaleVisual({ reduceMotion }: VisualProps) {
  const items: { icon: React.ReactNode; label: string; status: string }[] = [
    { icon: <Shield />, label: "SOD controls", status: "Active" },
    { icon: <Lock />, label: "Masked credentials", status: "Active" },
    { icon: <Server />, label: "Air-gapped option", status: "Ready" },
  ];
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setFocus((f) => (f + 1) % items.length);
    }, 1700);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion, items.length]);

  return (
    <motion.div
      className="pm-scale"
      variants={reduceMotion ? undefined : listVar}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          className={`pm-scale-row ${i === focus && !reduceMotion ? "pm-scale-row--active" : ""}`}
          variants={reduceMotion ? undefined : rowVar}
        >
          <span className="pm-scale-icon" aria-hidden>
            {it.icon}
          </span>
          <span className="pm-scale-label">{it.label}</span>
          <span className="pm-scale-status">
            <span className="pm-scale-dot" aria-hidden />
            {it.status}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ConcludeTyping({
  closing,
  boldParts,
  reduceMotion,
}: {
  closing: string;
  boldParts: string[];
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.5 });

  const segs = [
    { t: closing },
    { br: true },
    { t: boldParts[0] ?? "", bold: true },
    { t: "Moderor", bold: true, em: true },
    { t: boldParts[1] ?? "", bold: true },
  ];
  const total = segs.reduce((n, s) => n + (s.br ? 1 : (s.t?.length ?? 0)), 0);
  const fullText = `${closing}\n${boldParts[0] ?? ""}Moderor${boldParts[1] ?? ""}`;

  const [count, setCount] = useState(reduceMotion ? total : 0);

  useEffect(() => {
    if (reduceMotion) {
      setCount(total);
      return;
    }
    if (!inView) {
      setCount(0);
      return;
    }

    const CHAR_MS = 34;
    const PAUSE_FULL_MS = 2400;
    const DELETE_MS = 22;
    const PAUSE_EMPTY_MS = 500;

    let c = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof globalThis.setTimeout>;

    const schedule = (ms: number, fn: () => void) => {
      timeoutId = globalThis.setTimeout(fn, ms);
    };

    const tick = () => {
      if (!deleting) {
        if (c < total) {
          c += 1;
          setCount(c);
          schedule(CHAR_MS, tick);
        } else {
          schedule(PAUSE_FULL_MS, () => {
            deleting = true;
            tick();
          });
        }
      } else if (c > 0) {
        c -= 1;
        setCount(c);
        schedule(DELETE_MS, tick);
      } else {
        deleting = false;
        schedule(PAUSE_EMPTY_MS, tick);
      }
    };

    setCount(0);
    tick();

    return () => globalThis.clearTimeout(timeoutId);
  }, [inView, reduceMotion, total]);

  let offset = 0;
  const nodes: React.ReactNode[] = [];
  segs.forEach((s, i) => {
    const len = s.br ? 1 : (s.t?.length ?? 0);
    const shown = Math.max(0, Math.min(len, count - offset));
    if (s.br) {
      if (shown > 0) nodes.push(<br key={`br-${i}`} />);
    } else if (shown > 0) {
      const txt = s.t!.slice(0, shown);
      if (s.em) {
        nodes.push(
          <strong key={i} className="problem-conclude-bold problem-conclude-em">
            {txt}
          </strong>,
        );
      } else if (s.bold) {
        nodes.push(
          <strong key={i} className="problem-conclude-bold">
            {txt}
          </strong>,
        );
      } else {
        nodes.push(<span key={i}>{txt}</span>);
      }
    }
    offset += len;
  });

  return (
    <p className="problem-conclude-text" ref={ref} aria-live="polite">
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {nodes}
        {!reduceMotion && <span className="problem-conclude-caret" />}
      </span>
    </p>
  );
}

function ProblemCard({
  title,
  description,
  className,
  children,
  reduceMotion,
}: {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className={`problem-card ${className ?? ""}`}
      variants={cardVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`problem-mock ${className === "problem-card--lg" ? "problem-mock--lg" : ""}`}>{children}</div>
      <div className="problem-card-main">
        <h3 className="problem-card-title">{title}</h3>
        <p className="problem-card-desc">{description}</p>
      </div>
    </motion.article>
  );
}

export function ProblemSection() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;
  const [governance, compliance, scale] = problemContent.cards;
  const boldParts = problemContent.closingBold.split("Moderor");

  return (
    <section
      id="the-problem"
      className="problem-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="problem-mesh" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-[1400px]">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{problemContent.label}</SectionLabel>
        </ScrollReveal>

        <div className="problem-grid">
          <ScrollReveal duration={0.85} delay={0.08} className="problem-left min-w-0">
            <h2 className="problem-headline">
              <span className="block">{problemContent.title}</span>
              <span className="block text-ember">{problemContent.titleLine2}</span>
            </h2>

            <p className="problem-lead-intro">{problemContent.intro}</p>

            <div className="problem-conclude">
              {!rm && (
                <div className="problem-conclude-dots" aria-hidden>
                  <DotGrid
                    dotSize={4}
                    gap={16}
                    baseColor="#3a2c20"
                    activeColor="#ff7a00"
                    proximity={100}
                    shockRadius={200}
                    shockStrength={4}
                    resistance={750}
                    returnDuration={1.4}
                  />
                </div>
              )}
              <p className="problem-conclude-body">{problemContent.body}</p>
              <div className="problem-conclude-statement">
                <span className="problem-conclude-rule" aria-hidden />
                <ConcludeTyping closing={problemContent.closing} boldParts={boldParts} reduceMotion={rm} />
              </div>
            </div>
          </ScrollReveal>

          <div className="problem-bento min-w-0">
            <ProblemCard
              title={governance.title}
              description={governance.description}
              className="problem-card--lg"
              reduceMotion={rm}
            >
              <GovernanceVisual reduceMotion={rm} />
            </ProblemCard>

            <ProblemCard title={compliance.title} description={compliance.description} reduceMotion={rm}>
              <ComplianceVisual reduceMotion={rm} />
            </ProblemCard>

            <ProblemCard title={scale.title} description={scale.description} reduceMotion={rm}>
              <ScaleVisual reduceMotion={rm} />
            </ProblemCard>
          </div>
        </div>
      </div>
    </section>
  );
}
