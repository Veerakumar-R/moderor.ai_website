"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const DOMAIN_IMAGES = [
  {
    src: "/images/domain-outcomes/domain-compliance.png",
    alt: "Abstract glass torus visualization for audit and compliance",
  },
  {
    src: "/images/domain-outcomes/domain-risk.png",
    alt: "Abstract flowing ribbon visualization for risk and vendor",
  },
  {
    src: "/images/domain-outcomes/domain-identity.png",
    alt: "Abstract wave layers visualization for HR and identity",
  },
  {
    src: "/images/domain-outcomes/domain-engineering.png",
    alt: "Abstract glass spheres visualization for engineering and APIs",
  },
];

export function DomainCenterVisual({ index }: { index: number }) {
  const item = DOMAIN_IMAGES[index] ?? DOMAIN_IMAGES[0];

  return (
    <div className="domain-photo-visual">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="domain-photo-visual-frame"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={95}
            sizes="(min-width: 1280px) 320px, (min-width: 768px) 28vw, 90vw"
            className="domain-photo-visual-img"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
