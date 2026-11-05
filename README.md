# Kawe

The marketing site for [kawe.club](https://kawe.club), the book club app built around the Blind Reveal.

A fully static Next.js site: no backend, no database.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 and [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)
- [framer-motion](https://motion.dev) for animation
- [lucide-react](https://lucide.dev) and [react-icons](https://react-icons.github.io/react-icons/) for icons
- Vercel Analytics and Speed Insights (cookieless)

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build (also type-checks) |
| `npm run start` | Serve the production build |

## Project structure

Configuration, content and presentation are kept separate. Copy changes happen in `content/`, settings in `config/`, and components receive their content as typed props.

```text
app/              Routes (home, privacy, 404), root layout, global styles
config/site.ts    Site settings: URLs, contact, navigation, socials, routes
content/          All page copy as typed data
types/            Interfaces for config and content
lib/              Utilities and brand colour tokens
components/
  ui/             shadcn/ui primitives
  brand/          Logo, mark and pattern
  common/         Shared building blocks (buttons, headings, container)
  layout/         Page shell, header, footer, mobile navigation
  motion/         Animation wrappers
  mockups/        Phone mockups
  sections/       Home page sections
  legal/          Policy page renderer
```

## Making changes

| Change | Location |
| --- | --- |
| Links, contact email, navigation, socials | `config/site.ts` |
| Home page copy | `content/home.ts` |
| Phone mockup data | `content/mockups.ts` |
| Privacy notice | `content/privacy.tsx` (update `lastUpdated`) |
| Header, menu and footer labels | `content/layout.ts` |
| Section layout and styling | `components/sections/` |
| Section order | `app/page.tsx` |
| Brand colours | `app/globals.css` (`@theme`), and `lib/brand.ts` for SVG fills |
| Metadata and social preview images | `app/layout.tsx`, `app/opengraph-image.png`, `app/twitter-image.png` |

**Adding a social platform:** add it to `SocialPlatform` in `types/site.ts`, then map an icon in `components/common/SocialLinks.tsx`. The build fails if the icon is missing.

**Adding a policy page:** define the content with the `LegalDocumentContent` type in `content/`, then render it with `<LegalDocument>` in a new `app/<name>/page.tsx`.

## Conventions

- **Dependencies are pinned to exact versions.** Upgrade with `npm install --save-exact <package>@<version>`.
- **shadcn components:** add with `npx shadcn@latest add <component>`. The `shadcn` package is not a dependency; the styles its components need live in `app/shadcn.css`.
- **Motion:** animations respect the visitor's reduced-motion setting. The hero is intentionally static so it renders before JavaScript loads.
- **Accessibility:** keep the skip link, visible focus styles and touch targets of at least 44px.
- **Privacy:** the site sets no cookies. If you add a service that handles visitor data, update the privacy notice to match.

## Deployment

The site is hosted on Vercel. Every push to `main` deploys to production, and pull requests get preview deployments. Analytics and Speed Insights are enabled from the Vercel project dashboard.

## License

© Kawe. All rights reserved.
