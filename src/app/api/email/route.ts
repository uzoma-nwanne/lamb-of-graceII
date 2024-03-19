import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { phone, email, name, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "namecheap",
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions: Mail.Options = {
    from: name,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email}) (${phone})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
          console.log("Email")
        } else {
          reject(err.message);
          console.log("Error")
        }
      });
    });

  try {
     await sendMailPromise()
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
   return NextResponse.json({ error: err});
  }
}
