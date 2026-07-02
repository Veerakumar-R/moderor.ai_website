"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers } from "lucide-react";
import { platformPage } from "@/content/site";
import "./platform.css";

const { nodes } = platformPage.hero;
const ease = [0.22, 1, 0.36, 1] as const;

export function PlatformHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grc-hero-visual">
      <motion.div
        className="platform-hero-orbit"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease, delay: 0.15 }}
      >
        <span className="platform-hero-orbit-glow" aria-hidden />
        <span className="platform-hero-ring platform-hero-ring--outer" aria-hidden />
        <span className="platform-hero-ring platform-hero-ring--mid" aria-hidden />
        <span className="platform-hero-ring platform-hero-ring--inner" aria-hidden />
        <span className="platform-hero-sweep" aria-hidden />

        {nodes.map((node, index) => {
          const angle = (360 / nodes.length) * index - 90;

          return (
            <div
              key={node.label}
              className="platform-hero-node"
              style={{ "--angle": `${angle}deg` } as React.CSSProperties}
            >
              <span
                className="platform-hero-node-chip"
                style={{ "--float-delay": `${(index % 3) * 0.8}s` } as React.CSSProperties}
              >
                <span className="platform-hero-node-dot" aria-hidden />
                <span className="platform-hero-node-label">{node.label}</span>
              </span>
            </div>
          );
        })}

        <div className="platform-hero-core">
          <Layers size={34} strokeWidth={1.6} className="platform-hero-core-icon" aria-hidden />
          <span className="platform-hero-core-label">Control Plane</span>
        </div>
      </motion.div>
    </div>
  );
}
