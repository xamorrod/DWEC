function procesarForm () {
  let nombre = String(document.miForm.nombre.value);
  let apellido = String(document.miForm.apellido.value);
  document.getElementById("salida").innerHTML =
    "El nombre es: " + nombre + " y el apellido es " + apellido;
};

