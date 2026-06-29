"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Silk = dynamic(() => import("./Silk").then((m) => m.Silk), { ssr: false });

export function FinalClosingSilk() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="final-closing-silk" aria-hidden>
      {mounted ? (
        <Silk
          speed={5}
          scale={1}
          color="#F97316"
          noiseIntensity={1.5}
          rotation={0}
        />
      ) : null}
    </div>
  );
}
