import type { MarkTone } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Mark } from "./Mark";

interface LogoProps {
  tone?: MarkTone;
  size?: number;
  className?: string;
}

/** The Mark plus the "kawe" wordmark. */
export function Logo({ tone = "light", size = 34, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark size={size} tone={tone} />
      <span
        className={cn("font-bold leading-none tracking-[-0.045em]", tone === "light" ? "text-night" : "text-cotton")}
        style={{ fontSize: size * 0.88 }}
      >
        kawe
      </span>
    </span>
  );
}
