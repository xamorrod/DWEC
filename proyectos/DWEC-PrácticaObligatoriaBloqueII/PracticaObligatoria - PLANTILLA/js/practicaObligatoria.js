// Inicializamos los objetos necesarios para la gestión

const gestor = new Gestor();

document.addEventListener("DOMContentLoaded", () => {
  // Creamos las categorías de los productos
  // Añadimos productos al catálogo
  //Insertamos las categorías de productos  y los productos en el html
  const categorias = ["Bebidas", "Tostadas", "Bollería"];
  const catalogo = new Catalogo(categorias);

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

  // Función que carga los datos cuando se termina de cargar el DOM

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
  function cargarProductos(indiceCategoria) {
    const selectProducto = document.querySelector("[name='productos']");
    selectProducto.innerHTML = "";

    // Obtenemos los productos que pertenecen a la categoria seleccionada

    const productos = catalogo.productos.filter(
      (producto) => producto.idCategoria === indiceCategoria
    );
    productos.forEach((producto) => {
      const option = document.createElement("option");
      option.value = producto.id;
      option.textContent = producto.nombreProducto;
      selectProducto.appendChild(option);
    });
  }

  // Recargamos las selección de productos cuando se cambia la categoría

  document
    .querySelector("[name='categorias']")
    .addEventListener("change", (event) => {
      cargarProductos(Number(event.target.value));
    });
  cargarCategorias();

  // Inicializamos la mesa 1 como seleccionada
  const mesaActual = document.querySelector(".mesa");
  mesaActual.textContent = "1";
  mesaActual.classList.add("seleccionada");
  checkCuenta("1");
});

// Establecemos las mesas con cuenta abierta

document.querySelectorAll(".mesa").forEach(function (element) {
  element.classList.add("libre");
});

// Establecemos la cuenta seleccionada con un distintivo

document.querySelectorAll(".mesa").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".mesa").forEach(function (element) {
      element.classList.remove("seleccionada");
    });

    this.classList.add("seleccionada");
    const mesaActual = document.querySelector(".seleccionada").textContent;
    checkCuenta(mesaActual);
  });
});

// Función que crea un objeto cuenta cada vez que se hace click en una mesa o revisa si ya está creado

function checkCuenta(mesaActual) {
  const existeCuenta = gestor.cuentas.some(
    (cuenta) => cuenta.mesa === mesaActual
  );
  if (existeCuenta) {
    // Ya que la cuenta está abierta imprimimos la sección en el html
    console.log("La cuenta " + mesaActual + " está  creada");
    imprimirCuenta();
  } else {
    // Creamos el obj cuenta ya que no está abierta
    const cuenta = new Cuenta(mesaActual, false);
    gestor.cuentas.push(cuenta);
    console.log(gestor);
  }
}

// Función que muestra la información de la cuenta en el html

function imprimirCuenta() {
  const cuentaPanel = document.getElementById("cuenta");
  const cuentaText = document.createElement("h1");
  cuentaText.textContent = "A";
  cuentaPanel.appendChild(cuentaText);
}

// Función para añadir las líneas de cuenta a las mesas

function añadirLineaCuenta() {
  // Creamos un objeto línea de cuenta obteniendo los datos del html+
  const categoria = document.getElementsByName("categorias");
  const producto = document.getElementsByName("productos");
  const cantidad = document.querySelector("tecla").forEach(function (element) {
    element.addEventListener("click", function () {
      console.log("Click registrado");
    });
  });

  // Capturamos el click en el número
  console.log("Se hizo clic en el documento");
}
