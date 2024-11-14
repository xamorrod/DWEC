// Variables globales
let oAgencia = new Agencia();

// Función datos de prueba, puede llamarse para no tener que introducir datos manualmente

function datosPrueba() {
  let cliente1 = new Cliente("12345678A", "Juan", "Pérez");
  let cliente2 = new Cliente("87654321B", "Ana", "Gómez");
  oAgencia.altaCliente(cliente1);
  oAgencia.altaCliente(cliente2);
  let habitacion1 = new Habitacion(101, 2, true, false, 1);
  let habitacion2 = new Habitacion(102, 4, false, true, 2);
  let apartamento1 = new Apartamento(201, 6, true, false);
  oAgencia.altaAlojamiento(habitacion1);
  oAgencia.altaAlojamiento(habitacion2);
  oAgencia.altaAlojamiento(apartamento1);
  let reserva1 = new Reserva(
    1,
    cliente1,
    [habitacion1, habitacion2],
    new Date("2024-11-01"),
    new Date("2024-11-05")
  );
  let reserva2 = new Reserva(
    2,
    cliente2,
    [apartamento1],
    new Date("2024-11-10"),
    new Date("2024-11-15")
  );

  // Agregar las reservas a la agencia
  oAgencia.altaReserva(reserva1);
  oAgencia.altaReserva(reserva2);
}

// Mostrar el formulario correspondiente
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();
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
    case "frmListadoHabitacionesDesayuno":
      frmListadoHabitacionesDesayuno.style.display = "block";
      break;
    
  }
}

// Mostrar u ocultar campos en el alta de alojamiento
function mostrarCampos() {
  const tipoAlojamiento = document.getElementById(
    "selectTipoAlojamiento"
  ).value;
  document.getElementById("campoDesayuno").style.display =
    tipoAlojamiento === "habitacion" ? "block" : "none";
  document.getElementById("campoParking").style.display =
    tipoAlojamiento === "apartamento" ? "block" : "none";
  document.getElementById("campoDormitorios").style.display =
    tipoAlojamiento === "apartamento" ? "block" : "none";
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");
  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
    document.getElementById("tablaReservasClientes").innerHTML = "";
    document.getElementById("tablaReservasClientesFecha").innerHTML = "";
  }
}

//-----------------Funcion aceptar alta cliente--------------------------

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

  if (mensaje.includes("correctamente")) {
    alert(mensaje);
    frmAltaCliente.reset();
    frmAltaCliente.style.display = "none";
  } else {
    alert(mensaje);
  }
}

//-----------------Funcion aceptar alta alojamiento--------------------------

function aceptarAltaAlojamiento() {
  let oAlojamiento;
  let salida;
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
    alert("Debe rellenar todos los campos");
    frmAltaAlojamiento.reset();
  }
  const mensaje = oAgencia.altaAlojamiento(oAlojamiento);
  if (mensaje.includes("ID")) {
    alert(mensaje);
    frmAltaAlojamiento.reset(); 
    frmAltaAlojamiento.style.display = "none";
  } else {
    //Mensaje de salida si coindice con uno ya creado en el metodo altaAlojamiento
    alert(mensaje);
  }
}

//-----------------Funcion aceptar alta reserva--------------------------

function aceptarAltaReserva() {
  let oReserva;

  const idReserva = document.frmAltaReserva.txtIdReserva.value;
  const dniCliente = document.frmAltaReserva.txtClienteDni.value;
  const idAlojamientos = document.frmAltaReserva.txtIdAlojamientoReserva.value;
  const fechaEntrada = new Date(document.frmAltaReserva.txtFechaEntrada.value);
  const fechaSalida = new Date(document.frmAltaReserva.txtFechaSalida.value);

  if (
    !idReserva ||
    !dniCliente ||
    !idAlojamientos ||
    !fechaEntrada ||
    !fechaSalida
  ) {
    alert("Rellena todos los campos");
    return;
  }

  // Verificamos si el ID de la reserva ya existe
  for (let reserva of oAgencia.reservas) {
    if (reserva.idReserva == idReserva) {
      alert("No puede repetir el id de la reserva");
      return;
    }
  }

  // Crear array de alojamientos y verificar que todos existen en la agencia
  const listaAlojamientos = idAlojamientos
    .split(",")
    .map((id) => id.trim())
    .map((id) => ({ idAlojamiento: id }));

  const listaIdAlojamientos = oAgencia.alojamientos.map(
    (alojamiento) => alojamiento.idAlojamiento
  );

  // Verificación de que todos los alojamientos estén en la agencia
  const alojamientosExistentes = listaAlojamientos.every((alojamiento) =>
    listaIdAlojamientos.includes(alojamiento.idAlojamiento)
  );

  if (!alojamientosExistentes) {
    alert("Uno o más alojamientos no existen en la agencia");
    return;
  }

  // Verificamos que los alojamientos no estén repetidos
  if (!checkAlojamiento(listaAlojamientos)) {
    return;
  }

  // Obtenemos el objeto cliente que quiere realizar la reserva
  const oCliente = obtenerClientePorDni(dniCliente);
  if (!oCliente) {
    alert("Cliente no encontrado");
    return;
  }

  // Verificamos que no haya reservas en esas fechas
  const esDisponible = checkReservado(
    oAgencia,
    listaAlojamientos,
    fechaEntrada,
    fechaSalida
  );

  if (!esDisponible) {
    alert("Algunos alojamientos ya están reservados en esas fechas.");
    return;
  }

  // Verificamos que las fechas sean válidas
  const fechasValidas = checkFecha(fechaEntrada, fechaSalida);
  if (!fechasValidas) {
    alert("Las fechas de reserva no son válidas.");
    return;
  }

  // Creamos la reserva con los datos válidos
  oReserva = new Reserva(
    idReserva,
    oCliente,
    listaAlojamientos,
    fechaEntrada,
    fechaSalida
  );

  // Intentamos añadir la reserva a la agencia
  const mensaje = oAgencia.altaReserva(oReserva);
  if (mensaje.includes("ID")) {
    alert(mensaje);
    frmAltaReserva.reset(); 
    frmAltaReserva.style.display = "none";
  } else {
    // Si no se puede realizar la reserva, mostramos el mensaje de error
    alert(mensaje);
  }
}

// Verificar que el alojamiento no se repite
function checkAlojamiento(alojamientos) {
  const alojamientosUnicos = alojamientos.filter(
    (alojamiento, index, self) =>
      self.findIndex((a) => a.idAlojamiento === alojamiento.idAlojamiento) ===
      index
  );
  if (alojamientosUnicos.length === alojamientos.length) {
    return true;
  }
  alert("Se está intentando reservar un alojamiento repetido");
  return false;
}

// Verificar que el alojamiento no esté reservado en las fechas solicitadas
function checkReservado(agencia, alojamientos, fechaInicio, fechaFin) {
  for (let reserva of agencia.reservas) {
    for (let alojamiento of reserva.alojamientos) {
      if (
        alojamientos.some(
          (al) => al.idAlojamiento === alojamiento.idAlojamiento
        )
      ) {
        if (
          (fechaInicio >= reserva.fechaInicio &&
            fechaInicio <= reserva.fechaFin) ||
          (fechaFin >= reserva.fechaInicio && fechaFin <= reserva.fechaFin) ||
          (fechaInicio <= reserva.fechaInicio && fechaFin >= reserva.fechaFin)
        ) {
          alert("Alojamiento ya reservado en esas fechas");
          return false;
        }
      }
    }
  }
  return true;
}

// Verificar que las fechas de reserva no sean incorrectas
function checkFecha(fechaInicio, fechaFin) {
  const fechaActual = new Date();
  if (fechaActual > fechaInicio || fechaActual > fechaFin) {
    alert("Se está intentando reservar en un plazo incorrecto");
    return false;
  }
  return true;
}

function obtenerClientePorDni(dniCliente) {
  return (
    oAgencia.clientes.find((cliente) => cliente.dniCliente === dniCliente) ||
    null
  );
}

//-----------------Funcion aceptar baja reserva--------------------------

function aceptarBajaReserva() {
  const idReserva = document.frmBajaReserva.txtIdReservaEliminar.value;

  // Acceder a la lista de reservas de la agencia
  const listaReservas = oAgencia.reservas;

  // Buscar la reserva con el id dado
  let oReserva = listaReservas.find(
    (reserva) => reserva.idReserva == idReserva
  );

  if (!oReserva) {
    alert("Reserva no encontrada");
    return;
  }

  // Si la reserva existe, eliminarla de la agencia
  const mensaje = oAgencia.bajaReserva(idReserva);
  if (mensaje.includes("correctamente")) {
    alert("Reserva eliminada correctamente");
    frmBajaReserva.reset();
    frmBajaReserva.style.display = "none";
  } else {
    alert(mensaje);
  }
}

//-----------------Funcion introducir lista clientes --------------------------
// esta función implementa la lógica de la clase Agencia y se encarga de introducir dicha lista en el HTML

function introducirlistadoClientes() {

  let salida = oAgencia.listarClientes();
  document.getElementById("tablaClientes").innerHTML = salida;
}

//-----------------Funcion introducir lista alojamientos --------------------------
// esta función implementa la lógica de la clase Agencia y se encarga de introducir dicha lista en el HTML

function introducirlistadoAlojamientos() {

  let salida = oAgencia.listadoAlojamientos();
  document.getElementById("tablaAlojamientos").innerHTML = salida;
}

//-----------------Funcion introducir lista reserva por cliente --------------------------
// esta función implementa la lógica de la clase Agencia y se encarga de introducir dicha lista en el HTML

function introducirlistadoReservaCliente() {

  const idCliente = document.frmListadoReservasPorCliente.clienteID.value;
  if (idCliente) {
    let salida = oAgencia.listadoReservasCliente(idCliente);
    document.getElementById("tablaReservasClientes").innerHTML = salida;
  } else {
    alert("Rellena la Id del cliente");
  }
}

//-----------------Funcion introducir lista reserva entre fechas--------------------------
// esta función implementa la lógica de la clase Agencia y se encarga de introducir dicha lista en el HTML

function introducirlistadoFechas() {

  const fechaSalida = document.frmListadoReservasEntreFechas.fechaSalida.value;
  const fechaLlegada =
    document.frmListadoReservasEntreFechas.fechaLlegada.value;

  if (fechaSalida && fechaLlegada) {
    // Aquí llamas a la función para obtener las reservas entre las fechas
    let salida = oAgencia.listadoReservas(fechaSalida, fechaLlegada);
    document.getElementById("tablaReservasClientesFecha").innerHTML = salida;
  } else {
    alert("Por favor, introduce ambas fechas.");
  }
}

//-----------------Funcion introducir lista hoteles con desayuno ordenada --------------------------
// esta función implementa la lógica de la clase Agencia y se encarga de introducir dicha lista en el HTML

function introducirlistadoHotelesDesayuno() {

  let salida = oAgencia.listadoHabitacionesConDesayuno();
  document.getElementById("tablaHotelesDesayuno").innerHTML = salida;
}
