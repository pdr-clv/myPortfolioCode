if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: './.env' })

const app= require('./app');

const port = process.env.PORT;

app.listen(port,() => console.log(`App running on port ${port}...`));


