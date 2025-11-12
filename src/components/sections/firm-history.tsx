import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Scale, Briefcase, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1985",
    title: "Firm Founded",
    description: "The firm was established as J. V. Juma & Company Advocates by Mr. J. V. Juma, operating as a Sole Proprietorship.",
  },
  {
    year: "1996",
    title: "A New Chapter",
    description: "Following Mr. J. V. Juma's appointment to the High Court, Mr. Joseph Karanja Kanyi took the helm and the firm was renamed to Kanyi J. & Company Advocates.",
  },
  {
    year: "2010s",
    title: "Expansion of Services",
    description: "The firm expanded its practice areas to include specialized services in Maritime Law, reflecting Mombasa's growing importance as a shipping hub.",
  },
  {
    year: "Present",
    title: "Continuing a Legacy of Excellence",
    description: "Today, Kanyi J. & Company Advocates stands as a top-tier law firm in Mombasa, committed to delivering exceptional legal services with integrity and professionalism.",
  },
];

const highlights = [
    "100% Success Rate",
    "Expert Legal Service",
    "Highly Recommendation",
    "Fast Support",
    "High Court Performance",
    "Quick Complete Case"
];

const whyChooseUs = [
    {
        icon: Briefcase,
        title: "Long Experience",
        description: "The firm has over the years earned its reputation as a first rate law firm of highly qualified and skilled lawyers, meeting the legal needs of our clients with experience, transparency and integrity."
    },
    {
        icon: Award,
        title: "Our Success Cases",
        description: "We are proud to have earned the respect of both our clients and adversaries."
    },
    {
        icon: ShieldCheck,
        title: "Professional Lawyers",
        description: "The legal term comprises of highly and fully trained lawyers with a professional and versatile work experience from various legal assignments."
    }
]

export default function FirmHistory() {
  return (
    <section id="history" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="about-image">
                <div className="relative aspect-[5/4] rounded-lg shadow-lg overflow-hidden">
                    <Image 
                        src="/images/team/team.jpg" 
                        alt="The team at Kanyi J. & Company Advocates" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
                    About Us
                </h2>
                <p className="mt-4 text-lg text-muted-foreground font-semibold">
                    We Are Top Lawyers With Over 37 Years Of Experience
                </p>
                <p className="mt-4 text-muted-foreground">
                    Kanyi J & Company Advocates is a top-tier Law firm based in Mombasa, Kenya. Founded in 1985 under the name of J. V. Juma & Company Advocates by Mr. J. V. Juma as the Sole Proprietor. Mr. J. V. Juma was later elevated to the High Court as a Puisne Judge and Mr. Joseph Karanja Kanyi who had then resigned from the Judiciary took over the firm and it was renamed Kanyi J. & Company Advocates in 1996.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                    {highlights.map(item => (
                        <div key={item} className="flex items-center gap-2">
                            <CheckSquare className="h-5 w-5 text-accent" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                 <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="#contact">Learn More</Link>
                </Button>
            </div>
        </div>

        {/* Why Choose us */}
         <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
                Why Choose Us
            </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {whyChooseUs.map(item => (
                 <Card key={item.title} className="bg-card text-center p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="bg-secondary text-accent rounded-full p-3 mb-4 ring-8 ring-secondary/50">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>


        {/* Timeline Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Our Legacy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Over three decades of legal excellence and unwavering commitment to justice.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative pl-12 md:pl-0 mb-12 md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 md:px-6">
                <Card className="shadow-md hover:shadow-xl transition-shadow bg-card">
                  <CardHeader>
                    <div className="flex items-baseline justify-between">
                      <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                      <span className="font-bold text-accent font-headline">{event.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-1/2 z-10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                  <Scale className="h-4 w-4" />
                </div>
              </div>
               <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
