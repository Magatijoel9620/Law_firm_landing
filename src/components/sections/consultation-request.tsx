"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Loader2, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/interactive/InteractionLayer";
import { firmContact, offices, practiceAreas } from "@/lib/firm-data";
import { trackConversionEvent } from "@/lib/analytics";

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(180),
  phone: z.string().trim().max(40).optional(),
  service: z.string().min(1, "Please select the service you need help with."),
  office: z.string().min(1, "Please select your preferred office."),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a short description of your enquiry.")
    .max(2000),
  website: z.string().optional(),
});

type ConsultationValues = z.infer<typeof consultationSchema>;

const endpoint = firmContact.contactEndpoint;

export default function ConsultationRequest() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedStart = useRef(false);
  const form = useForm<ConsultationValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      office: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get("service");
    const requestedOffice = params.get("office");
    if (requestedService) {
      const match = practiceAreas.find(
        (area) => area.slug === requestedService,
      );
      if (match)
        form.setValue("service", match.title, { shouldValidate: true });
    }
    if (
      requestedOffice &&
      offices.some((office) => office.slug === requestedOffice)
    ) {
      form.setValue("office", requestedOffice, { shouldValidate: true });
    }
    if (window.location.hash === "#consultation") {
      window.requestAnimationFrame(() => {
        document
          .getElementById("consultation")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [form]);

  async function onSubmit(values: ConsultationValues) {
    try {
      setIsSubmitting(true);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, enquiryType: "consultation" }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        toast({
          title: "Unable to submit request",
          description:
            result.error || "Please try again or contact the firm directly.",
          variant: "destructive",
        });
        return;
      }

      trackConversionEvent("consultation_request_submitted", {
        service: values.service,
        office: values.office,
        source: "consultation-form",
      });
      toast({
        title: "Consultation request received",
        description:
          "The firm will review your request and contact you. This is not an appointment confirmation.",
      });
      form.reset();
      hasTrackedStart.current = false;
    } catch {
      toast({
        title: "Connection error",
        description:
          "We could not connect to the enquiry service. Please try again or contact the firm directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-secondary/25 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="container relative mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-10">
        <Reveal className="pt-4">
          <span className="text-xs font-semibold uppercase tracking-[.28em] text-accent">
            Take the next step
          </span>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Request a consultation.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Tell us what you would like help with. A short outline and your
            preferred office will give the team a useful starting point.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
            <p className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{" "}
              Your preferred date and time are requests only, not confirmed
              bookings.
            </p>
            <p className="rounded-xl border border-border/70 bg-background/70 p-4">
              Please do not include confidential information, identity numbers,
              case documents or sensitive personal details in this public form.
              Submitting an enquiry does not establish a lawyer-client
              relationship.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Card className="overflow-hidden border-border/70 bg-background/90 shadow-2xl shadow-black/[0.06]">
            <div className="h-1 w-full bg-accent" />
            <CardHeader className="px-6 pb-4 pt-7 sm:px-8">
              <CardTitle className="font-headline text-2xl text-primary">
                Consultation details
              </CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">
                Share a few details so the team can review your request. Fields
                marked with an asterisk are required.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-8 sm:px-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  onFocusCapture={() => {
                    if (!hasTrackedStart.current) {
                      hasTrackedStart.current = true;
                      trackConversionEvent("consultation_form_started", {
                        source: "homepage-consultation",
                      });
                    }
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name *</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="name"
                              placeholder="Your full name"
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              autoComplete="email"
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
                          <FormLabel>Phone number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              autoComplete="tel"
                              placeholder="+254 7XX XXX XXX"
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
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Legal service *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <option value="">Select a practice area</option>
                              {practiceAreas.map((area) => (
                                <option key={area.slug} value={area.title}>
                                  {area.title}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="office"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred office *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <option value="">Select an office</option>
                              {offices.map((office) => (
                                <option key={office.slug} value={office.slug}>
                                  {office.city} — {office.role}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred date (optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
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
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred time (optional)</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <option value="">No preference</option>
                              <option value="Morning">Morning</option>
                              <option value="Afternoon">Afternoon</option>
                            </select>
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
                        <FormLabel>What would you like help with? *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a short, non-confidential summary of the assistance you are seeking..."
                            className="min-h-[130px] resize-y rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                  >
                    <label htmlFor="consultation-website">
                      Leave this field empty
                    </label>
                    <input
                      id="consultation-website"
                      tabIndex={-1}
                      autoComplete="off"
                      {...form.register("website")}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting request...
                      </>
                    ) : (
                      <>
                        Send consultation request{" "}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
