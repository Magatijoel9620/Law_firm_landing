import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
    Briefcase, 
    Gavel, 
    Landmark, 
    Building, 
    Shield, 
    FileX2, 
    Receipt, 
    PiggyBank,
    Users 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
    {
        title: "Corporate & Commercial Law",
        description: "The Firm undertakes incorporation of limited liability companies, limited liability partnerships (LLPs), purchase and transfer of business, transfer of shares in existing companies, Shareholder Agreements and general advice on corporate matters.",
        icon: Briefcase,
    },
    {
        title: "Arbitration",
        description: "In keeping with the global trend, the business is devoted to alternative dispute resolution, with a particular focus on arbitration. We work to expedite the resolution of conflicts while preserving and repairing the relationships involved.",
        icon: Users,
    },
    {
        title: "Banking & Finance Law",
        description: "The Firm has provided services to banks including Development Agencies,in demanding damages or the defeat of security papers, as well as opposing injunctions, with great success.",
        icon: Landmark,
    },
    {
        title: "Property Law & Conveyancing",
        description: "We handle all areas of conveyancing, including land sales and transfers, leases, charges, conveyance, re-conveyance, discharges, caveats, cautions, licenses, trust, and general land and property advice.",
        icon: Building,
    },
    {
        title: "Litigation",
        description: "Kanyi J. & Company Advocates' has an effective litigation team that uses its experience, trusted judgment and insights to develop a customized strategy to every dispute.",
        icon: Gavel,
    },
    {
        title: "Insurance Law",
        description: "The firm has considerable experience in insurance law, including but not limited to providing advice on insurance policies and claims.",
        icon: Shield,
    },
    {
        title: "Insolvency Law",
        description: "Our Insolvency and Restructuring practice department has advised on some of the largest and most complicated restructurings and insolvencies in the country.",
        icon: FileX2,
    },
    {
        title: "Taxation Services",
        description: "We established tax practice committed to improving our clients' comprehension and compliance with tax regulations, as well as the enforcement of their rights.",
        icon: Receipt,
    },
    {
        title: "Pension, Trusts & Retirement Benefits",
        description: "The Firm has successfully defended claims arising under the Retirement Benefits Act.",
        icon: PiggyBank,
    },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 flex items-center justify-center text-center bg-primary/5">
          <div className="relative z-10 px-4 text-primary-foreground max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
              Our Services
            </h1>
            <div className="text-sm text-muted-foreground mt-2">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-primary">Services</span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
                    We Are Providing <span className="text-accent">Top Services</span> With Excellent Performance
                </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((area) => (
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

      </main>
      <Footer />
    </div>
  );
}
