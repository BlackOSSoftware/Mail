type TemplateKey = "server_payment" | "server_account" | "market_data";

export const templateOptions: { key: TemplateKey; label: string }[] = [
  { key: "server_payment", label: "Server Payment Successfully" },
  { key: "server_account", label: "Server Account Created Successfully" },
  { key: "market_data", label: "Market Data Purchase Successfully" },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const logoUrl = baseUrl ? `${baseUrl}/logo.png` : "/logo.png";

export function renderTemplate(template: TemplateKey) {
  switch (template) {
    case "server_payment":
      return {
        subject: "Server Payment Successfully Received",
        html: `
          <div style="margin:0;padding:0;background:#f4f6fb;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f6fb;padding:24px 0;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff;border-radius:12px;overflow:hidden;font-family:Arial, sans-serif;color:#111;">
                    <tr>
                      <td style="background:#1f2937;padding:20px 28px;">
                        <span style="color:#f9fafb;font-size:20px;font-weight:700;letter-spacing:0.3px;">AWS Cloud Service</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:28px;">
                        <h2 style="margin:0 0 12px;color:#0f172a;font-size:22px;">Server Payment Successfully</h2>
                        <p style="margin:0 0 16px;line-height:1.6;color:#111;">
                          We have received your server payment successfully.
                        </p>
                        <p style="margin:0 0 18px;line-height:1.6;color:#111;">
                          Your service for this month is confirmed and active.
                        </p>
                        <div style="margin:18px 0;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                          <p style="margin:0 0 10px;font-weight:600;color:#0f172a;">Payment summary</p>
                          <ul style="margin:0;padding-left:18px;line-height:1.7;color:#111;">
                            <li>This month’s server service payment has been processed successfully</li>
                            <li>Your plan remains active with uninterrupted service</li>
                            <li>You can continue using all included server features without interruption</li>
                          </ul>
                        </div>
                        <div style="margin:18px 0;padding:16px;background:#f1f5f9;border:1px solid #cbd5f5;border-radius:10px;">
                          <p style="margin:0;font-weight:600;color:#0f172a;">Next steps</p>
                          <ul style="margin:10px 0 0;padding-left:18px;line-height:1.7;color:#111;">
                            <li>Review your plan details and usage in the dashboard</li>
                            <li>Update payment methods if needed to avoid interruptions</li>
                            <li>Contact support for plan upgrades or changes</li>
                          </ul>
                        </div>
                        <p style="margin:12px 0 0;line-height:1.6;color:#111;">
                          For your records, keep this email as confirmation of a successful monthly payment.
                        </p>
                        <p style="margin:12px 0 0;line-height:1.6;color:#111;">
                          If you need any assistance, our support team is available to help.
                        </p>
                        <p style="margin-top:24px;">Regards,<br/>Team AWS Cloud Service</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 28px;color:#6b7280;font-size:12px;background:#f9fafb;">
                        This is a system-generated message. Please do not reply.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        `,
      };
    case "server_account":
      return {
        subject: "Server Account Created Successfully",
        html: `
          <div style="margin:0;padding:0;background:#f4f6fb;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f6fb;padding:24px 0;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff;border-radius:12px;overflow:hidden;font-family:Arial, sans-serif;color:#111;">
                    <tr>
                      <td style="background:#1f2937;padding:20px 28px;">
                        <span style="color:#f9fafb;font-size:20px;font-weight:700;letter-spacing:0.3px;">AWS Cloud Service</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:28px;">
                        <h2 style="margin:0 0 12px;color:#0f172a;font-size:22px;">Server Account Created Successfully</h2>
                        <p style="margin:0 0 16px;line-height:1.6;color:#111;">
                          We’re pleased to confirm that your server account has been created and verified.
                        </p>
                        <p style="margin:0 0 18px;line-height:1.6;color:#111;">
                          Your account is now active and ready for immediate use.
                        </p>
                        <div style="margin:18px 0;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                          <p style="margin:0;font-weight:600;color:#0f172a;">Recommended next steps</p>
                          <ul style="margin:10px 0 0;padding-left:18px;line-height:1.7;color:#111;">
                            <li>Sign in to your dashboard to review account details</li>
                            <li>Configure server preferences, security, and access controls</li>
                            <li>Begin deploying and monitoring your workloads</li>
                          </ul>
                        </div>
                        <div style="margin:18px 0;padding:16px;background:#f1f5f9;border:1px solid #cbd5f5;border-radius:10px;">
                          <p style="margin:0;font-weight:600;color:#0f172a;">Security & access</p>
                          <ul style="margin:10px 0 0;padding-left:18px;line-height:1.7;color:#111;">
                            <li>Use a strong password and update it regularly</li>
                            <li>Review login activity and connected devices</li>
                            <li>Grant access only to trusted team members</li>
                          </ul>
                        </div>
                        <p style="margin:12px 0 0;line-height:1.6;color:#111;">
                          We recommend completing your profile and verifying contact details to ensure uninterrupted service updates.
                        </p>
                        <p style="margin:12px 0 0;line-height:1.6;color:#111;">
                          If you need assistance at any stage, our support team is available to help.
                        </p>
                        <p style="margin-top:24px;">Regards,<br/>Team AWS Cloud Service</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 28px;color:#6b7280;font-size:12px;background:#f9fafb;">
                        This is a system-generated message. Please do not reply.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        `,
      };
    case "market_data":
      return {
        subject: "Market Data Purchase Successfully",
        html: `
          <div style="margin:0;padding:0;background:#0b1220;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b1220;padding:36px 0;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="680" style="background:#0f172a;border-radius:20px;overflow:hidden;font-family:'Helvetica Neue', 'Segoe UI', Arial, sans-serif;color:#e2e8f0;">
                    <tr>
                      <td style="padding:28px 36px;background:radial-gradient(circle at top left,#1e293b,#0f172a 55%,#0b1220);">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="left" style="vertical-align:middle;">
                              <img src="${logoUrl}" alt="Aurora Market" width="130" style="display:block;height:auto;border:0;"/>
                            </td>
                            <td align="right" style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">
                              Data Delivery
                            </td>
                          </tr>
                        </table>
                        <h1 style="margin:22px 0 8px;color:#f8fafc;font-size:28px;">Market Data Purchase Successfully</h1>
                        <p style="margin:0;color:#cbd5f5;line-height:1.7;">
                          Your Aurora Market data feed is now active and ready for production use.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:30px 36px;background:#ffffff;color:#0f172a;">
                        <p style="margin:0 0 16px;line-height:1.7;color:#1f2937;">
                          Your purchase has been completed successfully. Below is a quick overview of the
                          segments now live on your account.
                        </p>

                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;">
                          <tr>
                            <td style="padding:18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;">
                              <p style="margin:0 0 10px;font-weight:700;color:#0f172a;">Live market coverage</p>
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="color:#111;font-size:14.5px;line-height:1.7;">
                                <tr>
                                  <td style="padding:6px 0;">• FX majors and minors with streaming bid/ask updates</td>
                                </tr>
                                <tr>
                                  <td style="padding:6px 0;">• COMEX metals pricing including gold, silver, and key contracts</td>
                                </tr>
                                <tr>
                                  <td style="padding:6px 0;">• Cross‑segment coverage for consistent market context</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;">
                          <tr>
                            <td style="padding:18px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:14px;">
                              <p style="margin:0 0 10px;font-weight:700;color:#0f172a;">Recommended actions</p>
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="color:#111;font-size:14.5px;line-height:1.7;">
                                <tr>
                                  <td style="padding:6px 0;">• Open your data console to confirm delivery status</td>
                                </tr>
                                <tr>
                                  <td style="padding:6px 0;">• Validate symbols, timeframes, and delivery protocol</td>
                                </tr>
                                <tr>
                                  <td style="padding:6px 0;">• Contact the Aurora integration desk for onboarding support</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <p style="margin:14px 0 0;line-height:1.7;color:#1f2937;">
                          We’re committed to consistent, accurate pricing and reliable data delivery.
                        </p>

                        <p style="margin-top:26px;">Regards,<br/>Team Aurora Market</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 36px;color:#94a3b8;font-size:12px;background:#0b1220;">
                        This is a system-generated message. Please do not reply.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        `,
      };
    default:
      return {
        subject: "Notification",
        html: `<p>Notification sent.</p>`,
      };
  }
}
