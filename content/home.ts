import { sections, site } from "@/config/site";
import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  hero: {
    id: sections.top,
    badge: "Coming soon to iOS and Android",
    headline: { lead: "Read a book,", highlight: "together." },
    intro:
      "Track your reading, join a club, and discuss every chapter without spoilers. Kawe keeps everyone’s thoughts hidden until the club is ready, then reveals them all at once.",
    primary: { label: "Join the waitlist", href: site.waitlistUrl },
    secondary: { label: "Help shape Kawe", href: site.surveyUrl },
    note: "Free to join: a two-minute survey, then just launch news. No spam.",
  },

  howItWorks: {
    id: sections.how,
    eyebrow: "The Blind Reveal",
    title: "Everyone thinks for themselves first. Then the pages turn together.",
    steps: [
      {
        title: "Read at your own pace",
        body: "Log chapters as you go. In a club, you sit with everyone on the same chapter, so you’re never rushed and never spoiled.",
      },
      {
        title: "Write your thoughts privately",
        body: "Finish a chapter, then jot down what you think. Nobody sees it yet, so first impressions stay honest.",
      },
      {
        title: "Reveal and discuss together",
        body: "Once enough of the club has written theirs, a short countdown runs. Then every thought is revealed at once and the chat opens.",
      },
    ],
  },

  features: {
    id: sections.why,
    title: "Built for readers who love to talk about books.",
    items: [
      {
        icon: "spoiler-free",
        title: "Spoiler-free by design",
        body: "You only ever see discussion for chapters you’ve reached. Readers ahead can’t give anything away.",
      },
      {
        icon: "tracker",
        title: "A reading tracker that’s yours",
        body: "Chapters, dates, streaks and stats. Useful on its own, even before you join a club.",
      },
      {
        icon: "clubs",
        title: "Clubs for any pace",
        body: "Members are grouped by the chapter they’re on, so slower and faster readers stay in the same club.",
      },
      {
        icon: "conversation",
        title: "Made for real conversation",
        body: "The Blind Reveal means everyone forms their own view first, so discussions start with something to say.",
      },
    ],
  },

  theName: {
    id: sections.name,
    eyebrow: "The name",
    title: "“Ka iwe.” Read a book.",
    body: "Kawe comes from Yoruba. Our mark is a K seen from the edge of a book: the stem is the spine, and the two legs are pages, one settled, one mid-turn. The colours come from Yoruba craft too: Adire, the indigo resist-dyed cloth, and Osun, the red-orange of camwood.",
  },

  callToAction: {
    title: "Be part of the first club.",
    body: "We’re building Kawe with readers. Join the waitlist for early access, or take our two-minute survey and tell us how you read.",
    primary: { label: "Join the waitlist", href: site.waitlistUrl },
    secondary: { label: "Take the survey", href: site.surveyUrl },
  },
};
