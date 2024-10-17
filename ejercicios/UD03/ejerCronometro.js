let iniciado = false;
let tiempoTranscurrido = 0;

function resetCronometro() {
  tiempoTranscurrido = 0;
  iniciado = true;
}

function empezarCrono() {
  if (!iniciado) {
    setInterval(function () {
      tiempoTranscurrido++;
      document.getElementById("salida").innerHTML = tiempoTranscurrido;
    }, 1000);
  } else {
    tiempoTranscurrido = 0;
    document.getElementById("salida").innerHTML = tiempoTranscurrido;
  }
}

function iniciarCrono() {}
