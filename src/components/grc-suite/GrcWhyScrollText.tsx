"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const WORD_FADED = 0.18;
const WORD_REVEALED = 1;

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = Math.max(0, (index - 0.5) / total);
  const end = Math.min(1, (index + 2) / total);
  const opacity = useTransform(
    progress,
    [start, end],
    [WORD_FADED, WORD_REVEALED],
  );

  return (
    <motion.span style={{ opacity }} className="grc-why-display-word">
      {word}
      {index < total - 1 ? "\u00a0" : ""}
    </motion.span>
  );
}

export function GrcWhyScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.15"],
  });

  const words = text.split(/\s+/).filter(Boolean);

  if (prefersReducedMotion) {
    return <p className="grc-why-display">{text}</p>;
  }

  return (
    <p ref={ref} className="grc-why-display" aria-label={text}>
      {words.map((word, index) => (
        <ScrollWord
          key={`${index}-${word}`}
          word={word}
          index={index}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
