import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.EMAIL) {
    return;
  }

  try {
    const { email, message, subject } = req.body;

    await sendgrid.send({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      text: message,
      subject: subject,
      replyTo: email,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong!" });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
