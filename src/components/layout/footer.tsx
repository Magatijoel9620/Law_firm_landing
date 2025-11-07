"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Scale className="h-8 w-8 text-accent" />
                <span className="text-xl font-headline font-bold">Kanyi J. & Co.</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-xs">
                Advocates, Commissioners For Oaths & Notaries Public. A premier law firm in Mombasa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
              <li><Link href="#history" className="hover:text-accent transition-colors">Our History</Link></li>
              <li><Link href="#attorneys" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-headline font-semibold text-accent mb-4">Connect With Us</h3>
             <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
             </div>
             <p className="mt-4 text-primary-foreground/80">info@kanyij-advocates.co.ke</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Kanyi J. & Company Advocates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
