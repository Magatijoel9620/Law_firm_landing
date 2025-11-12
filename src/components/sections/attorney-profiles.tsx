import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Attorney {
  name: string;
  title: string;
  imageSrc: string;
  description: string;
}

const attorneys: Attorney[] = [
  {
    name: "J.K Kanyi",
    title: "Founding Member",
    imageSrc: "/images/team/kanyi.jpg",
    description: "J.K Kanyi is the Founding Member of Kanyi J & Company Advocates.",
  },
  {
    name: "C. Mango",
    title: "Lawyer",
    imageSrc: "/images/team/mango.jpg",
    description: "Madam Mango is a Lawyer at Kanyi J & Company Advocates.",
  },
  {
    name: "M.K Maundu",
    title: "Lawyer",
    imageSrc: "/images/team/maundu.jpg",
    description: "Mr. Maundu is a Lawyer at Kanyi J & Company Advocates.",
  },
  {
    name: "J. Adoyo",
    title: "Lawyer",
    imageSrc: "/images/team/adoyo.jpg",
    description: "J. Adoyo is a Lawyer at Kanyi J & Company Advocates.",
  },
  {
    name: "W.N Achoka",
    title: "Lawyer",
    imageSrc: "/images/team/achoka.jpg",
    description: "Mr. Achoka is a Lawyer at Kanyi J & Company Advocates.",
  },
];

export default function AttorneyProfiles() {
  return (
    <section id="attorneys" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            “Professional And Dedicated to Help You Win”
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <Card key={attorney.name} className="overflow-hidden group text-center border-0 bg-transparent shadow-none hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="p-0">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={attorney.imageSrc}
                    alt={`Portrait of ${attorney.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-card rounded-b-lg">
                <CardTitle className="font-headline text-xl text-primary">{attorney.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{attorney.title}</CardDescription>
                <p className="mt-4 text-sm text-muted-foreground">{attorney.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
