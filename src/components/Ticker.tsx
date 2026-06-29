"use client";

import { tickerItems } from "@/content/site";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-b border-border bg-surface-muted py-2.5">
      <div className="ticker-track flex w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3.5 px-9 whitespace-nowrap">
            <span className="text-xs font-semibold text-charcoal">{item.num}</span>
            <span className="text-[11px] text-grey-light">{item.label}</span>
            <span className="text-[9px] text-ember">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
