import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { buildWhatsAppUrl, offices } from "@/lib/firm-data";

export function generateStaticParams() {
  return offices.map((office) => ({ slug: office.slug }));
}

type OfficePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OfficePage({ params }: OfficePageProps) {
  const { slug } = await params;
  const office = offices.find((item) => item.slug === slug);
  if (!office) notFound();

  const whatsappUrl = buildWhatsAppUrl({ office: office.city, source: "office profile" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="border-b border-border/60 bg-secondary/25 py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to contact details</Link>
            <div className="mt-10 max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[.28em] text-accent">Our offices · {office.role}</span>
              <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">{office.city} Office</h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">Connect with Kanyi J. & Company Advocates at our {office.city} {office.role.toLowerCase()}.</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><MapPin className="h-5 w-5" /></span>
              <h2 className="mt-5 font-headline text-2xl font-semibold text-primary">Visit our {office.city} office</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{office.address}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{office.phone}</p>
              <p className="mt-2 break-words text-sm text-muted-foreground">{office.email}</p>
              <a href={office.mapUrl} data-conversion-event="office_directions_clicked" data-conversion-office={office.slug} data-conversion-source="office-profile" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">Get directions <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={whatsappUrl} data-conversion-event="whatsapp_clicked" data-conversion-office={office.slug} data-conversion-source="office-profile" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><MessageCircle className="h-4 w-4" /> WhatsApp this office</a>
              <a href={`tel:${office.phoneHref}`} data-conversion-event="phone_clicked" data-conversion-office={office.slug} data-conversion-source="office-profile" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"><Phone className="h-4 w-4" /> Call {office.phoneDisplay}</a>
            </div>
            <Link href={`/?office=${office.slug}#consultation`} className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Request a consultation</Link>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-border/70 bg-secondary/30">
            <iframe
              title={`${office.city} office map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
              width="100%"
              height="360"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
