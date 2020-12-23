// we will use package nodemailer to send and email to user.
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    // 1) Create a transporter. It can be gmail Service or any mail service.
  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  });
  // 2) Define the email options
  const mailOptions = {
    from: `Pedro Calvo <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: options.subject,
    text: options.message,
    // html:
  };
  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
  } catch(err) {
    console.log(err);
  }
  
};

module.exports = sendEmail; 