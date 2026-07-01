"use client";

import { useEffect, useState } from "react";
import LightRays from "@/components/LightRays";

/**
 * Orange light-rays background used in the GRC/platform hero banners.
 * Mounted client-side only (after first paint) to avoid SSR/WebGL mismatch.
 */
export function BannerRays() {
  const [showRays, setShowRays] = useState(false);

  useEffect(() => {
    setShowRays(true);
  }, []);

  if (!showRays) return null;

  return (
    <div className="absolute inset-0 z-[1] opacity-80">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff7a00"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
    </div>
  );
}
