import nodemailer from 'nodemailer';
import verifyEmail from './sendEmail.js';
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "saithshaheer5@gmail.com",
    pass: "vwub bufr nvgk bvrh",
  },
});
const SendEmail=async () => {
    try {
        //   verifyEmail();
  
    } catch (error) {
       console.log('error in sending email',error);
        
    }
}
SendEmail()
export default transporter;
