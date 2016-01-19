// initializers/views.js
var path = require('path');

module.exports = {
    name: 'views',
    after: 'favicon',

    configure: function (app) {
      //views setup
      app.set('view engine', 'jade');
      app.set('views', path.join(__dirname, '..', '..', 'views'));
    }
};
