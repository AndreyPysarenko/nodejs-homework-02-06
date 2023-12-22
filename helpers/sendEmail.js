const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_UA_EMAIL_FROM, META_UA_EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_UA_EMAIL_FROM,
    pass: META_UA_EMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const email = { ...data, from: META_UA_EMAIL_FROM };
  return transport.sendMail(email);
};

module.exports = sendEmail;
