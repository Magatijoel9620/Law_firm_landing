import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Landmark, Briefcase, Ship, Home, Banknote } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Corporate & Commercial Law",
    description: "Expert advice on business structures, contracts, and corporate governance.",
    icon: Briefcase,
  },
  {
    title: "Real Estate & Conveyancing",
    description: "Handling all aspects of property transactions, leases, and development.",
    icon: Building,
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Representing clients in courts and tribunals for civil and commercial disputes.",
    icon: Landmark,
  },
  {
    title: "Maritime & Shipping Law",
    description: "Specialized legal services for the maritime industry in the port city of Mombasa.",
    icon: Ship,
  },
  {
    title: "Family Law & Succession",
    description: "Guidance on matters of divorce, child custody, and estate planning.",
    icon: Home,
  },
  {
    title: "Banking & Finance",
    description: "Advising financial institutions and borrowers on securities and loan agreements.",
    icon: Banknote,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Our Practice Areas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive range of legal services to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Card key={area.title} className="text-center group bg-secondary/50 border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center p-6">
                <div className="bg-background text-accent rounded-full p-4 mb-4 ring-8 ring-secondary/30 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <area.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{area.title}</CardTitle>
                <CardDescription className="pt-2 text-muted-foreground">{area.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
