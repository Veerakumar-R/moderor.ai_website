"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type ParsedMetric =
  | { kind: "single"; target: number; decimals: number; prefix: string; suffix: string }
  | { kind: "range"; a: number; b: number; decimals: number; suffix: string };

function parseMetric(raw: string): ParsedMetric {
  const rangeMatch = raw.match(/^(\d+(?:\.\d+)?)[–-](\d+(?:\.\d+)?)(.*)$/);
  if (rangeMatch) {
    return {
      kind: "range",
      a: parseFloat(rangeMatch[1]),
      b: parseFloat(rangeMatch[2]),
      decimals: 0,
      suffix: rangeMatch[3] ?? "",
    };
  }

  const match = raw.match(/^([^0-9.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { kind: "single", target: 0, decimals: 0, prefix: "", suffix: raw };

  const numStr = match[2];
  return {
    kind: "single",
    target: parseFloat(numStr),
    decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
    prefix: match[1],
    suffix: match[3],
  };
}

function formatNum(n: number, decimals: number) {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
}

function finalDisplay(parsed: ParsedMetric): string {
  if (parsed.kind === "range") {
    return `${formatNum(parsed.a, parsed.decimals)}–${formatNum(parsed.b, parsed.decimals)}${parsed.suffix}`;
  }
  return `${parsed.prefix}${formatNum(parsed.target, parsed.decimals)}${parsed.suffix}`;
}

function zeroDisplay(parsed: ParsedMetric): string {
  if (parsed.kind === "range") return `0–0${parsed.suffix}`;
  return `${parsed.prefix}0${parsed.suffix}`;
}

export function DomainAnimatedMetric({
  value,
  tabKey,
}: {
  value: string;
  tabKey: number;
}) {
  const reduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseMetric(value), [value]);
  const targetText = useMemo(() => finalDisplay(parsed), [parsed]);
  const [display, setDisplay] = useState(() => (reduceMotion ? targetText : zeroDisplay(parsed)));

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(targetText);
      return;
    }

    setDisplay(zeroDisplay(parsed));

    if (parsed.kind === "single") {
      const controls = animate(0, parsed.target, {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          setDisplay(`${parsed.prefix}${formatNum(v, parsed.decimals)}${parsed.suffix}`);
        },
        onComplete: () => setDisplay(targetText),
      });
      return () => controls.stop();
    }

    let a = 0;
    let b = 0;
    const controlsA = animate(0, parsed.a, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        a = v;
        setDisplay(`${formatNum(a, parsed.decimals)}–${formatNum(b, parsed.decimals)}${parsed.suffix}`);
      },
    });
    const controlsB = animate(0, parsed.b, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        b = v;
        setDisplay(`${formatNum(a, parsed.decimals)}–${formatNum(b, parsed.decimals)}${parsed.suffix}`);
      },
      onComplete: () => setDisplay(targetText),
    });

    return () => {
      controlsA.stop();
      controlsB.stop();
    };
  }, [parsed, reduceMotion, tabKey, targetText, value]);

  return (
    <span className="domain-outcomes-metric-num" aria-label={targetText}>
      {display}
    </span>
  );
}
