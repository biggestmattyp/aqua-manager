var piblaster = require('pi-blaster.js');
var CronJob = require('cron').CronJob;

module.exports = {
  handleLightSchedule: function(lightSchedule) {
    console.log('doing my job ' + lightSchedule);
  },

  fadeIn: function(lightSchedule) {

  },

  buildCronPattern: function(lightSchedule) {
    var pattern =
      lightSchedule.minutes + " " + lightSchedule.hours + " " +
      lightSchedule.daysOfMonth + " " + lightSchedule.monthsOfYear + " " +
      lightSchedule.daysOfWeek;
    console.log(pattern);
    return pattern;
  },

  buildCronJobs: function(lightSchedules) {
    var cronJobs = [];
    lightSchedules.forEach(function(schedule) {
      var cronSchedule =
        module.exports.buildCronPattern(schedule.get());
      cronJobs.push(new CronJob({
        cronTime: cronSchedule,
        onTick: function() {
          console.log(this);
          module.exports.handleLightSchedule(schedule.get());
        },
        start: true
      }));
    });
    return cronJobs;
  }

};
