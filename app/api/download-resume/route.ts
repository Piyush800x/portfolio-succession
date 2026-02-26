import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: "Missing Turnstile token" },
        { status: 400 }
      );
    }

    // Verify the Turnstile token with Cloudflare
    const verifyResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: token,
        remoteip: request.headers.get("x-forwarded-for") || "",
      }),
    });

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return NextResponse.json(
        { error: "Turnstile verification failed" },
        { status: 403 }
      );
    }

    // Verification passed — serve the resume file
    const resumePath = path.join(
      process.cwd(),
      "private",
      "RESUME_PIYUSH_PAUL.pdf"
    );
    const fileBuffer = await readFile(resumePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="RESUME_PIYUSH_PAUL.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
