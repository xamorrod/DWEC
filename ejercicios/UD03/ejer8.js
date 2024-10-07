function mostrarFecha() {
  let selector = document.forms.opciones.value;
  console.log(selector);
  let output = "";
  const dateActual = new Date();

  switch (selector) {
    case "optionDia":
      let arrayDay = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      output = arrayDay[dateActual.getUTCDay()];
      break;

    case "optionMes":
      output = dateActual.getMonth() + 1; 
      break;

    case "optionAño":
      output = dateActual.getFullYear();
      break;

    case "optionHora":
      output = dateActual.getHours() + ":" + dateActual.getMinutes();
      break;

    default:
      output = dateActual.toDateString(); 
      break;
  }
  output += document.getElementById("salida").innerHTML = output;
}
