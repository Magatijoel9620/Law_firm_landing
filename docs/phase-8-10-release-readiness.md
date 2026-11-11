# Kanyi Website — Phases 8–10 Release Readiness

## Phase 8 — Conversion analytics

The site now has a privacy-minimised conversion event adapter and an optional Google Tag Manager integration. The GTM container is not loaded and events are not emitted to analytics providers unless the visitor has opted in.

- Events cover service-finder use, service enquiry clicks, consultation starts/submissions, general enquiry submissions, WhatsApp, phone, email and office directions: `service_finder_used`, `service_detail_enquiry_clicked`, `consultation_form_started`, `consultation_request_submitted`, `general_enquiry_submitted`, `whatsapp_clicked`, `phone_clicked`, `email_clicked` and `office_directions_clicked`.
- Only allowlisted `service`, `office` and `source` context is forwarded. Form names, email addresses, phone numbers, message contents and documents are never sent to analytics.
- GTM is loaded only when `NEXT_PUBLIC_GTM_ID` is configured (defaulting to the firm's supplied `GTM-NDH9BMFV` container) and a visitor opts in through the privacy choices panel. Optional analytics is off by default; rejection is persisted locally.
- Conversion events are pushed to the GTM data layer as named custom events. Configure matching Custom Event triggers and GA4 Event tags in the GTM workspace; do not add a second hardcoded GA4 script to the site.
- The privacy settings control remains available after a choice so a visitor can change it.

### Deployment configuration

Copy `.env.example` into the deployment environment and set:

- `NEXT_PUBLIC_SITE_URL`: the canonical website origin, without a trailing slash. The configured fallback is `https://kanyij-advocates.co.ke`, matching the origin already allowed by the supplied PHP contact handler.
- `NEXT_PUBLIC_GTM_ID`: GTM web-container ID. The supplied value `GTM-NDH9BMFV` is already the application fallback; set this variable only if the firm later changes containers.

In Google Tag Manager, publish a Google tag configured with the firm's GA4 Measurement ID (normally `G-XXXXXXXXXX`), then create GA4 Event tags for the site's custom event names. The GA4 Measurement ID belongs in GTM, not in the website environment. The firm should approve the privacy wording and privacy/cookie notice before enabling analytics.

## Phase 9 — SEO

- Root title, description, canonical origin, Open Graph and Twitter metadata are configured.
- Individual practice-area, office and Insights article routes generate unique titles, descriptions and canonical URLs.
- `/sitemap.xml` is generated from the homepage, nine practice areas, three offices, the Insights hub and the six existing firm-information articles.
- `/robots.txt` points crawlers to the sitemap.
- Homepage JSON-LD describes the firm as an organisation/legal service and includes the three published office addresses, public email and main telephone number.
- Practice-area and office pages expose descriptive page titles and content based on the firm's existing supplied information.

Before release, confirm the canonical domain and public contact/office details with the firm. After deployment, add the site to Google Search Console, submit the sitemap and inspect indexing/canonical reports. Do not add unverified social profiles, opening hours, awards, legal rankings or attorney credentials to structured data.

## Phase 10 — QA and release readiness

- Removed the obsolete `eslint` option from `next.config.ts`, stopped suppressing TypeScript build errors and removed static-export mode so the Next.js server build matches the Firebase App Hosting setup and can retain the existing server route.
- Guarded Framer Motion viewport callbacks against a nullable entry.
- Made the theme-toggle title deterministic between server and browser renders.
- Added `data-scroll-behavior="smooth"` to the root document and removed the runtime mutation that caused Next.js to warn about smooth scrolling.
- Explicitly positioned the two Framer Motion scroll targets to avoid static-position offset warnings.
- Removed the stale Next.js `next lint` command. The current `lint` script runs strict TypeScript checking; a dedicated ESLint configuration remains a separate tooling decision because ESLint packages are not present in the supplied lockfile.
- Kept the existing PHP contact endpoint as the live form transport. No new email provider or credentials have been introduced.

Still required on the release machine / deployed environment:

1. Run `npm ci`, `npm run typecheck`, `npm run lint` and `npm run build`.
2. Verify the theme toggle and initial hydration in a clean browser profile and with browser extensions disabled.
3. Check the scroll-linked hero/history effects, navigation, anchors and route transitions with normal and reduced-motion preferences.
4. Check desktop, tablet and mobile layouts, keyboard navigation, focus visibility and screen-reader labels.
5. Submit test general and consultation enquiries against the deployed PHP endpoint; verify email delivery, validation, honeypot behaviour and CORS from the production origin.
6. Test both reject and allow choices, verify no GTM request before opt-in, then use Tag Assistant and GA4 DebugView to confirm the GTM container, event names and allowlisted context. Verify that rejecting after previously allowing sends a consent update to denied.
7. Check all links, office map destinations, metadata, sitemap, robots and structured data on the deployed domain.
8. Obtain firm approval for historical wording, service copy, advocate biographies, office details, Insights wording and privacy/consent text.
9. Restore or regenerate the 2026 firm profile PDF. The supplied source archives did not include the PDF currently referenced by the homepage.
10. Complete a final production build and release sign-off.

The client portal remains untouched and out of scope.
