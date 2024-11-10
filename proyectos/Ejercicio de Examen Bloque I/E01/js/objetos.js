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

  //Método mejorable

  toHTMLRow() {
    let valores = Object.values(this);
    let salida = "<tr>";
    for (let valor of valores) {
      salida += "<td>" + valor + "</td>";
    }
    salida += "</tr>";
    console.log(salida);
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

  //Método heredado toHTMLRow()
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
  constructor() {
    this._arboles = [];
  }

  //Getters && Setters

  get arboles() {
    return this._arboles;
  }

  set arboles(arboles) {
    this._arboles = _arboles;
  }

  //Métodos

  altaArbol(oArbol) {
    //Mirar si el arbol pasado no coincide con los árboles del vivero
    if (this._arboles.some((arbol) => arbol.codigo === oArbol.codigo)) {
      alert("El árbol ya está registrado");
      return false;
    }
    this._arboles.push(oArbol);
    return oArbol instanceof Arbol;
  }

  tallajeArbol(iCodigo, iTallaje) {
    let salida;
    if (!iCodigo || !iTallaje) {
      alert("Los dos campos deben estar rellenos");
      return;
    }
    for (let arbol of this._arboles) {
      if (arbol.codigo == iCodigo) {
        if (iTallaje < arbol.tallaje) {
          return "Tallaje inferior al registrado";
        } else {
          
          arbol.tallaje = iTallaje;
          return "Correcto, tallaje actualizado";
        }
        
      }
      
    }
    return "Árbol no registrado";
  }
}
