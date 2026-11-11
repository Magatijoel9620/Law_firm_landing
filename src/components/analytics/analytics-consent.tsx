"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "kanyi-analytics-consent";
const containerId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NDH9BMFV";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __kanyiAnalyticsConsent?: boolean;
  }
}

function enableGoogleTagManager() {
  if (!containerId || typeof window === "undefined") return;

  // The container is injected only after opt-in. Keep the data layer compatible
  // with GTM custom-event triggers and Google Consent Mode.
  window.dataLayer = window.dataLayer || [];
  const gtag = window.gtag ?? ((...args: unknown[]) => {
    window.dataLayer?.push(args);
  });
  window.gtag = gtag;
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (!document.querySelector(`script[data-kanyi-gtm="${containerId}"]`)) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    script.dataset.kanyiGtm = containerId;
    document.head.appendChild(script);
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerId) return;
    try {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "granted" || saved === "denied") {
        setChoice(saved);
        window.__kanyiAnalyticsConsent = saved === "granted";
      } else {
        window.__kanyiAnalyticsConsent = false;
        setShowSettings(true);
      }
    } catch {
      window.__kanyiAnalyticsConsent = false;
      setShowSettings(true);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    window.__kanyiAnalyticsConsent = choice === "granted";
    if (choice === "granted") {
      enableGoogleTagManager();
    } else if (choice === "denied" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, [choice]);

  if (!containerId || !loaded) return null;

  function choose(nextChoice: ConsentChoice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, nextChoice);
    } catch {
      // Consent still applies for the current page if storage is unavailable.
    }
    window.__kanyiAnalyticsConsent = nextChoice === "granted";
    setChoice(nextChoice);
    setShowSettings(false);
  }

  if (!showSettings) {
    return (
      <button
        type="button"
        onClick={() => setShowSettings(true)}
        className="fixed bottom-3 left-3 z-[119] rounded-full border border-border bg-background/90 px-3 py-2 text-xs font-medium text-muted-foreground shadow-lg backdrop-blur-xl transition-colors hover:text-primary"
      >
        Privacy settings
      </button>
    );
  }

  return (
    <aside
      role="dialog"
      aria-label="Analytics privacy choices"
      className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-semibold text-primary">Your privacy choices</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We use optional, privacy-conscious analytics to understand how visitors use this website. Analytics stays off unless you allow it. Your enquiry details are never sent to analytics.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" size="sm" variant="outline" onClick={() => choose("denied")}>Reject optional</Button>
          <Button type="button" size="sm" onClick={() => choose("granted")}>Allow analytics</Button>
        </div>
      </div>
    </aside>
  );
}
