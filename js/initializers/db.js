// initializers/views.js
var path = require('path');
var sqlite3 = require('sqlite3');
var models = require(path.join(__dirname, "..", "..", "models"));

module.exports = {
    name: 'db',
    after: 'views',

    configure: function (app) {
      models.sequelize.sync();
    }
};
