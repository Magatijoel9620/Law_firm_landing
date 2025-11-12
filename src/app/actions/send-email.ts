'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { toast } from '@/hooks/use-toast';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function sendEmail(formData: unknown) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, phone, message } = parsedData.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kanyi J. Advocates <onboarding@resend.dev>', // Should be a configured domain in Resend
      to: ['info@kanyij-advocates.co.ke'], // Your destination email
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: 'Failed to send email.' };
    }

    toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
    });

    return { success: true };
  } catch (error) {
    console.error('Email Sending Error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
