// we will use package nodemailer to send and email to user.
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter. It can be gmail Service or any mail service.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME_GMAIL,
      pass: process.env.EMAIL_PASSWORD_GMAIL,
    },
    //activate in gmail "less secure app" option
  });
  // 2) Define the email options
  const mailOptions = {
    from: options.sender,
    to: 'pdr.clv@gmail.com',
    subject: options.subject,
    text: options.message,
    // html:
  };
  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail; 