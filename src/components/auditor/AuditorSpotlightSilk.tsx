"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Silk = dynamic(() => import("../Silk").then((m) => m.Silk), { ssr: false });

export function AuditorSpotlightSilk() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="aw-cap-spotlight-silk" aria-hidden>
      <Silk speed={5} scale={1} color="#c4520a" noiseIntensity={1.5} rotation={0} />
    </div>
  );
}
