"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function GradientButton({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}: GradientButtonProps) {
  const baseMotion = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
  };

  if (variant === "ghost") {
    const cls = `inline-flex items-center gap-1.5 rounded-none border border-border bg-transparent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-ember hover:text-ember ${className}`;
    if (href) {
      return (
        <motion.div {...baseMotion}>
          <Link href={href} className={cls}>
            {children}
          </Link>
        </motion.div>
      );
    }
    return (
      <motion.button {...baseMotion} onClick={onClick} className={cls}>
        {children}
      </motion.button>
    );
  }

  if (variant === "outline") {
    const cls = `inline-flex items-center rounded-none border border-border bg-white px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-ember hover:text-ember ${className}`;
    if (href) {
      return (
        <motion.div {...baseMotion}>
          <Link href={href} className={cls}>
            {children}
          </Link>
        </motion.div>
      );
    }
    return (
      <motion.button {...baseMotion} onClick={onClick} className={cls}>
        {children}
      </motion.button>
    );
  }

  const cls = `inline-flex items-center rounded-none bg-ember px-6 py-3 text-sm font-semibold text-white shadow-md shadow-ember/20 transition-colors hover:bg-ember-dark ${className}`;
  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(255,122,0,0.35)" }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(255,122,0,0.35)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cls}
    >
      {children}
    </motion.button>
  );
}
