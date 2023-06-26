const triangulo = document.getElementById("triangulo");
const cuadrado = document.getElementById("cuadrado");
const circulo = document.getElementById("circulo");
const resetButton = document.getElementById("resetButton");


function handleClick(event) {
    event.target.style.display = "none";
  }

  function handleReset() {
    triangulo.style.display = "block";
    cuadrado.style.display = "block";
    circulo.style.display = "block";
  }

  triangulo.addEventListener("click", handleClick);
cuadrado.addEventListener("click", handleClick);
circulo.addEventListener("click", handleClick);


resetButton.addEventListener("click", handleReset);