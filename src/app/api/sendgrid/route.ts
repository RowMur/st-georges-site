import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

const PROD_EMAILS = [
  "stgeorgesttclub@gmail.com",
  "mike_johnston@ntlworld.com",
  "jandhnewman@btinternet.com",
  "rowanomurray@gmail.com",
];

const DEV_EMAILS = ["rowanomurray@gmail.com"];

if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

export const POST = async (request: Request) => {
  if (!process.env.EMAIL) {
    return;
  }

  const isProd = process.env.NODE_ENV === "production";
  try {
    const body = await request.json();

    let subject = "From Website: " + body.subject;
    if (!isProd) {
      subject = "[DEV] " + subject;
    }

    await sendgrid.send({
      from: process.env.EMAIL,
      to: isProd ? PROD_EMAILS : DEV_EMAILS,
      text: body.message,
      subject,
      replyTo: body.email,
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
