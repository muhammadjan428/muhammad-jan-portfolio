"use server";
import nodemailer from "nodemailer";

export async function sendEmail({ from, to, name, subject, body }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Create a transporter object using the default SMTP transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL, // Your Gmail address
      pass: SMTP_PASSWORD, // Your Gmail password
    },
  });

  // Verify the connection configuration
  try {
    const testResult = await transport.verify();
    console.log('Server is ready to take our messages:', testResult);
  } catch (error) {
    console.error('Error during transport verification:', error);
    return;
  }

  // Send mail with defined transport object
  try {
    const sendResult = await transport.sendMail({
      from, // Sender's email address and name
      to: SMTP_EMAIL , // List of recipients
      subject, // Subject line
      html: body, // HTML body content
    });
    console.log('Message sent:', sendResult);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
