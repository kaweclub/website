import { markTones, type MarkTone } from "@/lib/brand";
import { MARK_VIEWBOX, markShapes } from "./geometry";

interface MarkProps {
  size?: number;
  tone?: MarkTone;
  className?: string;
  /** Give a title only when the mark stands alone and needs to be announced. */
  title?: string;
}

/** The Turning K: a book seen from its edge, with the upper page mid-turn. */
export function Mark({ size = 40, tone = "light", className, title }: MarkProps) {
  const c = markTones[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox={MARK_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect {...markShapes.spine} fill={c.spine} />
      <path d={markShapes.turn} fill={c.turn} />
      <path d={markShapes.page} fill={c.page} />
    </svg>
  );
}
