const nodemailer = require("nodemailer");

const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;
const emailTo = process.env.EMAIL_TO;

export const transporter = nodemailer.createTransport({
  service: "Outlook",
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: emailPassword,
  },
  tls: {
    ciphers: "HIGH",
    secureProtocol: "TLSv1_2_method",
  },
});

export const mailOptions = () => {
  return {
    from: email,
    to: emailTo,
  };
};
