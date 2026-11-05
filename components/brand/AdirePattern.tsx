import { patternColors } from "@/lib/brand";
import { MARK_VIEWBOX, markShapes } from "./geometry";

const COLS = 12;
const ROWS = 8;
const CELL = 80;
/** Cells ("row-col") where the page is turning, picked out in Osun. */
const TURNING = new Set(["2-7", "5-3"]);

/** Adire-style repeat of the Turning K. One page is always turning. */
export function AdirePattern({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`} preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: ROWS }).flatMap((_, r) =>
        Array.from({ length: COLS }).map((__, c) => {
          const on = TURNING.has(`${r}-${c}`);
          const base = on ? patternColors.highlight : patternColors.base;
          return (
            <svg key={`${r}-${c}`} x={c * CELL + (r % 2 ? CELL / 2 : 0)} y={r * CELL} width="56" height="56" viewBox={MARK_VIEWBOX}>
              <rect {...markShapes.spine} fill={base} />
              <path d={markShapes.turn} fill={on ? patternColors.turn : base} />
              <path d={markShapes.page} fill={base} />
            </svg>
          );
        }),
      )}
    </svg>
  );
}
