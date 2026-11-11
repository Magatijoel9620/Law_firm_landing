# Kanyi J. & Company Advocates - Landing Page

A modern, professional, and fully responsive landing page for Kanyi J. & Company Advocates, a top-tier law firm based in Mombasa, Kenya. This project was built using Next.js, Tailwind CSS, and ShadCN UI, featuring a clean design, smooth animations with Framer Motion, and a full light/dark mode implementation.

## ✨ Features

- **Firm profile** — established history, attorney profiles, practice areas and office information.
- **Legal Service Finder** — searchable practice-area discovery with direct service information and contextual enquiry options.
- **Practice-area pages** — nine populated, plain-language service pages with relevant matters, first-enquiry guidance and contextual contact actions.
- **Consultation requests** — structured requests with service, preferred office and optional date/time details. Requests are reviewed by the firm and are not automatically confirmed appointments.
- **Contextual WhatsApp** — enquiry messages can include the service, office and website section that brought the visitor to WhatsApp.
- **Office profiles** — dedicated Mombasa, Kilifi and Malindi pages with location-specific introductions, published contact details, directions and links to the other offices.
- **Legal Insights and FAQs** — six firm-information articles based on the existing website, individual article pages and ten plain-language FAQs. Legal updates and legal guidance remain subject to advocate review before publication.
- **Privacy-first analytics** — conversion events for service discovery, consultation requests and contact actions. Optional GA4 loads only after a visitor opts in; no enquiry contents or contact details are sent to analytics.
- **Search visibility** — page-specific metadata, canonical URLs, sitemap, robots rules and firm structured data.
- **Responsive experience** — desktop, tablet and mobile layouts, light/dark themes and motion effects with reduced-motion support.
- **Existing client portal link** — retained as-is; portal functionality is not part of the current website uplift.

The website's existing PHP contact endpoint remains the primary enquiry delivery integration. The updated `public/contact.php` must also be deployed to the form subdomain host for the consultation-request fields to be processed in production.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Firebase App Hosting

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20.9 or later recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install NPM packages:**
   ```sh
   npm install
   ```

3. **Configure the public site origin:**
   ```sh
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` only if the firm has approved and configured a GA4 property. Analytics remains disabled until a visitor opts in.

4. **Run the development server:**
   ```sh
   npm run dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

For release checks, run `npm run typecheck` and `npm run build`. The project targets the Next.js server deployment configured for Firebase App Hosting; it is not configured as a static export.

## 📂 Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── public/              # Static assets (images, fonts)
├── src/
│   ├── app/             # Main application routes and pages
│   │   ├── globals.css  # Global styles and Tailwind directives
│   │   └── page.tsx     # Homepage component
│   │   └── layout.tsx   # Root layout
│   ├── components/      # Reusable React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── sections/    # Page sections and client-acquisition features
│   │   ├── analytics/   # Provider-neutral conversion event tracker
│   │   └── ui/          # ShadCN UI components
│   └── lib/             # Canonical firm data, analytics and utilities
└── ...
```

