import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.json();

  // Anti-spam: Honeypot check - if website field is filled, it's a bot
  if (formData.website) {
    // Silently pretend success to not alert the bot
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  }

  // Anti-spam: Time-based check - reject submissions faster than 3 seconds
  const formLoadedAt = formData._formLoadedAt;
  if (formLoadedAt && Date.now() - formLoadedAt < 3000) {
    // Too fast, likely a bot - silently pretend success
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  }

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
    to: ['leo@nervousmarlin.com', 'sales@nervousmarlin.com'], // Send to both Leo and Sales
    bcc: process.env.EMAIL_BCC, // Add this line for BCC (hidden CC)
    subject: 'New Enquiry from Nervous Marlin Website',
    text: `
      New booking enquiry received from the webpage:
      Type of request: ${formData.type_of_request.toString()}
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Number of anglers: ${formData.anglers}
      Number of non-anglers: ${formData.non_anglers}
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
