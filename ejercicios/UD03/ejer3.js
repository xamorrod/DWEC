function contadorPalabras() {
  let cadena = document.formDatos.cad.value;

  let contPalabras = String(cadena).match(/\s/g);

  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == " " && cadena.charAt(i - 1) != " ") {

    }
  }
  let userOutput = contPalabras.length;
  document.getElementById("output").innerHTML = userOutput;
}
