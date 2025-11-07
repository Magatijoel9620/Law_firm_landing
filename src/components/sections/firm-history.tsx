import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";

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

export default function FirmHistory() {
  return (
    <section id="history" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <Card className="shadow-md hover:shadow-xl transition-shadow bg-background">
                  <CardHeader>
                    <div className="flex items-baseline justify-between">
                      <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                      <span className="font-bold text-accent font-headline">{event.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-1/2 z-10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-secondary/50">
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
