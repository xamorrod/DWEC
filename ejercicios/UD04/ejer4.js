class Figura {
  //Atributos

  _color;

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  constructor(color) {
    this._color = color;
  }

  imprimir() {
    console.log("Soy una figura de color ", Figura._color);
  }
}

class Rectangulo extends Figura {
  _base;
  _altura;

  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  set base(base) {
    this._base = base;
  }

  get _base() {
    return this._base;
  }

  set altura(altura) {
    this._altura = altura;
  }

  get altura() {
    return this._altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  imprimirRectangulo() {}
}

class Circulo extends Figura {
  _radio;

  constructor(color, radio) {
    super(color);
    this._radio = radio;
  }
  get radio() {
    return this._radio;
  }

  set radio(radio) {
    this._radio = radio;
  }

  calcularArea() {
    return this.radio ** 2 * Math.PI;
  }

  imprimir() {
    console.log(
      "Soy un círculo de color " +
        this.color +
        " y de área " +
        this.calcularArea()
    );
  }
}

const c = new Circulo("amarillo", 6);
c.imprimir();
