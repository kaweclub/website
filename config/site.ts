// Site-wide settings. Links, contact details and socials live here.
// Page wording lives in `content/`.

import type { SiteConfig, SocialLink, SocialPlatform } from "@/types/site";

/** Page routes, so links never hard-code paths. */
export const routes = {
  home: "/",
  privacy: "/privacy",
} as const;

/** Ids of the home page sections. The nav links and the sections both use these. */
export const sections = {
  top: "top",
  how: "how",
  why: "why",
  name: "name",
} as const;

const socials: readonly SocialLink[] = [
  { platform: "Instagram", handle: "@kaweclub", href: "https://www.instagram.com/kaweclub" },
  { platform: "TikTok", handle: "@kaweclub", href: "https://www.tiktok.com/@kaweclub" },
  { platform: "X", handle: "@kaweclub", href: "https://x.com/kaweclub" },
  { platform: "LinkedIn", handle: "Kawe", href: "https://www.linkedin.com/company/kaweclub" },
];

function handleFor(platform: SocialPlatform): string {
  const link = socials.find((s) => s.platform === platform);
  if (!link) throw new Error(`config/site.ts: add a ${platform} entry to socials`);
  return link.handle;
}

export const site: SiteConfig = {
  name: "Kawe",
  domain: "kawe.club",
  url: "https://kawe.club",
  tagline: "Read a book, together.",
  description:
    "Track your reading, join a club, and discuss every chapter without spoilers. Kawe is the book club app built around the Blind Reveal.",

  // The survey ends by asking for an email or WhatsApp number, so it doubles as the waitlist.
  waitlistUrl: "https://forms.gle/hvyE423P27jQg9u2A",
  surveyUrl: "https://forms.gle/hvyE423P27jQg9u2A",

  supportEmail: "support@kawe.club",

  navLinks: [
    { href: `${routes.home}#${sections.how}`, label: "How it works" },
    { href: `${routes.home}#${sections.why}`, label: "Why Kawe" },
    { href: `${routes.home}#${sections.name}`, label: "The name" },
  ],

  socials,
  // Read from the X entry above, so change the handle there.
  xHandle: handleFor("X"),
};
