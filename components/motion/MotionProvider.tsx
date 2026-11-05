"use client";

import { MotionConfig } from "framer-motion";

/** Turns off movement for visitors who ask their device for reduced motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
