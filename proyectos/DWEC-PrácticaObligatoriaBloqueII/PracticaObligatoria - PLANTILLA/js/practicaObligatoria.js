// Inicializamos los objetos necesarios para la gestión
const gestor = new Gestor();
const categorias = ["Bebidas", "Tostadas", "Bollería"];
const catalogo = new Catalogo(categorias);

document.addEventListener("DOMContentLoaded", () => {
  // Añadimos productos al catálogo
  catalogo.addProducto(1, "Café con leche", 0.95, 0);
  catalogo.addProducto(2, "Té", 1.05, 0);
  catalogo.addProducto(3, "Cola-cao", 1.35, 0);
  catalogo.addProducto(4, "Chocolate a la taza", 1.95, 0);
  catalogo.addProducto(5, "Media con aceite", 1.25, 1);
  catalogo.addProducto(6, "Entera con aceite", 1.95, 1);
  catalogo.addProducto(7, "Media con aceite y jamón", 1.95, 1);
  catalogo.addProducto(8, "Entera con aceite y jamón", 2.85, 1);
  catalogo.addProducto(9, "Media con mantequilla", 1.15, 1);
  catalogo.addProducto(10, "Entera con mantequilla", 1.75, 1);
  catalogo.addProducto(11, "Media con manteca colorá", 1.45, 1);
  catalogo.addProducto(12, "Entera con manteca colorá", 2.15, 1);
  catalogo.addProducto(13, "Croissant", 0.95, 2);
  catalogo.addProducto(14, "Napolitana de chocolate", 1.45, 2);
  catalogo.addProducto(15, "Caracola de crema", 1.65, 2);
  catalogo.addProducto(16, "Caña de chocolate", 1.35, 2);

  // Cargamos las categorías y productos en el HTML
  cargarCategorias();

  // Inicializamos la mesa 1 como seleccionada
  const mesas = document.querySelectorAll(".mesa");
  mesas.forEach((mesa) => mesa.classList.add("libre"));
  mesas[0].classList.add("seleccionada");
  checkCuenta("1");
});

// Función para limpiar el panel de cuenta
function limpiarPanelCuenta() {
  const cuentaPanel = document.getElementById("cuenta");
  cuentaPanel.innerHTML = "";
}

// Función para cargar categorías
function cargarCategorias() {
  const selecCategoria = document.querySelector("[name='categorias']");
  selecCategoria.innerHTML = "";

  categorias.forEach((categoria, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = categoria;
    selecCategoria.appendChild(option);
  });

  cargarProductos(0);
}

// Función para cargar productos
function cargarProductos(indiceCategoria) {
  const selectProducto = document.querySelector("[name='productos']");
  selectProducto.innerHTML = "";

  catalogo.productos
    .filter((producto) => producto.idCategoria === indiceCategoria)
    .forEach((producto) => {
      const option = document.createElement("option");
      option.value = producto.idProducto;
      option.textContent = producto.nombreProducto;
      selectProducto.appendChild(option);
    });
}

// Evento cambio de categoría
document
  .querySelector("[name='categorias']")
  .addEventListener("change", (e) => {
    cargarProductos(Number(e.target.value));
  });

// Evento selección de mesa
document.querySelectorAll(".mesa").forEach((mesa) => {
  mesa.addEventListener("click", function () {
    document
      .querySelectorAll(".mesa")
      .forEach((m) => m.classList.remove("seleccionada"));
    this.classList.add("seleccionada");
    const numMesa = this.textContent.trim();
    checkCuenta(numMesa);
  });
});

// Función principal de gestión de cuentas
function checkCuenta(numMesa) {
  limpiarPanelCuenta();

  const cuentaExistente = gestor.cuentas.find((c) => c.mesa === numMesa);
  if (cuentaExistente) {
    console.log(`Mostrando cuenta existente para mesa ${numMesa}`);
    mostrarCuenta(numMesa);
  } else {
    console.log(`Mesa ${numMesa} libre - Sin cuenta abierta`);
    mostrarMensajeMesaLibre(numMesa);
  }
}

// Función para mostrar cuenta existente
function mostrarCuenta(numMesa) {
  const cuenta = gestor.cuentas.find((c) => c.mesa === numMesa);

  // Cabecera
  const cuentaPanel = document.getElementById("cuenta");
  const titulo = document.createElement("h1");
  const total = document.createElement("h3");
  const subTitulo = document.createElement("h4");

  titulo.textContent = "Cuenta";

  const totalCuenta = calcularTotal(numMesa);
  total.textContent = `TOTAL: ${totalCuenta.toFixed(2)}€`;
  subTitulo.textContent = `Mesa ${numMesa}`;

  cuentaPanel.appendChild(titulo);
  cuentaPanel.appendChild(total);
  cuentaPanel.appendChild(subTitulo);

  

  // Tabla
  const tabla = document.createElement("table");
  tabla.innerHTML = `
    <thead>
      <tr>
        <th>Modificar</th>
        <th>Uds.</th>
        <th>Id.</th>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  // Rellenar tabla
  const tbody = tabla.querySelector("tbody");
  cuenta.lineasdeCuenta.forEach((linea, index) => {
    const producto = catalogo.productos.find(
      (p) => p.idProducto === linea.idProducto
    );
    const fila = document.createElement("tr");

    // Almecenamos la propiedad en un elemento adicional HTML
    fila.dataset.lineaIndex = index;
    fila.innerHTML = `
     <td>
        <button class="btn-mas boton">+</button>
        <button class="btn-menos boton">-</button>
      </td>
      <td>${linea.unidades}</td>
      <td>${linea.idProducto}  </td>
      <td>${producto.nombreProducto} (ud :${producto.precioUnidad}€)</td>
      <td>${(producto.precioUnidad * linea.unidades).toFixed(2)}€</td>
     
    `;
    tbody.appendChild(fila);
    // Eventos para los botones
    const btnMas = fila.querySelector(".btn-mas");
    const btnMenos = fila.querySelector(".btn-menos");

    btnMas.addEventListener("click", () => modificarUnidad(numMesa, index, 1));
    btnMenos.addEventListener("click", () =>
      modificarUnidad(numMesa, index, -1)
    );

    tbody.appendChild(fila);
  });

  // Botón de pago
  const btnPagar = document.createElement("button");
  btnPagar.classList.add("boton");
  btnPagar.textContent = "PAGAR Y LIBERAR MESA";
  btnPagar.addEventListener("click", () => liberarMesa(numMesa));

  cuentaPanel.appendChild(btnPagar);
  cuentaPanel.appendChild(tabla);
}

// Función para añadir productos
document.querySelectorAll(".tecla").forEach((boton) => {
  boton.addEventListener("click", function () {
    const categoria = document.querySelector("[name='categorias']").value;
    const productoId = document.querySelector("[name='productos']").value;
    const unidades = parseInt(this.value);

    const producto = catalogo.productos.find(
      (p) => p.idProducto == productoId && p.idCategoria == categoria
    );

    if (!producto) return;

    const mesaSeleccionada = document.querySelector(".mesa.seleccionada");
    const numMesa = mesaSeleccionada.textContent.trim();

    // Buscar o crear cuenta
    let cuenta = gestor.cuentas.find((c) => c.mesa === numMesa);
    if (!cuenta) {
      cuenta = new Cuenta(numMesa, false);
      gestor.cuentas.push(cuenta);
      mesaSeleccionada.classList.replace("libre", "ocupada");
    }

    // Añadir línea de cuenta
    const lineaExistente = cuenta.lineasdeCuenta.find(
      (l) => l.idProducto == productoId
    );
    if (lineaExistente) {
      alert(
        "Una vez añadidos una vez debe usar los botones para modificar la cantidad"
      );
    } else {
      cuenta.lineasdeCuenta.push(
        new LineaCuenta(unidades, producto.idProducto)
      );
    }

    // Actualizar vista
    checkCuenta(numMesa);
  });
});

// Función para modificar unidades a través de os botones

function modificarUnidad(numMesa, lineaIndex, cantidad){
  const cuenta = gestor.cuentas.find(c => c.mesa === numMesa);
  const linea = cuenta.lineasdeCuenta[lineaIndex];

  if((linea.unidades + cantidad) < 1){
    if(confirm("¿Eliminar producto de la cuenta?")){
      cuenta.lineasdeCuenta.splice(lineaIndex, 1);
    }
  }else{
    linea.unidades += cantidad;
  }

  if(cuenta.lineasdeCuenta.length === 0){
    liberarMesa(numMesa);
  }else{
    checkCuenta(numMesa);
  }
}
// Función para liberar mesa
function liberarMesa(numMesa) {
  const index = gestor.cuentas.findIndex((c) => c.mesa === numMesa);
  if (index > -1) {
    gestor.cuentas.splice(index, 1);
    document.querySelectorAll(".mesa").forEach((mesa) => {
      if (mesa.textContent.trim() === numMesa) {
        mesa.classList.replace("ocupada", "libre");
      }
    });
    limpiarPanelCuenta();
    mostrarMensajeMesaLibre(numMesa);
  }
}

// Función para calcular el total de la cuenta

function calcularTotal(numMesa) {
  const cuenta = gestor.cuentas.find((c) => c.mesa === numMesa);

  return cuenta.lineasdeCuenta.reduce((total, linea) => {
    const producto = catalogo.productos.find(
      (p) => p.idProducto === linea.idProducto
    );
    return total + (producto?.precioUnidad || 0) * linea.unidades;
  }, 0);
}

// Función para mostrar mensaje de mesa libre
function mostrarMensajeMesaLibre(numMesa) {
  const cuentaPanel = document.getElementById("cuenta");
  const mensaje = document.createElement("div");
  mensaje.textContent = `Mesa ${numMesa} - Libre`;
  mensaje.classList.add("mesa-libre");
  cuentaPanel.appendChild(mensaje);
}
