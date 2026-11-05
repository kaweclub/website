"use client";

import { useRef, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { routes, site } from "@/config/site";
import { layoutCopy } from "@/content/layout";
import type { NavLink } from "@/types/site";

/** Slide-out menu for small screens. */
export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  // The menu locks page scrolling while open, so we jump to the section once it has fully closed.
  const pendingHash = useRef<string | null>(null);

  function scrollToPending(isOpen: boolean) {
    const hash = pendingHash.current;
    if (isOpen || !hash) return;
    pendingHash.current = null;
    document.getElementById(hash.slice(1))?.scrollIntoView();
    history.replaceState(null, "", `${routes.home}${hash}`);
  }

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // On other pages (e.g. /privacy) let the link go to the home page as normal.
    if (window.location.pathname !== routes.home) return;
    event.preventDefault();
    pendingHash.current = href.slice(href.indexOf("#"));
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen} onOpenChangeComplete={scrollToPending}>
      <SheetTrigger render={<Button variant="ghost" size="icon-lg" className="size-11 hover:bg-muted md:hidden" />}>
        <Menu className="size-5" />
        <span className="sr-only">{layoutCopy.menu.open}</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] gap-6 border-line bg-cotton p-6">
        <SheetHeader className="p-0">
          <SheetTitle>
            <Logo size={28} />
          </SheetTitle>
          <SheetDescription className="sr-only">{layoutCopy.menu.description}</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="flex min-h-14 items-center justify-between text-lg font-semibold text-night hover:text-adire"
                >
                  {l.label}
                  <ChevronRight className="size-5 text-ink-3" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href={site.waitlistUrl} arrow="forward" className="w-full">
          {layoutCopy.waitlistCta}
        </ButtonLink>

        <Separator className="bg-line" />

        <div>
          <p className="text-sm font-semibold">{layoutCopy.footer.follow}</p>
          <SocialLinks className="mt-3" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
