import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

export const POST = async (request: Request) => {
  if (!process.env.EMAIL) {
    return;
  }

  try {
    const { email, message, subject } = await request.json();

    await sendgrid.send({
      from: process.env.EMAIL,
      to: ["stgeorgesttclub@gmail.com", "mike_johnston@ntlworld.com", "jandhnewman@btinternet.com", "rowanomurray@gmail.com"],
      text: message,
      subject: "From Website: " + subject,
      replyTo: email,
    });

    return NextResponse.json({
      stats: 200,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong!",
    });
  }
};
