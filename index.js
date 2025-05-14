//This for the top button function
let topbutton = document.getElementById("topBtn");
//When the user scrolls, it shows up
window.onscroll = function() {scrollFunction()}; 
// This is to show at what height the top button pops up 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
// This is for Chrome users
function topFunction() {
  document.documentElement.scrollTop = 0;
}