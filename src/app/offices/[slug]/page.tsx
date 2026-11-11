import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { buildWhatsAppUrl, offices } from "@/lib/firm-data";
import { Reveal } from "@/components/interactive/InteractionLayer";

export function generateStaticParams() {
  return offices.map((office) => ({ slug: office.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const office = offices.find((item) => item.slug === slug);
  if (!office) return { title: "Office not found" };
  const description = `Contact Kanyi J. & Company Advocates in ${office.city}. Find the ${office.role.toLowerCase()} address, contact details and directions.`;
  return {
    title: `${office.city} Office`,
    description,
    alternates: { canonical: `/offices/${office.slug}` },
    openGraph: { title: `${office.city} Office`, description, type: "website" },
  };
}

type OfficePageProps = { params: Promise<{ slug: string }> };

const officeIntroductions: Record<string, string> = {
  mombasa:
    "Our head office is based in Kizingo, Mombasa. This is where the firm's story began, and it remains the central point of contact for clients seeking to reach the practice.",
  kilifi:
    "Our Kilifi branch gives clients another point of contact along the coast. You will find the published office address and contact details below to help you plan your visit or make an enquiry.",
  malindi:
    "Our Malindi branch is located on Vasco da Gama Road, next to Malindi Law Courts. Use the directions and contact details below when planning to reach the office.",
};

export default async function OfficePage({ params }: OfficePageProps) {
  const { slug } = await params;
  const office = offices.find((item) => item.slug === slug);
  if (!office) notFound();

  const whatsappUrl = buildWhatsAppUrl({
    office: office.city,
    source: "office profile",
  });
  const otherOffices = offices.filter((item) => item.slug !== office.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="relative isolate overflow-hidden border-b border-border/60 bg-secondary/25 py-16 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-accent/[0.09] blur-3xl"
          />
          <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Back to contact details
            </Link>
            <Reveal className="mt-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-accent">
                <MapPin className="h-4 w-4" /> {office.role}
              </span>
              <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Find us in {office.city}.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {officeIntroductions[office.slug]}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto grid gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-accent">
                  {office.role} · {office.city}
                </p>
                <h2 className="mt-2 font-headline text-2xl font-semibold text-primary">
                  Visit our {office.city} office
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {office.address}
                </p>
                <div className="mt-6 space-y-4 border-t border-border/60 pt-6">
                  <a
                    href={`tel:${office.phoneHref}`}
                    data-conversion-event="phone_clicked"
                    data-conversion-office={office.slug}
                    data-conversion-source="office-profile"
                    className="flex items-start gap-3 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{office.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="break-words">{office.email}</span>
                  </div>
                </div>
                <a
                  href={office.mapUrl}
                  data-conversion-event="office_directions_clicked"
                  data-conversion-office={office.slug}
                  data-conversion-source="office-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  Get directions <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-border/70 bg-secondary/25 p-6 sm:p-7">
                <h2 className="font-headline text-xl font-semibold text-primary">
                  Prefer to contact us first?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  You can call or send a WhatsApp message before making your way
                  to the office. If you are requesting a consultation, select
                  this office in the enquiry form.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={whatsappUrl}
                    data-conversion-event="whatsapp_clicked"
                    data-conversion-office={office.slug}
                    data-conversion-source="office-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp this office
                  </a>
                  <Link
                    href={`/?office=${office.slug}#consultation`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Request a consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-secondary/30 shadow-lg">
              <div className="flex items-center justify-between gap-4 border-b border-border/60 bg-card px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-accent">
                    Location map
                  </p>
                  <h2 className="mt-1 font-semibold text-primary">
                    {office.city}, Kenya
                  </h2>
                </div>
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <iframe
                title={`${office.city} office map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                width="100%"
                height="520"
                className="h-[360px] w-full sm:h-[520px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              Map directions are provided by Google Maps. Please confirm any
              details you need with the office before travelling.
            </p>
          </Reveal>
        </section>

        <section className="bg-secondary/25 py-14 sm:py-16">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <Reveal className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">
                More ways to reach us
              </p>
              <h2 className="mt-3 font-headline text-2xl font-semibold text-primary sm:text-3xl">
                Our other coastal offices
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {otherOffices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/offices/${item.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.16em] text-accent">
                      {item.role}
                    </p>
                    <h3 className="mt-1 font-headline text-xl font-semibold text-primary">
                      {item.city}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.address}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
