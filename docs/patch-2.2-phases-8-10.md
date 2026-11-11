# Patch 2.2 — Phases 8–10 and runtime error fixes

## Runtime and TypeScript fixes

- Removed the unsupported `eslint` property from `next.config.ts`.
- Removed `typescript.ignoreBuildErrors`; production builds must no longer hide TypeScript errors.
- Removed static-export mode so the project matches its Firebase App Hosting server deployment and retains server route support.
- Added null guards to all three Framer Motion `onViewportEnter` callbacks.
- Made the theme-toggle `title` deterministic so server and client render the same attributes before theme hydration.
- Added `data-scroll-behavior="smooth"` to the root HTML element and removed the runtime scroll-behaviour mutation.
- Removed the global CSS rule that overrode the root smooth-scroll utility; reduced-motion CSS still forces automatic scrolling.
- Explicitly set the hero and firm-history scroll targets to `position: relative` for Framer Motion offset calculations.

## Phase 8 — Analytics

- Added optional GA4 support using `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Added an opt-in/opt-out privacy panel and persistent privacy settings control.
- GA4 script loading and conversion event forwarding are blocked until the visitor opts in.
- Rejection updates consent to denied; the visitor can reopen settings and change their choice.
- Event context is allowlisted to service, office and source. No form values, contact details or enquiry text are forwarded.

## Phase 9 — SEO

- Added root metadata, canonical URL, Open Graph and Twitter metadata.
- Added unique metadata and canonical URLs for service, office and Insights article pages.
- Added generated `sitemap.xml` and `robots.txt` routes.
- Added homepage Organization/LegalService JSON-LD from existing public firm details.
- Added `NEXT_PUBLIC_SITE_URL` configuration with a fallback matching the domain already present in the PHP endpoint's CORS allowlist.

## Verification

- 82 TypeScript/TSX source files transpiled with zero syntax diagnostics.
- `public/contact.php` passed `php -l`.
- `package.json` and `package-lock.json` parse as valid JSON.
- Full `tsc --noEmit` and production build could not be run because dependencies are not installed in this environment. `npm ci --offline` confirmed required packages are not cached; an online dependency install timed out. The user's local environment should run the full commands after applying this patch.

## Still external / pending

- Set and verify the firm's GA4 measurement ID after approval of privacy wording.
- Confirm canonical production origin and current public office/contact details with the firm.
- Submit sitemap and verify indexing in Search Console after deployment.
- Run full responsive, accessibility, reduced-motion, integration and production build checks.
- Deploy the updated PHP handler to the form host and test actual email delivery.
- Restore/regenerate the missing 2026 firm profile PDF.
- Obtain firm approval for service copy, advocate biographies, office details, history and Insights content.

The external client portal is unchanged and remains out of scope.
