const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();
const passport=require('./auth')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] req to [ ${req.originalUrl}]`)
  next();
}
app.use(logRequest)

app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})

app.get('/',(req, res) => {
  res.send("WELCOME TO THE HOTEL");
});

const personRouter = require('./routes/personRoutes');
app.use('/person', personRouter);

const menuRouter = require('./routes/menuRoutes');
app.use('/menu',localAuthMiddleware, menuRouter);

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
