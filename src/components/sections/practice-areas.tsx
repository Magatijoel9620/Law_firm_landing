"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Building,
  Landmark,
  Briefcase,
  Banknote,
  Users,
  GitBranch,
  ShieldCheck,
  FileText,
  PiggyBank,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, TiltCard } from "@/components/interactive/InteractionLayer";

interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}
const practiceAreas: PracticeArea[] = [
  {
    title: "Corporate & Commercial Law",
    description:
      "Expert advice on business structures, contracts, and corporate governance. We handle incorporation, partnerships, share transfers, and more.",
    icon: Briefcase,
  },
  {
    title: "Arbitration",
    description:
      "Focused on alternative dispute resolution to expedite conflict resolution while preserving important relationships.",
    icon: Users,
  },
  {
    title: "Banking & Finance Law",
    description:
      "Advising financial institutions and borrowers on securities, loan agreements, and defending against claims with great success.",
    icon: Banknote,
  },
  {
    title: "Real Estate & Conveyancing",
    description:
      "Handling all aspects of property transactions, including sales, transfers, leases, charges, and general property advice.",
    icon: Building,
  },
  {
    title: "Litigation",
    description:
      "Our effective litigation team uses experience and trusted judgment to develop customized strategies for every dispute.",
    icon: Landmark,
  },
  {
    title: "Insurance Law",
    description:
      "The firm has considerable experience in insurance law, including providing advice on insurance policies and claims.",
    icon: ShieldCheck,
  },
  {
    title: "Insolvency Law",
    description:
      "Our team has advised on some of the largest and most complicated restructurings and insolvencies in the country.",
    icon: GitBranch,
  },
  {
    title: "Taxation Services",
    description:
      "Committed to improving client comprehension and compliance with tax regulations, and the enforcement of their rights.",
    icon: FileText,
  },
  {
    title: "Pension, Trusts & Retirement Benefits",
    description:
      "The Firm has successfully defended claims arising under the Retirement Benefits Act.",
    icon: PiggyBank,
  },
];

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
            Legal expertise with depth.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            We provide a comprehensive range of legal services to meet the
            diverse needs of our clients.
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
                </CardHeader>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
