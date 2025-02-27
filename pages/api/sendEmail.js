
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Received form data:', { name, email, message });

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Gmail credentials are missing.');
      return res.status(500).json({ message: 'Server configuration error.' });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      console.log('Sending email...');
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}