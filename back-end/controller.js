const emailToAdmin = require('./utils/send-email');

exports.sendEmail = async (req, res, next) => {
  const sender = req.body.user;
  const subject = `New portfolio message from ${req.body.user}`;
  const message = `${req.body.user} with e-mail: ${req.body.email} has sent the following message:\n${req.body.message}`;
  try {
    await emailToAdmin({
      sender,
      message,
      subject
    });
    res
    .status(200)
    .json({
      status: 'success',
      message: 'Message has been successfully sent'    
    });
  } catch (err) {
    res
      .status(500)
      .json({
        status: 'fail',
        message: err
      });
  }
};