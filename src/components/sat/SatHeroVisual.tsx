"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const STROKE = "#141414";
const ACCENT = "#ff7a00";
const ACCENT_SOFT = "#ffb347";
const ACCENT_PALE = "#fff0e3";

function Gear({
  cx,
  cy,
  r,
  delay = 0,
  reduceMotion,
}: {
  cx: number;
  cy: number;
  r: number;
  delay?: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.g
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear", delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={STROKE} strokeWidth="2.2" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * (r - 2);
        const y1 = cy + Math.sin(rad) * (r - 2);
        const x2 = cx + Math.cos(rad) * (r + 5);
        const y2 = cy + Math.sin(rad) * (r + 5);
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={STROKE}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.34} fill="none" stroke={STROKE} strokeWidth="2" />
    </motion.g>
  );
}

export function SatHeroVisual() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;

  return (
    <div className="sat-hero-visual" aria-hidden>
      <span className="sat-hero-visual-glow" />
      <span className="sat-hero-visual-ring" />

      <motion.div
        className="sat-hero-visual-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
      >
        <motion.svg
          viewBox="0 0 560 420"
          className="sat-hero-visual-svg"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Background decorations */}
          <path
            d="M 28 58 Q 120 18 210 42"
            fill="none"
            stroke={STROKE}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <polygon points="372,34 382,54 362,54" fill="none" stroke={STROKE} strokeWidth="1.8" />
          <circle cx="404" cy="48" r="5" fill="none" stroke={STROKE} strokeWidth="1.8" />
          <path
            d="M 430 30 l 5 10 l -10 0 z"
            fill="none"
            stroke={STROKE}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <Gear cx={468} cy={72} r={14} delay={0} reduceMotion={rm} />
          <Gear cx={498} cy={108} r={10} delay={2} reduceMotion={rm} />

          {/* Laptop base */}
          <path
            d="M 148 318 L 412 318 L 432 348 L 128 348 Z"
            fill="#0a0a0a"
            stroke={STROKE}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 128 348 L 432 348 L 440 358 L 120 358 Z"
            fill="#1a1a1a"
            stroke={STROKE}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Laptop screen */}
          <rect x="156" y="138" width="248" height="178" rx="10" fill="#ffffff" stroke={STROKE} strokeWidth="2.2" />
          <rect x="168" y="150" width="224" height="154" rx="6" fill="#faf9f7" />

          {/* Alert queue on screen */}
          {[
            { y: 164, label: "Txn #8842", risk: "High", active: true },
            { y: 198, label: "Vendor KYC", risk: "Med", active: false },
            { y: 232, label: "Login geo", risk: "Low", active: false },
            { y: 266, label: "Wire transfer", risk: "High", active: false },
          ].map((row) => (
            <g key={row.label}>
              <rect
                x="176"
                y={row.y}
                width="208"
                height="26"
                rx="6"
                fill={row.active ? ACCENT_PALE : "#ffffff"}
                stroke={row.active ? ACCENT : "#e8e4df"}
                strokeWidth="1.2"
              />
              <circle
                cx="190"
                cy={row.y + 13}
                r="4.5"
                fill={row.risk === "High" ? ACCENT : row.risk === "Med" ? ACCENT_SOFT : "#d4ccc4"}
              />
              <rect x="202" y={row.y + 9} width="72" height="4" rx="2" fill="#2a2420" opacity="0.85" />
              <rect x="202" y={row.y + 16} width="48" height="3" rx="1.5" fill="#b8afa6" />
              <text
                x="332"
                y={row.y + 17}
                textAnchor="end"
                fontSize="9"
                fontWeight="600"
                fill={row.risk === "High" ? "#c45a00" : "#8a7d72"}
              >
                {row.risk}
              </text>
            </g>
          ))}

          {/* AI robotic arm */}
          <motion.g
            animate={reduceMotion ? undefined : { rotate: [0, 1.5, 0, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "108px 248px" }}
          >
            <circle cx="88" cy="268" r="16" fill="#ffffff" stroke={STROKE} strokeWidth="2.2" />
            <circle cx="88" cy="268" r="7" fill={ACCENT} />

            <path
              d="M 100 256 L 168 210"
              stroke={STROKE}
              strokeWidth="14"
              strokeLinecap="round"
            />
            <circle cx="168" cy="210" r="9" fill={ACCENT} stroke={STROKE} strokeWidth="2" />

            <path
              d="M 176 204 L 248 178"
              stroke={STROKE}
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="248" cy="178" r="8" fill={ACCENT} stroke={STROKE} strokeWidth="2" />

            {/* Magnifying glass */}
            <motion.g
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "292px 196px" }}
            >
              <circle cx="292" cy="196" r="34" fill="#ffffff" stroke={STROKE} strokeWidth="2.4" />
              <circle cx="292" cy="196" r="26" fill={ACCENT_PALE} stroke={ACCENT} strokeWidth="1.8" />
              {/* Alert under lens */}
              <path
                d="M 292 182 l 10 16 h -20 z"
                fill={ACCENT}
                stroke={STROKE}
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <rect x="288" y="200" width="8" height="5" rx="1.5" fill={STROKE} />
              <line x1="318" y1="222" x2="338" y2="242" stroke={STROKE} strokeWidth="5" strokeLinecap="round" />
            </motion.g>
          </motion.g>

          {/* Analyst on laptop */}
          <g>
            {/* Legs */}
            <path
              d="M 318 138 L 318 118 L 338 118 L 348 138"
              fill="none"
              stroke={STROKE}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 348 138 L 348 118 L 368 118 L 378 138"
              fill="none"
              stroke={STROKE}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Body */}
            <path
              d="M 308 138 L 388 138 L 382 98 L 314 98 Z"
              fill="#0a0a0a"
              stroke={STROKE}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Head */}
            <circle cx="348" cy="82" r="18" fill="#f5e6d8" stroke={STROKE} strokeWidth="2" />
            <path
              d="M 334 86 Q 348 96 362 86"
              fill="none"
              stroke={STROKE}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 338 78 Q 348 72 358 78"
              fill="none"
              stroke={STROKE}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Mini laptop */}
            <rect x="322" y="108" width="52" height="32" rx="4" fill={ACCENT} stroke={STROKE} strokeWidth="1.8" />
            <rect x="326" y="112" width="44" height="22" rx="2" fill="#fff8f2" />
            <rect x="330" y="116" width="20" height="2.5" rx="1" fill="#2a2420" opacity="0.7" />
            <rect x="330" y="121" width="28" height="2" rx="1" fill="#c4b8ae" />
            <rect x="330" y="126" width="16" height="2" rx="1" fill="#c4b8ae" />
          </g>

          {/* Case merged badge */}
          <motion.g
            animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="388" y="156" width="88" height="36" rx="8" fill="#ffffff" stroke={ACCENT} strokeWidth="1.6" />
            <circle cx="402" cy="174" r="8" fill={ACCENT} />
            <path d="M 399 174 l 3 3 l 6 -6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            <text x="416" y="170" fontSize="8.5" fontWeight="700" fill="#1a1410">
              Case #1024
            </text>
            <text x="416" y="182" fontSize="7.5" fontWeight="500" fill="#8a7d72">
              3 alerts merged
            </text>
          </motion.g>

          {/* ML scoring chip */}
          <rect x="388" y="268" width="76" height="28" rx="14" fill="#0a0a0a" />
          <circle cx="402" cy="282" r="5" fill={ACCENT} />
          <text x="414" y="286" fontSize="9" fontWeight="600" fill="#ffffff">
            ML Score 94%
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}
