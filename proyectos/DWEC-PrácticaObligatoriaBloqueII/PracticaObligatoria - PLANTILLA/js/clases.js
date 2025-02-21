class Producto {
  // Atributos

  idProducto;
  nombreProducto;
  precioUnidad;
  idCategoria;

  // Constructor

  constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.precioUnidad = precioUnidad;
    this.idCategoria = idCategoria;
  }

  // Getters && Setters

  getIdProducto() {
    return this.idProducto;
  }

  setIdProducto(idProducto) {
    this.idProducto = idProducto;
  }

  getNombreProducto() {
    return this.nombreProducto;
  }

  setNombreProducto(nombreProducto) {
    this.nombreProducto = nombreProducto;
  }

  getPrecioUnidad() {
    return this.precioUnidad;
  }

  setPrecioUnidad(precioUnidad) {
    this.precioUnidad = precioUnidad;
  }

  getIdCategoria() {
    return this.idCategoria;
  }

  setIdCategoria(idCategoria) {
    this.idCategoria = idCategoria;
  }

  // Métodos
}

class Catalogo {
  // Atributos

  // Con un objeto de esta clase representamos el cojunto de productos que ofrecemos a los clientes

  // Contiene los objetos de la clase Producto
  productos = [];

  // Getters && Setters

  getProductos() {
    return this.productos;
  }

  setProductos(productos) {
    this.productos = productos;
  }

  // Métodos

  // Añade un producto al catálogo
  addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
    const producto = new Producto(
      idProducto,
      nombreProducto,
      precioUnidad,
      idCategoria
    );
    this.productos.push(producto);
  }
}

class LineaCuenta {
  // Atributos

  // Cada objeto representa una línea del pedido
  unidades;
  idProducto;

  // Getteres && Setters

  getUnidades() {
    return this.unidades;
  }

  setUnidades(unidades) {
    this.unidades = unidades;
  }

  getIdProducto() {
    return this.idProducto;
  }

  setIdProducto(idProducto) {
    this.idProducto = idProducto;
  }

  // Constructor

  constructor(unidades, idProducto) {
    this.unidades = unidades;
    this.idProducto = idProducto;
  }

  // Métodos
}

class Cuenta {
  // Atributos

  // Cada objeto de esta clase representa la cuenta abierta de una determinada mesa
  mesa;
  lineasdeCuenta = [];
  pagada;

  // Getters && Setters

  getMesa() {
    return this.mesa;
  }

  setMesa(mesa) {
    this.mesa = mesa;
  }

  getLineasdeCuenta() {
    return this.lineasdeCuenta;
  }

  setLineasdeCuenta(lineasdeCuenta) {
    this.lineasdeCuenta = lineasdeCuenta;
  }

  getPagada() {
    return this.pagada;
  }

  setPagada(pagada) {
    this.pagada = pagada;
  }

  // Constructor

  constructor(mesa, pagada) {
    this.mesa = mesa;
    this.lineasdeCuenta = [];
    this.pagada = pagada;
  }

  // Métodos
}

class Gestor {
  // Un objeto de esta clase sirve para llevar las cuentas abiertas

  // Atributos

  // Objetos de la clase cuenta la posición dentro del array indica la mesa
  cuentas = [];
  mesaActual = 1;

  // Getters && Setters

  getCuentas() {
    return this.cuentas;
  }

  setCuentas(cuentas) {
    this.cuentas = cuentas;
  }

  getMesaActual() {
    return this.mesaActual;
  }

  setMesaActual(mesaActual) {
    this.mesaActual = mesaActual;
  }

  // Constructores

  constructor() {
    this.cuentas = [];
    this.mesaActual = 1;
  }
}
