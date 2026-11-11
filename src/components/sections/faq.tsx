"use client";

import Link from "next/link";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/interactive/InteractionLayer";

const faqs = [
  { question: "I'm not sure which legal service I need. Can you still help?", answer: "Of course. You do not need to know the exact legal terminology before getting in touch. Try the Legal Service Finder using a few everyday words, or send the firm a short description of the issue and the team can review where your enquiry may fit." },
  { question: "How do I request a consultation?", answer: "You can use the consultation request form on this website or contact the firm by telephone, email or WhatsApp. Tell us which service you are enquiring about and your preferred office. The team will review your request and get back to you about the next step." },
  { question: "Is my consultation booked once I submit the form?", answer: "Not yet. The form sends a consultation request for the firm's review. Your preferred date and time are requests only; the firm will contact you to discuss availability and any next steps." },
  { question: "Which offices can I contact?", answer: "The firm lists its head office in Mombasa and branch offices in Kilifi and Malindi. Each office page includes its published address, contact details and a map to help you find the location." },
  { question: "Can I choose which office to contact?", answer: "Yes. You can choose Mombasa, Kilifi or Malindi in the consultation request form, or open an office page to find its published telephone number and directions." },
  { question: "What should I include in my first message?", answer: "A short, clear outline is enough to begin. You may mention what the issue is about, whether it concerns a business or personal matter, the office you would prefer and whether there is an important date the team should know about." },
  { question: "Can I send case files or identity documents through the website?", answer: "Please don't. Avoid sending confidential information, identity documents, case files, signed agreements, account details or other sensitive material through the public website form or WhatsApp. If further documents are needed, the firm can advise on an appropriate channel." },
  { question: "Does sending an enquiry make me a client of the firm?", answer: "No. Sending a message or consultation request does not by itself establish a lawyer-client relationship. The firm will review your enquiry and communicate with you about the appropriate next steps." },
  { question: "Can I receive legal advice through the website?", answer: "The website helps visitors learn about the firm's published services and contact the team. Advice on an individual matter depends on its facts and should be discussed directly with the firm." },
  { question: "Where can I learn more about Kanyi J. & Company Advocates?", answer: "Visit the Legal Insights section for information about the firm's history, published services, advocates, offices and how to make an enquiry. The firm will add legal updates and articles after review by its advocates." },
];

export default function FAQ() {
  return (
    <section id="faqs" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.28em] text-accent"><CircleHelp className="h-4 w-4" /> Helpful information</span>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">A few things you might be wondering.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">If you are thinking of contacting the firm, these answers cover the questions visitors often have about services, offices and first enquiries.</p>
          <Link href="/insights" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Explore Legal Insights <ArrowUpRight className="h-4 w-4" /></Link>
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
