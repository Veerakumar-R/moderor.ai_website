"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

function GraphicShell({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="domain-tab-graphic" aria-hidden>
      <div className="domain-tab-graphic-inner">{children}</div>
      <span className="domain-tab-graphic-label">{label}</span>
    </div>
  );
}

function ComplianceGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <GraphicShell label="Audit loop">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <motion.circle
          cx="60"
          cy="60"
          r="32"
          fill="none"
          stroke="rgba(255,122,0,0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 60px" }}
        />
        <motion.circle
          cx="60"
          cy="60"
          r="18"
          fill="rgba(255,122,0,0.12)"
          stroke="#ff7a00"
          strokeWidth="1.5"
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 60px" }}
        />
        <path d="M54 60l4 4 8-8" fill="none" stroke="#ffd080" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </GraphicShell>
  );
}

function RiskGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <GraphicShell label="Risk signal">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M60 ${24 + i * 8} L${88 - i * 6} ${88 - i * 4} H${32 + i * 6} Z`}
            fill="none"
            stroke={`rgba(255,122,0,${0.25 + i * 0.15})`}
            strokeWidth="1.5"
            animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <motion.circle
          cx="60"
          cy="52"
          r="5"
          fill="#ff7a00"
          animate={reduceMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>
    </GraphicShell>
  );
}

function IdentityGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <GraphicShell label="Access mesh">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <line x1="36" y1="44" x2="60" y2="60" stroke="rgba(255,122,0,0.3)" strokeWidth="1" />
        <line x1="84" y1="44" x2="60" y2="60" stroke="rgba(255,122,0,0.3)" strokeWidth="1" />
        <line x1="60" y1="60" x2="60" y2="84" stroke="rgba(255,122,0,0.3)" strokeWidth="1" />
        {[
          { cx: 36, cy: 44 },
          { cx: 84, cy: 44 },
          { cx: 60, cy: 84 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="10"
            fill="rgba(255,122,0,0.1)"
            stroke="#ff7a00"
            strokeWidth="1.5"
            animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        ))}
        <motion.rect
          x="52"
          y="52"
          width="16"
          height="16"
          rx="4"
          fill="#ff7a00"
          fillOpacity="0.2"
          stroke="#ffd080"
          strokeWidth="1.5"
          animate={reduceMotion ? undefined : { rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ transformOrigin: "60px 60px" }}
        />
      </svg>
    </GraphicShell>
  );
}

function EngineeringGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <GraphicShell label="Ship pipeline">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <path d="M24 72 H96" stroke="rgba(255,122,0,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        {[24, 48, 72, 96].map((x, i) => (
          <g key={x}>
            <motion.circle
              cx={x}
              cy="72"
              r="8"
              fill="rgba(255,122,0,0.12)"
              stroke="#ff7a00"
              strokeWidth="1.5"
              animate={reduceMotion ? undefined : { opacity: i <= 1 ? [0.5, 1, 0.5] : [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
            <motion.circle
              cx={x}
              cy="48"
              r="4"
              fill="#ffd080"
              animate={
                reduceMotion
                  ? undefined
                  : { cy: [48, 72, 48], opacity: [0, 1, 0] }
              }
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        ))}
      </svg>
    </GraphicShell>
  );
}

const GRAPHICS = [ComplianceGraphic, RiskGraphic, IdentityGraphic, EngineeringGraphic];

export function DomainTabGraphic({ index }: { index: number }) {
  const reduceMotion = useReducedMotion();
  const Graphic = GRAPHICS[index] ?? ComplianceGraphic;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="domain-tab-graphic-wrap"
    >
      <Graphic reduceMotion={!!reduceMotion} />
    </motion.div>
  );
}
