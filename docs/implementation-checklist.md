# Kanyi Website 2.0 — Implementation Checklist

## Phase 1 — Feature architecture and canonical data
- [x] Define feature scope and exclusions.
- [x] Establish canonical firm contact configuration.
- [x] Establish canonical practice-area data and stable slugs.
- [x] Establish canonical office data and map destinations.
- [x] Add contextual WhatsApp URL builder.
- [x] Document page routes, integration contracts and delivery sequence.
- [x] Migrate practice-area, contact, header, footer and homepage WhatsApp surfaces to canonical data.
- [ ] Verify TypeScript and production build (blocked: dependency installation timed out in this environment).

## Phase 2 — Legal Service Finder
- [x] Guided service discovery UI.
- [x] Search and keyword matching against canonical practice-area data.
- [x] Results link to matching service detail pages.
- [x] Contextual WhatsApp enquiry actions.
- [x] Human-friendly search guidance, examples and no-match messaging.
- [ ] Keyboard and mobile interaction checks.

## Phase 3 — Practice-area pages
- [x] Dynamic service route backed by canonical service data.
- [x] All nine service pages populated with plain-language introductions and expanded descriptions.
- [x] Service-specific matter lists grounded in the existing firm descriptions and advocate biographies.
- [x] Practical first-enquiry guidance and privacy notice on each page.
- [x] Related service navigation and consultation/WhatsApp calls to action.
- [ ] Firm review and approval of expanded service copy.

## Phase 4 — Consultation requests
- [x] Structured consultation form.
- [x] Service and office selection, including prefill from service/office pages.
- [x] Optional preferred date and time.
- [x] Existing PHP endpoint accepts and validates the new fields.
- [x] Email output safely escapes submitted values.
- [x] Honeypot and privacy/confidentiality notice.
- [x] Confirmation clearly states that the request is not an appointment confirmation.
- [ ] Live endpoint delivery test after updated PHP file is deployed to the form host.

## Phase 5 — Contextual WhatsApp and enquiry improvements
- [x] Service-aware WhatsApp messages.
- [x] Office-aware WhatsApp messages.
- [x] Source-aware WhatsApp messages.
- [x] Consistent phone, email and WhatsApp destinations sourced from canonical firm data.

## Phase 6 — Legal Insights and FAQs
- [x] Insights hub populated with six articles based on existing firm website information.
- [x] Individual article routes with readable editorial layouts.
- [x] Ten plain-language FAQs covering services, offices and the enquiry process.
- [x] Editorial disclaimer clarifying that firm information is not legal advice.
- [x] Advocate review boundary documented for future legal updates and legal guidance.
- [ ] Firm review and approval of editorial wording before production release.
- [ ] Future legal articles and legal FAQs supplied and approved by the firm.


## Phase 6B — Firm history, scroll interactions and editorial voice
- [x] Patch `src/components/sections/firm-history.tsx` with the VS Code-inspired vertical timeline treatment.
- [x] Keep the existing vertical, alternating firm-history timeline layout.
- [x] Add a scroll-linked gold progress rail inspired by the VS Code activity timeline.
- [x] Animate milestone nodes as each event enters the viewport.
- [x] Add staggered milestone-card entrance and restrained hover lift/border emphasis.
- [x] Add keyboard-accessible expand/collapse details to each milestone card.
- [x] Expand milestone descriptions using only the firm's already-published history; no new dates or unsupported claims added.
- [x] Add shared heading reveal treatment to sections using the existing reveal primitives.
- [x] Refine selected Insights headlines, excerpts and article passages to sound more direct and human.
- [x] Respect reduced-motion preferences for the new heading and timeline effects.
- [ ] Review firm-history.tsx milestone wording and confirm the historical details before release.
- [ ] Check timeline progress, card expansion, focus states and touch behaviour on desktop, tablet and mobile.
- [ ] Check scroll-linked effects and heading reveals with reduced motion enabled.
- [ ] Review all recently added service and editorial copy with the firm before production.

## Phase 7 — Office profiles
- [x] Mombasa profile.
- [x] Kilifi profile.
- [x] Malindi profile.
- [x] Directions and published contact details connected to canonical office data.
- [x] Location-specific introductory copy and links to the other offices.
- [ ] Firm confirmation of office details and approval of any additional office imagery.

## Phase 8 — Conversion analytics
- [x] Define a privacy-minimised event taxonomy.
- [x] Instrument consultation starts/submissions, general enquiry submissions, service finder, WhatsApp, phone, email and directions actions.
- [x] Ensure adapter only forwards allowlisted service/office/source context, never enquiry contents or contact details.
- [x] Add optional GA4 integration, disabled until a visitor opts in.
- [x] Add persisted accept/reject choices and a way to reopen privacy settings.
- [ ] Supply the firm's GA4 measurement ID and verify live events after deployment.
- [ ] Firm approval of privacy/cookie wording and consent settings.

## Phase 9 — SEO (deliberately last)
- [x] Root metadata, canonical origin, Open Graph and Twitter metadata.
- [x] Unique metadata and canonical URLs for service, office and Insights article pages.
- [x] Generated sitemap and robots routes.
- [x] Homepage Organization/LegalService structured data using supplied firm and office details.
- [x] Descriptive page content and metadata for service and office pages.
- [ ] Confirm canonical domain and public details with the firm before production.
- [ ] Search Console setup, sitemap submission and indexing checks after deployment.

## Phase 10 — QA and release readiness
- [x] Fix obsolete Next.js `eslint` config option, stop suppressing TypeScript build errors and align build output with Firebase App Hosting.
- [x] Guard nullable Framer Motion viewport entries.
- [x] Fix theme-toggle hydration mismatch by using deterministic initial attributes.
- [x] Add Next.js smooth-scroll document attribute and remove runtime scroll-behaviour mutation.
- [x] Explicitly position Framer Motion scroll targets.
- [x] Remove obsolete `next lint` command; current lint script runs strict TypeScript checking.
- [ ] Run `npm ci`, full TypeScript typecheck and production build on a network-enabled release machine (dependency installation timed out in this environment).
- [ ] Desktop, tablet and mobile browser QA.
- [ ] Keyboard and screen-reader checks.
- [ ] Contact and consultation integration tests against the deployed PHP endpoint.
- [ ] Analytics opt-in/opt-out and live event tests if GA4 is configured.
- [ ] Performance and reduced-motion checks.
- [ ] Final content, links and release review.

## Explicitly out of scope
- [x] Client portal left unchanged and excluded from this implementation.
- [x] SEO work deferred until Phase 9.
- [ ] Restore or regenerate the existing 2026 firm-profile PDF: the homepage currently links to `/downloads/Kanyi_J_Company_Advocates_Firm_Profile_2026.pdf`, but that file was not included in either supplied source archive.