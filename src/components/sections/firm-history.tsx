"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Scale, Briefcase, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, TiltCard, Magnetic } from "@/components/interactive/InteractionLayer";

const timelineEvents = [
  { year: "1985", title: "Firm Founded", description: "The firm was established as J. V. Juma & Company Advocates by Mr. J. V. Juma, operating as a Sole Proprietorship." },
  { year: "1996", title: "A New Chapter", description: "Following Mr. J. V. Juma's appointment to the High Court, Mr. Joseph Karanja Kanyi took the helm and the firm was renamed to Kanyi J. & Company Advocates." },
  { year: "2010s", title: "Expansion of Services", description: "The firm expanded its practice areas to include specialized services in Maritime Law, reflecting Mombasa's growing importance as a shipping hub." },
  { year: "Present", title: "Continuing a Legacy of Excellence", description: "Today, Kanyi J. & Company Advocates stands as a top-tier law firm in Mombasa, committed to delivering exceptional legal services with integrity and professionalism." },
];
const highlights = ["100% Success Rate", "Expert Legal Service", "Highly Recommendation", "Fast Support", "High Court Performance", "Quick Complete Case"];
const whyChooseUs = [
  { icon: Briefcase, title: "Long Experience", description: "The firm has over the years earned its reputation as a first rate law firm of highly qualified and skilled lawyers, meeting the legal needs of our clients with experience, transparency and integrity." },
  { icon: Award, title: "Our Success Cases", description: "We are proud to have earned the respect of both our clients and adversaries." },
  { icon: ShieldCheck, title: "Professional Lawyers", description: "The legal term comprises of highly and fully trained lawyers with a professional and versatile work experience from various legal assignments." },
];

export default function FirmHistory() {
  return (
    <section id="history" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 p-3 shadow-2xl">
              <motion.div whileHover={{ scale: 1.025 }} transition={{ duration: .8 }} className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/team/teamfull.jpg" alt="The team at Kanyi J. & Company Advocates" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-accent/10" />
              </motion.div>
              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/20 bg-black/45 px-5 py-4 text-white backdrop-blur-md">
                <div className="text-2xl font-bold text-accent">1985</div><div className="text-xs uppercase tracking-[.25em] text-white/65">Our beginning</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={.08}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">Our story</p>
            <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">A legacy built on trust.</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-primary/80">We Are Top Lawyers With Over 37 Years Of Experience</p>
            <p className="mt-5 leading-8 text-muted-foreground">Kanyi J & Company Advocates is a top-tier Law firm based in Mombasa, Kenya. Founded in 1985 under the name of J. V. Juma & Company Advocates by Mr. J. V. Juma as the Sole Proprietor. Mr. J. V. Juma was later elevated to the High Court as a Puisne Judge and Mr. Joseph Karanja Kanyi who had then resigned from the Judiciary took over the firm and it was renamed Kanyi J. & Company Advocates in 1996.</p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(item => <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckSquare className="h-4 w-4 shrink-0 text-accent" />{item}</div>)}
            </div>
            <Magnetic className="mt-8 inline-block"><Button asChild size="lg" className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"><Link href="#contact">Start a conversation</Link></Button></Magnetic>
          </Reveal>
        </div>

        <Reveal className="mt-32 mb-12"><p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">The difference</p><h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">Why choose us.</h2></Reveal>
        <div className="mb-32 grid gap-4 md:grid-cols-3">
          {whyChooseUs.map((item, i) => <TiltCard key={item.title}><Card className="h-full border-border/60 bg-card/70 p-2"><CardHeader className="p-6"><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent"><item.icon className="h-5 w-5" /></div><div className="text-xs text-muted-foreground/50">0{i+1}</div><CardTitle className="pt-2 font-headline text-2xl text-primary">{item.title}</CardTitle></CardHeader><CardContent className="px-6 pb-7"><p className="text-sm leading-6 text-muted-foreground">{item.description}</p></CardContent></Card></TiltCard>)}
        </div>

        <Reveal className="mb-14 max-w-3xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">Since 1985</p><h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">Our legacy.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Over three decades of legal excellence and unwavering commitment to justice.</p></Reveal>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          {timelineEvents.map((event, index) => (
            <Reveal key={event.year} delay={index * .05} className={`relative mb-8 pl-10 md:w-1/2 md:pl-0 ${index % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
              <div className={`absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background text-accent md:left-auto md:right-[-16px] md:top-7 ${index % 2 ? "md:!left-[-16px] md:!right-auto" : ""}`}><Scale className="h-3.5 w-3.5" /></div>
              <Card className="border-border/60 bg-card/80 shadow-sm transition-shadow hover:shadow-xl"><CardHeader><div className="flex items-start justify-between gap-4"><CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle><span className="font-headline text-sm font-bold text-accent">{event.year}</span></div></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{event.description}</p></CardContent></Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
