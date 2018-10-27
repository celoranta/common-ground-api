
//Include frameworks
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
require('dotenv').config(); // For reading .env variables
//const nodemailer = require('nodemailer');

//Instantiate managers
var app = express();

//Assign variables
var httpPort = process.env.PORT || 8000;
var hostname = "localhost";

//Create filepaths
//  var publicFolder = path.join(__dirname + '/public');

var apiLanding = path.join(__dirname + '/views/landing.html');
var songs = path.join(__dirname + '/objects/songs.json');
// var temperror = path.join(__dirname + '/views/temp-error.html');
// var tempsuccess = path.join(__dirname + '/views/temp-success.html');

//Static Routes
// app.use(express.static(publicFolder));
//Tell express to use body parser and not parse extended bodies directly
app.use(bodyparser.urlencoded({ extended: true }))

//Standard Routes
// app.get('/', (req, res) => {
//   res.sendFile(homePage);
// });
app.get('/', (req, res) => {
  res.sendFile(apiLanding);
});

app.get('/songs', (req, res) => {
  res.sendFile(songs);
})

app.put('/songs', (req, res) => {
  console.log(req.body);
//
  //res.sendFile(songs);
})


// 404
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route '+req.url+' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(httpPort);





