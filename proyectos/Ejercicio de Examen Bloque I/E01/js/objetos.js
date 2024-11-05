//Creación de clases definidas por el diagrama de clases

//Clase Árbol

class Arbol {
  //Atributos
  _codigo;
  _tallaje;
  _especie;

  //Constructores

  constructor(codigo, tallaje, especie) {
    this._codigo = codigo;
    this._tallaje = tallaje;
    this._especie = especie;
  }

  //Getters && Setters

  get codigo() {
    return this._codigo;
  }

  set codigo(codigo) {
    this._codigo = codigo;
  }

  get tallaje() {
    return this._tallaje;
  }

  set tallaje(tallaje) {
    this._tallaje = tallaje;
  }

  get especie() {
    return this._especie;
  }

  set especie(especie) {
    this._especie = especie;
  }

  //Método

  toHTMLRow() {
    return (
      "<tr><td>",
      this.codigo,
      "</td>  <td>",
      this.tallaje,
      "</td>  <td>",
      this.especie,
      "</td> </tr>"
    );
  }
}

//Clase perenne que hereda de arbol

class Perenne extends Arbol {
  //Atributo

  _frutal;

  //Constructor

  constructor(codigo, tallaje, especie, frutal) {
    super(codigo, tallaje, especie);
    this._frutal = frutal;
  }

  get frutal() {
    return this._frutal;
  }

  set frutal(frutal) {
    this._frutal = frutal;
  }

  //Método tuHTMLRow()
}

class Caduco extends Arbol {
  //Atributo

  _mesFloracion;

  //Constructor

  constructor(codigo, tallaje, especie, mesFloracion) {
    super(codigo, tallaje, especie);
    this._mesFloracion = mesFloracion;
  }

  //Getters && Setters

  get mesFloracion() {
    return this._mesFloracion;
  }

  set mesFloracion(mesFloracion) {
    this._mesFloracion = mesFloracion;
  }

  //Método tuHTMLRow()
}
class Vivero {
  //Atributos

  _arboles;

  //Constructores

  //Getters && Setters

  get arboles() {
    return this._arboles;
  }

  set arboles(arboles) {
    this._arboles = _arboles.;
  }

  //Métodos

  altaArbol(oArbol) {
    const codigo = document.frmAltaArbol.txtCodigo.value;
    const tallaje = document.frmAltaArbol.txtTallaje.value;
    const especie = document.frmAltaArbol.txtEspecie.value;
    const tipoArbol = document.frmAltaArbol.rbtTipoArbol.value;
    if (
      (codigo =
        undefined ||
        tallaje == undefined ||
        especie == undefined ||
        tipoArbol == undefined)
    ) {
      alert("Rellena todos los parámetros");
    }
    if ((tipoArbol = true || tipoArbol == false)) {
      oArbol = new Perenne(codigo, tallaje, especie, tipoArbol);
    } else {
      oArbol = new Caduco(codigo, tallaje, especie, tipoArbol);
    }
    Vivero.arboles
    return oArbol instanceof Arbol;
  }

  tallajeArbol(iCodigo, iTallaje) {}
}
