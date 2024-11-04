class Semaforo {
  //Atributos

  _color;

  _parpadeando;

  //Constructor

  constructor() {
    color = 0;
    parpadeando = false;
  }

  //Getters && Setters

  get color() {
    return this._color;
  }
  set color(value) {
    if (value == "rojo") {
      color = 0;
    } else if (value == "ambar") {
      color = 1;
    } else if (value == "verde") {
      color = 2;
    } else {
      console.log("Color introducido no válido");
    }
  }

  get parpadeando_() {
    return this._parpadeando;
  }
  set parpadeando_(value) {
    
    this._parpadeando = value;
  }
}
