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

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <LenisProvider />
      <CursorSystem />
      <DepthBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-16 sm:space-y-24">
          <FirmHistory />
          <PracticeAreas />
          <Stats />
          <AttorneyProfiles />
          <Partners />
          <Contact />
        </div>
      </main>
      <Footer />
      <a
        href="https://wa.me/254735830584?text=Hello%20Kanyi%20J.%20%26%20Company%20Advocates%2C%20I%20would%20like%20to%20make%20an%20enquiry."
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
