import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Attorney {
  name: string;
  title: string;
  imageId: string;
  specialties: string[];
}

const attorneys: Attorney[] = [
  {
    name: "Joseph Karanja Kanyi",
    title: "Managing Partner",
    imageId: "attorney-1",
    specialties: ["Corporate Law", "Conveyancing", "Litigation"],
  },
  {
    name: "Jane Mwangi",
    title: "Senior Associate",
    imageId: "attorney-2",
    specialties: ["Maritime Law", "Dispute Resolution", "Commercial Law"],
  },
  {
    name: "David Ochieng",
    title: "Associate",
    imageId: "attorney-3",
    specialties: ["Family Law", "Real Estate", "Succession"],
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
            Our distinguished team of advocates brings a wealth of experience and a commitment to achieving the best outcomes for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney) => {
            const attorneyImage = PlaceHolderImages.find(p => p.id === attorney.imageId);
            return (
              <Card key={attorney.name} className="overflow-hidden group text-center hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  {attorneyImage && (
                    <div className="aspect-square relative">
                      <Image
                        src={attorneyImage.imageUrl}
                        alt={`Portrait of ${attorney.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={attorneyImage.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{attorney.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{attorney.title}</CardDescription>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {attorney.specialties.map((spec) => (
                      <Badge key={spec} variant="secondary">{spec}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
