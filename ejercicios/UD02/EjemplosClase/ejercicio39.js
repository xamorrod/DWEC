function imprimePrimos() {
  let cont = 0;
  let cad = [];

  for (let i = 2; cont < 1000; i++) {
    let isPrimo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrimo = false;
        break;
      }
    }

    if (isPrimo) {
      cont++;
      cad.push(i);
    }
  }

  document.getElementById("salida").innerHTML = cad.join(", ");
}
