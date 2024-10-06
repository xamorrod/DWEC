function checkPass() {
  let pass = String(document.formPass.password.value);
  pass = pass.trim();
  let errorPass = null;

  if (pass.length < 8 || pass.length > 16) {
    alert("La contraseña no es válida");
    errorPass = "La longitud de la contraseña no es válida";
  } else if (!/[a-zñ]/.test(pass)) {
    alert("La contraseña no es válida");
    // Realizamos esta comprobación ya que el matches devuelve un array con las coincidencias en minúsculas encontrada, por lo que si no encuentra ninguna en la comparación con null daría false
    errorPass = "La contraseña no contiene una letra minúscula";
  } else if (!/[A-ZÑ]/.test(pass)) {
    alert("La contraseña no es válida");
    errorPass = "La contraseña no contiene una letra mayúscula";
  } else if (!/[0-9]/.test(pass)) {
    alert("La contraseña no es válida");
    errorPass = "La contraseña no contiene un número";
  } else if (!/[-_@#$%&]/.test(pass)) {
    alert("La contraseña no es válida");
    errorPass = "La contraseña no contiene un carácter especial";
  }

  if (errorPass === null) {
    errorPass = "La contraseña cumple los estándares establecidos";
  }

  document.getElementById("output").innerHTML = errorPass;
}
