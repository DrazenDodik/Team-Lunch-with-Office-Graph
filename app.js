// lets require express, so we can use it here
var express = require('express');

var path = require('path');
var fs = require('fs');
var https = require('https');

// create a new instance of express
var app = express();

// require the body-parser so we can easily read data that is passed from our form
var bodyParser = require('body-parser');

// tell express to use bodyparser and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// tell express to server our static files from the public folder
app.use(express.static('public'));
// tell express that we'll use ejs as our view engine
app.set('view engine', 'ejs');

const meetingRouter = require('./routes/meetingRouter');
app.use('/meetings', meetingRouter);

// update the root request to send the index.html file back as our home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// tell express that we will use port 3000 and a HTTPS connection for this webserver
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
  .listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000/')
  })