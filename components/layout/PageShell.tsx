import { cn } from "@/lib/utils";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** The frame every page sits in: header, main content, footer. */
export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className={cn(className)}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
