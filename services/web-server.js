
// https://dzone.com/articles/creating-a-rest-api-web-server-basics

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const webServerConfig = require('../config/web-server.js');
const musicStory = require('../MusicStoryAPI.class')

//const path = require('path');

//var songsList = path.join(__dirname + '../objects/songs.json');

let httpServer;
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);
    //Enable logging via morgan library
    app.use(morgan('combined'));
    app.use(express.static('objects/'))



    //Create endpoints
    app.get('/', (req, res) => {
        res.end('Hello World!');
    });

    app.get('/songs', (req, res) => {
      res.sendFile('objects/songsList.json');
    })

    httpServer.listen(webServerConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log(`Web server listening on localhost:${webServerConfig.port}`);
      resolve();
    });
  });
}
module.exports.initialize = initialize;


function close() {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
  module.exports.close = close;

// //Include frameworks
// const fs = require('fs');
// const url = require('url');


// const bodyparser = require('body-parser');
// require('dotenv').config(); // For reading .env variables
// //const nodemailer = require('nodemailer')

// //Create filepaths
// //  var publicFolder = path.join(__dirname + '/public');


// var songs = path.join(__dirname + '/objects/songs.json');
// // var temperror = path.join(__dirname + '/views/temp-error.html');
// // var tempsuccess = path.join(__dirname + '/views/temp-success.html');



// //Static Routes
// // app.use(express.static(publicFolder));
// //Tell express to use body parser and not parse extended bodies directly
// app.use(bodyparser.urlencoded({ extended: true }))

// //Standard Routes
// // app.get('/', (req, res) => {
// //   res.sendFile(homePage);
// // });
// app.get('/', (req, res) => {
//   res.sendFile(apiLanding);
// });

// app.get('/songs', (req, res) => {
//   res.sendFile(songs);
// })

// app.put('/songs', (req, res) => {
//   console.log(req.body);
//   res.sendFile(apiLanding);
// })


// // 404
// app.use(function(req, res, next) {
//   return res.status(404).send({ message: 'Route '+req.url+' Not found.' });
// });

// // 500 - Any server error
// app.use(function(err, req, res, next) {
//   return res.status(500).send({ error: err });
// });

// app.listen(httpPort);

