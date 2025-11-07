
"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerImageIds = ["partner-1", "partner-2", "partner-3", "partner-4", "partner-5"];
const partners = partnerImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

export default function Partners() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="partners" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            We Provide Top Legal Services To Corporates & Individuals
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => partner && (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                   <div className="flex aspect-video items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                      <Image
                        src={partner.imageUrl}
                        alt={partner.description}
                        width={200}
                        height={100}
                        className="object-contain"
                        data-ai-hint={partner.imageHint}
                      />
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
