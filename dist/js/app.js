$(document).ready(function(){
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var namesContainer = document.getElementById("names");
  var paddingNames = windowHeight - namesContainer.clientHeight;
  console.log(namesContainer.clientHeight)
  namesContainer.style.paddingTop = paddingNames + "px";

 
});

var mX, mY, distance,
$header = $('#header');
$distance = $('#distance'),
$orange  = $('#orange-ball');
$pink  = $('#pink-ball');

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}

$header.mousemove(function(e) {  
  mX = e.pageX;
  mY = e.pageY;

  var distanceOrangeAddY = (mY / $orange.offset().top) * 10;
  var distanceOrangeAddX = (mX / $orange.offset().left) * 10;
  document.getElementById("orange-ball").style.marginTop = -200 - distanceOrangeAddY;
  document.getElementById("orange-ball").style.marginLeft = 200 + distanceOrangeAddX;

  var distancePinkAddY = (mY / $orange.offset().top) * 20;
  var distancePinkAddX = (mX / $orange.offset().left) * 20;
  document.getElementById("pink-ball").style.marginTop = -200 - distancePinkAddY;
  document.getElementById("pink-ball").style.marginLeft = 1300 + distancePinkAddX;

  distance = calculateDistance($orange, mX, mY);
  $distance.text(distance);         
});
