import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle,
  Phone, ShieldCheck, Sparkles,
} from "lucide-react";
import { practiceAreas, buildWhatsAppUrl, firmContact } from "@/lib/firm-data";
import { serviceContent } from "@/lib/service-content";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Reveal } from "@/components/interactive/InteractionLayer";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = practiceAreas.find((area) => area.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) return { title: "Service not found" };
  return {
    title: service.title,
    description: content.introduction,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: content.introduction, type: "website" },
  };
}

type ServicePageProps = { params: Promise<{ slug: string }> };

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = practiceAreas.find((area) => area.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) notFound();

  const relatedServices = practiceAreas
    .filter((area) => area.slug !== service.slug)
    .map((area) => ({ area, overlap: area.keywords.filter((keyword) => service.keywords.includes(keyword)).length }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map(({ area }) => area);
  const whatsappUrl = buildWhatsAppUrl({ service: service.title, source: "practice area page" });
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="relative isolate overflow-hidden border-b border-border/60 bg-secondary/25 py-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full bg-accent/[0.09] blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-primary/[0.05] blur-3xl" />
          <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
            <Link href="/#service-finder" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent">
              <ArrowLeft className="h-4 w-4" /> Back to service finder
            </Link>
            <Reveal className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-accent">
                <ServiceIcon className="h-4 w-4" /> Our legal services
              </div>
              <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{content.introduction}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={`/?service=${service.slug}#consultation`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90">
                  Request a consultation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={whatsappUrl} data-conversion-event="service_detail_enquiry_clicked" data-conversion-service={service.slug} data-conversion-source="service-detail" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
                  <MessageCircle className="h-4 w-4" /> Ask us on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto grid gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_340px] lg:gap-20 lg:px-10">
          <div className="max-w-3xl space-y-12">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.25em] text-accent">A little more about this service</p>
              <h2 className="font-headline text-3xl font-semibold leading-tight text-primary sm:text-4xl">Let's make the legal side clearer.</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{content.overview}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Sparkles className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">How we may be able to help</p>
                    <h2 className="mt-1 font-headline text-2xl font-semibold text-primary">Matters you can discuss with us</h2>
                  </div>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {content.matters.map((matter) => (
                    <div key={matter} className="flex items-start gap-3 rounded-xl bg-secondary/35 p-4 text-sm leading-6 text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{matter}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h2 className="font-headline text-2xl font-semibold text-primary sm:text-3xl">A useful place to start</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{content.clientNote}</p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{content.nextStep}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border/70 bg-secondary/25 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"><ShieldCheck className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-semibold text-primary">A note about your privacy</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">Please do not submit confidential information, identity documents, case files or other sensitive materials through this public website. An enquiry does not by itself establish a lawyer-client relationship or confirm an appointment.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              <Link href={`/?service=${service.slug}#consultation`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90">Request a consultation <ArrowRight className="h-4 w-4" /></Link>
              <a href={`tel:${firmContact.phoneHref}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"><Phone className="h-4 w-4" /> Call {firmContact.phoneDisplay}</a>
            </div>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-border/70 bg-secondary/25 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Not sure where to begin?</p>
              <h2 className="mt-3 font-headline text-2xl font-semibold text-primary">Tell us what you need help with.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">You do not need to know the exact legal terminology. A short, non-confidential description is a good starting point.</p>
              <Link href="/#service-finder" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Try the Legal Service Finder <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">You may also be interested in</p>
              <div className="mt-5 space-y-4">
                {relatedServices.map((area) => (
                  <Link key={area.slug} href={`/services/${area.slug}`} className="group flex items-start justify-between gap-3 border-b border-border/60 pb-4 text-sm font-semibold text-primary last:border-0 last:pb-0 hover:text-accent">
                    {area.title}<ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                ))}
              </div>
              <Link href="/#practice-areas" className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline">View all practice areas</Link>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
