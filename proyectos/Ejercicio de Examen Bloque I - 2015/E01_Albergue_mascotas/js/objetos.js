// Declaración de objetos

class Albergue {
  // Atributos
  _mascotas;
  _colaboradores;
  _movimientos;

  // Constructor
  constructor() {
    this._mascotas = []; // Inicializa el array de mascotas
    this._colaboradores = []; // Inicializa el array de colaboradores
    this._movimientos = []; // Inicializa el array de movimientos
  }

  // Getters && Setters
  get mascotas() {
    return this._mascotas;
  }

  set mascotas(value) {
    this._mascotas = value;
  }

  get colaboradores() {
    return this._colaboradores;
  }

  set colaboradores(value) {
    this._colaboradores = value;
  }

  get movimientos() {
    return this._movimientos;
  }

  set movimientos(value) {
    this._movimientos = value;
  }

  // Métodos
  altaMascota(oMascota) {
    // Verificamos que oMascota sea una instancia válida de Mascota
    if (!(oMascota instanceof Mascota)) {
      return "No está intentando introducir una mascota válida";
    }

    // Verificamos si la mascota ya está registrada en el Albergue
    for (let mascota of this._mascotas) {
      if (mascota.idMascota === oMascota.idMascota) {
        return "La mascota ya está en el albergue";
      }
    }

    // Insertamos la mascota en el array de mascotas
    this._mascotas.push(oMascota);

    // Mensaje de éxito
    return `Mascota ${oMascota.idMascota} registrada correctamente`;
  }

  altaColaborador(oColaborador) {
    return str;
  }

  movimientoMascota(sDNI, sIdMascota, sTipo, drFecha) {
    return str;
  }
  listadoMascota() {
    return HTMLTableString;
  }
  listadoColaboradores() {
    return HTMLTableString;
  }
}

class Colaborador {
  // Atributos

  _DNI;

  _nombre;

  _apellidos;

  // Constructor

  constructor(DNI, nombre, apellidos) {
    this.DNI = DNI;
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  // Getters && Setters
  get DNI() {
    return this._DNI;
  }
  set DNI(value) {
    this._DNI = value;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }

  get apellidos() {
    return this._apellidos;
  }
  set apellidos(value) {
    this._apellidos = value;
  }

  // Métodos

  toHTMLRow() {
    return str;
  }
}

class Movimiento {
  // Atributos

  _mascota;

  _colaborador;

  _tipo;

  _fecha;

  // Constructor

  constructor(mascota, colaborador, tipo, fecha) {
    this.mascota = mascota;
    this.colaborador = colaborador;
    this.tipo = tipo;
    this.fecha = fecha;
  }
  // Getters && Setters

  get mascota() {
    return this._mascota;
  }
  set mascota(value) {
    this._mascota = value;
  }

  get colaborador() {
    return this._colaborador;
  }
  set colaborador(value) {
    this._colaborador = value;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(value) {
    this._tipo = value;
  }

  get fecha() {
    return this._fecha;
  }
  set fecha(value) {
    this._fecha = value;
  }

  // Métodos

  toHTMLRow() {
    return str;
  }
}

class Mascota {
  // Atributos

  _idMascota;

  _peso;

  // Constructor

  constructor(idMascota, peso) {
    this.idMascota = idMascota;
    this.peso = peso;
  }

  // Getters && Setters

  get idMascota() {
    return this._idMascota;
  }
  set idMascota(value) {
    this._idMascota = value;
  }

  get peso() {
    return this._peso;
  }
  set peso(value) {
    this._peso = value;
  }

  // Métodos

  toHTMLRow() {
    return str;
  }
}

class Gato extends Mascota {
  // Atributos

  _raza;

  // Constructor

  constructor(idMascota, peso, raza) {
    super(idMascota, peso);
    this.raza = raza;
  }

  // Getters && Setters

  get raza() {
    return this._raza;
  }
  set raza(value) {
    this._raza = value;
  }

  // Métodos

  // heredados a priori
}

class Perro extends Mascota {
  // Atributos

  _altura;

  // Constructor

  constructor(idMascota, peso, altura) {
    super(idMascota, peso);
    this.altura = altura;
  }

  // Getters && Setters

  get altura() {
    return this._altura;
  }
  set altura(value) {
    this._altura = value;
  }

  // Métodos

  // heredados a priori
}
