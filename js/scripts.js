// UI Logic
$(document).ready(function() {
  $("form#appointmentInfo").submit(function(event) {
    event.preventDefault();
    const name = "Your Name: " + $("#name").val();
    const date = "Your Date: " + $("#date").val();
    const description = "Your Description: " + $("#description").val();
    const startEnd = "Your Start and End: " + $("#start-end").val();
    $("#output").toggle();
    $("#yourName").text(name);
    $("#yourDate").text(date);
    $("#yourDescription").text(description);
    $("#yourStartEnd").text(startEnd);
  });
});