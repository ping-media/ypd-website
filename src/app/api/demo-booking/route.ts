import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/sendMail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      // Step 1 - Organization Details
      organizationName,
      organizationType,
      location,
      website,
      // Step 2 - Contact Person Details
      fullName,
      designation,
      contactNumber,
      countryCode,
      emailAddress,
      // Step 3 - Demo Preferences
      interestedSolutions,
      preferredDemoMode,
      preferredTimeSlots,
      expectedParticipants,
      dataConsent,
      declaration,
    } = body;

    // Format phone number
    const phoneNumber = `${countryCode} ${contactNumber}`;

    // Format selected solutions
    const selectedSolutions = Object.entries(interestedSolutions || {})
      .filter(([_, value]) => value === true)
      .map(([key]) => key)
      .join(", ");

    // Format selected time slots
    const selectedTimeSlots = Object.entries(preferredTimeSlots || {})
      .filter(([_, value]) => value === true)
      .map(([key]) => key)
      .join(", ");

    // Format expected participants
    const selectedParticipants = Object.entries(expectedParticipants || {})
      .filter(([_, value]) => value === true)
      .map(([key]) => key)
      .join(", ");

    await sendMail({
      to: process.env.TO_EMAIL!,
      subject: `New Demo Request: ${organizationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Demo Booking Request
          </h2>
          
          <h3 style="color: #1e40af; margin-top: 30px;">Organization Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Organization Name:</td>
              <td style="padding: 8px 0;">${organizationName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Organization Type:</td>
              <td style="padding: 8px 0;">${organizationType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0;">${location}</td>
            </tr>
            ${website ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Website:</td>
              <td style="padding: 8px 0;"><a href="${website}" target="_blank">${website}</a></td>
            </tr>
            ` : ''}
          </table>

          <h3 style="color: #1e40af; margin-top: 30px;">Contact Person Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Full Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Designation:</td>
              <td style="padding: 8px 0;">${designation}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${emailAddress}">${emailAddress}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phoneNumber}</td>
            </tr>
          </table>

          <h3 style="color: #1e40af; margin-top: 30px;">Demo Preferences</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; vertical-align: top;">Interested Solutions:</td>
              <td style="padding: 8px 0;">${selectedSolutions}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Demo Mode:</td>
              <td style="padding: 8px 0;">${preferredDemoMode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Time Slots:</td>
              <td style="padding: 8px 0;">${selectedTimeSlots}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Expected Participants:</td>
              <td style="padding: 8px 0;">${selectedParticipants}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Data Consent:</td>
              <td style="padding: 8px 0;">${dataConsent ? "✓ Yes" : "✗ No"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Declaration Accepted:</td>
              <td style="padding: 8px 0;">${declaration ? "✓ Yes" : "✗ No"}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              This demo request was submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      replyTo: emailAddress,
    });

    console.log("Demo booking submission:", body);

    return NextResponse.json({ 
      success: true,
      message: "Demo request submitted successfully" 
    });
  } catch (error) {
    console.error("Demo booking error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to submit demo request" 
      }, 
      { status: 500 }
    );
  }
}