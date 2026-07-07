"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SatHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="sat-hero-visual" aria-hidden>
      <span className="sat-hero-visual-glow" />
      <span className="sat-hero-visual-ring" />

      <motion.div
        className="sat-hero-visual-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/products/smart-alert-triage-hero.png"
            alt=""
            width={620}
            height={500}
            priority
            className="sat-hero-visual-img"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
