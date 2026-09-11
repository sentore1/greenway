// Quick SMTP test — run with: node scripts/test-smtp.mjs
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { resolve } from "path";

// Manually parse .env.local (no dotenv dependency needed)
const envPath = resolve(process.cwd(), ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .map((l) => l.split("=").map((p) => p.trim()))
    .filter(([k]) => k)
    .map(([k, ...v]) => [k, v.join("=")])
);

const SMTP_USER = env.SMTP_USER;
const SMTP_PASS = env.SMTP_PASS;
const CONTACT_TO = env.CONTACT_TO ?? SMTP_USER;

console.log("SMTP_USER :", SMTP_USER);
console.log("CONTACT_TO:", CONTACT_TO);
console.log("Connecting to smtp.gmail.com:465 ...\n");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

try {
  await transporter.verify();
  console.log("✓ SMTP connection verified — credentials are valid.\n");

  const info = await transporter.sendMail({
    from: `"Green Way Safaris Test" <${SMTP_USER}>`,
    to: CONTACT_TO,
    subject: "✓ SMTP test — Green Way Safaris",
    html: `
      <div style="font-family:sans-serif;max-width:480px">
        <h2 style="font-weight:300">SMTP test passed</h2>
        <p style="font-size:14px;color:#555">
          The contact form on greenwaysafaris.com is correctly configured
          and will deliver enquiries to this address.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:24px">
          Sent by scripts/test-smtp.mjs
        </p>
      </div>
    `,
  });

  console.log("✓ Test email sent!");
  console.log("  Message ID:", info.messageId);
  console.log("  Accepted  :", info.accepted.join(", "));
} catch (err) {
  console.error("✗ SMTP error:", err.message);
  if (err.code === "EAUTH") {
    console.error("\n  → Authentication failed. Check SMTP_USER and SMTP_PASS in .env.local.");
    console.error("  → Make sure you generated a Gmail App Password (not your regular password).");
  }
  process.exit(1);
}
