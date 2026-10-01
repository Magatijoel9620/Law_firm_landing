"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  InteractionLayer,
  Magnetic,
  ScrollProgress,
} from "@/components/interactive/InteractionLayer";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import { useTheme } from "next-themes";

const WHATSAPP_NUMBER = "254735830584";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Kanyi J. & Company Advocates, I would like to make an enquiry."
)}`;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#history", label: "About Us" },
  { href: "/#practice-areas", label: "Services" },
  { href: "/#attorneys", label: "Team" },
  {
    href: "https://kjc.wakilicms.com/",
    label: "Portal",
    external: true,
  },
  { href: "/#contact", label: "Contact" },
];

function TopBar() {
  return (
    <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground sm:block">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-11 items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@kanyij-advocates.co.ke"
              className="group flex items-center gap-2 text-primary-foreground/75 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span>info@kanyij-advocates.co.ke</span>
            </a>

            <a
              href="tel:+254720988571"
              className="group flex items-center gap-2 text-primary-foreground/75 transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>+254 720 988571</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <span className="h-4 w-px bg-primary-foreground/20" />

            <Magnetic strength={0.12}>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="h-8 rounded-full border-accent bg-transparent px-4 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Link href="/#contact">Make an Enquiry</Link>
              </Button>
            </Magnetic>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative h-16 w-[170px] md:w-[210px]">
        <Image
          src="/images/kanyilogo-removebg-preview.png"
          alt="Kanyi J. & Company Advocates"
          fill
          sizes="210px"
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative h-16 w-[170px] md:w-[210px] lg:w-[230px]">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/images/kanyilogo.png"
            : "/images/kanyilogo-removebg-preview.png"
        }
        alt="Kanyi J. & Company Advocates Logo"
        fill
        sizes="(max-width: 768px) 170px, (max-width: 1200px) 210px, 230px"
        className="object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <InteractionLayer />
      <ScrollProgress />

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border/40 bg-background/85 text-foreground shadow-sm backdrop-blur-xl transition-transform duration-300",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <TopBar />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-6">
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-85"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={
                      link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                      "hover:bg-accent/10 hover:text-primary",
                      link.label === "Contact" &&
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    )}
                  >
                    {link.label}

                    {link.external && (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Desktop WhatsApp CTA */}
              <Magnetic strength={0.12}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Magnetic>
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[320px] border-l bg-background/95 p-0 backdrop-blur-xl"
                >
                  <div className="flex h-full flex-col">
                    <div className="border-b p-6">
                      <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Logo />
                      </Link>
                    </div>

                    <nav className="flex flex-col p-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target={
                            link.external ? "_blank" : undefined
                          }
                          rel={
                            link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center justify-between border-b border-border/50 py-4 text-base font-medium transition-colors hover:text-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}

                          {link.external && (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-auto space-y-4 p-6">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground shadow-lg shadow-accent/20"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>

                      <a
                        href="tel:+254720988571"
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
                      >
                        <Phone className="h-4 w-4" />
                        +254 720 988571
                      </a>

                      <div className="flex justify-center pt-2">
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}