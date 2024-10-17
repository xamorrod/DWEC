function resolverEcuacion() {
  let a = document.datosEcuacion.a.value;
  let b = document.datosEcuacion.b.value;
  let c = document.datosEcuacion.c.value;
  let outputMensaje = "";
  let discriminante = Math.pow(b, 2) - 4 * a * c;

  if (discriminante < 0) {
    outputMensaje =
      "La ecuación de segundo grado no tiene solución porque el discriminante es negativo";
  } else if (discriminante == 0) {
    let solucion = solucionEcuacion1Resultado(a, b, c, discriminante);
    outputMensaje =
      "La ecuación de segundo grado tiene una solución porque el discriminante es 0" +
      " la solución es " +
      solucion;
  } else {
    let soluciones = solucionEcuacion2Resultado(a, b, c, discriminante);
    let solucion1 = soluciones[0];
    let solucion2 = soluciones[1];
    outputMensaje =
      "La ecuación de segundo grado tiene dos soluciones porque el discriminante es positivo la primera solución es " +
      solucion1 +
      " y la segunda es " +
      solucion2;
  }
  document.getElementById("salida").innerHTML = outputMensaje;
}

function solucionEcuacion1Resultado(a, b, c, discriminante) {
  return -b / (2 * a);
}

function solucionEcuacion2Resultado(a, b, c, discriminante) {
  let soluciones = [];

  let sol1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  let sol2 = (-b - Math.sqrt(discriminante)) / (2 * a);

  return (soluciones = [sol1, sol2]);
}
