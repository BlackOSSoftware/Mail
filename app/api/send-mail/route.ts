import { NextResponse } from "next/server";
import { renderTemplate, templateOptions } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/mailer";

type SenderKey = "primary" | "secondary";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const sender = body?.sender as SenderKey | undefined;
  const to = body?.to?.toString();
  const template = body?.template?.toString();

  const validSender = sender === "primary" || sender === "secondary";
  const validTemplate = templateOptions.some((t) => t.key === template);

  if (!validSender || !to || !validTemplate) {
    return NextResponse.json(
      { message: "Invalid sender, recipient, or template." },
      { status: 400 }
    );
  }

  const { subject, html } = renderTemplate(template);

  await sendMail({
    sender,
    to,
    subject,
    html,
  });

  return NextResponse.json({ ok: true });
}
