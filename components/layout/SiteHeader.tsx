import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/common/ButtonLink";
import { routes, site } from "@/config/site";
import { layoutCopy } from "@/content/layout";
import { MobileNav } from "./MobileNav";

/** Skip link plus the sticky top bar. On small screens the links move into MobileNav. */
export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        {layoutCopy.skipLink}
      </a>
      <header className="sticky top-0 z-20 border-b border-line/70 bg-cotton/85 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href={routes.home} aria-label={layoutCopy.homeLabel}>
            <Logo size={30} />
          </a>
          <div className="hidden items-center gap-7 text-[15px] font-medium text-ink-2 md:flex">
            {site.navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-night">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <ButtonLink href={site.waitlistUrl} variant="compact">
              {layoutCopy.waitlistCta}
            </ButtonLink>
            <MobileNav links={site.navLinks} />
          </div>
        </nav>
      </header>
    </>
  );
}
