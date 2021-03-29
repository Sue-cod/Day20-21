
function myFunction(rock) {
  document.getElementById("area").innerHTML += rock;
  console.log(rock);
}

$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    console.log('Space pressed');
  }
});