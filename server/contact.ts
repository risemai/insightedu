'use server';

import { sendContactEmails } from '@/lib/email-service';

type ContactType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const contactEmail = async (contact: ContactType) => {
  try {
    const result = await sendContactEmails({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
    });
    return result;
  } catch {
    return {
      success: false,
      message: 'Contact message failed',
    };
  }
};
