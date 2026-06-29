"use client";

export function InfrastructureOrb({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="infra-orb" aria-hidden>
      <div className="infra-orb-halo" />
      <div className="infra-orb-core">
        <svg viewBox="0 0 200 200" className="infra-orb-svg">
          <defs>
            <radialGradient id="infra-orb-glow" cx="50%" cy="46%" r="52%">
              <stop offset="0%" stopColor="rgba(255, 190, 120, 0.95)" />
              <stop offset="42%" stopColor="rgba(255, 122, 0, 0.42)" />
              <stop offset="100%" stopColor="rgba(255, 122, 0, 0)" />
            </radialGradient>
            <linearGradient id="infra-orb-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd080" />
              <stop offset="50%" stopColor="#ff7a00" />
              <stop offset="100%" stopColor="#ff5500" />
            </linearGradient>
            <filter id="infra-orb-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="78"
            fill="url(#infra-orb-glow)"
            filter="url(#infra-orb-blur)"
            opacity="0.55"
            className="infra-orb-pulse"
          />

          <circle
            cx="100"
            cy="100"
            r="72"
            fill="url(#infra-orb-glow)"
            className="infra-orb-pulse"
          />

          <circle
            cx="100"
            cy="100"
            r="58"
            fill="none"
            stroke="url(#infra-orb-line)"
            strokeWidth="1.2"
            strokeOpacity="0.35"
            className={reduceMotion ? undefined : "infra-orb-ring infra-orb-ring--1"}
          />

          <circle
            cx="100"
            cy="100"
            r="44"
            fill="none"
            stroke="url(#infra-orb-line)"
            strokeWidth="1"
            strokeOpacity="0.5"
            className={reduceMotion ? undefined : "infra-orb-ring infra-orb-ring--2"}
          />

          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="url(#infra-orb-line)"
            strokeWidth="0.8"
            strokeOpacity="0.28"
            strokeDasharray="4 6"
            className={reduceMotion ? undefined : "infra-orb-ring infra-orb-ring--3"}
          />

          <circle cx="100" cy="100" r="10" fill="#ff7a00" className="infra-orb-nucleus" />
          <circle cx="100" cy="100" r="4" fill="#fff8f0" opacity="0.9" />
        </svg>
      </div>
      <span className="infra-orb-label">Control Plane</span>
    </div>
  );
}
