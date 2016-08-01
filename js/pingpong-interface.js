// user interface logic
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#ping-pong-form").submit(function(event) {
    event.preventDefault();
    // $("ul#solution li").remove(); // remove bullets?
    var goal = $("#goal").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
