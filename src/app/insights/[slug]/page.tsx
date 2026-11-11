import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { insightArticles } from "@/lib/editorial-content";
import { Reveal } from "@/components/interactive/InteractionLayer";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

type InsightArticlePageProps = { params: Promise<{ slug: string }> };

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 sm:pt-40">
        <section className="border-b border-border/60 bg-secondary/25 py-14 sm:py-20">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to Legal Insights</Link>
            <Reveal className="mt-10 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-accent"><BookOpen className="h-4 w-4" /> {article.category}</span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[.2em] text-accent">{article.eyebrow}</p>
              <h1 className="mt-4 font-headline text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">{article.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{article.excerpt}</p>
              <p className="mt-5 text-xs text-muted-foreground">{article.readTime} · Kanyi J. &amp; Company Advocates</p>
            </Reveal>
          </div>
        </section>
        <section className="container mx-auto grid gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,760px)_300px] lg:gap-20 lg:px-10">
          <article className="max-w-3xl">
            <div className="space-y-7">
              {article.paragraphs.map((paragraph, index) => <Reveal key={index} delay={Math.min(index * 0.04, 0.16)}><p className="text-base leading-8 text-muted-foreground sm:text-lg">{paragraph}</p></Reveal>)}
            </div>
            {article.bullets && (
              <div className="mt-10 rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
                <h2 className="font-headline text-2xl font-semibold text-primary">A few things to keep in mind</h2>
                <ul className="mt-6 space-y-4">
                  {article.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />{bullet}</li>)}
                </ul>
              </div>
            )}
            <p className="mt-10 border-l-2 border-accent pl-5 text-base leading-8 text-primary/85">{article.closing}</p>
            <div className="mt-10 rounded-2xl border border-border/70 bg-secondary/25 p-6">
              <div className="flex items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><h2 className="font-semibold text-primary">Please note</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">This page shares general information about the firm and its published services. It is not legal advice and should not be relied on to make decisions about an individual matter. Please contact the firm for advice on your circumstances.</p></div></div>
            </div>
          </article>
          <aside className="h-fit space-y-5 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-border/70 bg-primary p-6 text-primary-foreground">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent"><MessageCircle className="h-5 w-5" /></span>
              <h2 className="mt-5 font-headline text-2xl font-semibold">Would you like to talk?</h2>
              <p className="mt-3 text-sm leading-7 text-primary-foreground/70">If you have a question about the firm's services, send a short enquiry and the team can point you in the right direction.</p>
              <Link href="/#consultation" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">Contact the firm <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"><ArrowLeft className="h-4 w-4" /> More from Legal Insights</Link>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
