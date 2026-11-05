import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "nav";
  id?: string;
  /** Narrow width for reading pages such as the privacy notice. */
  narrow?: boolean;
}

/** Centres content at the site's standard width, with side padding. */
export function Container({ children, className, as: Tag = "div", id, narrow = false }: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto px-5", narrow ? "max-w-3xl" : "max-w-6xl", className)}>
      {children}
    </Tag>
  );
}
