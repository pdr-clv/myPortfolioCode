const sgMail = require('@sendgrid/mail');

const sendEmail = async (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const mailOptions = {
    from: options.sender,
    to: 'pdr.clv@gmail.com',
    subject: options.subject,
    text: options.message,
    // html:
  };

  await sgMail.send(mailOptions)
};

module.exports = sendEmail; 
