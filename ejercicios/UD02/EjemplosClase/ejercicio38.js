function isPrimo() {
  let num = Number(document.formPrimo.num.value);
  let output;
  let isPrimo = true;
  if (num < 2) {
    isPrimo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        isPrimo = false;
      }
    }
  }

  output = isPrimo ? "El número es primo" : "El número no es primo";
  document.getElementById("salida").innerHTML = output;
}
