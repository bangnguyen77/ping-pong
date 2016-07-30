// user interface logic
$(document).ready(function() {
  $("#ping-pong-form").submit(function(event) {
    event.preventDefault();
    // $("ul#solution li").remove(); // remove bullets?
    var goal = $("#goal").val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
