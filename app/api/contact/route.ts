import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    // Validate required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email configuration missing. Please set EMAIL_USER and EMAIL_PASSWORD in .env");
      return new NextResponse("Email service not configured", {
        status: 500,
      });
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
      },
    });

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; background-color: #fafafa;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Email:</td>
                <td style="padding: 10px; background-color: #fafafa;">
                  <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${social ? `
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Social:</td>
                <td style="padding: 10px; background-color: #fafafa;">
                  <a href="${social}" target="_blank" style="color: #4CAF50; text-decoration: none;">${social}</a>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #888; font-size: 12px;">
            <p>This email was sent from your portfolio contact form</p>
            <p>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${social ? `Social: ${social}` : ''}

Message:
${message}

---
Received: ${new Date().toLocaleString()}
      `,
    };

    // Send email to you
    await transporter.sendMail(mailToYou);

    // Optional: Submit to Google Form as backup (if configured)
    const formLink = process.env.GOOGLE_FORM_LINK;
    if (formLink) {
      const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
      const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
      const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
      const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

      try {
        await fetch(
          `${formLink}/formResponse?${fieldIdName}=${encodeURIComponent(name)}&${fieldIdEmail}=${encodeURIComponent(email)}&${fieldIdMessage}=${encodeURIComponent(message)}&${fieldIdSocial}=${encodeURIComponent(social || '')}`
        );
      } catch (gformError) {
        console.log("Google Form submission failed (optional):", gformError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!"
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new NextResponse("Failed to send email. Please try again later.", {
      status: 500
    });
  }
}
