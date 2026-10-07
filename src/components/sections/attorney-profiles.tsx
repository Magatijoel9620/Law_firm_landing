"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Reveal, TiltCard } from "@/components/interactive/InteractionLayer";
import { motion } from "framer-motion";

interface Attorney {
  name: string;
  title: string;
  imageSrc: string;
  description: string;
}
const attorneys: Attorney[] = [
  {
    name: "J.K Kanyi",
    title: "Founding Member · Managing Partner",
    imageSrc: "/images/team/kanyi.jpg",
    description:
  "A visionary legal practitioner and founding member of the firm, dedicated to excellence, mentorship and the highest standards of legal service. Mr. Kanyi brings over 47 years' experience across a wide range of areas of law. A former Chief Magistrate of Mombasa, he leads the firm's corporate and commercial litigation, general litigation, conveyancing and property, criminal litigation, employment and labour relations, banking and commercial law, and alternative dispute resolution practices. Advocate of the High Court of Kenya. Member of the Law Society of Kenya. LLB (Hons), University of Nairobi · Postgraduate Diploma, Kenya School of Law. 47+ years' experience · Former Chief Magistrate.",
  },
  {
    name: "C. Mango",
    title: "Associate",
    imageSrc: "/images/team/cecilia.jpg",
    description:
      "Known for integrity, precision and unwavering client advocacy. Handles general litigation, banking and financial services, employment and labour relations, family law and alternative dispute resolution. Advocate of the High Court of Kenya; LLB (Hons), University of Goa; PGDip, Kenya School of Law.",
  },
  {
    name: "M.K Maundu",
    title: "Associate",
    imageSrc: "/images/team/maundu.jpg",
    description:
      "A dedicated legal mind with a passion for justice, delivering strategic counsel and practical solutions in insolvency law, insurance law, tax and general litigation. Advocate of the High Court of Kenya; LLB (Hons), University of Nairobi; PGDip, Kenya School of Law.",
  },
  {
    name: "W.N Achoka",
    title: "Associate",
    imageSrc: "/images/team/nelson.jpg",
    description:
      "Proficient litigator advising across complex areas including admiralty, company and business law, conveyancing, criminal litigation, mergers and acquisitions, data protection and environmental law. Advocate of the High Court of Kenya; LLB (Hons), Moi University; PGDip, Kenya School of Law.",
  },
];
export default function AttorneyProfiles() {
  return (
    <section id="attorneys" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em] text-accent">
              The people
            </p>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Meet our team.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground">
            “Professional And Dedicated to Help You Win”
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <TiltCard
              key={attorney.name}
              className={index === 0 ? "lg:row-span-2" : ""}
            >
              <Card className="group overflow-hidden border-border/60 bg-card/80">
                <CardHeader className="relative h-[360px] overflow-hidden bg-secondary/50 p-0">
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={attorney.imageSrc}
                      alt={`Portrait of ${attorney.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain object-bottom"
                    />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl text-primary">
                    {attorney.name}
                  </CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {attorney.title}
                  </CardDescription>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {attorney.description}
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
