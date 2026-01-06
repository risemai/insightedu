export function sendAuthorShipRequestFormEmail({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); padding: 40px 30px; text-align: center;">
                            <div style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); display: inline-block; padding: 12px 24px; border-radius: 50px; margin-bottom: 16px;">
                                <span style="color: #ffffff; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">✨ NEW AUTHORSHIP REQUEST</span>
                            </div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; line-height: 1.3;">
                                Authorship Position Interest
                            </h1>
                            <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                                A researcher has expressed interest in authorship positions
                            </p>
                        </td>
                    </tr>

                    <!-- Content Section -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Sender Info Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px; border: 1px solid #bfdbfe; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Applicant Details
                                        </p>
                                        
                                        <!-- Name -->
                                        <div style="margin-bottom: 16px;">
                                            <table cellpadding="0" cellspacing="0">
                                                <tr>
                                                   
                                                    <td style="vertical-align: middle;">
                                                        <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 700;">
                                                            ${name}
                                                        </p>
                                                        <p style="margin: 4px 0 0 0; color: #3b82f6; font-size: 14px; font-weight: 500;">
                                                            <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">
                                                                📧 ${email}
                                                            </a>
                                                        </p>
                                                        <p style="margin: 4px 0 0 0; color: #6366f1; font-size: 14px; font-weight: 500;">
                                                            <a href="tel:${phone}" style="color: #6366f1; text-decoration: none;">
                                                                📱 ${phone}
                                                            </a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Message Content -->
                            <div style="margin-bottom: 30px;">
                                <p style="margin: 0 0 12px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Interest Statement
                                </p>
                                <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 20px 24px;">
                                    <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7;">
                                        <strong>${name}</strong> has expressed interest in joining your elite circle of contributing authors and gaining authorship positions on high-impact collaborative research projects.
                                    </p>
                                </div>
                            </div>

                            <!-- Action Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                                            Contact ${name.split(' ')[0]}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Info Banner -->
                            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 10px; padding: 16px 20px; border: 1px solid #fbbf24; margin-top: 30px;">
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="30" style="vertical-align: top; padding-right: 12px;">
                                            <span style="font-size: 24px;">🎓</span>
                                        </td>
                                        <td style="vertical-align: middle;">
                                            <p style="margin: 0; color: #92400e; font-size: 13px; line-height: 1.5;">
                                                <strong>Action Required:</strong> Review the applicant's credentials and respond promptly to maintain engagement with potential collaborators.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">
                                This authorship position request was submitted via your research website
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
