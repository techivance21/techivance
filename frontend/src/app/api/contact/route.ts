import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Convert to form-urlencoded
    const formBody = new URLSearchParams({
      name: body.name,
      email: body.email,
      phone: body.phone ?? "",
      service: body.service ?? "",
      message: body.message
    }).toString();

    const response = await fetch(process.env.SHEET_WEBAPP_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    const result = await response.text();
    console.log("Google Script Response:", result);

    if (!response.ok) {
      throw new Error("Failed to save data in Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
