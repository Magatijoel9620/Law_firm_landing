# Kanyi Website 2.0 — Implementation Checklist

## Phase 1 — Feature architecture and canonical data

- [x] Define feature scope and exclusions.
- [x] Establish canonical firm contact configuration.
- [x] Establish canonical practice-area data and stable slugs.
- [x] Establish canonical office data and map destinations.
- [x] Add contextual WhatsApp URL builder.
- [x] Document page routes, integration contracts and delivery sequence.
- [x] Migrate the existing practice-area, contact, header, footer and homepage WhatsApp surfaces to consume canonical data.
- [ ] Verify TypeScript and production build (dependency installation timed out in this environment).

## Phase 2 — Legal Service Finder
- [x] Guided service discovery UI.
- [x] Search and keyword matching against canonical practice-area data.
- [x] Results link to the matching service detail page.
- [x] Contextual WhatsApp enquiry actions.
- [ ] Keyboard and mobile interaction checks.

## Phase 3 — Practice-area pages
- [x] Dynamic service route backed by canonical service data.
- [x] Service overview and relevant enquiry actions.
- [x] Cross-links to other practice areas.
- [ ] Firm review and expansion of all service-specific copy.

## Phase 4 — Consultation requests
- [x] Structured consultation form.
- [x] Service and office selection, including prefill from service/office pages.
- [x] Optional preferred date and time.
- [x] Existing PHP endpoint accepts and validates the new fields.
- [x] Email output safely escapes every submitted value.
- [x] Honeypot and privacy/confidentiality notice.
- [x] Confirmation clearly states that the request is not an appointment confirmation.
- [ ] Live endpoint delivery test after the updated PHP file is deployed to the form host.

## Phase 5 — Contextual WhatsApp and enquiry improvements
- [x] Service-aware WhatsApp messages.
- [x] Office-aware WhatsApp messages.
- [x] Source-aware WhatsApp messages.
- [x] Consistent phone, email and WhatsApp destinations sourced from canonical firm data.

## Phase 6 — Legal insights and FAQs
- [x] Legal Insights editorial landing page and publication-ready content boundary.
- [x] FAQ structure covering website and enquiry-process questions.
- [x] Advocate review workflow and publication disclaimer documented.
- [x] No unreviewed legal advice or invented articles published.
- [ ] Firm-approved articles and legal FAQs supplied for publication.

## Phase 7 — Office profiles
- [x] Mombasa profile.
- [x] Kilifi profile.
- [x] Malindi profile.
- [x] Directions and existing published contact details connected to canonical office data.
- [ ] Firm confirmation of office details and approval of any additional office imagery.

## Phase 8 — Conversion analytics
- [x] Define a privacy-minimised event taxonomy.
- [ ] Select analytics provider and privacy/consent settings.
- [x] Instrument consultation starts/submissions, service finder, WhatsApp, phone, email and directions actions.
- [x] Ensure the adapter only forwards allowlisted service/office/source context and never enquiry contents or contact details.
- [ ] Configure and verify a live analytics provider.

## Phase 9 — SEO (deliberately last)
- [ ] Metadata and canonical URLs.
- [ ] Sitemap and robots.
- [ ] Structured data after firm details are verified.
- [ ] Service and office search content.
- [ ] Search Console and indexing checks.

## Phase 10 — QA and release readiness
- [ ] Production build and typecheck.
- [ ] Desktop, tablet and mobile browser QA.
- [ ] Keyboard and screen-reader checks.
- [ ] Contact and consultation integration tests.
- [ ] Performance and reduced-motion checks.
- [ ] Final content, links and release review.
