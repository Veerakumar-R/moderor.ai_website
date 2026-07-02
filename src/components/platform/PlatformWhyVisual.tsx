"use client";

import { CircleCheck } from "lucide-react";

export function PlatformWhyVisual({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="platform-why-visual">
      <div className="platform-why-visual-bg" aria-hidden />

      <div className="platform-why-visual-card">
        <div className="platform-why-visual-card-head">
          <div className="platform-why-visual-badge">
            <span className="platform-why-visual-badge-dot" aria-hidden />
            Governance gap
          </div>

          <h3 className="platform-why-visual-card-title">{title}</h3>
        </div>

        <div className="platform-why-visual-card-body">
          <ul className="platform-why-visual-list">
            {bullets.map((bullet) => (
              <li key={bullet} className="platform-why-visual-box">
                <span className="platform-why-visual-box-icon" aria-hidden>
                  <CircleCheck size={15} strokeWidth={2.25} />
                </span>
                <span className="platform-why-visual-box-text">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
