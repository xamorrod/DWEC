// Añadir manejador de eventos que cuandod haya una selección y se pulse el boton devuelva los datos que tenemos de la provincia

let boton = document.getElementsByName("boton")[0];
boton.addEventListener("click", function () {
  let nombre = document.getElementById("provincias").value;
  console.log("La provincia es: " + nombre);
});
