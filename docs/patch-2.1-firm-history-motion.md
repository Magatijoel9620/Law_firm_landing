# Patch 2.1 — Firm history and editorial motion

## Included
- Retained the alternating vertical timeline in `src/components/sections/firm-history.tsx`.
- Added a scroll-linked gold progress rail, viewport-triggered milestone nodes and alternating card entrances.
- Added subtle card hover emphasis and accessible expand/collapse details for each milestone.
- Expanded the four existing history entries (1985, 1996, 2010s and Today) using only facts already present in the supplied website content.
- Added a shared heading reveal treatment to sections using the site's existing Reveal components.
- Refined selected copy in the homepage hero, firm-history introduction, consultation prompts, FAQs and Insights content to sound more direct and natural.
- Updated the implementation checklist and content review register.

## Verification
- TypeScript/TSX syntax transpilation: 78 source files checked; zero syntax diagnostics.
- Full `npm run typecheck`: not completed because dependencies are not installed in this environment (`TS2688`: missing `next` and `node` type definitions).
- Production build and live browser/responsive testing remain pending.
- Reduced-motion handling is implemented for the new timeline and heading effects; it still needs an in-browser verification pass.

## Review boundary
Historical wording and expanded editorial copy require firm approval before production. No new named clients, case outcomes, awards, individual office opening dates or historical events have been introduced.
