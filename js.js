var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 100 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  square1.style.left = scrollPercent*window.innerWidth*0.45 + '0px';
  square2.style.left = scrollPercent*-window.innerWidth*0.5 + '0px';
});