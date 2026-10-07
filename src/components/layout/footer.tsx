"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "254735830584";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Kanyi J. & Company Advocates, I would like to make an enquiry."
)}`;

const quickLinks = [
  { href: "/#practice-areas", label: "Our Services" },
  { href: "/#history", label: "About Us" },
  { href: "/#attorneys", label: "Our Team" },
  { href: "/#contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/#practice-areas", label: "Corporate & Commercial Law" },
  { href: "/#practice-areas", label: "Banking & Finance Law" },
  { href: "/#practice-areas", label: "Property Law" },
  { href: "/#practice-areas", label: "Insurance Law" },
  { href: "/#practice-areas", label: "Tax & Audit Law" },
  { href: "/#practice-areas", label: "Insolvency Law" },
];

const offices = [
  {
    label: "Mombasa · Head Office",
    address: "Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road, P.O. Box 99426-80107, Mombasa.",
    phone: "254-41-2314937 / 2314886 · 0720 988571 · 0735 830584",
    href: "https://www.google.com/maps/search/?api=1&query=Zakay+Plaza%2C+Kizingo+Shopping+Centre%2C+Taher+Sheikh+Said+Road%2C+Mombasa%2C+Kenya",
  },
  {
    label: "Kilifi · Branch",
    address: "Suite No. 7, Kilifi Shopping Arcade · P.O. Box 855, Kilifi.",
    phone: "020-2021788 · 0735 830575 · 0723 963919",
    href: "https://www.google.com/maps/search/?api=1&query=Kilifi+Shopping+Arcade%2C+Kilifi%2C+Kenya",
  },
  {
    label: "Malindi · Branch",
    address: "Ruby Plaza, Vasco da Gama Road, next to Malindi Law Courts, Malindi.",
    phone: "0703 937485",
    href: "https://www.google.com/maps/search/?api=1&query=Ruby+Plaza%2C+Vasco+da+Gama+Road%2C+Malindi%2C+Kenya",
  },
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
              A full-service coastal law firm serving corporate and private clients across Mombasa, Kilifi and Malindi since 1985.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href={whatsappUrl}
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
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-1 text-sm leading-5 text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
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
                href="mailto:info@kanyij-advocates.co.ke"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="break-all">
                  info@kanyij-advocates.co.ke
                </span>
              </a>

              <a
                href="tel:+254720988571"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>+254 720 988571</span>
              </a>

              <a
                href={whatsappUrl}
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
                  +254 735 830584
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

                    {office.href ? (
                      <a
                        href={office.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {office.address}
                      </a>
                    ) : (
                      <p>{office.address}</p>
                    )}
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