// initializers/routes.js
var path = require('path');
var models = require(path.join(__dirname, "..", "..", "models"));

var bodyParser = require('body-parser');


module.exports = {
    name: 'routes',
    after: 'views',

    configure: function (app) {
      app.use( bodyParser.json() );       // to support JSON-encoded bodies
      app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
      }));

      //Routes
      app.get('/', function(req, res){
        res.render('index', {title: 'Aquarium Manager 0.1.0',
                            isHome: true,
                            message: 'Welcome to the MattyP\'s Aquarium Manager',
                            lightStatus: 'Blue: 50%, Cool White: 85%, Natural White: 75%, Red: 50%'})
      });

      app.get('/schedules', function(req, res){
        models.LightSchedule.findAll().then(function (schedules){
          res.render('schedules', {title: 'Aquarium Manager 0.1.0 Schedules',
                              message: 'Lighting Schedules',
                              isSchedules: true,
                              schedules: schedules});
        });

      });

      app.post('/schedule/create', function(req, res){
        models.LightSchedule.create({
          scheduleName: req.body.scheduleName,
          hours: req.body.hours.toString(),
          minutes: req.body.minutes.toString(),
          daysOfMonth: req.body.daysOfMonth.toString(),
          monthsOfYear: req.body.monthsOfYear.toString(),
          daysOfWeek: req.body.daysOfWeek.toString(),
          transitionStyle: req.body.transitionStyle,
          coolValue: req.body.coolValue,
          warmValue: req.body.warmValue
        }).then(function (){
          res.redirect('/schedules')
        })
      });

      app.get('/schedule/:scheduleId/destroy', function(req, res){
        models.LightSchedule.destroy({
          where: {id: req.params.scheduleId}
        }).then(function (){
          res.redirect('/schedules')
        })
      });
    }
};
