// Tenemos que añadir un manejador de eventos que se active o desactive según el botón marcado

function addManejador() {
  let oBoton = document.getElementById("botonMarcar");
  oBoton.addEventListener("click", marcarDesmarcar);
}

function deleteManejador() {
  let oBoton = document.getElementById("botonMarcar");
  oBoton.removeEventListener("click", marcarDesmarcar);
}

function marcarDesmarcar() {
  const checkbox = document.formulario.verano;
  formulario.verano.checked = formulario.verano.checked;
}
