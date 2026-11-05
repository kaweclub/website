import { cn } from "@/lib/utils";

const tones = {
  /** On light backgrounds. */
  default: "text-osun-deep",
  /** On the indigo Adire background. */
  inverse: "text-osun-bright",
} as const;

/** The small uppercase label above a heading. */
export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return <p className={cn("text-[13px] font-semibold uppercase tracking-[0.12em]", tones[tone], className)}>{children}</p>;
}
