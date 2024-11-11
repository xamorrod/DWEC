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
    return this.alojamientos;
  }

  set alojamientos(alojamientos) {
    this._alojamientos = alojamientos;
  }

  // Métodos

  altaCliente(oCliente) {
    //Devuelve str
  }
  altaAlojamiento(oAlojamiento) {
    //Devuelve str
  }
  altaReserva(oReserva) {
    //Devuelve str
  }
  bajaReserva(idReserva) {
    //Devuelve str
  }
  listadoClientes() {
    //Deuelve HTML table
  }
  listadoAlojamientos() {
    //Devuelve HTML table
  }
  listadoReservas(fechaInicio, fechaFin) {
    //Devuelve HTML table
  }
  listadoReservasCliente(idCliente) {
    //Devuelve HTML table
  }
  listadoHabitacionesConDesayuno() {
    //Devuelve HTML table
  }
}

class Cliente {
  // Atributos
  _dniCliente;
  _nombre;
  _apellidos;
  _usuario;

  // Constructor

  constructor(dniCliente, nombre, apellidos, usuario) {
    this.dniCliente = dniCliente;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.usuario = usuario;
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

  toHTMLRow() {
    //Devuelve HTML row
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

  constructor(idReserva, cliente, alojamientos, fechaInicio, fechaFin) {
    this.idReserva = idReserva;
    this.cliente = cliente;
    this.alojamientos = [];
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }

  // Métodos

  toHTMLRow() {
    //Devuelve HTMLRow
  }
}

class Alojamiento {
  // Atributos

  _idAlojamiento;
  _numPersonas;

  // Constructor

  constructor(idAlojamiento, numPersonas) {
    this.idAlojamiento = idAlojamiento;
    this.numPersonas = numPersonas;
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

  toHTMLRow(){
    //Devuelve toHTML Row
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
