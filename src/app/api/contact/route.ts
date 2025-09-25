import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/sendMail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message, newsletter } = body;

    await sendMail({
      to: process.env.TO_EMAIL!,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName || ""}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
        <p><b>Newsletter Signup:</b> ${newsletter ? "Yes" : "No"}</p>
      `,
      replyTo: email, // so you can reply directly to user
    });

    console.log("Form submission:", body); 

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
