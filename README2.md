

- README: explicar cómo correr el proyecto y adjuntar evidencias:

INSTRUCCIONES:

1. Instalar dependencias con npm install.

2. Configurar .env con credenciales de PostgreSQL.

3. Ejecutar backend con node server.js.

4. Abrir index.html en navegador.






----------------------------
----------------------------
----------------------------
____________________________
____________________________
____________________________
____________________________








Desarrollo del proyecto API Conductores y Automóviles
---------------
---- PASOS ----
---------------


____________________________
1. Base de datos
Importé el archivo .sql corregido en PostgreSQL.

Adjunté capturas en la carpeta img como evidencia.

Errores iniciales: tablas duplicadas y joins vacíos.

Solución: depuración del .sql y verificación con consultas simples (SELECT * FROM conductores;, SELECT * FROM automoviles;).



____________________________
2. Backend Express
Creé el archivo server.js con Express y conexión a PostgreSQL usando pg.

Endpoints implementados:

/conductores

/automoviles

/conductoressinauto?edad=<numero>

/solitos

/auto?patente=<string>

/auto?iniciopatente=<letra>

Errores encontrados:

La terminal no encontraba server.js.

Solución: usar cd backend para entrar a la carpeta correcta y luego node server.js para levantar el servidor.

Mejoras:

Reemplacé res.json(result.rows) por validaciones con res.status(200) y res.status(404) para manejar errores y mostrar mensajes claros.


____________________________
3. Frontend HTML/JS
Creé un archivo index.html con botones para consumir los endpoints.

Implementé la función fetchData(endpoint) en JavaScript para mostrar resultados en listas (<ul><li>).

Errores iniciales:

fetchData is not defined → Solución: mover el <script> al final del <body> y corregir sintaxis.

Resultados en JSON crudo → Solución: usar JSON.stringify dentro de <pre> y luego mejorar con listas amigables.

Logros:

Botones funcionando para /conductores, /automoviles y /solitos.

Buscadores agregados para /auto (patente e inicio de patente) y /conductoressinauto (edad).

Manejo de errores en frontend: mensajes en rojo cuando no hay resultados.


____________________________
4. README (OK, detallado al inicio de este README)





----------------------------
____________________________
____________________________

📌 Conclusión
Se cumplieron todos los requisitos del encargo: endpoints, validaciones, frontend funcional y manejo de errores.

Aprendí a diferenciar entre backend (servidor y endpoints) y frontend (interfaz y funciones JS).

Los errores más comunes fueron de sintaxis y rutas de carpetas, solucionados con práctica y depuración.

El proyecto ahora está listo para ser entregado y también sirve como referencia futura para proyectos similares.







____________________________

📖 Mini diccionario de funciones y etiquetas nuevas.


cd: comando de terminal para cambiar de carpeta.

node server.js: ejecuta el servidor Express en Node.js.

res.status(): define el código HTTP de la respuesta (200 éxito, 404 no encontrado, 400 error de parámetros).

JSON.stringify: convierte objetos JavaScript en texto JSON legible.

<pre>: muestra texto preformateado, útil para ver JSON crudo.

<div>: contenedor genérico para agrupar elementos y mostrar resultados.

fetch(): función de JavaScript para hacer solicitudes HTTP al backend.

innerHTML: inserta contenido dinámico dentro de un elemento HTML.













----------------------------
----------------------------
----------------------------
____________________________
____________________________
____________________________
____________________________
----------------------------
----------------------------
----------------------------
____________________________
____________________________
____________________________
____________________________


----------------
---- PASOS: ----
----------------

______________________________________________________________
- Base de datos: importar el .sql corregido en PostgreSQL.
Ok, adjunto capturas en la carpeta img.


______________________________________________________________
- Backend Express: levantar el servidor con las rutas pedidas.


! aqui tuve que usar algunos comandos en la terminal para actualizar las rutas de las carpetas que no me estaban coincidiendo. ( esto lo tuve que hacer varias veces, por lo menos cada vez que ajustaba algo...)
Use:
- cd backend → cd significa change directory (cambiar de carpeta). Con este comando le dices a la terminal que se meta dentro de la carpeta backend, que es donde guardaste tu archivo server.js.
Si no entras a esa carpeta, la terminal busca server.js en la raíz del proyecto y no lo encuentra.

- node server.js → este comando le dice a Node.js que ejecute el archivo server.js. Ese archivo contiene tu código de Express, así que al correrlo se levanta el servidor en el puerto 3000 y queda listo para responder a las rutas que definiste (/conductores, /automoviles, etc.).


______________________________________________________________
- Frontend simple: HTML/JS que consuma los endpoints y muestre resultados.

- voy a agregar algunas acciones para los errores en mi server.js cuando no encuentre lo que buscamos o sea incorrecto. Por ejemplo:

Esto (los endpoints): 
res.json(result.rows);

Lo reemplazo por la versión con validación:
if (result.rows.length > 0) {
  res.status(200).json(result.rows);
} else {
  res.status(404).json({ error: 'No se encontró el auto con esa patente' });
}

- tuve que añadir scripts especiales para que los datos se mostraran en lista, de una manera amigable y digerible para el usuario. Y aplicar a cada uno de los botones ("conductores", "automoviles","solitos"). Más detalles de este paso los añado en la seccion final de diccionario.


__________________________________________________________________________
- README: explicar cómo correr el proyecto y adjuntar evidencias:

INSTRUCCIONES:

1. Instalar dependencias con npm install.

2. Configurar .env con credenciales de PostgreSQL.

3. Ejecutar backend con node server.js.

4. Abrir index.html en navegador.






diccionario:

<pre> (Texto preformateado)
  <pre id="output"></pre>

- Formato exacto: A diferencia del texto normal en HTML (que ignora múltiples espacios y saltos de línea), el contenido dentro de <pre> se muestra exactamente como lo escribiste en tu editor.
- Uso común: Se utiliza con frecuencia para mostrar bloques de programación (a menudo envolviendo también una etiqueta <code>), poemas, correos electrónicos o texto con alineación manual.
- Aspecto visual: Por defecto, los navegadores la muestran con una tipografía de ancho fijo (como Courier) y le añaden margen vertical.

-(lo más práctico es el <pre> porque mantiene formato de JSON que estamos usando).
-JSON.stringify, muestra texto plano. Para no verlo crudo" aplicamos en nuestro htm el script :
<script>
  async function fetchData(endpoint) {
    const res = await fetch(`http://localhost:3000/${endpoint}`);
    const data = await res.json();

    let html = "";
    if (endpoint === "conductores") {
      html = "<h2>Conductores</h2><ul>";
      data.forEach(c => {
        html += `<li>${c.nombre} - ${c.edad} años</li>`;
      });
      html += "</ul>";
    } else {
      html = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }

    document.getElementById('output').innerHTML = html;
  }
</script>

Así, cuando presiones “Ver Conductores”, verás una lista con nombres y edades en lugar de JSON crudo.







<div> (División / Contenedor)
 <div id="output"></div>
- Contenedor genérico: Es una caja que sirve para agrupar otros elementos (como títulos, párrafos o imágenes). No tiene ningún significado semántico propio.
- Diseño y maquetación: Es la herramienta principal para construir la estructura de una página web y aplicar estilos conjuntos mediante CSS.
- Comportamiento: Es un elemento de "bloque", lo que significa que siempre comienza en una nueva línea y ocupa todo el ancho disponible de la pantalla.