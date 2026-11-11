"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, MessageCircle, Scale, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/interactive/InteractionLayer";
import { buildWhatsAppUrl, practiceAreas } from "@/lib/firm-data";

export default function ServiceFinder() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return practiceAreas.filter((area) => {
      const searchableText = [
        area.title,
        area.description,
        area.finderPrompt,
        ...area.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return normalizedQuery
        .split(/\s+/)
        .every((term) => searchableText.includes(term));
    });
  }, [query]);

  return (
    <section
      id="service-finder"
      className="relative overflow-hidden bg-background py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.28em] text-accent">
            <Scale className="h-4 w-4" /> Find the right service
          </span>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            How can we assist you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Not sure which service fits? That is okay. Search using a few words about what is happening, and we will help you find the closest practice area.
          </p>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              data-conversion-event="service_finder_used"
              data-conversion-source="homepage-service-finder"
              placeholder="Try property transfer, a business contract, an insurance claim..."
              aria-label="Search legal services"
              className="h-14 rounded-2xl border-border/70 bg-card pl-14 pr-12 text-base shadow-lg shadow-black/[0.04] focus-visible:ring-accent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear service search"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-muted-foreground">
            <span>{query.trim() ? `${results.length} ${results.length === 1 ? "practice area" : "practice areas"} found` : "Start with one of these topics, or explore all our practice areas"}</span>
            <span>Search is a navigation aid, not legal advice.</span>
          </div>
          {!query.trim() && (
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Property", "Business contracts", "Banking", "Insurance claims", "Court dispute", "Tax"].map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => setQuery(suggestion)} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">{suggestion}</button>
              ))}
            </div>
          )}
        </Reveal>

        {query.trim() && <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.slug}
                className="group h-full border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/[0.05]"
              >
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="text-xs font-medium tabular-nums text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4">
                    <Link
                      href={`/services/${area.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                    >
                      Explore service <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={buildWhatsAppUrl({ service: area.title, source: "legal service finder" })}
                      data-conversion-event="whatsapp_clicked"
                      data-conversion-service={area.slug}
                      data-conversion-source="service-finder"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${area.title} on WhatsApp`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>}

        {query.trim() && results.length === 0 && (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-border p-8 text-center">
            <h3 className="font-headline text-xl font-semibold text-primary">
              We could not find an exact match just yet
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Try a different word or two. If you are still unsure, send us a message in your own words and the team can help direct your enquiry.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Show all services
              </button>
              <a
                href={buildWhatsAppUrl({ source: "service finder - no match" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4" /> Contact the firm
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
