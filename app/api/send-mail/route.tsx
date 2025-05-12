import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

// Notice the funciton definiton:
export async function POST(req: any) {
  const body = await req.json(); // 👈

  try {
    const message = {
      to: process.env.EMAIL_TO,
      subject: process.env.EMAIL_SUBJECT,
      html: `
        <p><span style="font-weight: bold">Name</span>: ${body.name}</p>
        <p><span style="font-weight: bold">Email</span>: ${body.email}</p>
        <p><span style="font-weight: bold">Company</span>: ${body.company}</p>
        <p><span style="font-weight: bold">Phone</span>: ${body.phone}</p>
        <p><span style="font-weight: bold">What can we help you with?</span></p>
        <p>${body.help}</p>
        <p><span style="font-weight: bold">Message</span>: ${body.msg}</p>
      `,
    };
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail(message);
      return NextResponse.json({success: `Message delivered`}, {
        status: 250,
      });
    } catch (err) {
      return NextResponse.json({error: `Connection refused`}, {
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to get admins" }, {
        status: 500,
      }
    );
  }
}