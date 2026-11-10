import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// This route is retained as a server-side fallback. The live website form
// currently uses the firm's existing PHP contact endpoint.
const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10).max(2000),
  service: z.string().trim().max(120).optional(),
  office: z.string().trim().max(40).optional(),
  preferredDate: z.string().trim().max(10).optional(),
  preferredTime: z.enum(["", "Morning", "Afternoon"]).optional(),
  enquiryType: z.enum(["general", "consultation"]).optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_FORM_TO;
  const sender = process.env.CONTACT_FORM_FROM;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { error: "The server-side contact service is not configured." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the enquiry details and try again." },
        { status: 400 },
      );
    }

    const values = parsed.data;
    const safe = {
      name: escapeHtml(values.name),
      email: escapeHtml(values.email),
      phone: escapeHtml(values.phone || "N/A"),
      message: escapeHtml(values.message).replace(/\r?\n/g, "<br />"),
      service: escapeHtml(values.service || "Not specified"),
      office: escapeHtml(values.office || "Not specified"),
      preferredDate: escapeHtml(values.preferredDate || "Not specified"),
      preferredTime: escapeHtml(values.preferredTime || "No preference"),
      enquiryType: values.enquiryType || "general",
    };

    const resend = new Resend(apiKey);
    const subject = safe.enquiryType === "consultation"
      ? "New Consultation Request — Kanyi J. & Company Advocates"
      : "New Website Enquiry — Kanyi J. & Company Advocates";

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: values.email,
      subject,
      html: `
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Practice area:</strong> ${safe.service}</p>
        <p><strong>Preferred office:</strong> ${safe.office}</p>
        <p><strong>Preferred date:</strong> ${safe.preferredDate}</p>
        <p><strong>Preferred time:</strong> ${safe.preferredTime}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "The enquiry could not be delivered. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process the enquiry right now." },
      { status: 500 },
    );
  }
}
