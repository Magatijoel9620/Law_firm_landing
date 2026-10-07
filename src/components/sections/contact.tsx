"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  MessageCircle,
  ExternalLink,
  Clock3,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Reveal,
  TiltCard,
  Magnetic,
} from "@/components/interactive/InteractionLayer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const WHATSAPP_NUMBER = "254735830584";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Kanyi J. & Company Advocates, I would like to make an enquiry."
)}`;

const offices = [
  {
    label: "Mombasa · Head Office",
    address: "Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road, P.O. Box 99426-80107, Mombasa.",
    phone: "254-41-2314937 / 2314886 · 0720 988571 · 0735 830584",
    email: "jkanyi@swiftmombasa.com · info@kanyij-advocates.co.ke",
    query: "Zakay+Plaza%2C+Kizingo+Shopping+Centre%2C+Taher+Sheikh+Said+Road%2C+Mombasa%2C+Kenya",
  },
  {
    label: "Kilifi · Branch",
    address: "Suite No. 7, Kilifi Shopping Arcade · P.O. Box 855, Kilifi.",
    phone: "020-2021788 · 0735 830575 · 0723 963919",
    email: "jkanyi@swiftmombasa.com",
    query: "Kilifi+Shopping+Arcade%2C+Kilifi%2C+Kenya",
  },
  {
    label: "Malindi · Branch",
    address: "Ruby Plaza, Vasco da Gama Road, next to Malindi Law Courts, Malindi.",
    phone: "0703 937485",
    email: "kanyijmld@gmail.com",
    query: "Ruby+Plaza%2C+Vasco+da+Gama+Road%2C+Malindi%2C+Kenya",
  },
];

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
    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast({
          title: "Unable to send message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out. We will get back to you shortly.",
      });

      form.reset();
    } catch {
      toast({
        title: "Connection error",
        description:
          "We couldn't connect to the server. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </span>

          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Let&apos;s Discuss Your Legal Needs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Whether you need legal advice, representation, or assistance with
            a business or property matter, our team is ready to hear from you.
          </p>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Contact information */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Contact us
                </span>

                <h3 className="mt-2 font-headline text-2xl font-semibold text-primary sm:text-3xl">
                  Speak with our team
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                  For any legal query or matter, feel free to reach out through
                  your preferred channel.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {/* Phone */}
                <a
                  href="tel:+254720988571"
                  className="group rounded-2xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Call us
                      </p>
                      <p className="mt-1 font-semibold text-foreground">
                        +254 720 988571
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@kanyij-advocates.co.ke"
                  className="group rounded-2xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">
                        Email us
                      </p>
                      <p className="mt-1 break-all font-semibold text-foreground">
                        info@kanyij-advocates.co.ke
                      </p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-accent/20 bg-accent/5 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        WhatsApp
                      </p>

                      <p className="mt-1 font-semibold text-foreground">
                        +254 735 830584
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Chat with us directly
                      </p>
                    </div>

                    <ExternalLink className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </a>
              </div>

              {/* Offices & map */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={office.label} className="rounded-2xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold uppercase tracking-[.12em] text-accent">{office.label}</p>
                        <p className="mt-1 font-semibold leading-6 text-foreground">{office.address}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{office.phone}</p>
                        <p className="text-sm leading-6 text-muted-foreground">{office.email}</p>
                        <a href={`https://www.google.com/maps/search/?api=1&query=${office.query}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">Get directions <ExternalLink className="h-3.5 w-3.5" /></a>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="mt-5 h-64 overflow-hidden rounded-xl sm:h-72">
                        <iframe src="https://www.google.com/maps?q=Zakay+Plaza,+Kizingo+Shopping+Centre,+Taher+Sheikh+Said+Road,+Mombasa,+Kenya&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kanyi J. & Company Advocates head office at Zakay Plaza, Mombasa" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal>
            <TiltCard>
              <Card className="overflow-hidden border-border/60 bg-background/90 shadow-2xl shadow-black/[0.06]">
                <div className="h-1 w-full bg-accent" />

                <CardHeader className="px-6 pb-4 pt-8 sm:px-8">
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Send className="h-5 w-5" />
                  </div>

                  <CardTitle className="font-headline text-2xl text-primary sm:text-3xl">
                    Make an enquiry
                  </CardTitle>

                  <p className="text-sm leading-6 text-muted-foreground">
                    Tell us a little about your matter and our team will get
                    back to you.
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-8 sm:px-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="h-12 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="you@example.com"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+254 7XX XXX XXX"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How can we help?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Briefly tell us about your legal matter..."
                                className="min-h-[150px] resize-none rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Magnetic className="block w-full">
                        <Button
                          type="submit"
                          size="lg"
                          className="h-12 w-full rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Enquiry
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </Magnetic>
                    </form>
                  </Form>

                  {/* WhatsApp alternative */}
                  <div className="mt-6 flex items-center gap-4 rounded-xl border border-border/50 bg-secondary/40 p-4">
                    <Clock3 className="h-5 w-5 shrink-0 text-accent" />

                    <p className="flex-1 text-sm text-muted-foreground">
                      Prefer a quicker conversation?
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      WhatsApp us
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}