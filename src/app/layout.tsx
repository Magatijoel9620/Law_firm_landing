import type {Metadata} from 'next';
import './globals.css'; //added a declaration file for css imports in globals.d.ts to avoid typescript errors
import { Toaster } from '@/components/ui/toaster';
import { Alegreya, PT_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import ConversionTracker from '@/components/analytics/conversion-tracker';
import AnalyticsConsent from '@/components/analytics/analytics-consent';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kanyij-advocates.co.ke").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kanyi J. & Company Advocates | Mombasa, Kenya",
    template: "%s | Kanyi J. & Company Advocates",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Kanyi J. & Company Advocates",
    title: "Kanyi J. & Company Advocates | Mombasa, Kenya",
    description: "A Kenyan coastal law firm serving corporate and private clients from Mombasa, Kilifi and Malindi since 1985.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Kanyi J. & Company Advocates",
    description: "A Kenyan coastal law firm serving clients from Mombasa, Kilifi and Malindi since 1985.",
  },
      icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    //apple: "/apple-touch-icon.png", // optional if you add it
  },

  description:
    "Kanyi J. & Company Advocates is a Kenyan coastal law firm serving corporate and private clients from Mombasa, Kilifi and Malindi since 1985.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${alegreya.variable} ${ptSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ConversionTracker />
          <AnalyticsConsent />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
