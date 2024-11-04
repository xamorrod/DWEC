class animal {
  _raza;
  _nombre;
  _peso;

  constructor(raza, nombre, peso) {
    this.raza = raza;
    this.nombre = nombre;
    this.peso = peso;
  }

  get raza() {
    return this._raza;
  }

  get nombre() {
    return this._nombre;
  }

  get peso() {
    return this._peso;
  }

  set raza(raza) {
    this._raza = raza;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set peso(peso) {
    this._peso = peso;
  }
}
