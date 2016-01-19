// initializers/static.js
var path = require('path');
var express = require('express');

module.exports = {
    name: 'static',
    after: 'ports',

    configure: function (app) {
      app.use(express.static(path.join(__dirname, '..', '..', 'bower_components')));
    }
};
