// Add active class to the current button (highlight it)
var header = document.getElementById("myUL");
var listItems = header.getElementsByClassName("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}