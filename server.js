const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
PORT = process.env.PORT ||3000;

app.get('/', (req, res) => {
  res.send("WELCOME TO THE HOTEL")
})

//Importing the router files of Person
const personRouter = require('./routes/personRoutes');
//Use the Routers
app.use('/person', personRouter);

//Importing Routing file of MENUS
const menuRouter = require('./routes/menuRoutes');
app.use('/menu', menuRouter);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})