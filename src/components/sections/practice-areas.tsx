import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Landmark, Briefcase, Ship, Home, Banknote, Users, GitBranch, ShieldCheck, FileText, PiggyBank } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Corporate & Commercial Law",
    description: "Expert advice on business structures, contracts, and corporate governance. We handle incorporation, partnerships, share transfers, and more.",
    icon: Briefcase,
  },
  {
    title: "Arbitration",
    description: "Focused on alternative dispute resolution to expedite conflict resolution while preserving important relationships.",
    icon: Users,
  },
   {
    title: "Banking & Finance Law",
    description: "Advising financial institutions and borrowers on securities, loan agreements, and defending against claims with great success.",
    icon: Banknote,
  },
  {
    title: "Real Estate & Conveyancing",
    description: "Handling all aspects of property transactions, including sales, transfers, leases, charges, and general property advice.",
    icon: Building,
  },
  {
    title: "Litigation",
    description: "Our effective litigation team uses experience and trusted judgment to develop customized strategies for every dispute.",
    icon: Landmark,
  },
  {
    title: "Insurance Law",
    description: "The firm has considerable experience in insurance law, including providing advice on insurance policies and claims.",
    icon: ShieldCheck,
  },
  {
    title: "Insolvency Law",
    description: "Our team has advised on some of the largest and most complicated restructurings and insolvencies in the country.",
    icon: GitBranch,
  },
  {
    title: "Taxation Services",
    description: "Committed to improving client comprehension and compliance with tax regulations, and the enforcement of their rights.",
    icon: FileText,
  },
  {
    title: "Pension, Trusts & Retirement Benefits",
    description: "The Firm has successfully defended claims arising under the Retirement Benefits Act.",
    icon: PiggyBank,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-secondary/50">
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
            <Card key={area.title} className="text-center group bg-background border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center p-6">
                <div className="bg-secondary text-accent rounded-full p-4 mb-4 ring-8 ring-secondary/50 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
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
