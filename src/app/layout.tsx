import type {Metadata} from 'next';
import './globals.css';
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
  title: 'Kanyi J. & Company Advocates | Advocates, Commisioners For Oaths & Notaries Public',
  description: 'Kanyi J & Company Advocates Is a top-tier Law firm based in Mombasa , Kenya.',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
