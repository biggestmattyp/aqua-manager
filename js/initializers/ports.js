// initializers/port.js
module.exports = {
    name: 'ports',
    configure: function (app) {
        app.set('port', process.env.PORT || 3000);
    }
};
