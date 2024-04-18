require('dotenv').config();
const mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI;

const databaseConnection = () => {
    mongoose.connect(mongodb_uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(error => {
            console.log(error.message);
        });
    
}
module.exports = databaseConnection;