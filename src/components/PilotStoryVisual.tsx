"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function DeployScene({ reduceMotion }: { reduceMotion: boolean }) {
  const targets = ["Azure", "Google Cloud", "WSO2", "On-prem"];
  return (
    <div className="pilot-scene pilot-scene--deploy" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--back"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Deploy target</p>
        <ul className="pilot-scene-list">
          {targets.map((t) => (
            <li key={t}>
              <span className="pilot-scene-dot" />
              {t}
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
        <p className="pilot-scene-panel-label">MCP connection</p>
        <div className="pilot-scene-mcp">
          <span className="pilot-scene-mcp-node">Data source</span>
          <span className="pilot-scene-mcp-line" />
          <span className="pilot-scene-mcp-node pilot-scene-mcp-node--active">Moderor</span>
        </div>
        <p className="pilot-scene-caption">One workflow · your control set</p>
      </motion.div>
    </div>
  );
}

function RunScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { name: "SOD breach", status: "Routed", tone: "ok" },
    { name: "Vendor risk", status: "Review", tone: "wait" },
    { name: "PII access", status: "Queued", tone: "muted" },
  ];
  return (
    <div className="pilot-scene pilot-scene--run" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--float"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Approval Center</p>
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
        <p className="pilot-scene-caption">First loop closed in hours</p>
      </motion.div>
    </div>
  );
}

function MeasureScene({ reduceMotion }: { reduceMotion: boolean }) {
  const metrics = [
    { label: "Detection", value: "2.1h" },
    { label: "False positives", value: "−80%" },
    { label: "Audit evidence", value: "312" },
  ];
  return (
    <div className="pilot-scene pilot-scene--measure" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--table"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="pilot-scene-table-head">
          <span>KPI</span>
          <span>Production</span>
        </div>
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="pilot-scene-table-row"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
          >
            <span>{m.label}</span>
            <strong>{m.value}</strong>
          </motion.div>
        ))}
        <div className="pilot-scene-chart" />
      </motion.div>
    </div>
  );
}

function DecisionScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="pilot-scene pilot-scene--decision" aria-hidden>
      <motion.div
        className="pilot-scene-panel pilot-scene-panel--docs"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="pilot-scene-panel-label">Evidence package</p>
        <ul className="pilot-scene-docs">
          <li>audit_log.pdf</li>
          <li>roi_summary.xlsx</li>
          <li>workflow_report.pdf</li>
        </ul>
      </motion.div>

      <motion.div
        className="pilot-scene-roi"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
      >
        <span className="pilot-scene-roi-label">ROI</span>
        <strong>3.1×</strong>
        <span className="pilot-scene-roi-sub">Expand or exit — no lock-in</span>
      </motion.div>
    </div>
  );
}

const SCENES = [DeployScene, RunScene, MeasureScene, DecisionScene] as const;

export function PilotStoryVisual({ index, reduceMotion }: { index: number; reduceMotion: boolean }) {
  const Scene = SCENES[index] ?? DeployScene;
  return <Scene reduceMotion={reduceMotion} />;
}
