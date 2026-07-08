"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function SceneBackdrop() {
  return (
    <>
      <span className="omni-gov-scene-backdrop" aria-hidden />
      <span className="omni-gov-scene-orb omni-gov-scene-orb--left" aria-hidden />
      <span className="omni-gov-scene-orb omni-gov-scene-orb--right" aria-hidden />
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
    <div className="pilot-scene pilot-scene--deploy omni-gov-scene omni-gov-scene--security" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--back omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <p className="pilot-scene-panel-label">Access controls</p>
          <span className="omni-gov-panel-pill">4 active</span>
        </div>
        <ul className="pilot-scene-list omni-gov-checklist">
          {controls.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: EASE }}
            >
              <span className="omni-gov-check" aria-hidden />
              {item.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-panel pilot-scene-panel--front omni-gov-panel omni-gov-panel--verified"
        initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <p className="pilot-scene-panel-label">Identity check</p>
          <span className="omni-gov-shield" aria-hidden />
        </div>
        <div className="pilot-scene-mcp omni-gov-flow">
          <span className="pilot-scene-mcp-node">User</span>
          <span className="pilot-scene-mcp-line omni-gov-flow-line">
            <span className="omni-gov-flow-pulse" aria-hidden />
          </span>
          <span className="pilot-scene-mcp-node pilot-scene-mcp-node--active">Verified</span>
        </div>
        <p className="pilot-scene-caption">Customer recovery data access granted</p>
      </motion.div>
    </div>
  );
}

function HumanLoopScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { name: "Outreach approved", status: "Approved", tone: "ok", active: false },
    { name: "Recovery review", status: "Pending", tone: "wait", active: true },
    { name: "Follow-up plan", status: "Queued", tone: "muted", active: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--run omni-gov-scene omni-gov-scene--human" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <p className="pilot-scene-panel-label">Expert review queue</p>
          <span className="omni-gov-panel-pill">3 items</span>
        </div>
        <ul className="pilot-scene-queue omni-gov-queue">
          {rows.map((row, i) => (
            <motion.li
              key={row.name}
              className={row.active ? "omni-gov-queue-item--active" : undefined}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <span className="omni-gov-queue-copy">
                <span className="omni-gov-queue-dot" aria-hidden />
                {row.name}
              </span>
              <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
            </motion.li>
          ))}
        </ul>
        <div className="omni-gov-progress" aria-hidden>
          <span className="omni-gov-progress-fill" style={{ width: "66%" }} />
        </div>
        <p className="pilot-scene-caption">Humans approve every critical action</p>
      </motion.div>
    </div>
  );
}

function ExplainableScene({ reduceMotion }: { reduceMotion: boolean }) {
  const sources = [
    { label: "Customer journey map", checked: true },
    { label: "Drop-off signals", checked: true },
    { label: "Outreach lineage", checked: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--decision omni-gov-scene omni-gov-scene--explain" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--docs omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <p className="pilot-scene-panel-label">Evidence sources</p>
          <span className="omni-gov-panel-pill">2 linked</span>
        </div>
        <ul className="pilot-scene-docs omni-gov-docs">
          {sources.map((source, i) => (
            <motion.li
              key={source.label}
              className={source.checked ? "omni-gov-doc--checked" : "omni-gov-doc--pending"}
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
        className="pilot-scene-roi omni-gov-scene-confidence omni-gov-confidence"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
      >
        <span className="omni-gov-confidence-ring" aria-hidden />
        <span className="pilot-scene-roi-label">Confidence</span>
        <strong>98%</strong>
        <span className="pilot-scene-roi-sub">Fully cited recommendation</span>
      </motion.div>
    </div>
  );
}

function PolicyScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rules = [
    { rule: "Engagement policy", status: "Enforced", tone: "ok", strength: 100 },
    { rule: "Outreach framework", status: "Active", tone: "wait", strength: 78 },
    { rule: "Recovery monitoring", status: "Monitored", tone: "muted", strength: 54 },
  ];

  return (
    <div className="pilot-scene pilot-scene--run omni-gov-scene omni-gov-scene--policy" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <p className="pilot-scene-panel-label">Policy engine</p>
          <span className="omni-gov-panel-pill omni-gov-panel-pill--live">Live</span>
        </div>
        <ul className="omni-gov-policy-list">
          {rules.map((row, i) => (
            <motion.li
              key={row.rule}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <div className="omni-gov-policy-row">
                <span>{row.rule}</span>
                <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
              </div>
              <span className="omni-gov-policy-meter" aria-hidden>
                <span className="omni-gov-policy-meter-fill" style={{ width: `${row.strength}%` }} />
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="pilot-scene-caption">Auto-enforced across recovery workflows</p>
      </motion.div>
    </div>
  );
}

function AuditTrailScene({ reduceMotion }: { reduceMotion: boolean }) {
  const entries = [
    { event: "Drop-off detected", time: "08:42" },
    { event: "Outreach approved", time: "09:05" },
    { event: "Action logged", time: "09:18" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure omni-gov-scene omni-gov-scene--audit" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <div className="pilot-scene-table-head omni-gov-table-head">
            <span>Audit event</span>
            <span>Timestamp</span>
          </div>
          <span className="omni-gov-lock-badge" aria-hidden>
            Immutable
          </span>
        </div>
        <div className="omni-gov-timeline">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.event}
              className="omni-gov-timeline-row"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
            >
              <span className="omni-gov-timeline-marker" aria-hidden />
              <span className="omni-gov-timeline-event">{entry.event}</span>
              <strong>{entry.time}</strong>
            </motion.div>
          ))}
        </div>
        <div className="omni-gov-chart-bars" aria-hidden>
          <span style={{ height: "42%" }} />
          <span style={{ height: "68%" }} />
          <span style={{ height: "54%" }} />
          <span className="omni-gov-chart-bars-active" style={{ height: "88%" }} />
        </div>
      </motion.div>
    </div>
  );
}

function EnterpriseGovernanceScene({ reduceMotion }: { reduceMotion: boolean }) {
  const metrics = [
    { label: "Active journeys", value: "2.4K", trend: "+186" },
    { label: "Channels live", value: "6", trend: "+1" },
    { label: "Open recoveries", value: "48", trend: "-12" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure omni-gov-scene omni-gov-scene--enterprise" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table omni-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="omni-gov-panel-top">
          <div className="pilot-scene-table-head omni-gov-table-head">
            <span>Governance</span>
            <span>Status</span>
          </div>
          <span className="omni-gov-panel-pill">Control plane</span>
        </div>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="pilot-scene-table-row omni-gov-metric-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{metric.label}</span>
            <span className="omni-gov-metric-value">
              <strong>{metric.value}</strong>
              <em className={metric.trend.startsWith("-") ? "omni-gov-trend--down" : "omni-gov-trend--up"}>
                {metric.trend}
              </em>
            </span>
          </motion.div>
        ))}
        <p className="pilot-scene-caption omni-gov-scene-caption">Centralized control plane</p>
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

export function OmniGovernanceVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  const Scene = SCENES[index] ?? ZeroTrustScene;
  return <Scene reduceMotion={reduceMotion} />;
}
