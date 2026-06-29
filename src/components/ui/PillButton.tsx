"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  variant?: "dark" | "orange" | "light" | "outline" | "white";
  className?: string;
}

const sizeClass = "inline-flex h-12 min-h-12 items-center justify-center gap-2.5 rounded-full text-sm font-medium transition-colors";

export function PillButton({
  children,
  href,
  onClick,
  showArrow = false,
  variant = "dark",
  className = "",
}: PillButtonProps) {
  const base =
    variant === "dark"
      ? "bg-charcoal px-6 text-white hover:bg-charcoal/90"
      : variant === "orange"
        ? "bg-ember px-6 text-white hover:bg-ember-dark"
        : variant === "white" || variant === "light"
          ? "bg-white px-6 text-charcoal shadow-sm hover:bg-white/90"
          : "border border-white/25 bg-white/10 px-6 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/15";

  const padding = "px-6";

  const inner = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight size={16} strokeWidth={2.5} className="shrink-0" />}
    </>
  );

  const cls = `${sizeClass} ${base} ${padding} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={cls}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={cls}>
      {inner}
    </motion.button>
  );
}
