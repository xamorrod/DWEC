🚀 Apuntes de JavaScript para el Examen (Completos y Ampliados)
===============================================================

UD05: Interacción con el usuario. Eventos y formularios
-------------------------------------------------------

### 🖱️ Eventos en JavaScript

Los eventos son acciones detectables por JavaScript en el navegador. Permiten crear interacciones dinámicas.

#### 🔍 Tipos de eventos comunes:

**CategoríaEventos ClaveRatón**click, dblclick, mouseover**Teclado**keydown, keyup, keypress**Formularios**submit, change, input, focus**Ventana**load, resize, scroll**Touch**touchstart, touchmove, touchend

**Ejemplo avanzado con delegación de eventos:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   document.getElementById("lista").addEventListener("click", (e) => {    if(e.target.classList.contains("item")) {      e.target.classList.toggle("seleccionado");    }  });   `

### 🌊 Captura y Propagación de Eventos

Mecanismo de dos fases para manejar eventos en elementos anidados:

1.  **Fase de Captura** (de Window al elemento objetivo)
    
2.  **Fase de Burbuja** (del elemento objetivo a Window)
    

**Control de propagación:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   elemento.addEventListener('click', handler, {     capture: true, // Fase de captura    once: true // Ejecuta solo una vez  });   `

**Detener propagación:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   e.stopPropagation();  e.stopImmediatePropagation();   `

### 🔍 Expresiones Regulares (RegEx) Avanzadas

Patrones para validación y manipulación de cadenas.

#### 📚 Sintaxis Extendida:

**PatrónFunciónEjemplo**\\bLímite de palabra\\bword\\b(x|y)Alternancia(jpg|png)(?=)Lookahead positivo(?=.\*\[A-Z\])(?:)Grupo no capturador(?:https?://)

#### 🛡️ Validaciones Comunes:

**URL:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const regexURL = /^(https?:\/\/)?([\w-]+\.)+\w{2,}(\/.*)*$/;   `

**Fecha (YYYY-MM-DD):**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const regexFechaISO = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;   `

**Tarjeta de Crédito:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const regexTarjeta = /^(?:\d{4}[- ]){3}\d{4}$/;   `

**Validación en Tiempo Real:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   input.addEventListener('input', (e) => {    const valido = regexCorreo.test(e.target.value);    e.target.style.borderColor = valido ? 'green' : 'red';  });   `

UD06: Manipulación Avanzada del DOM
-----------------------------------

### 🎯 Selección de Elementos

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Nuevos métodos:  document.getElementByAttribute('[data-id="valor"]');  document.matchMedia('(max-width: 768px)'); // Media Queries   `

### 🏗️ Manipulación del Árbol DOM

**Tabla Comparativa de Métodos:**

**MétodoDescripciónEjemplo**insertAdjacentHTML()Inserta HTML en posición específicaelement.insertAdjacentHTML('beforeend', '

Nuevo

')replaceWith()Reemplaza elemento con nuevo contenidooldElement.replaceWith(newElement)closest()Encuentra ancestro más cercanoelement.closest('.clase')matches()Comprueba si coincide con selectorelement.matches('div.active')

**Ejemplo Completo de CRUD DOM:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Crear  const nuevoDiv = document.createElement('div');  nuevoDiv.dataset.id = 'nuevo';  nuevoDiv.innerHTML = '  Contenido dinámico  ';  // Insertar  document.body.prepend(nuevoDiv);  // Actualizar  nuevoDiv.querySelector('p').classList.add('texto-grande');  // Eliminar  setTimeout(() => nuevoDiv.remove(), 5000);   `

### 🎨 Manipulación de Estilos y Clases

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // CSS moderno  element.style.setProperty('--variable', '#f00');  element.classList.toggle('activo', condicion);  // Animaciones  element.animate([    { transform: 'translateY(0)' },    { transform: 'translateY(100px)' }  ], { duration: 1000 });   `

### 🔄 Observadores de Cambios

**MutationObserver:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const observer = new MutationObserver(mutations => {    mutations.forEach(mutation => {      console.log('Cambios detectados:', mutation.addedNodes);    });  });  observer.observe(document.body, {    childList: true,    subtree: true,    attributes: true  });   `

🧪 Ejercicios Integrados
------------------------

### 1\. Gestor de Contenido Dinámico

**Requisitos:**

*   Carga asíncrona de datos desde API
    
*   Renderizado paginado
    
*   Filtrado en tiempo real
    

**Solución:**

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   async function cargarDatos(url) {    try {      const respuesta = await fetch(url);      const datos = await respuesta.json();      const contenedor = document.getElementById('contenedor');      // Virtual DOM (optimización)      const fragment = document.createDocumentFragment();      datos.forEach(item => {        const div = document.createElement('div');        div.innerHTML = `  ### ${item.titulo}  ${item.descripcion}  `;        fragment.appendChild(div);      });      contenedor.replaceChildren(fragment);    } catch (error) {      console.error('Error:', error);    }  }   ``

### 2\. Validación de Formulario en Tiempo Real

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const formulario = document.getElementById('registro');  const campos = {    nombre: /^[A-Za-zÁ-ú\s]{2,}$/,    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,    password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/  };  formulario.addEventListener('input', (e) => {    const campo = e.target.name;    const valor = e.target.value;    const valido = campos[campo].test(valor);    e.target.classList.toggle('valido', valido);    e.target.classList.toggle('invalido', !valido);  });  formulario.addEventListener('submit', (e) => {    e.preventDefault();    // Lógica de envío...  });   `

🏆 Mejores Prácticas
--------------------

1.  **Delegación de Eventos:** Usar un listener en contenedor padre para múltiples elementos.
    
2.  **Throttling/Debouncing:** Optimizar eventos frecuentes como scroll o resize.
    
3.  **Virtual DOM:** Usar DocumentFragment para actualizaciones masivas.
    
4.  **Validación en Lado Cliente y Servidor:** Nunca confiar solo en JavaScript.
    
5.  **Accesibilidad:** Usar ARIA attributes en dinámicas actualizaciones de contenido.
    

javascriptCopy

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Ejemplo Debouncing  function debounce(func, timeout = 300) {    let timer;    return (...args) => {      clearTimeout(timer);      timer = setTimeout(() => func.apply(this, args), timeout);    };  }  window.addEventListener('resize', debounce(() => {    console.log('Resize optimizado');  }));   `

📚 Recursos Adicionales
-----------------------

*   [MDN Web Docs - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
    
*   [RegEx Testing Tool](https://regex101.com/)
    
*   [DOM Manipulation Cheatsheet](https://htmlcheatsheet.com/js/)
    
*   [JavaScript Event Loop](https://javascript.info/event-loop)
    

Con este material integrado y ampliado, estarás preparado para resolver cualquier desafío en tu examen de JavaScript. ¡Éxito en tus estudios! 🚀