"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useId } from "react";
import { OutcomeRadarBackground } from "./OutcomeRadarBackground";

type OrbitItem = {
  label: string;
  icon: string;
};

function OrbitTag({
  index,
  count,
  radius,
  rotation,
  item,
}: {
  index: number;
  count: number;
  radius: number;
  rotation: ReturnType<typeof useMotionValue<number>>;
  item: OrbitItem;
}) {
  const base = (360 / count) * index - 90;
  const x = useTransform(rotation, (r) => {
    const rad = (-(base + r) * Math.PI) / 180;
    return Math.cos(rad) * radius;
  });
  const y = useTransform(rotation, (r) => {
    const rad = (-(base + r) * Math.PI) / 180;
    return Math.sin(rad) * radius;
  });

  return (
    <motion.div
      className="outcome-orbit-tag absolute top-1/2 left-1/2 will-change-transform"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="outcome-orbit-node">
        <span className="outcome-orbit-node-icon" aria-hidden>
          {item.icon}
        </span>
        <span className="outcome-orbit-node-label">{item.label}</span>
      </div>
    </motion.div>
  );
}

export function OutcomeOrbitRadar({
  centerLabel,
  items,
  reduceMotion = false,
  orbitDuration = 48,
}: {
  centerLabel: string;
  items: OrbitItem[];
  reduceMotion?: boolean;
  orbitDuration?: number;
}) {
  const uid = useId().replaceAll(":", "");
  const orbitRadius = 96;
  const rotation = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) {
      rotation.set(0);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const tick = (time: number) => {
      if (start === null) start = time;
      const elapsed = (time - start) / 1000;
      rotation.set((elapsed * (360 / orbitDuration)) % 360);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [rotation, orbitDuration, reduceMotion]);

  return (
    <div className="outcome-radar-stage relative h-[252px] w-full rounded-[14px] border border-border-subtle">
      <div className="outcome-radar-stage-bg absolute inset-0 overflow-hidden rounded-[inherit]">
        <OutcomeRadarBackground />
      </div>

      <div className="relative z-[2] overflow-visible px-2 py-3">
        <div className="relative mx-auto h-[214px] w-full max-w-[292px]">
          <div className="outcome-orbit-guide absolute top-1/2 left-1/2 h-[192px] w-[192px] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden />

          {items.map((item, i) => (
            <OrbitTag
              key={item.label}
              index={i}
              count={items.length}
              radius={orbitRadius}
              rotation={rotation}
              item={item}
            />
          ))}

          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="outcome-orbit-hub"
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="absolute inset-0" viewBox="0 0 48 48" aria-hidden>
                <defs>
                  <linearGradient id={`orbit-hub-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff7a00" />
                    <stop offset="100%" stopColor="#ffb347" />
                  </linearGradient>
                </defs>
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  fill="none"
                  stroke={`url(#orbit-hub-grad-${uid})`}
                  strokeWidth="2.5"
                  strokeDasharray="5 4"
                />
              </svg>
              <span className="relative text-[10px] font-bold tracking-wide text-ember">{centerLabel}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
