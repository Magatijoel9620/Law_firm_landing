"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { practiceAreas } from "@/lib/firm-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, TiltCard } from "@/components/interactive/InteractionLayer";

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-secondary/25 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
            What we do
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Legal support for the matters that matter to you.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            From business and property matters to disputes, finance and
            taxation, explore the services offered by our team. If you are
            unsure where your enquiry belongs, our Legal Service Finder can help
            you get started.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <TiltCard key={area.title} className="h-full">
              <Card className="group relative h-full overflow-hidden border-border/70 bg-card/80 transition-colors duration-500 hover:border-accent/50">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-accent/[0.08] blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <CardHeader className="relative p-7">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.05 }}
                    className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent"
                  >
                    <area.icon className="h-5 w-5" strokeWidth={1.6} />
                  </motion.div>
                  <div className="mb-4 text-xs font-medium text-muted-foreground/60">
                    0{index + 1}
                  </div>
                  <CardTitle className="max-w-sm font-headline text-2xl leading-tight text-primary">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="pt-3 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </CardDescription>
                  <Link
                    href={`/services/${area.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    Explore service <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </CardHeader>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
