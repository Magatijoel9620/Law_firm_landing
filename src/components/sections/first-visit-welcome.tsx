"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

const WELCOME_KEY = "kanyi-first-visit-welcome-dismissed";

export default function FirstVisitWelcome() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(WELCOME_KEY, "yes");
      window.sessionStorage.setItem(WELCOME_KEY, "yes");
    } catch {
      // Dismissal still applies for the current render.
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const dialog = dialogRef.current;
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const getFocusableElements = () => {
      if (!dialog) return [];
      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("hidden"));
    };

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = getFocusableElements();
      if (!focusable.length) {
        event.preventDefault();
        dialog?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      previousActiveElement?.focus?.();
    };
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      className="first-visit-welcome fixed inset-0 z-[130] flex items-center justify-center overflow-y-auto bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="first-visit-welcome-title"
        aria-describedby="first-visit-welcome-description"
        tabIndex={-1}
        className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl border border-white/15 bg-background shadow-[0_30px_110px_rgba(0,0,0,0.42)] outline-none animate-in fade-in zoom-in-95 duration-300 sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-3xl md:grid-cols-[0.9fr_1.1fr] md:overflow-hidden"
      >
        {/* The firm's actual reception photograph is the editorial visual anchor. */}
        <div className="relative h-36 min-h-0 overflow-hidden bg-primary sm:h-52 md:h-auto md:min-h-[min(76dvh,620px)]">
          <Image
            src="/images/reception.jpg"
            alt="Reception at Kanyi J. & Company Advocates"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 45vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101411]/65 via-transparent to-black/10 md:bg-gradient-to-t md:from-[#101411]/65 md:via-transparent md:to-black/5" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-5 sm:left-7 sm:right-7 md:bottom-7 md:left-8 md:right-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-[10px]">
              Kanyi J. &amp; Company Advocates
            </p>
            <span className="shrink-0 text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">
              Established 1985
            </span>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-col bg-background">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="!cursor-pointer absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-5 sm:top-5"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex-1 px-5 pb-5 pt-5 sm:px-8 sm:pb-7 sm:pt-8 md:px-10 md:pb-8 md:pt-10 lg:px-12 lg:pt-12">
            <div className="mb-7 flex items-center gap-3 pr-10 sm:mb-10">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/70 bg-white sm:h-14 sm:w-14">
                <Image
                  src="/images/kj.png"
                  alt="Kanyi J. & Company Advocates logo"
                  fill
                  priority
                  sizes="56px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="min-w-0">
                <p className="font-headline text-sm font-semibold leading-tight text-primary sm:text-base">
                  Kanyi J. &amp; Company
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">
                  Advocates · Mombasa, Kenya
                </p>
              </div>
            </div>

            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-[10px]">
              A warm welcome
            </p>
            <h2
              id="first-visit-welcome-title"
              className="max-w-xl font-headline text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-primary"
            >
              Welcome. How may we assist you?
            </h2>
            <p
              id="first-visit-welcome-description"
              className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-[15px] sm:leading-7"
            >
              Experienced legal counsel. Trusted relationships. Serving clients
              across Kenya, with roots in Mombasa since 1985.
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-9">
              <Link
                href="/#practice-areas"
                onClick={dismiss}
                className="!cursor-pointer group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore our legal services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-primary/75 sm:text-sm">
                <Link
                  href="/#history"
                  onClick={dismiss}
                  className="!cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Discover the firm <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/#attorneys"
                  onClick={dismiss}
                  className="!cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Meet our legal professionals <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
            <Link
              href="/#consultation"
              onClick={dismiss}
              className="!cursor-pointer text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Request a consultation
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="!cursor-pointer inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Continue browsing <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
