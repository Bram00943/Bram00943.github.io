function changeBorder(){
    document.getElementById("projectClassONE-ID").style.borderColor = "orange";
    document.getElementById("projectClassONE-ID").style.borderWidth = "3px";
    document.getElementById("ChooseOne").value = "Product is chosen";
    document.getElementById("ChooseOne").style.color = "black";
    document.getElementById("ChooseOne").style.backgroundColor = "#F6F6F7";
}
function changeBorderTwo(){
    document.getElementById("projectClassTWO-ID").style.borderColor = "orange";
    document.getElementById("projectClassTWO-ID").style.borderWidth = "3px";
    document.getElementById("ChooseTwo").value = "Product is chosen";
    document.getElementById("ChooseTwo").style.color = "black";
    document.getElementById("ChooseTwo").style.backgroundColor = "#F6F6F7";
}

 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}