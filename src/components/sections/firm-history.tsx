"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckSquare,
  Scale,
  Briefcase,
  Award,
  ShieldCheck,
  Download,
  ArrowUpRight,
  Building2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Reveal,
  TiltCard,
  Magnetic,
} from "@/components/interactive/InteractionLayer";

const timelineEvents = [
  {
    year: "1985",
    title: "Firm Founded",
    description:
      "The firm was established in Mombasa as J. V. Juma & Company Advocates by Mr. J. V. Juma, operating as a sole proprietorship.",
  },
  {
    year: "1996",
    title: "A New Chapter",
    description:
      "Following Mr. J. V. Juma's elevation to the High Court, Mr. Joseph Karanja Kanyi took over the practice and it was renamed Kanyi J. & Company Advocates.",
  },
  {
    year: "2010s",
    title: "Maritime Expansion",
    description:
      "The practice expanded into specialised Maritime Law services, reflecting Mombasa's growing importance as a regional shipping and port hub, alongside branch growth in Kilifi and Malindi.",
  },
  {
    year: "Today",
    title: "A Coastal Legal Practice",
    description:
      "Kanyi J. & Company Advocates serves corporate and private clients across the coast with experience, transparency, integrity and a broad full-service legal practice.",
  },
];

const highlights = [
  "40+ years serving clients",
  "3 offices across the coast",
  "5 advocates & lawyers",
  "20 professional support staff",
  "11+ practice areas",
  "Corporate & private client focus",
];

const whyChooseUs = [
  {
    icon: Briefcase,
    title: "Long Experience",
    description:
      "Four decades of meeting clients' legal needs with experience, transparency and integrity across a wide range of assignments.",
  },
  {
    icon: Award,
    title: "Proven Advocacy",
    description:
      "Excellent litigation, negotiation, mediation and arbitration capability, supported by strong research and practical legal strategy.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Reputation",
    description:
      "A professional team committed to exceeding expectations and maintaining the respect of both clients and adversaries.",
  },
];

export default function FirmHistory() {
  return (
    <section
      id="history"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 p-3 shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem]"
              >
                <Image
                  src="/images/team/teamfull.jpg"
                  alt="The team at Kanyi J. & Company Advocates"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-accent/10" />
              </motion.div>
              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/20 bg-black/45 px-5 py-4 text-white backdrop-blur-md">
                <div className="text-2xl font-bold text-accent">1985</div>
                <div className="text-xs uppercase tracking-[.25em] text-white/65">
                  Our beginning
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
              Our story
            </p>
            <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">
              Four decades on the Kenyan coast.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-primary/80">
              A first-rate coastal law firm serving clients since 1985.
            </p>
            <p className="mt-5 leading-8 text-muted-foreground">
              Kanyi J. &amp; Company Advocates is a top-tier Kenyan law firm
              headquartered in Mombasa, with branch offices in Kilifi and
              Malindi. The firm traces its history to 1985 and has grown into a
              full-service practice serving corporate and private clients with
              experience, transparency and integrity.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckSquare className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
            <Magnetic className="mt-8 inline-block">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#contact">Start a conversation</Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>

        {/* Firm profile download banner — deliberately placed before Why Choose Us. */}
        <Reveal className="mt-24">
          <div className="group relative overflow-hidden rounded-[2rem] border border-accent/20 bg-primary text-primary-foreground shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(214,173,84,.24),transparent_34%),linear-gradient(120deg,rgba(255,255,255,.03),transparent_45%)]" />
            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.22em] text-accent">
                  Firm Profile · 2026
                </div>
                <h3 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  Discover Kanyi J. &amp; Company Advocates.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/65 sm:text-base">
                  Explore our history, purpose, practice areas, leadership,
                  resources and offices across Mombasa, Kilifi and Malindi.
                </p>
              </div>
              <Magnetic>
                <a
                  href="/downloads/Kanyi_J_Company_Advocates_Firm_Profile_2026.pdf"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  <Download className="h-4 w-4" /> Download Firm Profile{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-32 mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
            The difference
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Why choose us.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A blend of long experience, proven advocacy and an enduring
            commitment to clients.
          </p>
        </Reveal>
        <div className="mb-24 grid gap-4 md:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <TiltCard key={item.title}>
              <Card className="h-full border-border/60 bg-card/70 p-2">
                <CardHeader className="p-6">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs text-muted-foreground/50">
                    0{i + 1}
                  </div>
                  <CardTitle className="pt-2 font-headline text-2xl text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-7">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* New office showcase using the supplied 2026 imagery. */}
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
            Our Mombasa headquarters
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Zakay Plaza, Kizingo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Our head office is located on the 2nd Floor of Zakay Plaza, Kizingo
            Shopping Centre, Taher Sheikh Said Road, Mombasa.
          </p>
        </Reveal>
        <div className="mb-32 grid gap-4 md:grid-cols-[1.15fr_.85fr]">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 shadow-xl">
              <Image
                src="/images/offices/mombasa-zakay-plaza-1.jpg"
                alt="Kanyi J. & Company Advocates building at Zakay Plaza, Kizingo, Mombasa"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-20 text-white">
                <p className="text-sm font-semibold">Zakay Plaza</p>
                <p className="mt-1 text-xs text-white/65">
                  2nd Floor · Kizingo Shopping Centre · Taher Sheikh Said Road
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={0.08}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-1"
          >
            <div className="relative min-h-[205px] overflow-hidden rounded-[2rem] border border-border/60">
              <Image
                src="/images/offices/mombasa-zakay-plaza-2.jpg"
                alt="Kanyi J. & Company Advocates Zakay Plaza building exterior"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[205px] overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30">
              <Image
                src="/images/offices/zakay-plaza-office.jpg"
                alt="Kanyi J. & Company Advocates office signage at Zakay Plaza"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
            Since 1985
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Our legacy.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Over four decades of legal excellence and unwavering commitment to
            justice.
          </p>
        </Reveal>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          {timelineEvents.map((event, index) => (
            <Reveal
              key={event.year}
              delay={index * 0.05}
              className={`relative mb-8 pl-10 md:w-1/2 md:pl-0 ${index % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
            >
              <div
                className={`absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background text-accent md:left-auto md:right-[-16px] md:top-7 ${index % 2 ? "md:!left-[-16px] md:!right-auto" : ""}`}
              >
                <Scale className="h-3.5 w-3.5" />
              </div>
              <Card className="border-border/60 bg-card/80 shadow-sm transition-shadow hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-headline text-xl text-primary">
                      {event.title}
                    </CardTitle>
                    <span className="font-headline text-sm font-bold text-accent">
                      {event.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
