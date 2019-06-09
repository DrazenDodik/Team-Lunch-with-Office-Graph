// require express event
var express = require('express');
// create a new EventRouter from express
var MeetingRouter = express.Router();
// require node-fetch so we can easily get the JSON from the Helsinki city APIs
var fetch = require('node-fetch');

// Render the correct index page if someone navigates to the events router
MeetingRouter.route('/').get(function (req, res) {
  res.render('meetings/index');
});

MeetingRouter.route('/post').post(function (req, res) {
  // get the text that was submitted to the form from the request body.
  // the name of the text-field on our form is searchText
  var searchTerm = req.body.searchText;

  // Do Office Graph things here
});

// export this EventRoute when require this file
module.exports = MeetingRouter;
