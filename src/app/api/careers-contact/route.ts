import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/sendMail";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const countryCode = formData.get("countryCode") as string;
    const phone = formData.get("phone") as string;
    const description = formData.get("description") as string;
    const resume = formData.get("resume") as File | null;

    // Format phone number
    const phoneNumber = `${countryCode} ${phone}`;

    // Prepare email attachments
    const attachments = [];
    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    await sendMail({
      to: process.env.TO_EMAIL!,
      subject: `New Career Application: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Career Application Submission
          </h2>
          
          <h3 style="color: #1e40af; margin-top: 30px;">Applicant Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phoneNumber}</td>
            </tr>
            ${description ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Description:</td>
              <td style="padding: 8px 0;">${description.replace(/\n/g, '<br>')}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Resume:</td>
              <td style="padding: 8px 0;">${resume ? `✓ ${resume.name} (${(resume.size / 1024).toFixed(1)} KB)` : 'Not provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              This application was submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Career application submission:", {
      name,
      email,
      phone: phoneNumber,
      resumeName: resume?.name,
    });

    return NextResponse.json({ 
      success: true,
      message: "Application submitted successfully" 
    });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to submit application" 
      }, 
      { status: 500 }
    );
  }
}