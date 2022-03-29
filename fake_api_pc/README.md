# Fake API Portal Clientes

La idea principal es poder utilizar el paquete json-server para simular una API REST que devuelve contenido. ¿Qué contenido devuelve? El que tú definas dentro del archivo db/db.json. Por ejemplo: el archivo actual del archivo es:

### db/db.json

```json
{
  "index":{
    "status": "ok",
    "message": "Bienvenido al API de Unifin",
    "data": null
  }
}
```

Ahora deberás especificar qúe ruta de la API será la que devolvera el contenido de la llave "index". Para definir rutas específicas puedes utilizar el archivo routes.json. Actualmente contiene lo siguiente:

### routes.json

```json
{
    "/api/v2/": "/index"
}
```

# Lo ponemos en acción

Una vez que descargas el repositorio solo debes ejecutar los siguientes comandos desde dentro de la carpeta del proyecto.

```
npm install
```

Y después el comando:

```
npm run server
```

## Nota:

Puedes editar el contenido de los archivos db/db.json y routes.json y los cambios se reflejarán de inmediato. Ante cualquier problema de actualización. Prueba detener el servidor y ejecutar nuevamente el comando:

```
npm run server
```