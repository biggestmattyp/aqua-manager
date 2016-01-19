// initializers/static.js
var path = require('path');
var favicon = require('serve-favicon');

module.exports = {
    name: 'favicon',
    after: 'static',

    configure: function (app) {
      app.use(favicon(path.join(__dirname, '..', '..', 'images', 'favicon.ico')));
    }
};
