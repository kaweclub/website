/** Shapes of the Turning K, shared by the Mark and the Adire pattern. Drawn on a 64×64 grid. */
export const MARK_VIEWBOX = "0 0 64 64";

export const markShapes = {
  /** The book's spine (the K's stem). */
  spine: { x: 12, y: 8, width: 9, height: 48, rx: 4.5 },
  /** The upper page, mid-turn. */
  turn: "M21 30C29 21 39 13 53 8C49 19 39 29 21 39Z",
  /** The lower page, settled. */
  page: "M21 35C33 37 44 45 53 56C41 55 30 50 21 45Z",
} as const;
