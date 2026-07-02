"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { grcSuitePage } from "@/content/site";

import { GrcShieldLightTrail } from "./GrcShieldLightTrail";

const { visual } = grcSuitePage.hero;
const ease = [0.22, 1, 0.36, 1] as const;

export function GrcSuiteHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grc-hero-visual">
      <GrcShieldLightTrail />
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
          width={562}
          height={670}
          className="grc-shield-image"
          quality={100}
          sizes="(min-width: 1024px) 370px, 320px"
          priority
        />
      </motion.div>
    </div>
  );
}
