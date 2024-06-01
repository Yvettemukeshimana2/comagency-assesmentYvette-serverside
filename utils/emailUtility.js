import nodemailer from "nodemailer";

export const sendEmail = async (
  to,
  subject,
  textContent,
  htmlContent,
  adminEmail
) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("to", to);
    console.log("subject", subject);
    console.log("textContent", textContent);
    console.log("htmlContent", htmlContent);
    console.log("process.env.EMAIL_USER", process.env.EMAIL_USER);
    console.log("process.env.EMAIL_PASS", process.env.EMAIL_PASS);

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: textContent,
      html: htmlContent,
    };

    if (adminEmail && isAdmin()) {
      mailOptions.from = adminEmail;
    }

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
