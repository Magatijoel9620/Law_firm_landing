import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Building2, Compass, History, Mail, MessageCircle, Scale, Users } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { firmContact } from "@/lib/firm-data";
import { insightArticles } from "@/lib/editorial-content";
import { Reveal } from "@/components/interactive/InteractionLayer";

export const metadata: Metadata = {
  title: "Firm Insights & Information",
  description: "Learn about Kanyi J. & Company Advocates, its services, people and offices across Mombasa, Kilifi and Malindi.",
  alternates: { canonical: "/insights" },
};

const articleIcons = { history: History, services: Scale, people: Users, coast: Building2, contact: MessageCircle, approach: Compass };

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="relative isolate overflow-hidden border-b border-border/60 bg-secondary/25 py-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-accent/[0.09] blur-3xl" />
          <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-accent"><BookOpen className="h-4 w-4" /> Knowledge & perspectives</span>
              <h1 className="mt-7 font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">A little more about the law firm behind the name.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Explore our story, the services we offer, the people behind the practice and the offices serving Kenya's coast. These pages bring together information already published by the firm.</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">This is a firm information resource, not a source of legal advice. Articles about legal developments and guidance will be added after review and approval by the firm's advocates.</p>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">From the firm</p>
              <h2 className="mt-3 font-headline text-3xl font-semibold text-primary sm:text-4xl">Stories, services and useful information.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">A friendly starting point if you would like to know more before getting in touch.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insightArticles.map((article, index) => {
              const Icon = articleIcons[article.icon];
              return (
                <Reveal key={article.slug} delay={Math.min(index * 0.045, 0.2)}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-xl hover:shadow-black/[0.04]">
                    <div className="relative flex min-h-44 items-start justify-between overflow-hidden bg-primary p-6 text-primary-foreground">
                      <div aria-hidden className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-accent/25 transition-transform duration-700 group-hover:scale-125" />
                      <div aria-hidden className="absolute -bottom-20 right-12 h-48 w-48 rounded-full bg-accent/15 blur-2xl" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-accent"><Icon className="h-5 w-5" /></span>
                      <span className="relative rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70">{article.category}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-[.16em] text-accent">{article.eyebrow}</p>
                      <h3 className="mt-3 font-headline text-2xl font-semibold leading-tight text-primary">{article.title}</h3>
                      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        <Link href={`/insights/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80">Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="bg-secondary/25 py-16 sm:py-20">
          <div className="container mx-auto grid gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">Have a question?</p>
              <h2 className="mt-3 font-headline text-3xl font-semibold text-primary sm:text-4xl">We would be happy to hear from you.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">If you have a matter you would like to discuss, send a brief enquiry. You do not need to know the exact legal terminology to get started.</p>
            </Reveal>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/#consultation" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90">Request a consultation <ArrowRight className="h-4 w-4" /></Link>
              <a href={`mailto:${firmContact.email}?subject=${encodeURIComponent("Website enquiry")}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"><Mail className="h-4 w-4" /> Email the firm</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
