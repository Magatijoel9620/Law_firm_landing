/**
 * Plain-language editorial copy for the nine services already published by
 * the firm. This expands existing website descriptions; it does not add new
 * practice areas or make legal-outcome guarantees.
 */
export type ServiceContent = {
  introduction: string;
  overview: string;
  matters: string[];
  clientNote: string;
  nextStep: string;
};

export const serviceContent: Record<string, ServiceContent> = {
  "corporate-commercial-law": {
    introduction: "Running a business means making decisions, entering agreements and navigating responsibilities. We help businesses and individuals work through the legal side of those decisions.",
    overview: "The firm's published corporate and commercial work includes business structures, company incorporation, partnerships, contracts, share transfers and corporate governance. Whether you are setting up a business or dealing with an existing commercial arrangement, you can get in touch to discuss the support you need.",
    matters: ["Business and company structures", "Company incorporation and partnerships", "Commercial contracts and agreements", "Share transfers and corporate governance"],
    clientNote: "It may help to have a general outline of the business, the people or organisations involved and the decision or agreement you would like to discuss. Please do not send confidential contracts or identity documents through this public form.",
    nextStep: "Tell us a little about the business matter and the team can review your enquiry and identify an appropriate next step.",
  },
  arbitration: {
    introduction: "Not every disagreement needs to begin and end in a courtroom. Arbitration and other forms of alternative dispute resolution can provide a structured way to work towards resolving a dispute.",
    overview: "The firm lists arbitration, mediation and alternative dispute resolution among its areas of practice. The appropriate route depends on the circumstances of the matter, the agreements involved and the parties concerned.",
    matters: ["Arbitration-related matters", "Mediation and settlement discussions", "Alternative dispute resolution", "Disputes where preserving a working relationship matters"],
    clientNote: "A short, non-confidential summary of the disagreement and the stage it has reached can help the firm understand your enquiry. Avoid sharing confidential correspondence or case documents at this stage.",
    nextStep: "Contact the firm to outline the nature of the dispute. The team can consider your enquiry and discuss the appropriate way forward.",
  },
  "banking-finance-law": {
    introduction: "Financial arrangements often involve important documents, obligations and security. Clear legal support can help parties understand the issues involved before taking their next step.",
    overview: "The firm's published banking and finance work includes advising financial institutions and borrowers on securities, loan agreements and related claims. Its attorney profiles also identify experience in banking and financial services matters.",
    matters: ["Loan agreements and lending arrangements", "Financial securities", "Banking and financial services matters", "Claims involving lenders or borrowers"],
    clientNote: "You can begin with a brief description of the type of financial arrangement and the issue you would like to discuss. Do not upload loan documents, account details or other sensitive financial information through this website.",
    nextStep: "Share a brief outline of your banking or finance enquiry so the firm can review it and respond about possible next steps.",
  },
  "real-estate-conveyancing": {
    introduction: "Property decisions are significant. Whether you are considering a sale, purchase, transfer or lease, it helps to understand the legal work involved before moving ahead.",
    overview: "The firm's existing service description covers property sales and purchases, transfers, leases, charges and general property advice. The practice also lists conveyancing and property work among its established areas of experience.",
    matters: ["Property sales and purchases", "Transfers and conveyancing", "Leases and tenancy-related transactions", "Charges and general property advice"],
    clientNote: "When making an enquiry, mention the general type of property transaction, its location and the stage you have reached. Please do not send title documents, identification or signed agreements through the public form.",
    nextStep: "Tell us what you are planning to do with the property and which office you would prefer to contact. The team will review your enquiry.",
  },
  litigation: {
    introduction: "When a disagreement becomes a formal claim or court matter, knowing where to turn can make the next steps feel more manageable.",
    overview: "The firm describes its litigation work as involving tailored strategies for individual disputes. Its published attorney profiles also identify experience in general and commercial litigation, alongside related areas of advocacy.",
    matters: ["General and commercial disputes", "Court representation and litigation matters", "Claims requiring a considered legal strategy", "Disputes connected to the firm's other published practice areas"],
    clientNote: "If a court matter is already underway, you may mention the general nature of the matter and any important upcoming date in your enquiry. Do not send pleadings, evidence or confidential case files through this public website.",
    nextStep: "Contact the firm with a short, non-confidential outline of the matter and the stage it has reached. The team can review your enquiry and advise on the appropriate channel for any further information.",
  },
  "insurance-law": {
    introduction: "Insurance questions can arise when a policy, a claim or a disagreement with an insurer needs closer attention. The first step is explaining the issue and what assistance you are looking for.",
    overview: "The firm lists advice on insurance policies and claims among its insurance law services. Its published attorney profiles also identify insurance law as an area of practice.",
    matters: ["Insurance policy-related enquiries", "Insurance claims", "Disputes involving insurers or policyholders", "Related litigation matters"],
    clientNote: "A general description of the policy type and the issue is enough for an initial enquiry. Please do not share policy numbers, medical details, identity documents or claim files through the public form.",
    nextStep: "Let the firm know what kind of insurance issue you are facing. The team can review the enquiry and communicate the next step.",
  },
  "insolvency-law": {
    introduction: "Financial pressure can affect businesses, creditors and the people connected to them. Getting a clear view of the issue is an important starting point.",
    overview: "The firm's published profile identifies insolvency, restructuring and complex insolvency matters among its areas of work. Its service description also refers to advising on restructurings and insolvencies.",
    matters: ["Business financial distress and restructuring", "Insolvency-related matters", "Liquidation and creditor issues", "Claims connected to distressed businesses"],
    clientNote: "For an initial enquiry, describe the type of organisation or interest involved and the general issue. Avoid sharing account details, creditor schedules or confidential financial records through this public form.",
    nextStep: "Contact the firm with a short overview of the situation. If there are urgent dates or formal notices, you can mention that without attaching the documents.",
  },
  "taxation-services": {
    introduction: "Tax matters can involve compliance questions, assessments or disagreements about how tax rules apply. It is useful to explain the issue clearly and identify the kind of support you are seeking.",
    overview: "The firm's published taxation description focuses on helping clients understand and comply with tax regulations, as well as matters concerning the enforcement of their rights. Its attorney profiles also identify tax work within the practice.",
    matters: ["Tax compliance-related enquiries", "Tax assessments and disputes", "Questions about tax obligations and rights", "Tax matters connected to business or litigation"],
    clientNote: "You can outline the general tax issue and whether it relates to a business or personal matter. Do not include tax PINs, account credentials, returns or confidential financial records in the public enquiry form.",
    nextStep: "Send a brief, non-confidential outline of the taxation matter. The firm can review your enquiry and respond about the appropriate next step.",
  },
  "pension-trusts-retirement-benefits": {
    introduction: "Pension and retirement-benefit matters can affect individuals, trustees, employers and schemes. If you need legal assistance in this area, the firm can receive an initial enquiry and review what support may be appropriate.",
    overview: "The firm lists pension, trusts and retirement benefits as a practice area and notes experience defending claims arising under the Retirement Benefits Act.",
    matters: ["Pension and retirement-benefit matters", "Trust-related enquiries", "Retirement benefits scheme issues", "Claims arising under the Retirement Benefits Act"],
    clientNote: "For an initial enquiry, explain your general connection to the matter (for example, as a member, trustee or employer) and the issue you would like to discuss. Do not include membership numbers or personal financial records.",
    nextStep: "Contact the firm with a short summary of the issue. The team can review your enquiry and advise how to proceed with any further information.",
  },
};
