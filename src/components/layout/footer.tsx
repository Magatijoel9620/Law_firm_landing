"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppUrl, firmContact, offices, practiceAreas } from "@/lib/firm-data";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const whatsappUrl = buildWhatsAppUrl({ source: "website footer" });

const quickLinks = [
  { href: "/#service-finder", label: "Find a Service" },
  { href: "/#history", label: "About Us" },
  { href: "/#attorneys", label: "Our Team" },
  { href: "/#contact", label: "Contact Us" },
  { href: "/insights", label: "Legal Insights & FAQs" },
];


export default function Footer() {
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_1fr_1.15fr]">
          {/* About */}
          <div>
            <div className="relative mb-6 aspect-[5/3] w-full max-w-sm overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src="/images/reception.jpg"
                alt="Kanyi J. & Company Advocates Reception"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>

            <h3 className="mb-3 font-headline text-xl font-semibold text-accent">
              Kanyi J. & Company Advocates
            </h3>

            <p className="max-w-md text-sm leading-7 text-primary-foreground/70">
              A Kenyan law firm serving corporate and private clients across the country since 1985, with its head office in Mombasa and branch offices in Kilifi and Malindi.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl}
                data-conversion-event="whatsapp_clicked"
                data-conversion-source="footer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-headline text-lg font-semibold text-accent">
              Explore
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-headline text-lg font-semibold text-accent">
              Our Services
            </h3>

            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/services/${area.slug}`}
                    className="group inline-flex items-start gap-1 text-sm leading-5 text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {area.title}
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-headline text-lg font-semibold text-accent">
              Contact Us
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${firmContact.email}`}
                data-conversion-event="email_clicked"
                data-conversion-source="footer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="break-all">
                  {firmContact.email}
                </span>
              </a>

              <a
                href={`tel:${firmContact.phoneHref}`}
                data-conversion-event="phone_clicked"
                data-conversion-source="footer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{firmContact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                data-conversion-event="whatsapp_clicked"
                data-conversion-source="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  <strong className="font-semibold text-primary-foreground">
                    WhatsApp
                  </strong>
                  <br />
                  {firmContact.whatsappDisplay}
                </span>
              </a>
            </div>

            <div className="mt-6 space-y-4">
              {offices.map((office) => (
                <div
                  key={office.label}
                  className="flex items-start gap-3"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <div className="text-sm leading-6 text-primary-foreground/70">
                    <p className="font-semibold text-primary-foreground">
                      {office.label}
                    </p>

                    <Link
                      href={`/offices/${office.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {office.address}
                    </Link>
                    <p className="mt-1 text-xs text-primary-foreground/50">{office.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Need legal assistance?
              </p>

              <h3 className="mt-2 font-headline text-2xl font-semibold sm:text-3xl">
                Let&apos;s discuss your matter.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-primary-foreground/60">
                Send us an enquiry or start a conversation with our team on
                WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90"
              >
                Make an Enquiry
              </Link>

              <a
                href={whatsappUrl}
                data-conversion-event="whatsapp_clicked"
                data-conversion-source="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear} Kanyi J. &amp; Company Advocates. All Rights
            Reserved.
          </p>

          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://hempongroup.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Hempon Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}