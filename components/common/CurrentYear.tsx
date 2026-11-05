"use client";

import { useEffect, useState } from "react";

/** Renders the build year in static HTML, then updates to the visitor's current year. */
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
