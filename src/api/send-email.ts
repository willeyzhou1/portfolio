import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Use environment variable for security

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sender, message } = req.body;

    try {
      const email = await resend.sendEmail({
        from: 'Contact Form <onboarding@resend.dev>,',  // Replace with the actual sender email
        to: 'willzhou000@gmail.com',
        subject: 'new message from' + sender,
        html: message,
      });

      return res.status(200).json({ message: 'Email sent successfully', email });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
