import transporter from "./Email.config.js";
import { Verification_Email_Template } from "./EmailTemplate.js";
const verifyEmail=async (email,verificationCode) => {
    try {
    const response = await transporter.sendMail({
    from: '"GrowthFunnel" <saithshaheer5@gmail.com>',
    to: email,
    subject: "Verify your email",
    text: "Hi!Verify Your email?", // Plain-text version of the message
    html: Verification_Email_Template.replace("{verificationCode}",verificationCode) // HTML version of the message
  });
  console.log('email send successfully',response);
  
    } catch (error) {
        console.log('Email error',error);
        
    }
}
export default verifyEmail;