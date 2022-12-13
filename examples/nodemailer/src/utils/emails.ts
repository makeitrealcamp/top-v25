import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

function createGmailTransporter(){
  const hostname = process.env.SMTP_SERVER;
  const port = Number(process.env.SMTP_PORT) as number;
  const username = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: hostname,
    port,
    secure: true,
    // requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: false,
  });

  return transporter;
}

export async function sendNodeMailer(data: Mail.Options) {
  const transporter = createGmailTransporter();

  // send mail with defined transport object
  const info = await transporter.sendMail(data);

  return info;
}


