const mongoose = require('mongoose');
// defining the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'//endpoint is database name
//HOTEL  || school dB ALSO >>
//Connection setUp
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Get the defalut connection
//Mongoose maintains a default connection object representating the mongoDB connection.
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to  mongo server');
});
db.on('error', (err) => {
    console.log('connection error', err)
});  
db.on('disconnected', () => {
    console.log('mongo disconnected');
});

module.exports = db;