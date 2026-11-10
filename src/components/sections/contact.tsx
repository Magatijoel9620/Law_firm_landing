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
import Link from "next/link";
import { buildWhatsAppUrl, firmContact, offices } from "@/lib/firm-data";
import { trackConversionEvent } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(120),
  email: z.string().trim().email({
    message: "Please enter a valid email.",
  }).max(180),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(2000),
  website: z.string().optional(),
});

const whatsappUrl = buildWhatsAppUrl({ source: "contact section" });

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
      website: "",
    },
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    setIsSubmitting(true);

    const res = await fetch(firmContact.contactEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      toast({
        title: "Unable to send message",
        description:
          result.error || "Please try again or contact us directly.",
        variant: "destructive",
      });
      return;
    }

    trackConversionEvent("general_enquiry_submitted", { source: "general-contact-form" });
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
        "We couldn't connect to the contact server. Please try again or contact us directly.",
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
                  href={`tel:${firmContact.phoneHref}`}
                  data-conversion-event="phone_clicked"
                  data-conversion-source="contact-section"
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
                        {firmContact.phoneDisplay}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${firmContact.email}`}
                  data-conversion-event="email_clicked"
                  data-conversion-source="contact-section"
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
                        {firmContact.email}
                      </p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  data-conversion-event="whatsapp_clicked"
                  data-conversion-source="contact-section"
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
                        {firmContact.whatsappDisplay}
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
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                          <a href={office.mapUrl} data-conversion-event="office_directions_clicked" data-conversion-office={office.slug} data-conversion-source="contact-section" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">Get directions <ExternalLink className="h-3.5 w-3.5" /></a>
                          <a href={`tel:${office.phoneHref}`} data-conversion-event="phone_clicked" data-conversion-office={office.slug} data-conversion-source="contact-section" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent">Call {office.phoneDisplay} <Phone className="h-3.5 w-3.5" /></a>
                          <Link href={`/offices/${office.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent">Office details <ExternalLink className="h-3.5 w-3.5" /></Link>
                          <a href={buildWhatsAppUrl({ office: office.city, source: "contact office card" })} data-conversion-event="whatsapp_clicked" data-conversion-office={office.slug} data-conversion-source="contact-section" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent">WhatsApp <MessageCircle className="h-3.5 w-3.5" /></a>
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="mt-5 h-64 overflow-hidden rounded-xl sm:h-72">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d248.73558524701153!2d39.67822724322598!3d-4.067361243113952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDQnMDIuNSJTIDM5wrA0MCc0MS41IkU!5e0!3m2!1sen!2ske!4v1791380917245!5m2!1sen!2ske" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Kanyi J. & Company Advocates head office at Zakay Plaza, Mombasa" />
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

                      <p className="text-xs leading-5 text-muted-foreground">
                        Please do not include confidential information, identity documents or case files. Sending an enquiry does not establish a lawyer-client relationship.
                      </p>
                      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                        <label htmlFor="general-enquiry-website">Leave this field empty</label>
                        <input id="general-enquiry-website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                      </div>

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