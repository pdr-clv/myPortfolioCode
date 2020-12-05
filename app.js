const express = require('express');
const router = require('./back-end/routes');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json( { limit: '10kb'}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/front-end/build`));
/* //just in case we need it in production.
  app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/front-end/build/index.html`);
  }); */
}

/* //example of middleware.
if (process.env.NODE_ENV === 'development') {
  app.use((req,res,next) => {
    //we define new property in request called req.requestTime
      req.requestTime = new Date().toISOString();
      console.log(req.requestTime);
      next();
  });
}*/

app.use('/',router);

module.exports = app;
