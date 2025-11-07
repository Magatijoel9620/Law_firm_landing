"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-background">
                <div className="p-8 flex items-center gap-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <CardHeader className="p-0 mb-1">
                      <CardTitle className="font-headline text-lg">Email</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <a href="mailto:info@kanyij-advocates.co.ke" className="text-muted-foreground hover:text-accent transition-colors">
                        info@kanyij-advocates.co.ke
                      </a>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="bg-background">
                <div className="p-8 flex items-center gap-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-4">
                    <Phone className="h-8 w-8" />
                  </div>
                   <div>
                    <CardHeader className="p-0 mb-1">
                      <CardTitle className="font-headline text-lg">Phone</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                       <a href="tel:0720988571" className="text-muted-foreground hover:text-accent transition-colors">
                        +254 0720 988571
                       </a>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="bg-background">
                 <div className="p-8 flex items-center gap-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-4">
                    <MapPin className="h-8 w-8" />
                  </div>
                   <div>
                    <CardHeader className="p-0 mb-1">
                      <CardTitle className="font-headline text-lg">Office</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Mombasa.</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="bg-background p-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Get a Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+254 123 456 789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help you..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
