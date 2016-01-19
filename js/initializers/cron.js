// initializers/views.js
var path = require('path');
var models = require(path.join(__dirname, "..", "..", "models"));
var lightHandler = require(path.join(__dirname, "..","lightHandler.js"));

module.exports = {
    name: 'cron',
    after: 'db',
    configure: function (app) {
        var schedules = models.LightSchedule.findAll().then(function(schedules){
            lightHandler.buildCronJobs(schedules);
        });
    }
};
