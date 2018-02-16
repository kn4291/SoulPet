


//Start button on start screen
document.getElementById("startbutton").onclick = function () {
  location.href= "question.html";
}
document.getElementById("alpacaButton").onclick = function () {
  window.location.href= "http://uncyclopedia.wikia.com/wiki/Llama";
}
// Question alert functions
function myResult() {
  //alert functions
  if (document.forms["genders"].gender.value == "") {
    document.getElementById("nextButtonSection-paragraph").style.display = "block"; return false;
  }
  if (document.forms["relationships"].relationshipstatus.value == "") {
document.getElementById("nextButtonSection-paragraph").style.display = "block"; return false;
  }
  if (document.forms["heights"].height.value == "") {
    document.getElementById("nextButtonSection-paragraph").style.display = "block"; return false;
  }
  if (document.forms["rightleft"].handed.value == "") {
    document.getElementById("nextButtonSection-paragraph").style.display = "block"; return false;
  }
  if (document.forms["colors"].color.value == "") {
    document.getElementById("nextButtonSection-paragraph").style.display = "block"; return false;
  }

/* old js code for alert functions (just in case)
  if (document.forms["relationships"].relationshipstatus.value == "") {
    alert("You'll have to choose your relationship status"); return false;
  }
  if (document.forms["heights"].height.value == "") {
    alert("You'll have to choose if you're taller than 170cm"); return false;
  }
  if (document.forms["rightleft"].handed.value == "") {
    alert("You'll have to choose if you're right or left handed"); return false;
  }
  if (document.forms["colors"].color.value == "") {
    alert("You'll have to choose your favorite color"); return false;
  }
*/

//favorite color controls which result page to show
if (document.forms["colors"].color.value == "blue") {
window.location.href = "results.html"; return false;
}
if (document.forms["colors"].color.value == "orange") {
window.location.href = "resultsthree.html"; return false;
}
if (document.forms["colors"].color.value == "black") {
window.location.href = "resultsfive.html"; return false;
}
if (document.forms["colors"].color.value == "beige") {
window.location.href = "resultstwo.html"; return false;
}
if (document.forms["colors"].color.value == "green") {
window.location.href = "resultsfour.html"; return false;
}

}
