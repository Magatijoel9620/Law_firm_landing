import Link from "next/link";
import { ArrowLeft, BookOpen, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { firmContact } from "@/lib/firm-data";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto min-h-[65vh] px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to homepage</Link>
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent"><BookOpen className="h-7 w-7" /></span>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[.28em] text-accent">Knowledge and perspectives</p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">Legal Insights</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Updates and practical perspectives from Kanyi J. & Company Advocates will be published here following review and approval by the firm.</p>
          <div className="mt-9 rounded-2xl border border-border/70 bg-secondary/25 p-7 text-left sm:p-9">
            <h2 className="font-headline text-2xl font-semibold text-primary">Content is being prepared</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">We are establishing an editorial review process so that published material is accurate, current and appropriate. This section will not publish automated or unreviewed legal advice.</p>
            <a href={`mailto:${firmContact.email}?subject=${encodeURIComponent("Legal Insights enquiry")}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><Mail className="h-4 w-4" /> Contact the firm</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
