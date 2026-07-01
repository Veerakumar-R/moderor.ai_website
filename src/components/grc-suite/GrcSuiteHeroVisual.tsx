"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { grcSuitePage } from "@/content/site";

const { visual } = grcSuitePage.hero;
const ease = [0.22, 1, 0.36, 1] as const;

export function GrcSuiteHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grc-hero-visual">
      <motion.div
        className="grc-shield-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease, delay: 0.15 }}
      >
        <span className="grc-shield-glow" aria-hidden />
        <Image
          src={visual.shieldImage}
          alt={visual.shieldAlt}
          width={300}
          height={325}
          className="grc-shield-image"
          priority
        />
      </motion.div>
    </div>
  );
}
