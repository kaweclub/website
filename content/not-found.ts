import { routes } from "@/config/site";
import type { NotFoundContent } from "@/types/content";

export const notFound: NotFoundContent = {
  eyebrow: "Page not found",
  title: "This page has been torn out.",
  body: "The link may be old or mistyped. Let’s get you back to the first chapter.",
  action: { label: "Back to Kawe", href: routes.home },
};
