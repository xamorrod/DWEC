const categorias = [];

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

    productos = [];

    // Getters && Setters

    getProductos() {
        return this.productos;
    }

    setProductos(productos) {
        this.productos = productos;
    }

    // Métodos

    addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
        let producto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
        this.productos.push(producto);
    }
}

class LineaCuenta {
    
    // Atributos

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

    constructor(mesa, lineasdeCuenta, pagada) {
        this.mesa = mesa;
        this.lineasdeCuenta = lineasdeCuenta;
        this.pagada = pagada;
    }

    // Métodos

}

class Gestor {

    // Atributos

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

    constructor(cuentas, mesaActual) {
        this.cuentas = cuentas;
        this.mesaActual = mesaActual;
    }

    // Métodos

}