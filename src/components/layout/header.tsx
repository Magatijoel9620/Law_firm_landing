"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#practice-areas', label: 'Practice Areas' },
  { href: '#history', label: 'Our History' },
  { href: '#attorneys', label: 'Our Team' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-accent" />
            <span className="text-lg md:text-xl font-headline font-bold whitespace-nowrap">Kanyi J. & Company Advocates</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-primary text-primary-foreground p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-primary-foreground/20">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                       <Scale className="h-8 w-8 text-accent" />
                       <span className="text-xl font-headline font-bold">Kanyi J. & Co.</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
