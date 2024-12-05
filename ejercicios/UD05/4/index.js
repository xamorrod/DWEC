function agregarProvincia() {
  let codigo = document.getElementById("txtCodigo").value;
  let nombre = document.getElementById("txtProvincia").value;

  //Código para agregar la provincia a la lista

  let salida = "";
  salida += "<option value=" + codigo + ">" + nombre + "</option>";
  frmEntrada.lstProvincias.innerHTML += salida;
}

function exiteProvincia(codigo) {
  // Pendiente
}

function pasarDerecha() {
  //usando append
}

function pasarIzquierda() {}
