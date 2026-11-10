import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { practiceAreas, buildWhatsAppUrl, firmContact } from "@/lib/firm-data";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = practiceAreas.find((area) => area.slug === slug);

  if (!service) notFound();

  const relatedServices = practiceAreas
    .filter((area) => area.slug !== service.slug)
    .map((area) => ({
      area,
      overlap: area.keywords.filter((keyword) => service.keywords.includes(keyword)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map(({ area }) => area);
  const whatsappUrl = buildWhatsAppUrl({
    service: service.title,
    source: "practice area page",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="relative overflow-hidden border-b border-border/60 bg-secondary/25 py-16 sm:py-24">
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/[0.08] blur-3xl" />
          <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
            <Link
              href="/#service-finder"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Back to service finder
            </Link>
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[.28em] text-accent">
                Our legal services
              </span>
              <h1 className="mt-4 font-headline text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {service.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/?service=${service.slug}#consultation`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  Request a consultation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  data-conversion-event="service_detail_enquiry_clicked"
                  data-conversion-service={service.slug}
                  data-conversion-source="service-detail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-20">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-semibold text-primary">
              Discuss your matter with our team
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Every legal matter has its own facts, documents and considerations.
              Contact the firm with a brief, non-confidential outline of what you
              need help with. The team can review your enquiry and advise on the
              appropriate next step.
            </p>
            <div className="mt-8 rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Before you send an enquiry</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Please do not submit confidential information, identity documents,
                    case files or other sensitive materials through this public website.
                    Sending an enquiry does not by itself establish a lawyer-client
                    relationship or confirm an appointment.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/?service=${service.slug}#consultation`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${firmContact.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" /> Call {firmContact.phoneDisplay}
              </a>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border/70 bg-secondary/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">
              Other services
            </p>
            <div className="mt-5 space-y-4">
              {relatedServices.map((area) => (
                <Link
                  key={area.slug}
                  href={`/services/${area.slug}`}
                  className="group flex items-start justify-between gap-3 border-b border-border/60 pb-4 text-sm font-semibold text-primary last:border-0 last:pb-0 hover:text-accent"
                >
                  {area.title}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              ))}
            </div>
            <Link
              href="/#practice-areas"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              View all practice areas
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
