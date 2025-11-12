"use client"

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
        title: "Message Sent! (Simulation)",
        description: "This is a placeholder. The form is not yet connected.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            “Please Contact Us So We Can Help You”
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Contact Us</h3>
                    <p className="text-muted-foreground mb-6">For any legal query or matter, Feel free to reach us.</p>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-accent" />
                            <a href="tel:+2540720988571" className="hover:text-accent">Tel : +254 0720 988571</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-accent" />
                            <a href="mailto:info@kanyij-advocates.co.ke" className="hover:text-accent">info@kanyij-advocates.co.ke</a>
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-accent mt-1" />
                            <span>Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road, Mombasa.</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.824240726839!2d39.6648050749752!3d-4.062095995958567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012c295f7278d%3A0x861491632731f513!2sBahia%20Mosque!5e0!3m2!1sen!2ske!4v1705663369408!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
                </div>
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
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                         {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
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
