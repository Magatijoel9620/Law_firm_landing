import type {Metadata} from 'next';
import './globals.css'; //added a declaration file for css imports in globals.d.ts to avoid typescript errors
import { Toaster } from '@/components/ui/toaster';
import { Alegreya, PT_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title:
    "Kanyi J. & Company Advocates | Advocates, Commissioners for Oaths & Notaries Public",
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
    <html lang="en" className={`${alegreya.variable} ${ptSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
