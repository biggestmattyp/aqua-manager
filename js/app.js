var express = require('express');
var path = require('path');
require('log-timestamp');
var initializer = require('express-initializers');
var app = express();

// Let the initializers run
initializer(app)
    .then(function () {
        // Start listening for requests
        app.listen(app.get('port'), function () {
            console.log('Now listening on port ' + app.get('port'));
        });
    })
    .catch(function (err) {
        console.log('Unable to initialize app: ' + err.message);
        console.log(err.stack);
    });
