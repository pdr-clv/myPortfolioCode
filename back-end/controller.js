const emailToAdmin = require('./utils/send-email');

exports.sendEmail = async (req, res, next) => {
  const sender = `${req.body.user} <${req.body.email}>`;
  const subject = `New portfolio message from ${req.body.user}`;
  try {
    await emailToAdmin({
      sender,
      message: req.body.message,
      subject
    });
    res
    .status(200)
    .json({
      status: 'success',
      message: 'Message sent correctly to admin'    
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