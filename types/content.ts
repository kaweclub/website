/** Contracts for the page copy in `content/`. Components receive these as props. */

import type { ReactNode } from "react";

export interface ActionLink {
  label: string;
  href: string;
}

/* ---------- Home page ---------- */

export interface HeroContent {
  id: string;
  badge: string;
  /** Rendered on two lines, the second in Adire blue. */
  headline: { lead: string; highlight: string };
  intro: string;
  primary: ActionLink;
  secondary: ActionLink;
  note: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface HowItWorksContent {
  id: string;
  eyebrow: string;
  title: string;
  /** Numbered automatically in order. */
  steps: readonly Step[];
}

/** Icons are chosen by key so content stays free of UI imports. See `components/sections/Features.tsx`. */
export type FeatureIcon = "spoiler-free" | "tracker" | "clubs" | "conversation";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  body: string;
}

export interface FeaturesContent {
  id: string;
  title: string;
  items: readonly Feature[];
}

export interface TheNameContent {
  id: string;
  eyebrow: string;
  /** Rendered as: “<phrase>.” <meaning> — the phrase is marked as Yoruba for screen readers. */
  title: { phrase: string; meaning: string };
  body: string;
}

export interface CallToActionContent {
  title: string;
  body: string;
  primary: ActionLink;
  secondary: ActionLink;
}

export interface HomeContent {
  hero: HeroContent;
  howItWorks: HowItWorksContent;
  features: FeaturesContent;
  theName: TheNameContent;
  callToAction: CallToActionContent;
}

/* ---------- Phone mockups ---------- */

export type AvatarTone = "osun" | "adire";

export interface MockupContent {
  club: {
    name: string;
    book: string;
    members: number;
    /** Chips under the club name: who is on which chapter. */
    chapterGroups: readonly { label: string; current?: boolean }[];
  };
  chapter: { number: number; title: string };
  countdown: { remaining: string; submitted: number };
  thoughts: readonly { author: string; avatar: AvatarTone; text: string }[];
  discussion: readonly { text: string; mine?: boolean }[];
}

/* ---------- Simple pages ---------- */

export interface LegalDocumentContent {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: readonly { title: string; body: ReactNode }[];
}

export interface NotFoundContent {
  eyebrow: string;
  title: string;
  body: string;
  action: ActionLink;
}
