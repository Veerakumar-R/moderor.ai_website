"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { bomSuitePage } from "@/content/bomSuite";
import { BomShieldLightTrail } from "./BomShieldLightTrail";
import "./bom-suite.css";

const { visual } = bomSuitePage.hero;
const ease = [0.22, 1, 0.36, 1] as const;

export function BomSuiteHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bom-hero-visual">
      <BomShieldLightTrail />
      <div className="bom-shield-visual-cluster">
        <motion.div
          className="bom-shield-stage"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
        >
          <span className="bom-shield-glow" aria-hidden />
          <Image
            src={visual.shieldImage}
            alt={visual.shieldAlt}
            width={801}
            height={819}
            className="bom-shield-image"
            quality={100}
            sizes="(min-width: 1024px) 380px, 300px"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
