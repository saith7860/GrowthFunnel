import transporter from "./Email.config.js";
import { Welcome_Email_Template } from "./EmailTemplate.js";
export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"GrwothFunnel" <saithshaheer5@gmail.com>',

      to: email, // list of receivers
      subject: "Welcome Email", // Subject line
      text: "Welcome Email", // plain text body
      html: Welcome_Email_Template.replace("{name}", name),
    });
    console.log("Email send Successfully", response);
  } catch (error) {
    console.log("Email error", error);
  }
};
export default sendWelcomeEmail;
