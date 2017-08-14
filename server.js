/*
 There are some minor modifications to the default Express setup
 Each is commented and marked with [SH] to make them easy to find
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
//Require Passport
var passport = require('passport');

require('./app_api/models/db');
// Bring in the Passport config after model is defined
require('./app_api/config/passport');


// Bring in the routes for the API (delete the default routes)
var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialise Passport before using the route middleware
app.use(passport.initialize());

// Use the API routes when path starts with /api
app.use('/api', routesApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var port = process.env.PORT || 3000;        // set our port
app.listen(port);
console.log('Magic happens on port ' + port);
