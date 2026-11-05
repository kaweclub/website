import { cn } from "@/lib/utils";

const sizes = {
  /** Standard section heading. */
  default: "text-[34px] tracking-tight sm:text-[44px]",
  /** Page title on simple pages (privacy, 404). */
  page: "text-[36px] tracking-[-0.03em] sm:text-[48px]",
  /** Large statement heading, e.g. "The name". */
  display: "text-[40px] tracking-[-0.03em] sm:text-[56px]",
} as const;

interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2";
  size?: keyof typeof sizes;
  className?: string;
}

export function SectionTitle({ children, as: Tag = "h2", size = "default", className }: SectionTitleProps) {
  return <Tag className={cn("font-bold leading-tight", sizes[size], className)}>{children}</Tag>;
}
