# Kawe landing page

The landing page for **kawe.club**. Built with Next.js, React, Tailwind CSS, shadcn/ui and framer-motion. It is fully static: no database, no backend, nothing to pay for.

## Run it locally

You need **Node.js 22 or newer** (check with `node -v`).

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Edits to files show up instantly.

## How the code is organised

Each folder has one job. Words, settings and appearance are kept apart, so you can change the wording without touching layout code, and the other way round.

```text
app/              Routes only. Each page just puts sections together.
  page.tsx          Home
  privacy/page.tsx  Privacy notice
  not-found.tsx     "Page not found"
  layout.tsx        Fonts, page title, link previews, analytics
  globals.css       Brand colours and shadcn theme
config/site.ts    Links, support email, nav, socials, routes, section ids
content/          All the wording, as typed data
  home.ts           Hero, How it works, Features, The name, final call to action
  mockups.ts        The sample club in the phone mockups
  privacy.tsx       Privacy notice text
  layout.ts         Header, menu and footer labels
  not-found.ts      404 page text
types/            The shape each config and content file must follow
lib/              cn() helper and brand colours used in code (SVG fills)
components/
  ui/               shadcn/ui primitives (button, card, badge, sheet, separator)
  brand/            Mark, Logo, AdirePattern and the shared mark shapes
  common/           ButtonLink, Container, Eyebrow, SectionTitle, SocialLinks, CurrentYear
  layout/           PageShell, SiteHeader, SiteFooter, MobileNav
  motion/           Reveal, Stagger, Float, MotionProvider (framer-motion)
  mockups/          PhoneFrame, ClubHeader, StatusBadge, CountdownPhone, RevealPhone
  sections/         Hero, HowItWorks, Features, TheName, CallToAction
  legal/            LegalDocument: renders any policy page from content
```

## Where to change things

| What | File |
| --- | --- |
| Waitlist and survey links, support email, nav links, social links | `config/site.ts` |
| Any wording on the home page | `content/home.ts` |
| The sample club in the phone mockups | `content/mockups.ts` |
| Privacy notice | `content/privacy.tsx` (update `lastUpdated` when you change it) |
| Header, menu and footer labels | `content/layout.ts` |
| Layout or styling of a home page section | `components/sections/` |
| Add, remove or reorder home page sections | `app/page.tsx` |
| Brand colours | `app/globals.css` (the `@theme` block; shadcn's colours are mapped just below it). Colours used in SVG code are in `lib/brand.ts`. |
| Page title and link previews | `app/layout.tsx`, `app/opengraph-image.png` |
| Browser tab icon | `app/icon.svg`, `app/apple-icon.png` |

The X handle used in link previews is read from the X entry in `socials`, so you only change it in one place. Adding a new social platform means adding it to `SocialPlatform` in `types/site.ts`, then giving it an icon in `components/common/SocialLinks.tsx`. TypeScript reports an error if the icon is missing.

Feature card icons are picked by key (e.g. `"tracker"`) in `content/home.ts` and mapped to icons in `components/sections/Features.tsx`.

To add another policy page (e.g. terms), write the text in `content/` using the `LegalDocumentContent` shape, then render it with `<LegalDocument>` in a new `app/<name>/page.tsx`.

The footer's copyright year updates automatically in the visitor's browser (`components/common/CurrentYear.tsx`), so there's no need to rebuild each January.

To add more shadcn components, run `npx shadcn@latest add <name>`. The `shadcn` package isn't installed in the project; the few styles its components need live in `app/shadcn.css`. If a new component uses a style that's missing, copy it in there. Animations respect the visitor's "reduce motion" setting.

Package versions are pinned exactly. To upgrade one, run `npm install --save-exact <name>@<version>`.

The **waitlist button** points to the survey, which ends by asking for an email or WhatsApp number. If you later make a separate waitlist form, paste its link into `waitlistUrl` in `config/site.ts`.

**Privacy:** link to `https://kawe.club/privacy` from the survey's description. If you add a new service that handles visitor data (a newsletter tool, a different form, analytics with cookies), update the privacy notice too.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Kawe landing page"
```

Create an empty repository in the `kaweclub` GitHub organisation, then follow GitHub's "push an existing repository" commands.

## Deploy free on Vercel

1. Sign in at vercel.com with GitHub (use <admin@kawe.club> for the account).
2. **Add New → Project**, import the repository, and click **Deploy**. No settings to change.
3. You get a working `*.vercel.app` link straight away.
4. To see visitor stats, open **Project → Analytics** and click **Enable**. The code is already in place.
5. To see how fast the site loads for real visitors, open **Project → Speed Insights** and click **Enable**. The code is already in place too.

## Connect kawe.club (Namecheap)

1. In Vercel: **Project → Settings → Domains**, add `kawe.club` and `www.kawe.club`.
2. Vercel shows the exact DNS records to add. Typically an **A record** for `@` and a **CNAME** for `www`.
3. In Namecheap: **Domain List → kawe.club → Advanced DNS → Host Records**, add exactly what Vercel shows, and remove any old parking-page records (often a CNAME for `www` and a URL redirect for `@`).
4. **Do not touch the MX records or the TXT records** (SPF, DKIM, DMARC, Zoho verification). They run your email.
5. Wait a few minutes to an hour. Vercel adds HTTPS automatically.
