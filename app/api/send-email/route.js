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
    bcc: process.env.EMAIL_BCC, // Add this line for BCC (hidden CC)
    subject: 'New Enquiry from Nervous Marlin Website',
    text: `
      New booking enquiry received fron the webpage:
      Type of request: ${formData.type_of_request.toString()}
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Group Size: ${formData.groupSize}
      Date From: ${formData.date_from}
      Date To: ${formData.date_to}
      Country: ${formData.country}
      Message: ${formData.message}
    `,
  };

  try {
    // Send the email
    // Verify that name, email, and phone are not empty
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json({ error: 'Name, email, and phone are required.' }, { status: 400 });
    }
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
