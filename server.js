const express = require("express");
const path= require('path');
const cors = require("cors");
const flashmessages=  require('connect-flash');
const masseges=  require('express-messages');

const app = express();

//View engine setup
app.set('views', path.join(__dirname,'app/views'));
app.set('view engine','ejs');

//Set public Folder
app.use(express.static(path.join(__dirname,'public')));

//Set gloval error variable
app.locals.errors = null;



 // Express messages
app.use(flashmessages());
app.use(function (req, res, next) {
  res.locals.messages = masseges(req, res);
  next();
});



var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD application." });
});*/


//Set routes
var pages = require('./app/routes/pages');
app.use('/',pages);

// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});