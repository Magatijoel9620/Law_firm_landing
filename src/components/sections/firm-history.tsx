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
  Landmark,
  Ship,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Reveal,
  TiltCard,
  Magnetic,
} from "@/components/interactive/InteractionLayer";

const timelineEvents = [
  {
    year: "1985",
    title: "A practice begins in Mombasa",
    category: "The beginning",
    icon: Landmark,
    description:
      "Kanyi's story begins with the establishment of J. V. Juma & Company Advocates in Mombasa by Mr. J. V. Juma. The practice began as a sole proprietorship, laying the foundation for the firm that would later carry the Kanyi name.",
    detail:
      "The firm's roots are firmly coastal. Mombasa was the starting point of a legal practice that would continue to serve clients in the region through the decades that followed.",
  },
  {
    year: "1996",
    title: "A new chapter under the Kanyi name",
    category: "A change in leadership",
    icon: Scale,
    description:
      "Following Mr. J. V. Juma's elevation to the High Court, Mr. Joseph Karanja Kanyi took over the practice. It was then renamed Kanyi J. & Company Advocates — the name by which the firm is known today.",
    detail:
      "This transition marked an important chapter in the firm's history: continuity of the established practice, alongside a new chapter of leadership under Mr. Kanyi.",
  },
  {
    year: "2010s",
    title: "Growing with the coast's legal and commercial needs",
    category: "Broader reach and practice",
    icon: Ship,
    description:
      "The practice developed specialised Maritime Law services, reflecting the importance of shipping and port activity to the Mombasa region. The firm also established a presence beyond Mombasa, with branch offices in Kilifi and Malindi.",
    detail:
      "The firm's coastal presence connects its Mombasa headquarters with clients and communities in Kilifi and Malindi. Its published practice areas also reflect the range of legal matters encountered by businesses and individuals in the region.",
  },
  {
    year: "Today",
    title: "A Kenyan practice serving a broad client base",
    category: "The firm today",
    icon: Building2,
    description:
      "Today, Kanyi J. & Company Advocates serves corporate and private clients across Kenya from its established base in Mombasa and branch offices in Kilifi and Malindi. Its work spans the firm's published practice areas, with experience, transparency and integrity at the heart of its stated approach.",
    detail:
      "The firm continues to bring its people, experience and range of services together to assist clients with different legal needs. Explore the practice areas and office pages to learn more about the services and locations currently listed on this website.",
  },
];

const highlights = [
  "40+ years serving clients",
  "3 offices in Mombasa, Kilifi & Malindi",
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
              A Kenyan legal practice with roots in Mombasa.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-primary/80">
              Established in 1985, with a longstanding presence in Mombasa and a commitment to serving clients across Kenya.
            </p>
            <p className="mt-5 leading-8 text-muted-foreground">
              Based in Mombasa, with branch offices in Kilifi and Malindi, Kanyi J. &amp;
              Company Advocates serves corporate and private clients across
              Kenya. The practice traces its roots to 1985 and continues to
              build on that established foundation.
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
                  Get to know Kanyi J. &amp; Company Advocates.
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
            A history that began in Mombasa and continues to shape the way we serve clients across Kenya.
          </p>
        </Reveal>
        <TimelineJourney />
      </div>
    </section>
  );
}


/** A scroll-linked, keyboard-accessible timeline inspired by the VS Code activity rail. */
function TimelineJourney() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 38%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div ref={timelineRef} style={{ position: "relative" }} className="relative mx-auto max-w-5xl py-2">
      {/* Track and scroll-linked active rail */}
      <div aria-hidden="true" className="absolute bottom-5 left-4 top-5 w-px bg-border md:left-1/2">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-accent via-accent to-accent/70"
          style={{ scaleY: reduceMotion ? 1 : progressScale }}
        />
      </div>

      <ol className="relative space-y-8 md:space-y-10">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </ol>
      <p className="mt-10 pl-11 text-xs leading-6 text-muted-foreground md:pl-0 md:text-center">
        A short account of the firm's published history.
      </p>
    </div>
  );
}

function TimelineEvent({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const Icon = event.icon;
  const isRight = index % 2 === 1;

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 34, x: isRight ? 18 : -18 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.28, margin: "0px 0px -8% 0px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.72, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-11 md:w-1/2 md:pl-0 ${isRight ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
    >
      <motion.span
        aria-hidden="true"
        initial={reduceMotion ? false : { scale: 0.72, opacity: 0.45 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 18, delay: 0.12 }}
        className={`absolute left-0 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-background text-accent shadow-[0_0_0_5px_hsl(var(--background))] md:left-auto ${isRight ? "md:!left-[-18px]" : "md:right-[-18px]"}`}
      >
        <Icon className="h-4 w-4" />
      </motion.span>

      <motion.div
        whileHover={reduceMotion ? undefined : { y: -5 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 22 }}
        className="group"
      >
        <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-sm transition-[border-color,box-shadow,background-color] duration-500 group-hover:border-accent/45 group-hover:shadow-[0_18px_55px_rgba(15,23,42,.10)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />
          <CardHeader className="pb-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {event.category}
              </span>
              <span className="font-headline text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                {event.year}
              </span>
            </div>
            <CardTitle className="max-w-xl font-headline text-xl leading-snug text-primary sm:text-2xl">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
              {event.description}
            </p>
            <motion.div
              id={`timeline-detail-${event.year.toLowerCase()}`}
              initial={false}
              animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              aria-hidden={!expanded}
            >
              <p className="border-t border-border/70 mt-4 pt-4 text-sm leading-7 text-muted-foreground">
                {event.detail}
              </p>
            </motion.div>
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`timeline-detail-${event.year.toLowerCase()}`}
              onClick={() => setExpanded((value) => !value)}
              className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-accent/25 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-accent/60 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {expanded ? "Show less" : "Explore this milestone"}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}>
                <ChevronDown className="h-3.5 w-3.5 text-accent" />
              </motion.span>
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.li>
  );
}
