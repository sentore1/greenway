import { NextRequest, NextResponse } from "next/server";

// A fixed session token — not the password itself
const SESSION_TOKEN = "gw-admin-session-ok";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD is not set in .env.local");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}
