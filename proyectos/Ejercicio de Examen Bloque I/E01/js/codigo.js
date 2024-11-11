"use strict";

const a = new Arbol(1001, 25, "pino");
const b = new Perenne(1002, 25, "pino", true);
console.log(a.toHTMLRow());
console.log(b.toHTMLRow());

// Variables globales
let oVivero = new Vivero();

datosIniciales();

function datosIniciales() {
  oVivero.altaArbol(new Perenne(1, 100, "Olivo", true));
  oVivero.altaArbol(new Caduco(2, 78, "Melocotonero", "abril"));
  oVivero.altaArbol(new Perenne(3, 50, "Ciprés", false));
  oVivero.altaArbol(new Perenne(4, 75, "Pino piñonero", true));
  oVivero.altaArbol(new Caduco(5, 81, "Melocotonero", "abril"));
  oVivero.altaArbol(new Caduco(6, 110, "Manzano", "mayo"));
  oVivero.altaArbol(new Perenne(7, 80, "Cedro", false));
  oVivero.altaArbol(new Caduco(8, 67, "Naranjo", "marzo"));
  oVivero.altaArbol(new Perenne(9, 90, "Alcornoque", true));
  oVivero.altaArbol(new Caduco(10, 70, "Peral", "marzo"));
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaArbol":
      frmAltaArbol.style.display = "block";
      break;
    case "frmTallaje":
      frmTallaje.style.display = "block";
      break;
    case "frmListadoPerennes":
      frmListadoPerennes.style.display = "block";
      break;
    case "frmListadoCaducos":
      frmListadoCaducos.style.display = "block";
      break;
    case "TotalArboles":
      alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
      break;
  }
}

function mostrarAltaArbol() {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario
  frmAltaArbol.style.display = "block";
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

// aceptarAltaArbol
function aceptarAltaArbol() {
  // Insertar el nuevo árbol
  const codigo = document.frmAltaArbol.txtCodigo.value;
  const tallaje = document.frmAltaArbol.txtTallaje.value;
  const especie = document.frmAltaArbol.txtEspecie.value;
  const tipoArbol = document.frmAltaArbol.rbtTipoArbol.value;
  let oArbol;
  if (!codigo || !tallaje || !especie || !tipoArbol) {
    alert("Rellena todos los parámetros");
    return false;
  }
  if (tipoArbol == "perenne") {
    const frutal = document.frmAltaArbol.rbtFrutal.value === "S";
    oArbol = new Perenne(codigo, tallaje, especie, frutal);
  } else if (tipoArbol == "caduco") {
    const mesFloracion = document.frmAltaArbol.txtMesFloracion.value;
    if (!mesFloracion) {
      alert("El mes de floración es obligatorio para árboles caducos.");
      return false;
    }
    oArbol = new Caduco(codigo, tallaje, especie, mesFloracion);
  }

  if (oVivero.altaArbol(oArbol)) {
    alert("Arbol registrado OK");
    frmAltaArbol.reset(); // Vaciamos los campos del formulario
    frmAltaArbol.style.display = "none";
  } else {
    alert("Arbol registrado previamente");
  }
}

function aceptarTallaje() {
  let sRespuesta;
  /*Llamada a tallajeArbol*/
  const iCodigo = document.frmTallaje.txtCodigoArbol.value;
  const iTallaje = document.frmTallaje.txtTallajeArbol.value;
  sRespuesta = oVivero.tallajeArbol(iCodigo, iTallaje);

  alert(sRespuesta);

  if (sRespuesta.includes("Correcto")) {
    frmTallaje.reset();
    frmTallaje.style.display = "none";
  }
}

function aceptarListadoPerennes() {
  //Crear el listado
  const iAlturaMinima = document.frmListadoPerennes.txtAlturaMinima.value;
  const listPerennes = oVivero.listadoPerennes(iAlturaMinima);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles perennes de altura mínima: " +
      iAlturaMinima +
      " cm</h1>"
  );
  //Añadimos el código para crear una tabla
  oVentana.document.write(
    "<table><thead>Tabla de árboles perennes</thead><tbody>"
  );
  for (let arbolPerenne of listPerennes) {
    let seccionTablaPerenne = arbolPerenne.toHTMLRow();
    console.log(seccionTablaPerenne);
    oVentana.document.write(seccionTablaPerenne);
  }

  oVentana.document.write("</tbody></table>");

  oVentana.document.close();
  oVentana.document.title = "Listado perennes";

  // Reseteamos y ocultamos el formulario
  frmListadoPerennes.reset();
  frmListadoPerennes.style.display = "none";
}

function aceptarListadoCaducos() {
  //Crear el listado
  const sMesFloracion = document.frmListadoCaducos.txtMesListado.value;
  const listCaduco = oVivero.listadoCaducos(sMesFloracion);
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles caducos con floración el mes: " +
      sMesFloracion +
      "</h1>"
  );
  oVentana.document.write(
    "<table><thead>Tabla de árboles caducos</thead><tbody>"
  );
  for (let arbolCaduco of listCaduco) {
    let seccionTablaCaduco = arbolCaduco.toHTMLRow();
    oVentana.document.write(seccionTablaCaduco);
  }

  oVentana.document.write("</tbody></table>");
  oVentana.document.close();
  oVentana.document.title = "Listado caducos";

  // Reseteamos y ocultamos el formulario
  frmListadoCaducos.reset();
  frmListadoCaducos.style.display = "none";
}

function totalArbolesVenta() {
  alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
}
