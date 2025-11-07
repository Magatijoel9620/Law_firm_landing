import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40"></div>
      <div className="relative z-10 px-4 text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 drop-shadow-lg">
          Kanyi J. & Company Advocates
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md text-slate-200">
          A Top-Tier Law Firm in Mombasa, Kenya. Advocates, Commissioners For Oaths & Notaries Public.
        </p>
        <Link href="#contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
