// Añadir manejador de eventos que cuandod haya una selección y se pulse el boton devuelva los datos que tenemos de la provincia

let boton = document.getElementsByName("boton")[0];
boton.addEventListener("click", function () {
  let valoresSelecc = [];
  let nombres = document.getElementById("provincias");

  for (let opcion of nombres.options    ) {
    if (opcion.selected) {
      valoresSelecc.push(opcion);
      console.log("La provincia es: " + opcion.value);
    }
  }
});
