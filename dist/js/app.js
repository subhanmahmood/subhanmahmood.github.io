$(document).ready(function(){
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var namesContainer = document.getElementById("names");
  var paddingNames = windowHeight - namesContainer.clientHeight;
  console.log(namesContainer.clientHeight)
  namesContainer.style.paddingTop = paddingNames + "px"
});
