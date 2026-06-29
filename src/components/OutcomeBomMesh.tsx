"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { OutcomeRadarBackground } from "./OutcomeRadarBackground";

type BomProduct = {
  label: string;
  icon: string;
  lines?: string[];
};

const NODE_LAYOUT = [
  { x: 150, y: 32, anchor: "-50% -50%" },
  { x: 278, y: 110, anchor: "-100% -50%" },
  { x: 150, y: 188, anchor: "-50% -50%" },
  { x: 22, y: 110, anchor: "0% -50%" },
] as const;

// Full mesh: 4 perimeter edges + 2 diagonals (every node connected to every other)
const MESH_EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [0, 2],
  [1, 3],
] as const;

const CYCLE_MS = 2600;

export function OutcomeBomMesh({
  centerLabel,
  products,
  reduceMotion = false,
}: {
  centerLabel: string;
  products: BomProduct[];
  reduceMotion?: boolean;
}) {
  const uid = useId().replaceAll(":", "");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = globalThis.setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, CYCLE_MS);
    return () => globalThis.clearInterval(timer);
  }, [products.length, reduceMotion]);

  const prev = (active - 1 + products.length) % products.length;
  const from = NODE_LAYOUT[prev];
  const to = NODE_LAYOUT[active];

  return (
    <div className="outcome-bom-stage relative h-[252px] w-full rounded-[14px]">
      <div className="outcome-radar-stage-bg absolute inset-0 overflow-hidden rounded-[inherit]">
        <OutcomeRadarBackground backgroundColor="#e6e9f0" opacity={0.6} />
        <div className="outcome-bom-stage-glow pointer-events-none absolute inset-0" aria-hidden />
      </div>

      <div className="relative z-[2] overflow-visible px-3 py-3">
        <div className="relative mx-auto h-[214px] w-full max-w-[292px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 220" aria-hidden>
            <defs>
              <linearGradient id={`bom-line-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb347" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ff7a00" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ffb347" stopOpacity="0.35" />
              </linearGradient>
              <filter id={`bom-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static mesh — every node linked to every other */}
            {MESH_EDGES.map(([a, b]) => (
              <line
                key={`edge-${a}-${b}`}
                x1={NODE_LAYOUT[a].x}
                y1={NODE_LAYOUT[a].y}
                x2={NODE_LAYOUT[b].x}
                y2={NODE_LAYOUT[b].y}
                stroke="rgba(255,122,0,0.13)"
                strokeWidth="1"
                strokeDasharray="3 5"
              />
            ))}

            {/* Live signal — hops node → node around the mesh */}
            {!reduceMotion && (
              <>
                <motion.line
                  key={`active-edge-${active}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={`url(#bom-line-${uid})`}
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  filter={`url(#bom-glow-${uid})`}
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  animate={{ pathLength: 1, opacity: [0.4, 1, 0.7] }}
                  transition={{ duration: CYCLE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle
                  key={`signal-${active}`}
                  r="3.2"
                  fill="#ff7a00"
                  filter={`url(#bom-glow-${uid})`}
                  initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                  animate={{ cx: to.x, cy: to.y, opacity: [0, 1, 1, 0.9] }}
                  transition={{ duration: CYCLE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
                />
              </>
            )}

            {/* Node anchor rings */}
            {NODE_LAYOUT.map((node, i) => (
              <circle
                key={`ring-${i}`}
                cx={node.x}
                cy={node.y}
                r="4"
                fill="none"
                stroke={active === i ? "#ff7a00" : "rgba(255,122,0,0.25)"}
                strokeWidth="1.2"
              />
            ))}
          </svg>

          {products.map((product, i) => {
            const node = NODE_LAYOUT[i];
            const pos = { x: node.x, y: node.y };
            const isActive = active === i;
            const left = `${(pos.x / 300) * 100}%`;
            const top = `${(pos.y / 220) * 100}%`;
            const lines = product.lines ?? [product.label];
            const isSingleLine = lines.length === 1;

            return (
              <motion.div
                key={product.label}
                className="absolute z-[2]"
                style={{ left, top, translate: node.anchor }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, isActive ? -2 : -1, 0],
                        opacity: isActive ? 1 : 0.92,
                        scale: isActive ? 1.04 : 1,
                      }
                }
                transition={{
                  y: { duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <div
                  className={`outcome-bom-node ${isActive ? "outcome-bom-node-active" : ""} ${isSingleLine ? "outcome-bom-node-single" : ""}`}
                >
                  <span className="outcome-bom-node-icon" aria-hidden>
                    {product.icon}
                  </span>
                  <span className="outcome-bom-node-label">
                    {lines.map((line) => (
                      <span key={line} className="outcome-bom-node-label-line">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Compact mesh emblem at center — not a dominant hub */}
          <div
            className="absolute z-[3]"
            style={{ left: "50%", top: `${(110 / 220) * 100}%`, translate: "-50% -50%" }}
          >
            <AnimatePresence>
              {!reduceMotion && (
                <motion.span
                  key={`emblem-ripple-${active}`}
                  className="outcome-bom-hub-ripple absolute inset-0 rounded-full"
                  initial={{ scale: 0.7, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: CYCLE_MS / 1000, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            <div className="outcome-bom-emblem">
              <span className="outcome-bom-emblem-label">{centerLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
