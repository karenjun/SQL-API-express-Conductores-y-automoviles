

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
1. Base de datos:

- Importé el archivo .sql corregido en PostgreSQL.
- Adjunté capturas en la carpeta img como evidencia.
- Errores iniciales: tablas duplicadas y joins vacíos.

- Solución: depuración del .sql y verificación con consultas simples (SELECT * FROM conductores;, SELECT * FROM automoviles;).



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