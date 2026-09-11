import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, when, dream } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Gmail SMTP transporter — uses an App Password (not your account password)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.SMTP_USER,   // your Gmail address
      pass: process.env.SMTP_PASS,   // Gmail App Password (16-char)
    },
  });

  try {
    // 1. Notify the Green Way team
    await transporter.sendMail({
      from: `"Green Way Safaris" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#333">
          <h2 style="font-weight:300;border-bottom:1px solid #eee;padding-bottom:12px">
            New Trip Enquiry
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr>
              <td style="padding:8px 0;width:140px;color:#999;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Name</td>
              <td style="padding:8px 0;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#999;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Email</td>
              <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#999;font-size:12px;letter-spacing:.1em;text-transform:uppercase">When</td>
              <td style="padding:8px 0;font-size:14px">${when || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;vertical-align:top;color:#999;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Dream</td>
              <td style="padding:8px 0;font-size:14px;white-space:pre-wrap">${dream || "—"}</td>
            </tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#aaa">
            Sent from greenwaysafaris.com
          </p>
        </div>
      `,
    });

    // 2. Auto-reply to the enquirer
    await transporter.sendMail({
      from: `"Green Way Safaris" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your enquiry — Green Way Safaris",
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#333">
          <h2 style="font-weight:300">Thank you, ${name}.</h2>
          <p style="font-size:14px;line-height:1.7;color:#555">
            We've received your enquiry and Gadi or Mussa will be in touch with you personally, usually within 24 hours.
          </p>
          <p style="font-size:14px;line-height:1.7;color:#555">
            In the meantime, feel free to reply to this email or reach us on WhatsApp at
            <a href="https://wa.me/250788694331">+250 788 694 331</a>.
          </p>
          <p style="margin-top:32px;font-size:13px;color:#888;font-style:italic">
            — The Green Way Safaris team
          </p>
          <p style="margin-top:24px;font-size:11px;color:#bbb">
            Green Way Safaris · Kigali, Rwanda · hello@greenwaysafaris.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
