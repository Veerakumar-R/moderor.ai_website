"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.08, rootMargin = "0px 0px -8% 0px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markVisible = () => {
      setVisible(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markVisible();
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    // If already in viewport on mount (e.g. after long scroll sections)
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        markVisible();
      }
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
