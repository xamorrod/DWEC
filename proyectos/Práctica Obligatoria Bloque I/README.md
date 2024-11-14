# Proyecto Web con Distintivo y Formularios Interactivos

Este proyecto es una aplicación web que gestiona formularios para altas y bajas de clientes, alojamientos y reservas. Además, incluye un distintivo que se muestra al cargar la página. Los formularios se controlan de forma dinámica a través de JavaScript, y la lógica del proyecto está organizada en varias clases que facilitan la gestión de datos y eventos.

## Estructura del Proyecto

### Archivos Principales

- **`objeto.js`**: Contiene las clases utilizadas en el proyecto. Las clases definen las estructuras y comportamientos para manejar la agencia , clientes, alojamientos y reservas.
- **`principal.js`**: Implementa la lógica principal de la aplicación. En este archivo, se gestionan las interacciones del usuario y se manipulan las clases definidas en `objeto.js` para gestionar los formularios y las tablas de datos.

### Funcionalidades

1. **Distintivo de Bienvenida**:

   - Aparece 1 segundo después de cargar la página.
   - Se oculta automáticamente después de 3 segundos.

2. **Gestión de Formularios**:
   La aplicación gestiona varios formularios para agregar, modificar o eliminar datos:

   - **Alta de Cliente**
   - **Alta de Alojamiento**
   - **Alta de Reserva**
   - **Baja de Reserva**
   - **Listado de Clientes**
   - **Listado de Alojamientos**
   - **Listado de Reservas por Cliente**
   - **Listado de Reservas entre Fechas**
   - **Listado de Habitaciones con Desayuno**

3. **Lógica de Visualización de Formularios**:
   Utiliza una función para mostrar u ocultar los formularios según las opciones seleccionadas por el usuario.

4. **Campos Dinámicos**:
   En el formulario de alta de alojamiento, algunos campos se muestran u ocultan dependiendo del tipo de alojamiento seleccionado (habitaciones o apartamentos).

---


