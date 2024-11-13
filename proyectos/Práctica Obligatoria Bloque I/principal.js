// Variables globales
let oAgencia = new Agencia();

datosIniciales();

function datosIniciales() {
  // Añadir clientes
  oAgencia.altaCliente(new Cliente("12345678A", "Juan", "Pérez"));
  oAgencia.altaCliente(new Cliente("87654321B", "María", "González"));

  // Añadir alojamientos
  oAgencia.altaAlojamiento(new Habitacion(1, 2, true));
  oAgencia.altaAlojamiento(new Apartamento(2, 4, true, 2));
  oAgencia.altaAlojamiento(new Habitacion(3, 3, false));

  // Añadir reservas
  let cliente1 = oAgencia.clientes[0];
  let cliente2 = oAgencia.clientes[1];
  let alojamiento1 = oAgencia.alojamientos[0];
  let alojamiento2 = oAgencia.alojamientos[1];

  oAgencia.altaReserva(
    new Reserva(
      1,
      cliente1,
      [alojamiento1],
      new Date("2024-12-01"),
      new Date("2024-12-10")
    )
  );
  oAgencia.altaReserva(
    new Reserva(
      2,
      cliente2,
      [alojamiento2],
      new Date("2024-12-05"),
      new Date("2024-12-15")
    )
  );
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCliente":
      frmAltaCliente.style.display = "block";
      break;
    case "frmAltaAlojamiento":
      frmAltaAlojamiento.style.display = "block";
      break;
    case "frmAltaReserva":
      frmAltaReserva.style.display = "block";
      break;
    case "frmBajaReserva":
      frmBajaReserva.style.display = "block";
      break;
    case "frmListadoCliente":
      frmListadoCliente.style.display = "block";
      break;
    case "frmListadoAlojamientos":
      frmListadoAlojamientos.style.display = "block";
      break;
    case "frmListadoReservasPorCliente":
      frmListadoReservasPorCliente.style.display = "block";
      break;
    case "frmListadoReservasEntreFechas":
      frmListadoReservasEntreFechas.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

//Funcion aceptar alta cliente

function aceptarAltaCliente() {
  let oCliente;
  const dniCliente = document.frmAltaCliente.txtDni.value;
  const nombreCliente = document.frmAltaCliente.txtNombre.value;
  const apellidoCliente = document.frmAltaCliente.txtApellidos.value;
  if (!dniCliente || !nombreCliente || !apellidoCliente) {
    alert("Rellene todos los parámetros");
    return;
  }

  oCliente = new Cliente(dniCliente, nombreCliente, apellidoCliente);

  const mensaje = oAgencia.altaCliente(oCliente);
  alert(mensaje);
  if (mensaje.includes("correctamente")) {
    alert("Cliente registrado OK");
    frmAltaCliente.reset();
    frmAltaCliente.style.display = "none";
  }
}

function aceptarAltaAlojamiento() {
  let oAlojamiento;
  const idAlojamiento = document.frmAltaAlojamiento.txtIdAlojamiento.value;
  const numPersonas = document.frmAltaAlojamiento.txtNumeroPersonas.value;
  const parking = document.querySelector(
    'input[name="rbtParking"]:checked'
  )?.value;
  const desayuno = document.querySelector(
    'input[name="rbtDesayuno"]:checked'
  )?.value;
  const dormitorios = document.frmAltaAlojamiento.txtDormitorios.value;

  if (idAlojamiento && numPersonas && desayuno && !parking && !dormitorios) {
    //Habitacion
    oAlojamiento = new Habitacion(idAlojamiento, numPersonas, desayuno);
  } else if (
    idAlojamiento &&
    numPersonas &&
    parking &&
    dormitorios &&
    !desayuno
  ) {
    //Apartamento
    oAlojamiento = new Apartamento(
      idAlojamiento,
      numPersonas,
      parking,
      dormitorios
    );
  } else {
    alert("Rellena el campo opcional desayuno o parking y dormitorios ");
    frmAltaAlojamiento.reset();
  }
  if (oAgencia.altaAlojamiento(oAlojamiento)) {
    alert("Alojamiento registrado OK");
    frmAltaAlojamiento.reset(); // Vaciamos los campos del formulario
    frmAltaAlojamiento.style.display = "none";
  } else {
    alert("Alojamiento no registrado");
  }
}

function aceptarAltaReserva() {
  let oReserva;
}
