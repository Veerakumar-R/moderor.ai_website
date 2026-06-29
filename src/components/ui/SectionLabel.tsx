"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ember ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      {children}
    </motion.p>
  );
}
