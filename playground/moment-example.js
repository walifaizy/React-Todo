var moment = require("moment");

console.log(moment().format());

var now = moment();
console.log("Current timestamp is" + now.unix());

var timeStatamp = 1487883982;
var currentMoment = moment.unix(timeStatamp);
console.log("Current Moment is : " + currentMoment.format("Do-MMMM-YYYY @ hh:ss A"));