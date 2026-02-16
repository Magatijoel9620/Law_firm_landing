"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useTheme } from "next-themes";


// Nav links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#history", label: "About Us" },
  { href: "/#practice-areas", label: "Services" },
  { href: "/#attorneys", label: "Team" },
  { href: "https://kjc.wakilicms.com/", label: "Portal", external: true },
  { href: "/#contact", label: "Contact Us" },
];

// TopBar component
function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@kanyij-advocates.co.ke"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span className="hidden sm:inline">info@kanyij-advocates.co.ke</span>
            </a>
            <a
              href="tel:0720988571"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span className="hidden sm:inline">0720988571 | 0735830584</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/#contact">Get A Schedule</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

// Client-only Logo component
function Logo() {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-[180px] md:w-[220px] lg:w-[260px] h-[80px]">
      <Image
        src={resolvedTheme === "dark" ? "/images/kanyilogo.png" : "/images/kanyilogo-removebg-preview.png"}
        alt="Kanyi J. & Company Advocates Logo"
        fill
        sizes="(max-width: 768px) 180px, (max-width: 1200px) 220px, 260px"
        className="object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide header on scroll down
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "bg-background/80 text-foreground shadow-sm sticky top-0 z-50 backdrop-blur-sm transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <TopBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <Image src="/images/kanyilogo.png" alt="Logo" width={40} height={40} />
                      <span className="text-xl font-headline font-bold text-primary">Kanyi J. & Co.</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        className="text-lg font-medium hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-6 flex justify-center">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
