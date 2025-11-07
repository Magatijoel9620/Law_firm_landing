import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckSquare } from 'lucide-react';
import {
  Balance,
  Gavel,
  Trophy,
  GitKraken,
  Scale,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '5600+', label: 'Solved Cases', icon: <Scale className="h-10 w-10 text-accent" /> },
  { value: '4000+', label: 'Cases Won', icon: <Gavel className="h-10 w-10 text-accent" /> },
  { value: '15+', label: 'Awards Won', icon: <Trophy className="h-10 w-10 text-accent" /> },
  { value: 'Top 10', label: 'Law Firms', icon: <Balance className="h-10 w-10 text-accent" /> },
];

const features = [
  '100% Success Rate',
  'Expert Legal Service',
  'Highly Recommendation',
  'Fast Support',
  'High Court Performance',
  'Quick Complete Case',
];

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'team-full');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 flex items-center justify-center text-center bg-primary/5">
          <div className="relative z-10 px-4 text-primary-foreground max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
              About Us
            </h1>
            <div className="text-sm text-muted-foreground mt-2">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-primary">About Us</span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
                        We Are Top Lawyers With <span className="text-accent">37 Years</span> Of Experience
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Kanyi J. & Company Advocates is a highly experienced firm,
                        having a long and proven track record in
                        the practice of civil and commercial law in
                        Kenya.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        The firm, through its professional lawyers, experts,boasts of excellent litigation, negotiation, mediation and arbitration skills and research abilities combined with personal drive, initiative and resourcefulness.
                    </p>
                </div>
            </div>
        </section>

        <section className="pb-16 sm:pb-24 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center p-6 shadow-lg bg-background">
                  <CardContent className="flex flex-col items-center gap-4">
                    {stat.icon}
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground font-semibold">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="about-image">
                {aboutImage && (
                    <Image 
                        src={aboutImage.imageUrl} 
                        alt={aboutImage.description}
                        width={500}
                        height={400}
                        className="rounded-lg shadow-xl object-cover w-full h-auto"
                        data-ai-hint={aboutImage.imageHint}
                    />
                )}
              </div>
              <div className="about-text">
                <div className="section-title">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
                  <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary mt-2">
                    A Legacy of Legal Excellence
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Kanyi J & Company Advocates Is a top-tier Law firm based in Mombasa , Kenya.
                    Founded in 1985 under the name of J. V. Juma & Company Advocates by Mr. J. V. Juma as the Sole Proprietor. Mr. J. V. Juma was later elevated to the High Court as a Puisne Judge and Mr. Joseph Karanja Kanyi who had then resigned from the Judiciary took over the firm and it was renamed Kanyi J. & Company Advocates in 1996.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckSquare className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/#contact" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-transform hover:scale-105">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
