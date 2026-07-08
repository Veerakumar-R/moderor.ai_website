"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function SceneBackdrop() {
  return (
    <>
      <span className="ciq-gov-scene-backdrop" aria-hidden />
      <span className="ciq-gov-scene-orb ciq-gov-scene-orb--left" aria-hidden />
      <span className="ciq-gov-scene-orb ciq-gov-scene-orb--right" aria-hidden />
    </>
  );
}

function ZeroTrustScene({ reduceMotion }: { reduceMotion: boolean }) {
  const controls = [
    { label: "MFA enforced", active: true },
    { label: "SSO + RBAC", active: true },
    { label: "Data encryption", active: true },
    { label: "Least privilege", active: true },
  ];

  return (
    <div className="pilot-scene pilot-scene--deploy ciq-gov-scene ciq-gov-scene--security" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--back ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <p className="pilot-scene-panel-label">Access controls</p>
          <span className="ciq-gov-panel-pill">4 active</span>
        </div>
        <ul className="pilot-scene-list ciq-gov-checklist">
          {controls.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: EASE }}
            >
              <span className="ciq-gov-check" aria-hidden />
              {item.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-panel pilot-scene-panel--front ciq-gov-panel ciq-gov-panel--verified"
        initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <p className="pilot-scene-panel-label">Identity check</p>
          <span className="ciq-gov-shield" aria-hidden />
        </div>
        <div className="pilot-scene-mcp ciq-gov-flow">
          <span className="pilot-scene-mcp-node">User</span>
          <span className="pilot-scene-mcp-line ciq-gov-flow-line">
            <span className="ciq-gov-flow-pulse" aria-hidden />
          </span>
          <span className="pilot-scene-mcp-node pilot-scene-mcp-node--active">Verified</span>
        </div>
        <p className="pilot-scene-caption">Operational risk data access granted</p>
      </motion.div>
    </div>
  );
}

function HumanLoopScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { name: "Risk assessment", status: "Approved", tone: "ok", active: false },
    { name: "Control test review", status: "Pending", tone: "wait", active: true },
    { name: "Mitigation plan", status: "Queued", tone: "muted", active: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--run ciq-gov-scene ciq-gov-scene--human" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <p className="pilot-scene-panel-label">Expert review queue</p>
          <span className="ciq-gov-panel-pill">3 items</span>
        </div>
        <ul className="pilot-scene-queue ciq-gov-queue">
          {rows.map((row, i) => (
            <motion.li
              key={row.name}
              className={row.active ? "ciq-gov-queue-item--active" : undefined}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <span className="ciq-gov-queue-copy">
                <span className="ciq-gov-queue-dot" aria-hidden />
                {row.name}
              </span>
              <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
            </motion.li>
          ))}
        </ul>
        <div className="ciq-gov-progress" aria-hidden>
          <span className="ciq-gov-progress-fill" style={{ width: "66%" }} />
        </div>
        <p className="pilot-scene-caption">Humans approve every critical action</p>
      </motion.div>
    </div>
  );
}

function ExplainableScene({ reduceMotion }: { reduceMotion: boolean }) {
  const sources = [
    { label: "Risk control map", checked: true },
    { label: "KRI threshold data", checked: true },
    { label: "Incident lineage", checked: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--decision ciq-gov-scene ciq-gov-scene--explain" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--docs ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <p className="pilot-scene-panel-label">Evidence sources</p>
          <span className="ciq-gov-panel-pill">2 linked</span>
        </div>
        <ul className="pilot-scene-docs ciq-gov-docs">
          {sources.map((source, i) => (
            <motion.li
              key={source.label}
              className={source.checked ? "ciq-gov-doc--checked" : "ciq-gov-doc--pending"}
              initial={reduceMotion ? false : { opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
            >
              {source.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-roi ciq-gov-scene-confidence ciq-gov-confidence"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
      >
        <span className="ciq-gov-confidence-ring" aria-hidden />
        <span className="pilot-scene-roi-label">Confidence</span>
        <strong>98%</strong>
        <span className="pilot-scene-roi-sub">Fully cited recommendation</span>
      </motion.div>
    </div>
  );
}

function PolicyScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rules = [
    { rule: "Operational risk policy", status: "Enforced", tone: "ok", strength: 100 },
    { rule: "Control framework", status: "Active", tone: "wait", strength: 78 },
    { rule: "KRI monitoring rule", status: "Monitored", tone: "muted", strength: 54 },
  ];

  return (
    <div className="pilot-scene pilot-scene--run ciq-gov-scene ciq-gov-scene--policy" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <p className="pilot-scene-panel-label">Policy engine</p>
          <span className="ciq-gov-panel-pill ciq-gov-panel-pill--live">Live</span>
        </div>
        <ul className="ciq-gov-policy-list">
          {rules.map((row, i) => (
            <motion.li
              key={row.rule}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <div className="ciq-gov-policy-row">
                <span>{row.rule}</span>
                <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
              </div>
              <span className="ciq-gov-policy-meter" aria-hidden>
                <span className="ciq-gov-policy-meter-fill" style={{ width: `${row.strength}%` }} />
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="pilot-scene-caption">Auto-enforced across operations</p>
      </motion.div>
    </div>
  );
}

function AuditTrailScene({ reduceMotion }: { reduceMotion: boolean }) {
  const entries = [
    { event: "Risk assessed", time: "08:42" },
    { event: "Expert approved", time: "09:05" },
    { event: "Action logged", time: "09:18" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure ciq-gov-scene ciq-gov-scene--audit" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <div className="pilot-scene-table-head ciq-gov-table-head">
            <span>Audit event</span>
            <span>Timestamp</span>
          </div>
          <span className="ciq-gov-lock-badge" aria-hidden>
            Immutable
          </span>
        </div>
        <div className="ciq-gov-timeline">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.event}
              className="ciq-gov-timeline-row"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
            >
              <span className="ciq-gov-timeline-marker" aria-hidden />
              <span className="ciq-gov-timeline-event">{entry.event}</span>
              <strong>{entry.time}</strong>
            </motion.div>
          ))}
        </div>
        <div className="ciq-gov-chart-bars" aria-hidden>
          <span style={{ height: "42%" }} />
          <span style={{ height: "68%" }} />
          <span style={{ height: "54%" }} />
          <span className="ciq-gov-chart-bars-active" style={{ height: "88%" }} />
        </div>
      </motion.div>
    </div>
  );
}

function EnterpriseGovernanceScene({ reduceMotion }: { reduceMotion: boolean }) {
  const metrics = [
    { label: "Active risks", value: "142", trend: "+8" },
    { label: "Controls mapped", value: "318", trend: "+24" },
    { label: "Open incidents", value: "12", trend: "-3" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure ciq-gov-scene ciq-gov-scene--enterprise" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table ciq-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="ciq-gov-panel-top">
          <div className="pilot-scene-table-head ciq-gov-table-head">
            <span>Governance</span>
            <span>Status</span>
          </div>
          <span className="ciq-gov-panel-pill">Control plane</span>
        </div>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="pilot-scene-table-row ciq-gov-metric-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{metric.label}</span>
            <span className="ciq-gov-metric-value">
              <strong>{metric.value}</strong>
              <em className={metric.trend.startsWith("-") ? "ciq-gov-trend--down" : "ciq-gov-trend--up"}>
                {metric.trend}
              </em>
            </span>
          </motion.div>
        ))}
        <p className="pilot-scene-caption ciq-gov-scene-caption">Centralized control plane</p>
      </motion.div>
    </div>
  );
}

const SCENES = [
  ZeroTrustScene,
  HumanLoopScene,
  ExplainableScene,
  PolicyScene,
  AuditTrailScene,
  EnterpriseGovernanceScene,
] as const;

export function CiqGovernanceVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  const Scene = SCENES[index] ?? ZeroTrustScene;
  return <Scene reduceMotion={reduceMotion} />;
}
