'use server';

import { sendEnrollmentEmails } from '@/lib/email-service';

type enrollCourse = {
  name: string;
  email: string;
  phone: string;
  courseTitle: string;
  coursePrice: number;
};

export const enrollCourse = async (course: enrollCourse) => {
  try {
    const result = await sendEnrollmentEmails({
      userName: course.name,
      userEmail: course.email,
      userPhone: course.phone,
      courseTitle: course.courseTitle,
      coursePrice: course.coursePrice,
    });
    return result;
  } catch {
    return {
      success: false,
      message: 'Enrollment failed',
    };
  }
};
