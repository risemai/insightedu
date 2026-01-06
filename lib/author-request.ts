import { sendAuthorShipRequestFormEmail } from '@/components/emails';
import { transporter } from './mailer';

export async function sendAuthorShipRequest({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  try {
    const adminEmailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Authorship Request`,
      html: sendAuthorShipRequestFormEmail({ name, email, phone }),
    };

    await transporter.sendMail(adminEmailOptions);

    return { success: true };
  } catch (error) {
    console.error('Error sending contact emails:', error);
    return { success: false, error };
  }
}
