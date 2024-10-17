function actualizarHora() {
  const actual = new Date();
  const horas = actual.getHours();
  const minutos = actual.getMinutes();
  const segundos = actual.getSeconds();

  const horaFormated = `${horas}:${minutos}:${segundos}`;
  document.getElementById("salida").innerHTML = horaFormated;
}

setInterval(actualizarHora, 1000);
