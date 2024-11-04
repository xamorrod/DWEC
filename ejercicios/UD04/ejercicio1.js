class Producto {
  //Atributos

  _nombre;
  _unidades;
  _precio;

  //Constructor

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = 0;
  }

  //Getters && Setters

  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }

  get unidades() {
    return this._unidades;
  }
  set unidades(value) {
    this._unidades = value;
  }

  get precio() {
    return Math.abs(this._precio);
  }

  set precio(value) {
    this._precio = value;
  }

  //Metodos

  valorEnStock() {
    return this.unidades * this.precio;
  }

  incrementarStock(num) {
    this.unidades += num;
  }

  disminuirStock(num) {
    this.unidades > num ? (this.unidades = 0) : (this.unidades -= num);
  }
}
