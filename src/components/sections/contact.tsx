import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are here to help. Reach out to us for a consultation or any inquiries.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r">
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <a href="mailto:info@kanyij-advocates.co.ke" className="text-muted-foreground hover:text-accent transition-colors">
                    info@kanyij-advocates.co.ke
                  </a>
                </CardContent>
              </div>
              <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r">
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">+254 123 456 789</p>
                </CardContent>
              </div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-lg">Office</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">Canon Ball House, Mombasa, Kenya</p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
