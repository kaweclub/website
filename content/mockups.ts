import type { MockupContent } from "@/types/content";

/** The sample club shown in the phone mockups. The progress bar is worked out from `submitted / members`. */
export const mockup: MockupContent = {
  club: {
    name: "Tuesday Readers",
    book: "The Lantern Keeper",
    members: 6,
    chapterGroups: [{ label: "Ch 3 · 2" }, { label: "Ch 4 · You + 3", current: true }, { label: "Ch 5 · 1" }],
  },
  chapter: { number: 4, title: "The Harbour" },
  countdown: { remaining: "31h 12m", submitted: 3 },
  thoughts: [
    {
      author: "Ada",
      avatar: "osun",
      text: "I didn’t expect Mara to choose the lighthouse. The burned letters finally make sense.",
    },
    {
      author: "Ben",
      avatar: "adire",
      text: "The storm mirrors the fight in Chapter 2. Same images, reversed roles.",
    },
  ],
  discussion: [
    { text: "Did anyone read the storm as Mara arguing with herself?" },
    { text: "Yes, and it changes how the ending lands.", mine: true },
  ],
};
