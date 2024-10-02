import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.json();

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP host
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose the email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO, // Replace with your email address
    subject: 'New Booking Inquiry from Nervous Marlin Website',
    text: `
      New booking inquiry received fron the webpage:
      
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Country: ${formData.country}
      Approximate Dates: ${formData.dates}
      Group Size: ${formData.groupSize}
      Message: ${formData.message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
