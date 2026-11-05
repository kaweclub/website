"use client";

import { motion, type Variants } from "framer-motion";
import { easeOut } from "./easing";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const tags = { div: motion.div, ol: motion.ol, ul: motion.ul, li: motion.li };
type Tag = keyof typeof tags;

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}

/** Parent that reveals its StaggerItem children one after another as it scrolls into view. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Comp = tags[as];
  return (
    <Comp className={className} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      {children}
    </Comp>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  /** Raise slightly on hover. */
  lift?: boolean;
}

export function StaggerItem({ children, className, as = "div", lift = false }: StaggerItemProps) {
  const Comp = tags[as];
  return (
    <Comp className={className} variants={item} whileHover={lift ? { y: -4 } : undefined}>
      {children}
    </Comp>
  );
}
