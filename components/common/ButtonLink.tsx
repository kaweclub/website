import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const variants = {
  primary: cn(buttonVariants({ size: "xl" }), "hover:bg-adire-deep"),
  secondary: cn(
    buttonVariants({ variant: "outline", size: "xl" }),
    "border-line bg-white text-night hover:border-adire hover:bg-white",
  ),
  /** Compact version for the header. */
  compact: cn(buttonVariants({ size: "lg" }), "h-11 rounded-xl px-4 font-semibold hover:bg-adire-deep"),
} as const;

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  /** Arrow after the label (`forward`) or before it (`back`). */
  arrow?: "forward" | "back" | "none";
  className?: string;
}

/**
 * A link styled as a button. Links to other websites open in a new tab;
 * links within the site open in place.
 */
export function ButtonLink({ href, children, variant = "primary", arrow = "none", className }: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn("group", variants[variant], className)}
    >
      {arrow === "back" && <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />}
      {children}
      {arrow === "forward" && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </a>
  );
}
