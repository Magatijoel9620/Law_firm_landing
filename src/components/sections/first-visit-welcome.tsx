"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, Scale, X } from "lucide-react";

const WELCOME_KEY = "kanyi-first-visit-welcome-dismissed";

const pathways = [
  {
    title: "Explore our legal services",
    description: "Find the areas of law in which our firm can assist.",
    href: "/#practice-areas",
    icon: Scale,
  },
  {
    title: "Request a consultation",
    description: "Tell us what you need and how we can contact you.",
    href: "/#consultation",
    icon: CalendarDays,
  },
  {
    title: "Find our offices",
    description: "View our office locations in Mombasa, Kilifi and Malindi.",
    href: "/offices/mombasa",
    icon: Building2,
  },
];

export default function FirstVisitWelcome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (
        window.localStorage.getItem(WELCOME_KEY) === "yes" ||
        window.sessionStorage.getItem(WELCOME_KEY) === "yes"
      ) {
        return;
      }
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(WELCOME_KEY, "yes");
      window.sessionStorage.setItem(WELCOME_KEY, "yes");
    } catch {
      // Dismissal still applies for the current render.
    }
    setVisible(false);
  }

  useEffect(() => {
    if (!visible) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="first-visit-welcome fixed inset-0 z-[130] flex items-end justify-center bg-slate-950/45 p-3 backdrop-blur-[3px] sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="first-visit-welcome-title"
        aria-describedby="first-visit-welcome-description"
        className="relative flex max-h-[min(65dvh,560px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/70 bg-background shadow-[0_24px_90px_rgba(0,0,0,0.24)] animate-in fade-in slide-in-from-bottom-3 duration-300 sm:max-h-[min(86dvh,760px)] sm:rounded-3xl"
      >
        <div className="shrink-0 border-b border-border/70 bg-gradient-to-br from-muted/80 via-background to-background px-4 pb-3 pt-4 sm:px-8 sm:pb-6 sm:pt-8">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="!cursor-pointer absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-5 sm:top-5"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="mb-2 pr-10 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent sm:mb-3 sm:text-xs">
            Kanyi J. &amp; Company Advocates
          </p>
          <h2
            id="first-visit-welcome-title"
            className="max-w-xl font-headline text-xl font-semibold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl"
          >
            Welcome. How may we assist you?
          </h2>
          <p
            id="first-visit-welcome-description"
            className="mt-2 max-w-xl text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-base sm:leading-7"
          >
            Experienced legal counsel. Trusted relationships. Serving clients across
            Kenya, with roots in Mombasa since 1985.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-2 sm:px-6 sm:py-5">
          <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:mb-3 sm:text-xs">
            Find your way around
          </p>
          <nav aria-label="Welcome quick links" className="grid gap-1.5 sm:gap-3">
            {pathways.map(({ title, description, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                onClick={dismiss}
                className="!cursor-pointer group flex min-h-[54px] items-center gap-2.5 rounded-xl border border-border/80 bg-background px-2.5 py-2 transition-colors hover:border-accent/60 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-[76px] sm:gap-4 sm:px-4 sm:py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary sm:h-11 sm:w-11">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-primary sm:text-base">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-muted-foreground sm:text-sm sm:leading-5">
                    {description}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-border/70 bg-background px-4 py-2.5 sm:px-8 sm:py-4">
          <button
            type="button"
            onClick={dismiss}
            className="!cursor-pointer inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto sm:min-w-44"
          >
            Continue to website <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground sm:hidden">
            You can explore the website at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
