require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const databaseConnection = require('./config/database');
const port = process.env.PORT;
const indexRouter=require('./routes/index')

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use(express.json()); 
app.use(express.urlencoded({
    extended: true
}));
app.use(cookie_parser());
app.use('/api/v1', indexRouter);
databaseConnection();

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});