export function getEnrollToAdminTemplate({
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
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Course Enrollment Request</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
    .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎓 New Course Enrollment Request</h1>
      <p>A student wants to enroll in a course</p>
    </div>

    <div class="content">
      <h2>Student Information</h2>
      <div class="info-box">
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
      </div>

      <h2>Course Details</h2>
      <div class="info-box">
        <p><strong>Course:</strong> ${courseTitle}</p>
        <p><strong>Price:</strong> ৳${coursePrice.toLocaleString()}</p>
      </div>

      <p>Please contact the student within 24 hours to complete the enrollment process and provide payment instructions.</p>

      <a href="mailto:${userEmail}" class="button">Contact Student</a>

      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Verify student information</li>
        <li>Send payment instructions</li>
        <li>Provide course access details</li>
        <li>Schedule orientation if needed</li>
      </ul>
    </div>

    <div class="footer">
      <p>This email was sent from InsightEdu enrollment system</p>
      <p>&copy; 2025 InsightEdu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}
