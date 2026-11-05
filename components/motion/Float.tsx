"use client";

import { motion } from "framer-motion";

/** A slow, gentle bob, for the hero phone. */
export function Float({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
