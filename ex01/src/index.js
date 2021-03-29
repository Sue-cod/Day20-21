
function myFunction(rock) {
  document.getElementById("area").innerHTML += rock;
  console.log(rock);
}

$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    console.log('Space pressed');
  }
});

function targetPopup(form) {
  window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
  form.target = 'formpopup';
}

function submit()
{
    var name = document.getElementById("name").value;
    var output = " My Name is "+name+" ";
    var myWindow = window.open("data:text/html," + encodeURIComponent(output),
               "_blank", "width=200,height=100");

    x = window.print();

    return false;
}