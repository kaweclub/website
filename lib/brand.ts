// Brand colours needed in TypeScript (SVG fills, browser theme colour).
// CSS colours live in `app/globals.css`; keep the two in step.

export const themeColor = "#233A8C";

/** Colours for the Turning K on different backgrounds. */
export const markTones = {
  light: { spine: "#15122E", turn: "#E0603A", page: "#233A8C" },
  dark: { spine: "#F7F3EA", turn: "#FF8A63", page: "#8EA2F0" },
  adire: { spine: "#F7F3EA", turn: "#F08A5D", page: "#AFBCEB" },
} as const;

export type MarkTone = keyof typeof markTones;

/** The Adire cloth pattern behind "The name" section. */
export const patternColors = {
  base: "#2E46A0",
  highlight: "#5068BC",
  turn: "#F08A5D",
} as const;
