"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const STROKE = "#141414";
const ACCENT = "#ff7a00";
const ACCENT_PALE = "#fff0e3";

const apps = [
  { name: "Core Banking", pct: 94 },
  { name: "Payments API", pct: 88 },
  { name: "HR Portal", pct: 91 },
];

const checks = ["Access review", "Change mgmt", "Data retention"];

export function CiqHeroVisual() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;

  return (
    <div className="ciq-hero-visual" aria-hidden>
      <span className="ciq-hero-visual-glow" />
      <span className="ciq-hero-visual-ring" />

      <motion.div
        className="ciq-hero-visual-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
      >
        <motion.svg
          viewBox="0 0 560 420"
          className="ciq-hero-visual-svg"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M 28 58 Q 120 18 210 42"
            fill="none"
            stroke={STROKE}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <polygon points="372,34 382,54 362,54" fill="none" stroke={STROKE} strokeWidth="1.8" />
          <circle cx="404" cy="48" r="5" fill="none" stroke={STROKE} strokeWidth="1.8" />

          {/* Monitor stand */}
          <path
            d="M 148 318 L 412 318 L 432 348 L 128 348 Z"
            fill="#0a0a0a"
            stroke={STROKE}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M 268 348 L 292 378 L 248 378 Z" fill="#0a0a0a" stroke={STROKE} strokeWidth="2" />

          {/* Screen */}
          <rect
            x="132"
            y="108"
            width="296"
            height="210"
            rx="14"
            fill="#fff"
            stroke={STROKE}
            strokeWidth="2.2"
          />
          <rect x="148" y="124" width="264" height="178" rx="8" fill={ACCENT_PALE} opacity="0.35" />

          {/* Screen header */}
          <rect x="148" y="124" width="264" height="28" rx="8" fill="#fff" />
          <text x="160" y="142" fontSize="10" fontWeight="700" fill={STROKE}>
            Application Compliance Workspace
          </text>
          <rect x="360" y="130" width="40" height="14" rx="7" fill={ACCENT} opacity="0.9" />
          <text x="368" y="141" fontSize="7.5" fontWeight="700" fill="#fff">
            92%
          </text>

          {/* App tiles */}
          {apps.map((app, i) => {
            const y = 162 + i * 44;
            return (
              <g key={app.name}>
                <rect
                  x="156"
                  y={y}
                  width="118"
                  height="36"
                  rx="8"
                  fill="#fff"
                  stroke={STROKE}
                  strokeWidth="1.5"
                />
                <text x="166" y={y + 16} fontSize="8" fontWeight="600" fill={STROKE}>
                  {app.name}
                </text>
                <rect x="166" y={y + 22} width="72" height="5" rx="2.5" fill="#f0e4d8" />
                <motion.rect
                  x="166"
                  y={y + 22}
                  width={(app.pct / 100) * 72}
                  height="5"
                  rx="2.5"
                  fill={ACCENT}
                  initial={rm ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: EASE }}
                  style={{ transformOrigin: `166px ${y + 24.5}px` }}
                />
                <text x="248" y={y + 26} fontSize="7" fontWeight="700" fill={ACCENT}>
                  {app.pct}%
                </text>
              </g>
            );
          })}

          {/* Assessment checklist panel */}
          <rect
            x="286"
            y="162"
            width="118"
            height="132"
            rx="8"
            fill="#fff"
            stroke={STROKE}
            strokeWidth="1.5"
          />
          <text x="296" y="178" fontSize="8" fontWeight="700" fill={STROKE}>
            Q2 Assessments
          </text>
          {checks.map((check, i) => {
            const y = 194 + i * 22;
            return (
              <g key={check}>
                <motion.circle
                  cx="302"
                  cy={y}
                  r="5"
                  fill={ACCENT_PALE}
                  stroke={ACCENT}
                  strokeWidth="1.2"
                  initial={rm ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.2, ease: EASE }}
                />
                <path
                  d={`M 299 ${y} l 2 2 l 4 -4`}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="312" y={y + 3} fontSize="7.5" fill="#5c4f48">
                  {check}
                </text>
              </g>
            );
          })}

          {/* Framework badges */}
          {["SOC 2", "ITGC", "ISO"].map((fw, i) => (
            <g key={fw}>
              <rect
                x={156 + i * 52}
                y="268"
                width="46"
                height="18"
                rx="9"
                fill="#fff"
                stroke={ACCENT}
                strokeWidth="1.2"
              />
              <text x={164 + i * 52} y="280" fontSize="7" fontWeight="700" fill={ACCENT}>
                {fw}
              </text>
            </g>
          ))}

          {/* Evidence stack — right side */}
          <motion.g
            animate={rm ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <rect
              x="448"
              y="148"
              width="72"
              height="88"
              rx="10"
              fill="#fff"
              stroke={STROKE}
              strokeWidth="2"
            />
            <rect x="458" y="158" width="52" height="6" rx="3" fill="#f0e4d8" />
            <rect x="458" y="170" width="44" height="4" rx="2" fill="#f0e4d8" />
            <rect x="458" y="178" width="48" height="4" rx="2" fill="#f0e4d8" />
            <rect x="458" y="196" width="52" height="28" rx="6" fill={ACCENT_PALE} stroke={ACCENT} strokeWidth="1" />
            <text x="466" y="214" fontSize="7" fontWeight="700" fill={ACCENT}>
              Evidence
            </text>
            <circle cx="508" cy="210" r="8" fill={ACCENT} />
            <path
              d="M 505 210 l 2 2 l 4 -4"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.g>

          {/* AI agent chip */}
          <motion.g
            animate={rm ? undefined : { x: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="430"
              y="88"
              width="108"
              height="44"
              rx="12"
              fill="#fff"
              stroke={STROKE}
              strokeWidth="2"
            />
            <circle cx="448" cy="110" r="12" fill={ACCENT_PALE} stroke={ACCENT} strokeWidth="1.5" />
            <text x="444" y="114" fontSize="10" fontWeight="700" fill={ACCENT}>
              AI
            </text>
            <text x="466" y="106" fontSize="8" fontWeight="700" fill={STROKE}>
              Evidence Agent
            </text>
            <text x="466" y="120" fontSize="7" fill="#8a7d72">
              Auto-collecting
            </text>
          </motion.g>

          {/* Floating audit-ready badge */}
          <motion.g
            animate={rm ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <rect
              x="72"
              y="200"
              width="88"
              height="36"
              rx="10"
              fill="#fff"
              stroke={STROKE}
              strokeWidth="2"
            />
            <text x="84" y="216" fontSize="7" fontWeight="600" fill="#8a7d72">
              Status
            </text>
            <text x="84" y="228" fontSize="9" fontWeight="700" fill="#1f9c54">
              Audit Ready
            </text>
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  );
}
