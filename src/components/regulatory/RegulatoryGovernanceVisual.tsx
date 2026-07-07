"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function ZeroTrustScene({ reduceMotion }: { reduceMotion: boolean }) {
  const controls = ["MFA enforced", "SSO + RBAC", "Data encryption", "Least privilege"];

  return (
    <div className="pilot-scene pilot-scene--deploy rc-gov-scene--security" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--back"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Access controls</p>
        <ul className="pilot-scene-list">
          {controls.map((item) => (
            <li key={item}>
              <span className="pilot-scene-dot" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-panel pilot-scene-panel--front"
        initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Identity check</p>
        <div className="pilot-scene-mcp">
          <span className="pilot-scene-mcp-node">User</span>
          <span className="pilot-scene-mcp-line" />
          <span className="pilot-scene-mcp-node pilot-scene-mcp-node--active">Verified</span>
        </div>
        <p className="pilot-scene-caption">Regulatory data access granted</p>
      </motion.div>
    </div>
  );
}

function HumanLoopScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { name: "Obligation review", status: "Approved", tone: "ok" },
    { name: "Impact assessment", status: "Pending", tone: "wait" },
    { name: "Policy exception", status: "Queued", tone: "muted" },
  ];

  return (
    <div className="pilot-scene pilot-scene--run rc-gov-scene--human" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Expert review queue</p>
        <ul className="pilot-scene-queue">
          {rows.map((row, i) => (
            <motion.li
              key={row.name}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <span>{row.name}</span>
              <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
            </motion.li>
          ))}
        </ul>
        <p className="pilot-scene-caption">Humans approve every critical action</p>
      </motion.div>
    </div>
  );
}

function ExplainableScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="pilot-scene pilot-scene--decision rc-gov-scene--explain" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--docs"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Evidence sources</p>
        <ul className="pilot-scene-docs">
          <li>RBI circular §4.2</li>
          <li>Internal policy map</li>
          <li>Obligation lineage</li>
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-roi rc-gov-scene-confidence"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
      >
        <span className="pilot-scene-roi-label">Confidence</span>
        <strong>98%</strong>
        <span className="pilot-scene-roi-sub">Fully cited recommendation</span>
      </motion.div>
    </div>
  );
}

function PolicyScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rules = [
    { rule: "KYC refresh policy", status: "Enforced", tone: "ok" },
    { rule: "Data retention rule", status: "Active", tone: "wait" },
    { rule: "Reporting deadline", status: "Monitored", tone: "muted" },
  ];

  return (
    <div className="pilot-scene pilot-scene--run rc-gov-scene--policy" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Policy engine</p>
        <ul className="pilot-scene-queue">
          {rules.map((row, i) => (
            <motion.li
              key={row.rule}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: EASE }}
            >
              <span>{row.rule}</span>
              <span className={`pilot-scene-tag pilot-scene-tag--${row.tone}`}>{row.status}</span>
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
    { event: "Circular mapped", time: "08:42" },
    { event: "Expert approved", time: "09:05" },
    { event: "Action logged", time: "09:18" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure rc-gov-scene--audit" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="pilot-scene-table-head">
          <span>Audit event</span>
          <span>Timestamp</span>
        </div>
        {entries.map((entry, i) => (
          <motion.div
            key={entry.event}
            className="pilot-scene-table-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{entry.event}</span>
            <strong>{entry.time}</strong>
          </motion.div>
        ))}
        <div className="pilot-scene-chart" />
      </motion.div>
    </div>
  );
}

function EnterpriseGovernanceScene({ reduceMotion }: { reduceMotion: boolean }) {
  const metrics = [
    { label: "Active policies", value: "142" },
    { label: "Controls mapped", value: "318" },
    { label: "Open reviews", value: "12" },
  ];

  return (
    <div className="pilot-scene pilot-scene--measure rc-gov-scene--enterprise" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="pilot-scene-table-head">
          <span>Governance</span>
          <span>Status</span>
        </div>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="pilot-scene-table-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </motion.div>
        ))}
        <p className="pilot-scene-caption rc-gov-scene-caption">Centralized control plane</p>
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

export function RegulatoryGovernanceVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  const Scene = SCENES[index] ?? ZeroTrustScene;
  return <Scene reduceMotion={reduceMotion} />;
}
