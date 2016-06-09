//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);

// Call this function to update the text display
function UpdateText() {
    seconds++;
    $( "#timeDisplay" ).text("Time elapsed: " + seconds);
    $("#timer").text(seconds);
}

// YOUR CODE GOES HERE
var seconds = 0;
var timer;
function Start() {
    // console.log("Start Clicked");
  timer = setInterval(UpdateText, 1000);
}
function Reset() {
    // console.log("Reset Clicked");
  clearInterval(timer);
  seconds = 0;
  $("#timeDisplay").text("Time elapsed: "+seconds);
  $("#timer").text("Stop Watch");
}
function Pause() {
    // console.log("Pause Clicked");
  clearInterval(timer);
}
