
document.addEventListener("DOMContentLoaded", function() {

  const triangle = document.getElementById("triangle");
  const square = document.getElementById("square");
  const circle = document.getElementById("circle");

  
  triangle.addEventListener("click", function() {
    triangle.style.display = "none";
  });

  square.addEventListener("click", function() {
    square.style.display = "none";
  });

  circle.addEventListener("click", function() {
    circle.style.display = "none";
  });

  
  const resetButton = document.getElementById("resetButton");


  resetButton.addEventListener("click", function() {
    triangle.style.display = "block";
    square.style.display = "block";
    circle.style.display = "block";
  });
});