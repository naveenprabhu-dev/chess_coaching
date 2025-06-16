import submissions from './data.js';

import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});


async function sendEmail(formData) {
  const { firstName, lastName, email, phoneNumber, service, message } = formData;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New contact form submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone number: ${phoneNumber}
      Service: ${service}
      Message: ${message}
    `
  };

  await transporter.sendMail(mailOptions);
}


export async function POST(request) {
  const body = await request.json();
  console.log("Received contact form submission:", body);

  try {
    await sendEmail(body);
    return new Response(JSON.stringify({ message: 'Form was submitted successfully.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
  export async function GET() {
    return new Response(JSON.stringify(submissions), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }