"use client";

import React from "react";
import Image from "next/image";

const partners = [
  "ac-removebg-preview.png",
  "bb-removebg-preview.png",
  "cda-removebg-preview.png",
  "coruggated-removebg-preview.png",
  "equity-removebg-preview.png",
  "gil-removebg-preview.png",
  "hfc-removebg-preview.png",
  "kpa-removebg-preview.png",
  "kwft-removebg-preview.png",
  "little-removebg-preview.png",
  "mary-removebg-preview.png",
  "mombasa_cement-removebg-preview.png",
  "synergy-removebg-preview.png",
  "transpares-removebg-preview.png",
];

export default function Partners() {
  // Duplicate the array for seamless infinite scroll
  const logoSet = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 sm:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Trusted By Leading Corporates & Organizations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are honored to serve distinguished clients across diverse industries.
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden group">
          <div
            className="flex animate-scroll-slow whitespace-nowrap group-hover:[animation-play-state:paused]"
            style={{ animation: "scroll 35s linear infinite" }}
          >
            {logoSet.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] md:min-w-[220px] mx-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={`/images/icons/${name}`}
                  alt={name.replace(/-removebg-preview\.png$/, "").replace(/_/g, " ")}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
