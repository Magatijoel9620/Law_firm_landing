"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/#practice-areas', label: 'Our Services' },
  { href: '/#history', label: 'About Us' },
  { href: '/#attorneys', label: 'Team' },
  { href: '/#contact', label: 'Contact Us' },
];

const serviceLinks = [
    { href: '/#practice-areas', label: 'Corporate & Commercial Law'},
    { href: '/#practice-areas', label: 'Banking & Finance Law'},
    { href: '/#practice-areas', label: 'Property Law'},
    { href: '/#practice-areas', label: 'Insurance Law'},
    { href: '/#practice-areas', label: 'Tax & Audit Law'},
    { href: '/#practice-areas', label: 'Insolvency Law'},
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          
          <div className="flex flex-col">
             <h3 className="text-lg font-headline font-semibold text-accent mb-4">About Us</h3>
            <p className="text-primary-foreground/80 max-w-sm">
                A top-tier Law firm in Mombasa, Kenya. We offer a diversity of expertise in all areas of major practice. We are a full service law firm with leading expertise in various areas of Law in Kenya.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
             </div>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                 <li key={link.label}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold text-accent mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                 <li key={link.label}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-headline font-semibold text-accent mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-accent shrink-0"/> 
                  <a href="mailto:info@kanyij-advocates.co.ke" className="text-primary-foreground/80 hover:text-accent transition-colors">info@kanyij-advocates.co.ke</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-accent shrink-0"/>
                  <a href="tel:0720988571" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    +254 0720 988571
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                  <p className="text-primary-foreground/80">Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road, Mombasa.</p>
                </li>
                 <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                  <p className="text-primary-foreground/80">Lengai House, Kenyatta Street, Opposite Kibiru Emporium, P. O. Box 855, Kilifi.</p>
                </li>
                 <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                  <p className="text-primary-foreground/80">Ruby Plaza, Vasco Da Gama Road, Next to Malindi Law Court, Malindi.</p>
                </li>
              </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Kanyi J. & Company Advocates. All Rights Reserved. Designed by <a href="https://wapigroup.co.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Wapi Group</a></p>
        </div>
      </div>
    </footer>
  );
}
