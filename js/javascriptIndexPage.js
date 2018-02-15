//Enter your name function (START SCREEN)
/*function enterName() {
  var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "";
    } else {
        txt = "Hello " + person + "!";
    }
    document.getElementById("demo").innerHTML = txt;
}
window.onload = function(){
  setTimeout(function(){
    enterName('show');
  },1000);
}
*/
var yourText = new Vue({
  el: '#yourText' ,
  data: {
message: ''
  }
})
