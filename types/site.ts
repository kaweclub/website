/** Contracts for site-wide settings in `config/site.ts`. */

export interface NavLink {
  href: string;
  label: string;
}

export type SocialPlatform = "Instagram" | "TikTok" | "X" | "LinkedIn";

export interface SocialLink {
  platform: SocialPlatform;
  handle: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  /** Where "Join the waitlist" buttons go. */
  waitlistUrl: string;
  /** Where "Take the survey" buttons go. */
  surveyUrl: string;
  supportEmail: string;
  /** X/Twitter handle used in link previews. */
  xHandle: string;
  navLinks: readonly NavLink[];
  socials: readonly SocialLink[];
}
