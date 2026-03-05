import nodemailer from "nodemailer";

type SenderKey = "primary" | "secondary";

function required(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set in .env.local`);
  }
  return value;
}

function getSenderConfig(sender: SenderKey) {
  if (sender === "primary") {
    return {
      host: required("SMTP_PRIMARY_HOST"),
      port: Number(required("SMTP_PRIMARY_PORT")),
      user: required("SMTP_PRIMARY_USER"),
      pass: required("SMTP_PRIMARY_PASS"),
      from: required("SMTP_PRIMARY_FROM"),
    };
  }

  return {
    host: required("SMTP_SECONDARY_HOST"),
    port: Number(required("SMTP_SECONDARY_PORT")),
    user: required("SMTP_SECONDARY_USER"),
    pass: required("SMTP_SECONDARY_PASS"),
    from: required("SMTP_SECONDARY_FROM"),
  };
}

export async function sendMail(options: {
  sender: SenderKey;
  to: string;
  subject: string;
  html: string;
}) {
  const config = getSenderConfig(options.sender);
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return transporter.sendMail({
    from: config.from,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
}
