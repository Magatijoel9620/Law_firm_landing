# Kanyi Website 2.0 — Feature Architecture

## Product objective

Evolve the existing Kanyi J. & Company Advocates website from a firm profile into a useful client-acquisition and information platform while preserving the firm's existing identity, verified content, office information and contact delivery integration.

## Explicit boundaries

- The external client portal is out of scope and must not be modified during this initiative. Its existing navigation destination is retained unchanged.
- SEO implementation is deferred until the final planned phase.
- Existing PHP contact delivery remains the initial enquiry transport; do not silently replace it with an unconfigured email provider.
- No online legal advice, automatic appointment confirmation, case management or public document upload is introduced.
- Attorney credentials, service claims, office details, testimonials and legal guidance must be confirmed by the firm before publication.
- Public enquiry forms must warn visitors not to submit confidential or sensitive case documents.

## Canonical domain data

`src/lib/firm-data.ts` is the single source of truth for:

- Firm contact identity and primary contact channels.
- WhatsApp URL generation, including optional service, office and source context.
- The existing PHP contact endpoint used by the homepage enquiry and consultation forms.
- The nine currently published practice areas, their existing descriptions, stable URL slugs, search keywords and service-finder prompts.
- The three currently published offices, including existing contact details and map destinations.

Page components should consume these exports rather than define duplicate arrays or contact strings.

## Planned routes and features

| Feature | Route / location | Data and integration |
|---|---|---|
| Homepage service finder | `/#service-finder` | `practiceAreas` |
| Practice area details | `/services/[slug]` | `practiceAreas` |
| Consultation request | `/#consultation` and homepage CTA | Existing PHP contact endpoint with structured optional fields |
| General enquiry | `/#contact` | Existing PHP contact endpoint |
| Legal insights hub | `/insights` | Firm-approved editorial content; no unreviewed legal advice |
| Office profiles | `/offices/[slug]` | `offices` |
| Conversion analytics | Client-side event layer | Consent-aware, privacy-minimised events; provider selected later |
| SEO | Final phase | Metadata, canonical URLs, sitemap, robots, structured data and local search content |

## Enquiry contract

The existing contact endpoint at `https://form.kanyij-advocates.co.ke/contact.php` continues to accept `name`, `email`, `phone` and `message`. The consultation workflow may additionally send:

- `service`: selected practice area title.
- `office`: selected office slug or label.
- `preferredDate`: optional requested date.
- `preferredTime`: optional preferred time window.
- `enquiryType`: `general` or `consultation`.
- `website`: honeypot field; a non-empty value is rejected.

The updated `public/contact.php` must be deployed to the form subdomain host as well as retained in this source repository. A consultation request is not a confirmed appointment. The firm must review and respond to the request. The public form must advise users not to include confidential information or attach case documents.

## WhatsApp context contract

`buildWhatsAppUrl({ service, office, source })` creates a prefilled message. Context is descriptive only and must not imply that a legal relationship has been established or that a lawyer has reviewed the matter.

## Delivery sequence

1. Centralise domain data and integration contracts.
2. Build the guided legal service finder.
3. Build individual practice-area pages.
4. Build the consultation request workflow.
5. Apply contextual WhatsApp and enquiry improvements.
6. Add the legal insights and FAQ content framework.
7. Add office profile pages and directions.
8. Add privacy-minimised conversion analytics.
9. Complete SEO implementation.
10. Run browser, accessibility, responsive and release-readiness QA.

## Editorial governance

The Legal Insights route is live as an editorial landing page, but it intentionally contains no unreviewed articles. The FAQ section currently answers website and enquiry-process questions only. Legal explanations, case studies, testimonials and attorney-authored insights require firm review before publication.

## Conversion analytics adapter

`src/lib/analytics.ts` defines a small event vocabulary (including service-finder use, consultation starts/submissions, general enquiry submissions and contact actions) and emits `kanyi:conversion` browser events. If a site-level GA4 `gtag` or PostHog client is already loaded, the adapter forwards the same allowlisted event and non-personal context. It never accepts or forwards names, email addresses, telephone numbers, message contents or documents. No analytics vendor is loaded or configured by this patch; provider selection, consent requirements and credentials remain an operational decision.
