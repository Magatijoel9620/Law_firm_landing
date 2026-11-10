import {
  Banknote,
  Briefcase,
  Building,
  FileText,
  GitBranch,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Canonical public-facing firm information.
 * Keep service, office and contact details here so every page and conversion
 * flow uses the same verified source rather than maintaining duplicate lists.
 */
export const firmContact = {
  name: "Kanyi J. & Company Advocates",
  email: "info@kanyij-advocates.co.ke",
  phoneDisplay: "+254 720 988571",
  phoneHref: "+254720988571",
  whatsappNumber: "254735830584",
  whatsappDisplay: "+254 735 830584",
  contactEndpoint: "https://form.kanyij-advocates.co.ke/contact.php",
} as const;

export type WhatsAppContext = {
  service?: string;
  office?: string;
  source?: string;
};

export function buildWhatsAppUrl(context: WhatsAppContext = {}) {
  const details = [
    context.service ? `Service: ${context.service}` : undefined,
    context.office ? `Preferred office: ${context.office}` : undefined,
    context.source ? `Website section: ${context.source}` : undefined,
  ].filter((value): value is string => Boolean(value));

  const message = [
    `Hello ${firmContact.name}, I would like to make an enquiry.`,
    ...(details.length ? ["", ...details] : []),
  ].join("\n");

  return `https://wa.me/${firmContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
  finderPrompt: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    description:
      "Expert advice on business structures, contracts, and corporate governance. We handle incorporation, partnerships, share transfers, and more.",
    icon: Briefcase,
    keywords: ["business", "company", "contracts", "incorporation", "partnership", "share transfer", "governance"],
    finderPrompt: "I need help with a business, company, contract or commercial transaction.",
  },
  {
    slug: "arbitration",
    title: "Arbitration",
    description:
      "Focused on alternative dispute resolution to expedite conflict resolution while preserving important relationships.",
    icon: Users,
    keywords: ["dispute", "arbitration", "alternative dispute resolution", "mediation", "settlement"],
    finderPrompt: "I need help resolving a dispute outside or alongside court proceedings.",
  },
  {
    slug: "banking-finance-law",
    title: "Banking & Finance Law",
    description:
      "Advising financial institutions and borrowers on securities, loan agreements, and defending against claims with great success.",
    icon: Banknote,
    keywords: ["bank", "loan", "finance", "security", "lending", "borrower", "financial institution"],
    finderPrompt: "I need help with a loan, banking matter, lending or financial security.",
  },
  {
    slug: "real-estate-conveyancing",
    title: "Real Estate & Conveyancing",
    description:
      "Handling all aspects of property transactions, including sales, transfers, leases, charges, and general property advice.",
    icon: Building,
    keywords: ["property", "land", "sale", "purchase", "transfer", "lease", "conveyancing", "charge"],
    finderPrompt: "I need assistance buying, selling, transferring, leasing or dealing with property.",
  },
  {
    slug: "litigation",
    title: "Litigation",
    description:
      "Our effective litigation team uses experience and trusted judgment to develop customized strategies for every dispute.",
    icon: Landmark,
    keywords: ["court", "case", "lawsuit", "claim", "litigation", "representation", "dispute"],
    finderPrompt: "I need legal representation or assistance with a court matter or claim.",
  },
  {
    slug: "insurance-law",
    title: "Insurance Law",
    description:
      "The firm has considerable experience in insurance law, including providing advice on insurance policies and claims.",
    icon: ShieldCheck,
    keywords: ["insurance", "policy", "claim", "coverage", "insurer", "compensation"],
    finderPrompt: "I need assistance with an insurance policy, claim or dispute.",
  },
  {
    slug: "insolvency-law",
    title: "Insolvency Law",
    description:
      "Our team has advised on some of the largest and most complicated restructurings and insolvencies in the country.",
    icon: GitBranch,
    keywords: ["insolvency", "restructuring", "liquidation", "creditor", "debt", "business distress"],
    finderPrompt: "I need help with insolvency, restructuring, liquidation or creditor matters.",
  },
  {
    slug: "taxation-services",
    title: "Taxation Services",
    description:
      "Committed to improving client comprehension and compliance with tax regulations, and the enforcement of their rights.",
    icon: FileText,
    keywords: ["tax", "taxation", "compliance", "tax dispute", "revenue", "assessment"],
    finderPrompt: "I need advice or representation concerning taxation or a tax dispute.",
  },
  {
    slug: "pension-trusts-retirement-benefits",
    title: "Pension, Trusts & Retirement Benefits",
    description:
      "The Firm has successfully defended claims arising under the Retirement Benefits Act.",
    icon: PiggyBank,
    keywords: ["pension", "trust", "retirement", "benefits", "scheme", "retirement benefits act"],
    finderPrompt: "I need assistance with a pension, trust or retirement benefits matter.",
  },
];

export type FirmOffice = {
  slug: string;
  label: string;
  city: string;
  role: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  mapQuery: string;
  mapUrl: string;
};

export const offices: FirmOffice[] = [
  {
    slug: "mombasa",
    label: "Mombasa · Head Office",
    city: "Mombasa",
    role: "Head Office",
    address:
      "Zakay Plaza, 2nd Floor, Kizingo Shopping Centre, Taher Sheikh Said Road, P.O. Box 99426-80107, Mombasa.",
    phone: "254-41-2314937 / 2314886 · 0720 988571 · 0735 830584",
    phoneDisplay: "0720 988571",
    phoneHref: "+254720988571",
    email: "jkanyi@swiftmombasa.com · info@kanyij-advocates.co.ke",
    mapQuery:
      "Zakay Plaza, Kizingo Shopping Centre, Taher Sheikh Said Road, Mombasa, Kenya",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Zakay+Plaza%2C+Kizingo+Shopping+Centre%2C+Taher+Sheikh+Said+Road%2C+Mombasa%2C+Kenya",
  },
  {
    slug: "kilifi",
    label: "Kilifi · Branch",
    city: "Kilifi",
    role: "Branch Office",
    address: "Suite No. 7, Kilifi Shopping Arcade · P.O. Box 855, Kilifi.",
    phone: "020-2021788 · 0735 830575 · 0723 963919",
    phoneDisplay: "0735 830575",
    phoneHref: "+254735830575",
    email: "jkanyi@swiftmombasa.com",
    mapQuery: "Kilifi Shopping Arcade, Kilifi, Kenya",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kilifi+Shopping+Arcade%2C+Kilifi%2C+Kenya",
  },
  {
    slug: "malindi",
    label: "Malindi · Branch",
    city: "Malindi",
    role: "Branch Office",
    address:
      "Ruby Plaza, Vasco da Gama Road, next to Malindi Law Courts, Malindi.",
    phone: "0703 937485",
    phoneDisplay: "0703 937485",
    phoneHref: "+254703937485",
    email: "kanyijmld@gmail.com",
    mapQuery: "Ruby Plaza, Vasco da Gama Road, Malindi, Kenya",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ruby+Plaza%2C+Vasco+da+Gama+Road%2C+Malindi%2C+Kenya",
  },
];
