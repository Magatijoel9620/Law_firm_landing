"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import LenisProvider from "@/components/interactive/LenisProvider";
import CursorSystem from "@/components/interactive/CursorSystem";
import DepthBackground from "@/components/interactive/DepthBackground";

const Hero = dynamic(() => import("@/components/sections/hero"), {
  loading: () => <Skeleton className="h-[90vh] w-full" />,
});
const FirmHistory = dynamic(
  () => import("@/components/sections/firm-history"),
  { loading: () => <Skeleton className="h-96 w-full" /> },
);
const PracticeAreas = dynamic(
  () => import("@/components/sections/practice-areas"),
  { loading: () => <Skeleton className="h-96 w-full" /> },
);
const ServiceFinder = dynamic(
  () => import("@/components/sections/service-finder"),
  { loading: () => <Skeleton className="h-[700px] w-full" /> },
);
const ConsultationRequest = dynamic(
  () => import("@/components/sections/consultation-request"),
  { loading: () => <Skeleton className="h-[800px] w-full" /> },
);
const FAQ = dynamic(
  () => import("@/components/sections/faq"),
  { loading: () => <Skeleton className="h-[600px] w-full" /> },
);
const Stats = dynamic(() => import("@/components/sections/stats"), {
  loading: () => <Skeleton className="h-48 w-full" />,
});
const AttorneyProfiles = dynamic(
  () => import("@/components/sections/attorney-profiles"),
  { loading: () => <Skeleton className="h-96 w-full" /> },
);
const Partners = dynamic(() => import("@/components/sections/partners"), {
  loading: () => <Skeleton className="h-48 w-full" />,
});
const Contact = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import BackToTopButton from "@/components/layout/back-to-top-button";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, firmContact, offices } from "@/lib/firm-data";

export default function Home() {
  const whatsappUrl = buildWhatsAppUrl({ source: "homepage" });
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kanyij-advocates.co.ke").replace(/\/$/, "");
  const firmStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LegalService"],
    name: firmContact.name,
    url: siteUrl,
    email: firmContact.email,
    telephone: firmContact.phoneDisplay,
    areaServed: { "@type": "Country", name: "Kenya" },
    address: offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressCountry: "KE",
    })),
  };
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(firmStructuredData).replace(/</g, "\\u003c") }} />
      <LenisProvider />
      <CursorSystem />
      <DepthBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-16 sm:space-y-24">
          <FirmHistory />
          <ServiceFinder />
          <PracticeAreas />
          <ConsultationRequest />
          <Stats />
          <AttorneyProfiles />
          <Partners />
          <Contact />
          <FAQ />
        </div>
      </main>
      <Footer />
      <a
        href={whatsappUrl}
        data-conversion-event="whatsapp_clicked"
        data-conversion-source="homepage-floating"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kanyi J. & Company Advocates on WhatsApp"
        className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#101411]/80 text-accent shadow-[0_16px_45px_rgba(0,0,0,.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-accent-foreground sm:bottom-7 sm:right-7"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <BackToTopButton />
    </div>
  );
}
