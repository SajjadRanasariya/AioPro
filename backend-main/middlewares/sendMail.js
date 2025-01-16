import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import ejs from "ejs";

export const sendMail = async (templateName,data) => {

  console.log(
    "templateName",templateName,"data",data
  );
  try {
    const templatePath = path.join(__dirname, 'email-templates', `${templateName}.ejs`);
    const template = await ejs.renderFile(templatePath, data);

    // Create a Nodemailer transport
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0885458121f6ea",
        pass: "726c1be7850752"
      }
    });

    // Define the email options
    let mailOptions = {
      from: `vaibhav.specscale@gmail.com`,
      to: `${data.email}`,
      subject:`${data.subject}`,
      html: template,
    };

    // Send the email
    let info = await transport.sendMail(mailOptions);
    // console.log("info",info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
