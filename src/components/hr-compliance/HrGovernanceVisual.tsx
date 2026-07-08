"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function SceneBackdrop() {
  return (
    <>
      <span className="hr-gov-scene-backdrop" aria-hidden />
      <span className="hr-gov-scene-orb hr-gov-scene-orb--left" aria-hidden />
      <span className="hr-gov-scene-orb hr-gov-scene-orb--right" aria-hidden />
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
    <div className="pilot-scene pilot-scene--deploy hr-gov-scene hr-gov-scene--security" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--back hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <p className="pilot-scene-panel-label">Access controls</p>
          <span className="hr-gov-panel-pill">4 active</span>
        </div>
        <ul className="pilot-scene-list hr-gov-checklist">
          {controls.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: EASE }}
            >
              <span className="hr-gov-check" aria-hidden />
              {item.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-panel pilot-scene-panel--front hr-gov-panel hr-gov-panel--verified"
        initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <p className="pilot-scene-panel-label">Identity check</p>
          <span className="hr-gov-shield" aria-hidden />
        </div>
        <div className="pilot-scene-mcp hr-gov-flow">
          <span className="pilot-scene-mcp-node">User</span>
          <span className="pilot-scene-mcp-line hr-gov-flow-line">
            <span className="hr-gov-flow-pulse" aria-hidden />
          </span>
          <span className="pilot-scene-mcp-node pilot-scene-mcp-node--active">Verified</span>
        </div>
        <p className="pilot-scene-caption">Workforce compliance data access granted</p>
      </motion.div>
    </div>
  );
}

function HumanLoopScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { name: "Policy exception", status: "Approved", tone: "ok", active: false },
    { name: "Compliance review", status: "Pending", tone: "wait", active: true },
    { name: "Remediation plan", status: "Queued", tone: "muted", active: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--run hr-gov-scene hr-gov-scene--human" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <p className="pilot-scene-panel-label">Expert review queue</p>
          <span className="hr-gov-panel-pill">3 items</span>
        </div>
        <ul className="pilot-scene-queue hr-gov-queue">
          {rows.map((row, i) => (
            <motion.li
              key={row.name}
              className={row.active ? "hr-gov-queue-item--active" : undefined}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <span className="hr-gov-queue-copy">
                <span className="hr-gov-queue-dot" aria-hidden />
                {row.name}
              </span>
              <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
            </motion.li>
          ))}
        </ul>
        <div className="hr-gov-progress" aria-hidden>
          <span className="hr-gov-progress-fill" style={{ width: "66%" }} />
        </div>
        <p className="pilot-scene-caption">Humans approve every critical action</p>
      </motion.div>
    </div>
  );
}

function ExplainableScene({ reduceMotion }: { reduceMotion: boolean }) {
  const sources = [
    { label: "HR policy rules", checked: true },
    { label: "Employee lifecycle data", checked: true },
    { label: "Exception lineage", checked: false },
  ];

  return (
    <div className="pilot-scene pilot-scene--decision hr-gov-scene hr-gov-scene--explain" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--docs hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <p className="pilot-scene-panel-label">Evidence sources</p>
          <span className="hr-gov-panel-pill">2 linked</span>
        </div>
        <ul className="pilot-scene-docs hr-gov-docs">
          {sources.map((source, i) => (
            <motion.li
              key={source.label}
              className={source.checked ? "hr-gov-doc--checked" : "hr-gov-doc--pending"}
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
        className="pilot-scene-roi hr-gov-scene-confidence hr-gov-confidence"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
      >
        <span className="hr-gov-confidence-ring" aria-hidden />
        <span className="pilot-scene-roi-label">Confidence</span>
        <strong>98%</strong>
        <span className="pilot-scene-roi-sub">Fully cited recommendation</span>
      </motion.div>
    </div>
  );
}

function PolicyScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rules = [
    { rule: "HR compliance policy", status: "Enforced", tone: "ok", strength: 100 },
    { rule: "Onboarding rules", status: "Active", tone: "wait", strength: 78 },
    { rule: "Checkpoint monitoring", status: "Monitored", tone: "muted", strength: 54 },
  ];

  return (
    <div className="pilot-scene pilot-scene--run hr-gov-scene hr-gov-scene--policy" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <p className="pilot-scene-panel-label">Policy engine</p>
          <span className="hr-gov-panel-pill hr-gov-panel-pill--live">Live</span>
        </div>
        <ul className="hr-gov-policy-list">
          {rules.map((row, i) => (
            <motion.li
              key={row.rule}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <div className="hr-gov-policy-row">
                <span>{row.rule}</span>
                <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
              </div>
              <span className="hr-gov-policy-meter" aria-hidden>
                <span className="hr-gov-policy-meter-fill" style={{ width: `${row.strength}%` }} />
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="pilot-scene-caption">Auto-enforced across HR workflows</p>
      </motion.div>
    </div>
  );
}

function AuditTrailScene({ reduceMotion }: { reduceMotion: boolean }) {
  const entries = [
    { event: "Policy checked", time: "08:42" },
    { event: "HR approved", time: "09:05" },
    { event: "Action logged", time: "09:18" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure hr-gov-scene hr-gov-scene--audit" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <div className="pilot-scene-table-head hr-gov-table-head">
            <span>Audit event</span>
            <span>Timestamp</span>
          </div>
          <span className="hr-gov-lock-badge" aria-hidden>
            Immutable
          </span>
        </div>
        <div className="hr-gov-timeline">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.event}
              className="hr-gov-timeline-row"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
            >
              <span className="hr-gov-timeline-marker" aria-hidden />
              <span className="hr-gov-timeline-event">{entry.event}</span>
              <strong>{entry.time}</strong>
            </motion.div>
          ))}
        </div>
        <div className="hr-gov-chart-bars" aria-hidden>
          <span style={{ height: "42%" }} />
          <span style={{ height: "68%" }} />
          <span style={{ height: "54%" }} />
          <span className="hr-gov-chart-bars-active" style={{ height: "88%" }} />
        </div>
      </motion.div>
    </div>
  );
}

function EnterpriseGovernanceScene({ reduceMotion }: { reduceMotion: boolean }) {
  const metrics = [
    { label: "Active employees", value: "4.2K", trend: "+128" },
    { label: "Policies enforced", value: "86", trend: "+6" },
    { label: "Open exceptions", value: "12", trend: "-3" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure hr-gov-scene hr-gov-scene--enterprise" aria-hidden>
      <SceneBackdrop />
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table hr-gov-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="hr-gov-panel-top">
          <div className="pilot-scene-table-head hr-gov-table-head">
            <span>Governance</span>
            <span>Status</span>
          </div>
          <span className="hr-gov-panel-pill">Control plane</span>
        </div>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="pilot-scene-table-row hr-gov-metric-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{metric.label}</span>
            <span className="hr-gov-metric-value">
              <strong>{metric.value}</strong>
              <em className={metric.trend.startsWith("-") ? "hr-gov-trend--down" : "hr-gov-trend--up"}>
                {metric.trend}
              </em>
            </span>
          </motion.div>
        ))}
        <p className="pilot-scene-caption hr-gov-scene-caption">Centralized control plane</p>
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

export function HrGovernanceVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  const Scene = SCENES[index] ?? ZeroTrustScene;
  return <Scene reduceMotion={reduceMotion} />;
}
