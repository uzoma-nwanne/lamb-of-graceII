import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { phone, email, name, message } = await request.json();
  const PASSWORD = process.env.PASSWORD
  const EMAIL=process.env.EMAIL
  const from = email
  const transport = nodemailer.createTransport({
    service: "namecheap",
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions: Mail.Options = {
    from: EMAIL,
    to: EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email}) (${phone})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
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
