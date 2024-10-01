function imprimePrimos() {
  let cont = 0;
  let cad = new Array();
  

  while (cont < 100) {
    for (let i = 0; cont < 100; i++) {
      let isPrimo = true;
      if (i > 2) {
        for (let j = 2; j < Math.sqrt(i); j++) {
          if (i % j == 0) {
            isPrimo = false;
          }
        }
        if(isPrimo){
            cont++;
            cad.concat(i);
        }
      }
    }
  }
  document.getElementById("salida").innerHTML = cad;
}
