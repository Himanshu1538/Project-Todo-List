// jshint esversion:6

// Creating own module (with two functions) and exporting it.
// Module with function to get day,date,year.
exports.getDate = function() {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  // And using .toLocaleDateString to get the day,date,year as title.
  let day = today.toLocaleDateString("en-US", options);

  return day;
}

// Module with function to get day.
exports.getDay = function() {
  var today = new Date();
  var options = {
    weekday: "long",
  }
  // And using .toLocaleDateString to get the day,date,year as title.
  let day = today.toLocaleDateString("en-US", options);

  return day;
}
