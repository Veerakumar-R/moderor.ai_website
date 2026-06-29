"use client";

import type { LucideIcon } from "lucide-react";
import { Rocket, ShieldCheck, TriangleAlert, UserRoundCheck } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function IconicGraphic({
  icon: Icon,
  reduceMotion,
  children,
}: {
  icon: LucideIcon;
  reduceMotion: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="domain-iconic-graphic">
      <div className="domain-iconic-graphic-stage">
        <div className="domain-iconic-graphic-rays" aria-hidden />
        <div className="domain-iconic-graphic-grid" aria-hidden />
        {children}
        <motion.div
          className="domain-iconic-graphic-glow"
          aria-hidden
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="domain-iconic-graphic-core"
          initial={reduceMotion ? false : { scale: 0.82, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <Icon size={26} strokeWidth={1.85} color="#ffffff" />
        </motion.div>
      </div>
    </div>
  );
}

function ComplianceVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <IconicGraphic icon={ShieldCheck} reduceMotion={reduceMotion}>
      {[0, 1].map((i) => (
        <motion.div
          key={`compliance-plane-${i}`}
          className={`domain-iconic-float domain-iconic-float--sheet domain-iconic-float--sheet-${i + 1}`}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: i === 0 ? -14 : 10 }}
          animate={{ opacity: 1, y: 0, rotate: i === 0 ? -14 : 10 }}
          transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: EASE }}
        >
          <svg viewBox="0 0 40 48" fill="none">
            <rect x="4" y="4" width="32" height="40" rx="4" fill="rgba(255,122,0,0.08)" stroke="rgba(255,180,100,0.35)" strokeWidth="1.2" />
            <path d="M10 16 H30 M10 22 H26 M10 28 H22" stroke="rgba(255,200,140,0.45)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M24 32 L27 35 L33 28" stroke="#ffb347" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      ))}
      <motion.div
        className="domain-iconic-orbit domain-iconic-orbit--compliance"
        aria-hidden
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="domain-iconic-orbit-dot" />
      </motion.div>
    </IconicGraphic>
  );
}

function RiskVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <IconicGraphic icon={TriangleAlert} reduceMotion={reduceMotion}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`risk-tier-${i}`}
          className={`domain-iconic-float domain-iconic-float--tier domain-iconic-float--tier-${i + 1}`}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.35 + i * 0.2, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08 + i * 0.1, ease: EASE }}
        >
          <svg viewBox="0 0 80 48" fill="none">
            <path
              d={`M40 ${8 + i * 4} L${58 - i * 4} ${38 - i * 2} H${22 + i * 4} Z`}
              fill="rgba(255,122,0,0.06)"
              stroke={`rgba(255,160,80,${0.28 + i * 0.18})`}
              strokeWidth="1.2"
            />
          </svg>
        </motion.div>
      ))}
      <motion.div
        className="domain-iconic-pulse-ring"
        aria-hidden
        animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.35, 0.12, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </IconicGraphic>
  );
}

function IdentityVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const nodes = [
    { className: "domain-iconic-node--a", delay: 0.12 },
    { className: "domain-iconic-node--b", delay: 0.2 },
    { className: "domain-iconic-node--c", delay: 0.28 },
  ];

  return (
    <IconicGraphic icon={UserRoundCheck} reduceMotion={reduceMotion}>
      <svg className="domain-iconic-links" viewBox="0 0 200 120" aria-hidden>
        {nodes.map((node, i) => (
          <motion.line
            key={`link-${node.className}`}
            x1="100"
            y1="58"
            x2={i === 0 ? 42 : i === 1 ? 158 : 100}
            y2={i === 2 ? 98 : 28}
            stroke="rgba(255,160,80,0.22)"
            strokeWidth="1"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.45, delay: node.delay }}
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <motion.span
          key={node.className}
          className={`domain-iconic-node ${node.className}`}
          aria-hidden
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.38, delay: node.delay, type: "spring", stiffness: 260, damping: 18 }}
        />
      ))}
    </IconicGraphic>
  );
}

function EngineeringVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <IconicGraphic icon={Rocket} reduceMotion={reduceMotion}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`eng-plane-${i}`}
          className={`domain-iconic-float domain-iconic-float--plane domain-iconic-float--plane-${i + 1}`}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, x: i === 0 ? -10 : i === 2 ? 10 : 0, y: 8 }}
          animate={{ opacity: 0.45 + i * 0.12, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
        >
          <svg viewBox="0 0 56 36" fill="none">
            <rect x="2" y="6" width="52" height="24" rx="4" fill="rgba(255,122,0,0.07)" stroke="rgba(255,180,100,0.3)" strokeWidth="1" />
            <path d="M10 14 H38 M10 20 H30" stroke="rgba(255,200,140,0.4)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={`eng-dot-${i}`}
          className="domain-iconic-trail-dot"
          style={{ left: `${22 + i * 14}%` }}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: [0, 1, 0], y: [0, 18, 28] }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.15, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" }}
        />
      ))}
    </IconicGraphic>
  );
}

const VISUALS = [ComplianceVisual, RiskVisual, IdentityVisual, EngineeringVisual];

export function DomainLeftVisual({ index }: { index: number }) {
  const reduceMotion = useReducedMotion();
  const Visual = VISUALS[index] ?? ComplianceVisual;

  return (
    <div className="domain-outcomes-left-visual" aria-hidden>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="domain-outcomes-left-visual-inner"
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.42, ease: EASE }}
        >
          <Visual reduceMotion={!!reduceMotion} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
