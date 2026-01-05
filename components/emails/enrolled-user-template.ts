export function getEnrolledUserTemplate({
  userName,
  courseTitle,
  coursePrice,
}: {
  userName: string;
  courseTitle: string;
  coursePrice: number;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enrollment Request Received - InsightEdu</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .success-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745; }
    .info-box { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3; }
    .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #ffc107; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Enrollment Request Received!</h1>
      <p>Welcome to InsightEdu</p>
    </div>

    <div class="content">
      <div class="success-box">
        <h2>Hi ${userName},</h2>
        <p>Thank you for your interest in our courses! We've received your enrollment request and our team is excited to help you get started.</p>
      </div>

      <h3>Course Details</h3>
      <div class="info-box">
        <p><strong>Course:</strong> ${courseTitle}</p>
        <p><strong>Price:</strong> ৳${coursePrice.toLocaleString()}</p>
      </div>

      <div class="highlight">
        <h4>⏰ What happens next?</h4>
        <p>Our admin team will contact you within <strong>24 hours</strong> to:</p>
        <ul>
          <li>Verify your information</li>
          <li>Provide payment instructions</li>
          <li>Give you access to the course materials</li>
          <li>Answer any questions you might have</li>
        </ul>
      </div>

      <p>If you have any urgent questions, feel free to reach out to us at <a href="mailto:support@insightedu.com">support@insightedu.com</a></p>

      <div class="highlight">
        <p><strong>💡 Pro Tip:</strong> While you wait, you can explore our other courses or visit our blog for learning tips!</p>
      </div>

      <p>We're looking forward to having you as part of the InsightEdu community!</p>

      <p>Best regards,<br>The InsightEdu Team</p>
    </div>

    <div class="footer">
      <p>This email was sent to you because you requested enrollment at InsightEdu</p>
      <p>&copy; 2025 InsightEdu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}
