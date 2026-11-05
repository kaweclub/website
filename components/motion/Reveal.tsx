"use client";

import { motion } from "framer-motion";
import { easeOut } from "./easing";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** How far (px) it rises as it fades in. */
  y?: number;
}

/** Fades and lifts its content in when it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
