import { getEnrollToAdminTemplate } from '@/components/emails/enroll-to-admin-tempalte';
import { getEnrolledUserTemplate } from '@/components/emails/enrolled-user-template';
import { transporter } from './mailer';
import { contactFormEmailTemplate } from '@/components/emails/contact-form-email-template';

export async function sendContactEmails({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const adminEmailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Message - ${subject}`,
      html: contactFormEmailTemplate({ name, email, message }),
    };

    await transporter.sendMail(adminEmailOptions);

    return { success: true };
  } catch (error) {
    console.error('Error sending contact emails:', error);
    return { success: false, error };
  }
}

export async function sendEnrollmentEmails({
  userName,
  userEmail,
  userPhone,
  courseTitle,
  coursePrice,
}: {
  userName: string;
  userEmail: string;
  userPhone: string;
  courseTitle: string;
  coursePrice: number;
}) {
  try {
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Course Enrollment Request - ${courseTitle}`,
      html: getEnrollToAdminTemplate({
        userName,
        userEmail,
        userPhone,
        courseTitle,
        coursePrice,
      }),
    };

    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: 'Enrollment Request Received - InsightEdu',
      html: getEnrolledUserTemplate({
        userName,
        courseTitle,
        coursePrice,
      }),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return { success: true };
  } catch (error) {
    console.error('Error sending enrollment emails:', error);
    return { success: false, error };
  }
}
