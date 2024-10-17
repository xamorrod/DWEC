function ordenarArray() {
  let cadena = String(document.entradaNumeros.array.value);
  let output;
  let array = [];

  array = cadena.split(" ");

  let arrayPar = function (array) {
    return array.filter(function (numero) {
      return numero % 2 === 0;
    });
  };
  let arrayImpar = function (array) {
    return array.filter(function (numero) {
      return numero % 2 != 0;
    });
  };

  arrayPar.sort((a, b) => a - b);
  arrayImpar.sort((a, b) => a - b);

  if (array.length % 2 == 0) {
    output = arrayPar.concat(arrayImpar);
  } else {
    output = arrayImpar + arrayPar;
  }
  document.getElementById("salida").innerHTML = array;
}
