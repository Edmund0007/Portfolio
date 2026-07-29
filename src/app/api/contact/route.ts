import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    console.log("==========================================");
    console.log("NEW PORTFOLIO CONTACT MESSAGE RECEIVED:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "No Subject"}`);
    console.log(`Message: ${message}`);
    console.log("Recipient: edmundaugustine12@gmail.com");
    console.log("==========================================");

    // Attempt direct email notification via Web3Forms public API service
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eb769ff9-7bb3-41bb-b97c-9b1689255a6d",
          name: name,
          email: email,
          subject: subject || `New Portfolio Inquiry from ${name}`,
          message: `Portfolio Inquiry Details:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
        }),
      });
    } catch (e) {
      console.warn("Cloud email dispatch notification fallback:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully to Edmund Augustine!",
      recipient: "edmundaugustine12@gmail.com",
    });
  } catch (error) {
    console.error("Error processing contact form API submission:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission." },
      { status: 500 }
    );
  }
}
