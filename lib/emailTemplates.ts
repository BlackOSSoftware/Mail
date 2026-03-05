type TemplateKey = "server_payment" | "server_account" | "market_data";

export const templateOptions: { key: TemplateKey; label: string }[] = [
  { key: "server_payment", label: "Server Payment Successfully" },
  { key: "server_account", label: "Server Account Created Successfully" },
  { key: "market_data", label: "Market Data Purchase Successfully" },
];

export function renderTemplate(template: TemplateKey) {
  switch (template) {
    case "server_payment":
      return {
        subject: "Server Payment Successfully Received",
        html: `
          <div style="font-family: Arial, sans-serif; color:#111; line-height:1.6;">
            <h2 style="color:#0f172a;">Server Payment Successfully</h2>
            <p>We have received your server payment successfully.</p>
            <p>Your services are active and ready to use.</p>
            <p style="margin-top:24px;">Regards,<br/>Team AWS Cloud Service</p>
          </div>
        `,
      };
    case "server_account":
      return {
        subject: "Server Account Created Successfully",
        html: `
          <div style="font-family: Arial, sans-serif; color:#111; line-height:1.6;">
            <h2 style="color:#0f172a;">Server Account Created Successfully</h2>
            <p>Your server account has been created successfully.</p>
            <p>You can now login and manage your server.</p>
            <p style="margin-top:24px;">Regards,<br/>Team AWS Cloud Service</p>
          </div>
        `,
      };
    case "market_data":
      return {
        subject: "Market Data Purchase Successfully",
        html: `
          <div style="font-family: Arial, sans-serif; color:#111; line-height:1.6;">
            <h2 style="color:#0f172a;">Market Data Purchase Successfully</h2>
            <p>Your market data purchase has been completed successfully.</p>
            <p>Your data is now available in your account.</p>
            <p style="margin-top:24px;">Regards,<br/>Team Aurora Market</p>
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
