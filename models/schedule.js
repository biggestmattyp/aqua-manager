"use strict";

module.exports = function(sequelize, DataTypes) {
  var LightSchedule = sequelize.define("LightSchedule", {
    scheduleName: DataTypes.STRING,
    minutes: DataTypes.STRING,
    hours: DataTypes.STRING,
    daysOfMonth: DataTypes.STRING,
    monthsOfYear: DataTypes.STRING,
    daysOfWeek: DataTypes.STRING,
    transitionStyle: DataTypes.STRING,
    coolValue: DataTypes.INTEGER,
    blueValue: DataTypes.INTEGER,
    warmValue: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN 
  });
  return LightSchedule;
};
