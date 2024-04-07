// mailer.js
import { env } from '@/lib/env';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: env.SMTP_SERVICE, // e.g., 'Gmail', 'Yahoo', etc.
  host: 'smtp.gmail.com',
  auth: {
    user: env.SMTP_MAIL,
    pass: env.SMTP_PASSWORD,
  },
});

interface MailProps{
     email: string,
     name:string
     message:string,
     subject:string
      
}
export const sendEmail = async (options : MailProps) => {
  try {
    await transporter.sendMail({
      from: env.SMTP_MAIL,
      subject: options.subject,
      to:options.email,
      text:options.message 
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
