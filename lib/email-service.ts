import { getEnrollToAdminTemplate } from '@/components/emails/enroll-to-admin-tempalte';
import { getEnrolledUserTemplate } from '@/components/emails/enrolled-user-template';
import { transporter } from './mailer';

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
      subject: 'Enrollment Request Received - Insight Edu',
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
