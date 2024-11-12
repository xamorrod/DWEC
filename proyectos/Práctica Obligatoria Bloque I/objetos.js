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
    console.log(oCliente)
    if (!(oCliente instanceof Cliente)) {
      return "El cliente no es válido";
    }

    for (let cliente of this.clientes) {
      if(oCliente.dniCliente == cliente.dniCliente){
        return "El cliente ya está registrado";
      }
    }

    this.clientes.push(oCliente);
    return `Cliente ${oCliente.nombre} registrado correctamente`;
  }
  altaAlojamiento(oAlojamiento) {
    if (
      oAlojamiento instanceof Alojamiento &&
      !this.alojamientos.includes(oAlojamiento)
    ) {
      this.alojamientos.push(oAlojamiento);
      return `Se ha introducido el alojamiento con ID: ${oAlojamiento.idAlojamiento}`;
    }

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

  listadoClientes() {
    //Devuelve HTML table
    //Obtiene los atrib del objeto usando el metodo de la clase toHTMLRow
    let salida = "<table><thead>Listado de clientes</thead>";
    for (let cliente of this.clientes) {
      salida += cliente.toHTMLRow();
    }
    salida += "</table>";
    return salida;
  }

  listadoAlojamientos() {
    //Devuelve HTML table
    let salida = "<table><thead>Listado de alojamientos</thead>";
    for (let alojamiento of this.alojamientos) {
      salida += alojamiento.toHTMLRow();
    }
    salida += "</table>";
    return salida;
  }
  listadoReservas(fechaInicio, fechaFin) {
    //Devuelve HTML table
    let salida = "<table><thead>Listado de reservas entre fechas</thead>";
    for (let reserva of this.reservas) {
      if (reserva.fechaInicio == fechaInicio && reserva.fechaFin == fechaFin) {
        //TODO: Atributos acotados por el enunciado
        salida += reserva.toHTMLRow();
      }
    }
    salida += "</table>";
    return salida;
  }
  listadoReservasCliente(dniCliente) {
    //Devuelve HTML table
    let salida = "<table><thead>Listado de reservas de un cliente</thead>";
    for (let reserva of this.reservas) {
      if (reserva.cliente.dniCliente == dniCliente) {
        salida += reserva.toHTMLRow();
      }
    }
    salida += "</table>";
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
  _alojamientos;
  _fechaInicio;
  _fechaFin;

  // Constructor

  constructor(
    idReserva,
    cliente,
    alojamientos,
    fechaInicio,
    fechaFin,
    agencia
  ) {
    // Filtrar por alojamientos que no hayan sido reservados anteriormente en las fechas elegidas
    if (
      this.checkAlojamiento(alojamientos) &&
      this.checkFecha(fechaInicio, fechaFin) &&
      this.checkReservado(agencia, alojamientos)
    ) {
      this.idReserva = idReserva;
      this.cliente = cliente;
      this.alojamientos = alojamientos;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
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

  //Comprobar alojamiento

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

  // Carente ya que llamará al toHTMLRow del padre y este iterará sobre todos los atrib
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

  // Carente ya que llamará al toHTMLRow del padre y este iterará sobre todos los atrib
}
