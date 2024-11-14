//Implementación de clases necesarias para el programa Franquicia Dos Hermanas

class Agencia {
  //Atributos

  _clientes;
  _reservas;
  _alojamientos;

  //Constructor

  constructor() {
    this.clientes = [];
    this.reservas = [];
    this.alojamientos = [];
  }

  // Getters && Setters

  get clientes() {
    return this._clientes;
  }

  set clientes(clientes) {
    this._clientes = clientes;
  }

  get reservas() {
    return this._reservas;
  }

  set reservas(reservas) {
    this._reservas = reservas;
  }

  get alojamientos() {
    return this._alojamientos;
  }

  set alojamientos(alojamientos) {
    this._alojamientos = alojamientos;
  }

  // Métodos

  altaCliente(oCliente) {
    if (!(oCliente instanceof Cliente)) {
      return "El cliente no es válido";
    }

    for (let cliente of this.clientes) {
      if (oCliente.dniCliente == cliente.dniCliente) {
        return "El cliente ya está registrado";
      }
    }

    this.clientes.push(oCliente);
    return `Cliente ${oCliente.nombre} registrado correctamente`;
  }
  altaAlojamiento(oAlojamiento) {
    if (!oAlojamiento instanceof Alojamiento) {
      return "El alojamiento no es válido";
    }
    for (let alojamiento of this.alojamientos) {
      if (oAlojamiento.idAlojamiento == alojamiento.idAlojamiento) {
        return "El alojamiento ya está registrado";
      }
    }

    this.alojamientos.push(oAlojamiento);
    return `Se ha introducido el alojamiento con ID: ${oAlojamiento.idAlojamiento}`;

    //Devuelve str
  }
  altaReserva(oReserva) {
    //Devuelve str
    if (oReserva instanceof Reserva && !this.reservas.includes(oReserva)) {
      this.reservas.push(oReserva);
      return `Se ha introducido la reserva con ID: ${oReserva.idReserva}`;
    }
  }
  bajaReserva(idReserva) {
    //Devuelve str
    for (let reserva of this.reservas) {
      //Buscamos la ocurrencia de la id para poder dar de baja ese objeto reserva y sacarlo del array
      if (reserva.idReserva == idReserva) {
        this.reservas.pop(reserva);
        return `Se ha eliminado la reserva con ID: ${reserva.idReserva}`;
      }
    }
    alert("No se ha encontrado la reserva introducida");
  }

  listarClientes() {
    let salida = `<table class="table table-hover table-striped table-bordered table-sm">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">DNI Cliente</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Usuario</th>
                      </tr>
                    </thead>
                    <tbody>`;

    if (this.clientes.length > 0) {
      for (let cliente of this.clientes) {
        salida += cliente.toHTMLRow();
      }
    } else {
      salida +=
        "<tr><td colspan='4' class='text-center'>No hay clientes registrados</td></tr>";
    }

    salida += `</tbody></table>`;
    return salida;
  }

  listadoAlojamientos() {
    let salida = `<table class="table table-hover table-striped table-bordered table-sm">
                    <thead class="thead-dark">
                    <tr>
                      <th scope="col">Id Alojamiento</th>
                      <th scope="col">Num Personas</th>
                      <th scope="col">Desayuno</th>
                      <th scope="col">Parking</th>
                      <th scope="col">Dormitorio</th>
                    </tr>
                  </thead>
                  <tbody>`;

    if (this.alojamientos.length > 0) {
      for (let alojamiento of this.alojamientos) {
        if (alojamiento instanceof Habitacion) {
          salida += alojamiento.toHTMLRowHabitacion();
        } else if (alojamiento instanceof Apartamento) {
          salida += alojamiento.toHTMLRowApartamento();
        }
      }
    } else {
      salida +=
        "<tr><td colspan='4' class='text-center'>No hay alojamientos registrados</td></tr>";
    }

    salida += `</tbody></table>`;
    return salida;
  }

  listadoReservas(fechaInicio, fechaFin) {
    // Crear el encabezado de la tabla
    let salida =
      "<table class='table table-bordered'><thead><tr><th>ID Reserva</th><th>DNI Cliente</th><th>Alojamientos</th><th>Fecha Inicio</th><th>Fecha Fin</th></tr></thead><tbody>";

    // Convertir las fechas de entrada a formato de cadena (si es necesario)
    const fechaInicioString = new Date(fechaInicio).toISOString().split("T")[0]; // 'YYYY-MM-DD'
    const fechaFinString = new Date(fechaFin).toISOString().split("T")[0]; // 'YYYY-MM-DD'

    // Iterar sobre las reservas
    for (let reserva of this.reservas) {
      // Asegurarse de que las fechas también están en el formato correcto
      const reservaFechaInicio = new Date(reserva.fechaInicio)
        .toISOString()
        .split("T")[0];
      const reservaFechaFin = new Date(reserva.fechaFin)
        .toISOString()
        .split("T")[0];

      // Comparar las fechas de inicio y fin
      if (
        reservaFechaInicio === fechaInicioString &&
        reservaFechaFin === fechaFinString
      ) {
        salida += reserva.toHTMLRow(reserva.cliente.dniCliente); // Agregar la fila correspondiente
      }
    }

    // Cerrar la tabla
    salida += "</tbody></table>";

    return salida;
  }
  listadoReservasCliente(dniCliente) {
    // Comienza la estructura HTML de la tabla
    let salida = `
      <table class="table table-hover table-striped table-bordered table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID Reserva</th>
            <th scope="col">DNI Cliente</th>
            <th scope="col">Alojamientos</th>
            <th scope="col">Fecha de Inicio de Reserva</th>
            <th scope="col">Fecha de Fin de Reserva</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Variable para verificar si se encontró alguna reserva
    let reservasEncontradas = false;

    // Recorremos las reservas para mostrar solo las del cliente específico
    for (let reserva of this.reservas) {
      if (reserva.cliente.dniCliente === dniCliente) {
        reservasEncontradas = true;
        salida += reserva.toHTMLRow(dniCliente); // Generamos la fila de cada reserva
      }
    }

    // Si no se encontraron reservas, mostramos un mensaje en la tabla
    if (!reservasEncontradas) {
      salida += `
        <tr>
          <td colspan="4" class="text-center">No se encontraron reservas para este cliente.</td>
        </tr>
      `;
    }

    // Cerramos la tabla
    salida += `</tbody></table>`;

    return salida;
  }

  listadoHabitacionesConDesayuno() {
    //Devuelve HTML table
    const listaAlojamientos = [];
    let salida =
      "<table><thead>Listado de habitaciones con desayuno incluido</thead>";
    for (let alojamiento of this.alojamientos) {
      if (alojamiento instanceof Habitacion && alojamiento.desayuno == true) {
        listaAlojamientos.push(alojamiento);
      }
    }
    const listadoOrdenado = listaAlojamientos.sort((a, b) => {
      if (a.numPersonas == b.numPersonas) {
        return a.idAlojamiento - b.idAlojamiento;
      }
      return b.numPersonas - a.numPersonas;
    });

    for (let alojamiento of listadoOrdenado) {
      salida += alojamiento.toHTMLRow();
    }
    salida += "</table>";
    return salida;
  }
}

class Cliente {
  // Atributos
  _dniCliente;
  _nombre;
  _apellidos;
  _usuario;

  // Constructor

  constructor(dniCliente, nombre, apellidos) {
    this.dniCliente = dniCliente;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.usuario = this.obtenerUsuario(nombre, apellidos, dniCliente);
  }

  // Getters && Setters

  get dniCliente() {
    return this._dniCliente;
  }

  set dniCliente(dniCliente) {
    this._dniCliente = dniCliente;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(apellidos) {
    this._apellidos = apellidos;
  }

  get usuario() {
    return this._usuario;
  }

  set usuario(usuario) {
    this._usuario = usuario;
  }

  // Métodos

  //Método que devuelve el nombre de usuario según las especificaciones del programa

  obtenerUsuario(nombre, apellidos, dniCliente) {
    return (
      nombre.charAt(0) +
      apellidos.substring(0, 3) +
      dniCliente.substring(dniCliente.length - 4)
    );
  }
  toHTMLRow() {
    let valores = Object.values(this);
    let salida = "<tr>";
    for (let valor of valores) {
      salida += "<td>" + valor + "</td>";
    }
    salida += "</tr>";
    return salida;
  }
}

class Reserva {
  // Atributos

  _idReserva;
  _cliente;
  _alojamientos = [];
  _fechaInicio;
  _fechaFin;

  // Constructor

  constructor(idReserva, cliente, alojamientos, fechaInicio, fechaFin) {
    this.idReserva = idReserva;
    this.cliente = cliente;
    this.alojamientos = alojamientos;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }

  // Getters && Setters

  get idReserva() {
    return this._idReserva;
  }

  set idReserva(idReserva) {
    this._idReserva = idReserva;
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(cliente) {
    this._cliente = cliente;
  }

  get alojamientos() {
    return this._alojamientos;
  }

  set alojamientos(alojamientos) {
    this._alojamientos = alojamientos;
  }

  get fechaInicio() {
    return this._fechaInicio;
  }

  set fechaInicio(fechaInicio) {
    this._fechaInicio = fechaInicio;
  }

  get fechaFin() {
    return this._fechaFin;
  }

  set fechaFin(fechaFin) {
    this._fechaFin = fechaFin;
  }

  // Métodos

  //Comprobar alojamiento COmprobacuiones movidas a principal

  checkAlojamiento() {
    // Comprobamos si algún alojamiento ya está reservado
    const alojamientosUnicos = this.alojamientos.filter(
      (alojamiento, index, self) =>
        self.findIndex((a) => a.idAlojamiento === alojamiento.idAlojamiento) ===
        index
    );

    if (alojamientosUnicos.length === this.alojamientos.length) {
      // No hay alojamientos repetidos
      return true;
    }
    alert("Se está intentando reservar un alojamiento repetido");
    return false;
  }

  //Comprobar si no esta reservado

  checkReservado(agencia, alojamientos) {
    //Lógica que checkea si cada alojamiento pertenece a otra reserva o no
    for (let reserva of agencia.reservas) {
      for (let alojamiento of reserva.alojamientos) {
        if (
          alojamientos.some(
            (al) => al.idAlojamiento === alojamiento.idAlojamiento
          )
        ) {
          // Hemos encontrado una ocurrencia en la que se está intentando repetir
          alert("Alojamiento ya reservado en esas fechas");
          return false;
        }
      }
    }
    return true;
  }

  //Comprobar fecha

  checkFecha(fechaInicio, fechaFin) {
    const fechaActual = new Date();
    if (fechaActual > fechaInicio || fechaActual > fechaFin) {
      alert("Se está intentando reservar en un plazo incorrecto");
      return false;
    }
    return true;
  }

  toHTMLRow(dniCliente) {
    let conjuntoAlojamientos = " ";
    for (let alojamiento of this.alojamientos) {
      conjuntoAlojamientos += alojamiento.idAlojamiento + " ";
    }

    return `
    <tr>
      <td>${this.idReserva}</td>
      <td>${dniCliente}</td>
      <td>
        <ul>${conjuntoAlojamientos.trim()}</ul>
      </td>
      <td>${new Date(this.fechaInicio).toLocaleDateString()}</td>
      <td>${new Date(this.fechaFin).toLocaleDateString()}</td>
    </tr>
  `;
  }
}

class Alojamiento {
  // Atributos

  _idAlojamiento;
  _numPersonas;
  //Atributo añadido para controlar los alojamientos
  _recuentoAlojamiento = [];

  // Constructor

  constructor(idAlojamiento, numPersonas) {
    if (this.recuentoAlojamientos(idAlojamiento)) {
      this.idAlojamiento = idAlojamiento;
      this.numPersonas = numPersonas;
    }
  }

  // Getters && Setters

  get idAlojamiento() {
    return this._idAlojamiento;
  }

  set idAlojamiento(idAlojamiento) {
    this._idAlojamiento = idAlojamiento;
  }

  get numPersonas() {
    return this._numPersonas;
  }

  set numPersonas(numPersonas) {
    this._numPersonas = numPersonas;
  }

  // Métodos

  // Creamos un método para llevar el recuento de los alojamientos y evitar duplicados

  recuentoAlojamientos(idAlojamiento) {
    if (this._recuentoAlojamiento.includes(idAlojamiento)) {
      alert("La licencia de alojamiento ya está en uso");
      return false;
    } else {
      this._recuentoAlojamiento.push(idAlojamiento);
      return true;
    }
  }

  toHTMLRow() {
    let valores = Object.values(this);
    let salida = "<tr>";
    for (let valor of valores) {
      salida += "<td>" + valor + "</td>";
    }
    salida += "</tr>";
    return salida;
  }
}

class Habitacion extends Alojamiento {
  // Atributos

  _desayuno;

  // Constructor

  constructor(idAlojamiento, numPersonas, desayuno) {
    super(idAlojamiento, numPersonas);
    this.desayuno = desayuno;
  }

  // Getters && Setters

  get desayuno() {
    return this._desayuno;
  }

  set desayuno(desayuno) {
    this._desayuno = desayuno;
  }

  // Métodos

  toHTMLRowHabitacion() {
    return `
      <tr>
        <td>${this.idAlojamiento}</td>
        <td>${this.numPersonas}</td>
        <td>${this.desayuno}</td> <!-- Solo desayuno para Habitacion -->
        <td>No disponible</td>
        <td>No disponible</td>
      </tr>
    `;
  }
}

class Apartamento extends Alojamiento {
  // Atributos

  _parking;
  _dormitorios;

  // Constructor

  constructor(idAlojamiento, numPersonas, parking, dormitorios) {
    super(idAlojamiento, numPersonas);
    this.parking = parking;
    this.dormitorios = dormitorios;
  }

  // Getters && Setters

  get parking() {
    return this._parking;
  }

  set parking(parking) {
    this._parking = parking;
  }

  get dormitorios() {
    return this._dormitorios;
  }

  set dormitorios(dormitorios) {
    this._dormitorios = dormitorios;
  }

  // Métodos

  toHTMLRowApartamento() {
    return `
      <tr>
        <td>${this.idAlojamiento}</td>
        <td>${this.numPersonas}</td>
        <td>No disponible</td> <!-- No hay desayuno en Apartamento -->
        <td>${this.parking}</td> <!-- Solo parking -->
        <td>${this.dormitorios}</td> <!-- Solo dormitorios -->
      </tr>
    `;
  }
}
