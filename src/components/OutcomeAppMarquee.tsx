"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { OutcomeRadarBackground } from "./OutcomeRadarBackground";

function AppMarqueePill({ label }: { label: string }) {
  return <span className="outcome-shuttle-pill outcome-shuttle-pill-glow">{label}</span>;
}

function AppMarqueeRow({
  items,
  direction,
  duration,
  reduceMotion,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  reduceMotion: boolean;
}) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);

  useEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const update = () => setSetWidth(node.offsetWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [items]);

  if (items.length <= 1 || reduceMotion) {
    return (
      <div className="outcome-app-marquee-row">
        <div className="outcome-app-marquee-static">
          {items.map((item) => (
            <AppMarqueePill key={item} label={item} />
          ))}
        </div>
      </div>
    );
  }

  const loop = [...items, ...items];

  return (
    <div className="outcome-app-marquee-row">
      <div ref={measureRef} className="outcome-app-marquee-measure" aria-hidden>
        {items.map((item) => (
          <AppMarqueePill key={`measure-${item}`} label={item} />
        ))}
      </div>

      <div
        className="outcome-app-marquee-viewport"
        style={setWidth > 0 ? { width: setWidth } : undefined}
      >
        <motion.div
          className="outcome-app-marquee-track"
          animate={
            setWidth > 0
              ? direction === "left"
                ? { x: [0, -setWidth] }
                : { x: [-setWidth, 0] }
              : undefined
          }
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <AppMarqueePill key={`${item}-${i}`} label={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function OutcomeAppMarquee({
  rows,
  reduceMotion = false,
}: {
  rows: string[][];
  reduceMotion?: boolean;
}) {
  return (
    <div className="outcome-radar-stage relative h-[252px] w-full rounded-[14px] border border-border-subtle">
      <div className="outcome-radar-stage-bg absolute inset-0 overflow-hidden rounded-[inherit]">
        <OutcomeRadarBackground />
      </div>

      <div className="relative z-[2] flex h-full flex-col justify-center">
        <div className="outcome-app-marquee-grid">
          {rows.map((row, i) => (
            <AppMarqueeRow
              key={row.join("-")}
              items={row}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={15 + i * 2}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
