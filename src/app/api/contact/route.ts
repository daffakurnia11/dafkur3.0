import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: secret || "",
        response: token,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { success, score } = response.data;
    return success && score >= 0.5;
  } catch (err) {
    console.error("reCAPTCHA verification failed:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const { token, ...data } = await request.json();

  if (!data.name || !data.email || !data.subject || !data.body || !token) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const isHuman = await verifyRecaptcha(token);

  if (!isHuman) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed. Bot suspected." },
      { status: 403 }
    );
  }

  try {
    const message = await prisma.message.create({ data });

    return NextResponse.json({ success: true, message });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. (Server Error)" },
      { status: 500 }
    );
  }
}
