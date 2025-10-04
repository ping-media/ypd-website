import { transporter } from "./transporter";

interface Attachment {
  filename: string;
  content: Buffer;
}

export async function sendMail(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string; // optional, user email
  attachments?: Attachment[];
}) {
  return transporter.sendMail({
    from: `"Youth Pulse Digital" <${process.env.SMTP_FROM}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    replyTo: options.replyTo,
    attachments: options.attachments,
  });
}
