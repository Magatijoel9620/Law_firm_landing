/** Firm-profile editorial content assembled only from information already
 * published on the supplied Kanyi website. Legal guidance and new claims are
 * intentionally excluded pending advocate review.
 */
export type InsightArticle = {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  readTime: string;
  icon: "history" | "services" | "people" | "coast" | "contact" | "approach";
  paragraphs: string[];
  bullets?: string[];
  closing: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "a-legal-practice-rooted-on-the-coast",
    category: "Our story",
    eyebrow: "Since 1985 · Mombasa, Kenya",
    title: "A legal practice rooted on the Kenyan coast",
    excerpt: "The firm's story began in Mombasa in 1985. Today, its work reaches clients in Mombasa, Kilifi and Malindi.",
    readTime: "3 min read",
    icon: "history",
    paragraphs: [
      "The story of Kanyi J. & Company Advocates begins in Mombasa in 1985, when the practice was established as J. V. Juma & Company Advocates by Mr. J. V. Juma.",
      "In 1996, following Mr. J. V. Juma's elevation to the High Court, Mr. Joseph Karanja Kanyi took over the practice and it became Kanyi J. & Company Advocates.",
      "Over the years, the practice developed a presence beyond Mombasa, with offices in Kilifi and Malindi. Its work also expanded to include specialised maritime law services, reflecting the importance of shipping and port activity to the region.",
      "Today, the firm describes itself as a full-service coastal legal practice serving corporate and private clients. Its stated approach is grounded in experience, transparency and integrity."
    ],
    closing: "Our history is part of the context behind the firm. If you would like to learn more about the people, services or offices, explore the rest of this website or get in touch with the team."
  },
  {
    slug: "getting-to-know-our-legal-services",
    category: "Our services",
    eyebrow: "A guide to the firm's published practice areas",
    title: "Getting to know our legal services",
    excerpt: "An introduction to the firm's published practice areas, with a few pointers on where to begin.",
    readTime: "4 min read",
    icon: "services",
    paragraphs: [
      "You may know what has happened without knowing which area of law it falls under. A business agreement, a property transaction, a financial dispute or a court matter can all raise questions that are hard to put into legal terms.",
      "Kanyi J. & Company Advocates publishes practice areas covering corporate and commercial law, arbitration, banking and finance, real estate and conveyancing, litigation, insurance, insolvency, taxation, and pensions, trusts and retirement benefits.",
      "Each area has its own page on this website, with a plain-language introduction and a way to send an enquiry. The Legal Service Finder can also help visitors search using everyday descriptions rather than legal terminology.",
      "The right approach will depend on the facts of an individual matter. The website is intended to help you find the relevant service and contact the firm; it does not provide a substitute for advice on your circumstances."
    ],
    bullets: ["Browse the practice areas if you know the service name.", "Try the Legal Service Finder if you are unsure where your matter fits.", "Send a short, non-confidential enquiry so the team can review it."],
    closing: "Start with the issue you are trying to resolve. You do not need to know the precise legal terminology before contacting the firm."
  },
  {
    slug: "the-people-behind-the-practice",
    category: "Our people",
    eyebrow: "Advocates and professional experience",
    title: "The people behind the practice",
    excerpt: "Get to know the advocates featured on the firm's website and the work described in their profiles.",
    readTime: "3 min read",
    icon: "people",
    paragraphs: [
      "The people handling a matter matter. The firm's website introduces its managing partner and associates, with information about their professional backgrounds and the areas of work listed in their profiles.",
      "The profile of J. K. Kanyi describes leadership across corporate and commercial litigation, general litigation, conveyancing and property, criminal litigation, employment and labour relations, banking and commercial law, and alternative dispute resolution.",
      "The associate profiles describe work across general litigation, banking and financial services, employment and labour relations, family law, alternative dispute resolution, insolvency, insurance, taxation, admiralty, company and business law, conveyancing, mergers and acquisitions, data protection and environmental law.",
      "These summaries are drawn from the biographies already published by the firm. For a current matter, the firm will need to consider its nature and requirements before confirming who may be involved."
    ],
    closing: "You can read the advocate profiles on the homepage. For an enquiry, describe the kind of assistance you are seeking and the team can review the appropriate next step."
  },
  {
    slug: "one-firm-three-coastal-offices",
    category: "Our offices",
    eyebrow: "Mombasa · Kilifi · Malindi",
    title: "One firm, three coastal offices",
    excerpt: "Kanyi J. & Company Advocates has offices in Mombasa, Kilifi and Malindi. Here is where to find each one.",
    readTime: "2 min read",
    icon: "coast",
    paragraphs: [
      "Kanyi J. & Company Advocates is headquartered in Mombasa, with branch offices in Kilifi and Malindi. The office directory on this website brings the published addresses, contact details and map directions together in one place.",
      "The Mombasa head office is listed at Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road. The Kilifi branch is listed at Suite No. 7, Kilifi Shopping Arcade. The Malindi branch is listed at Ruby Plaza, Vasco da Gama Road, next to Malindi Law Courts.",
      "If you are making a consultation request, you can select your preferred office in the form. You can also open the individual office page for its published contact details and directions."
    ],
    closing: "Please check the relevant office page before travelling, and contact the firm if you need to confirm any details."
  },
  {
    slug: "making-a-helpful-first-enquiry",
    category: "Getting in touch",
    eyebrow: "A few practical pointers before you contact us",
    title: "Making a helpful first enquiry",
    excerpt: "A first message can be brief. These practical pointers can help the team understand what you need.",
    readTime: "2 min read",
    icon: "contact",
    paragraphs: [
      "If you have not contacted a law firm before, or are unsure which service applies, it can be difficult to know what to say. Start with the issue as you understand it; everyday language is fine.",
      "If you can, mention the general issue, whether it concerns a business or personal matter, the office you would prefer to contact and whether there is an important date you want the team to be aware of. You can use the consultation request form, telephone, email or WhatsApp.",
      "Please keep the first message non-confidential. Do not send identity documents, case files, signed agreements, account details or other sensitive material through the public website form or WhatsApp. If further documents are needed, the firm can advise on an appropriate channel.",
      "A submitted enquiry is not an appointment confirmation and does not by itself establish a lawyer-client relationship. The firm will need to review the request and communicate with you about possible next steps."
    ],
    bullets: ["Tell us what the issue is about in a few sentences.", "Choose the service or office that seems most relevant, if known.", "Avoid including confidential details or attaching sensitive documents.", "Let the firm know if there is a date you would like to flag."],
    closing: "Not sure where to start? Use the Legal Service Finder or contact the firm and explain the issue in your own words."
  },
  {
    slug: "experience-advocacy-and-client-service",
    category: "Our approach",
    eyebrow: "Experience · Advocacy · Integrity",
    title: "Experience, advocacy and a practical approach",
    excerpt: "A look at the experience and dispute-resolution services described in the firm's published profile.",
    readTime: "3 min read",
    icon: "approach",
    paragraphs: [
      "Kanyi's website describes a practice shaped by four decades of legal work on the Kenyan coast. Its firm history highlights experience, transparency and integrity as the values that have guided its work with corporate and private clients.",
      "The firm's published profile also points to litigation, negotiation, mediation and arbitration capability, supported by legal research and practical strategy. These are presented as important parts of the firm's approach to advocacy and dispute resolution.",
      "No two matters are exactly alike. The relevant work and next steps depend on the facts, so general information on this website should not be treated as advice about your own circumstances. Contact the firm to discuss the matter."
    ],
    closing: "If you would like to discuss a matter, send a brief enquiry and the team can review it."
  }
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
