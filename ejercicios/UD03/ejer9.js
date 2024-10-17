function ordenarFecha() {
  const fecha1 = new Date(document.fechas.fecha1.value);
  const fecha2 = new Date(document.fechas.fecha2.value);
  let output = "";
  console.log(fecha1.getTime());
  if ((fecha1 = fecha2)) {
    output = "Las fechas son iguales";
  } else if (fecha1 < fecha2) {
    output =
      "La primera fecha es anterior" + distanciaEntreFechas(fecha2, fecha1);
  } else {
    output =
      "La segunda fecha es anterior" + distanciaEntreFechas(fecha1, fecha2);
  }

  output += document.getElementById("salida").innerHTML = output;
}

function distanciaEntreFechas(fecha1, fecha2) {
  let año = fecha1.getYear() - fecha2.getYear();
  let mes = fecha1.getMonth() - fecha2.getMonth();
  let dia = fecha1.getDate() - fecha2.getDate();
  let x = Number.MAX_SAFE_INTEGER;
  let y = Number.MAX_VALUE;
  console.log(x);
  console.log(y);
  return (
    "La diferencia de días es " +
    Math.abs(dia) +
    " la diferencia de meses es " +
    Math.abs(mes) +
    " la diferencia de años es " +
    Math.abs(año)
  );
}
