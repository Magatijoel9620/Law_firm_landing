"use client";

import Link from "next/link";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/interactive/InteractionLayer";

const faqs = [
  {
    question: "How do I request a consultation?",
    answer: "Use the consultation request form on this website or contact the firm by telephone, email or WhatsApp. A submitted request is reviewed by the firm and is not an automatically confirmed appointment.",
  },
  {
    question: "Which offices can I contact?",
    answer: "Kanyi J. & Company Advocates lists its head office in Mombasa and branch offices in Kilifi and Malindi. Visit the office directory for the published addresses and directions.",
  },
  {
    question: "Can I send case files or identity documents through the website?",
    answer: "No. Please do not submit confidential information, identity documents, case files or other sensitive materials through the public website forms or WhatsApp. The firm can advise on an appropriate secure channel if one is required.",
  },
  {
    question: "Does sending an enquiry make me a client of the firm?",
    answer: "No. Sending a message or consultation request does not by itself establish a lawyer-client relationship. The firm will review your enquiry and communicate the appropriate next steps.",
  },
  {
    question: "Can I receive legal advice through the website?",
    answer: "The website helps visitors learn about the firm's published services and contact the team. Legal advice depends on the circumstances of an individual matter and should be discussed directly with the firm.",
  },
  {
    question: "How do I find the right legal service?",
    answer: "Use the Legal Service Finder to search by a service name or a general description of the matter. If you are unsure which practice area applies, contact the firm and the team can direct your enquiry.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.28em] text-accent"><CircleHelp className="h-4 w-4" /> Helpful information</span>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Frequently asked questions.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">A few practical answers to help you contact the firm and understand how website enquiries are handled.</p>
          <Link href="/insights" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Visit Legal Insights <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-border/70 bg-card px-5 sm:px-7">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-5 text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
