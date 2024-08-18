# link del NPMJS
https://www.npmjs.com/settings/tania_quezada/packages

# link del GitHub


### Componente Web en Stencil para Renderizar una API REST en una Tabla
## Descripción
Este proyecto es un componente web reutilizable desarrollado con Stencil que consume una API REST y renderiza los datos en una tabla. El componente permite interactuar con los elementos mostrados, desplegando detalles adicionales en un modal al hacer clic en cualquier fila.

## Características
Propiedad de Entrada (apiUrl): El componente recibe una URL de API REST para obtener datos en formato JSON.
Renderización de Tabla: Muestra los datos en una tabla con columnas específicas, incluyendo ID, título, precio, stock, e imagen.
Interactividad: Al hacer clic en cualquier fila de la tabla, se despliega un modal con la descripción detallada del producto.
Manejo de Errores: Maneja errores en la obtención de datos, mostrando mensajes adecuados.
Diseño Atractivo: Incluye un diseño moderno y responsive, utilizando técnicas de CSS avanzadas.
## Instalación
npm start
Abre tu navegador en http://localhost:3333 para ver el componente en acción.

## Uso
El componente api-table puede utilizarse en cualquier aplicación web simplemente incluyéndolo en el HTML.

## html
<api-table api-url="https://dummyjson.com/products"></api-table>

## Propiedades
apiUrl: URL de la API REST que el componente consumirá. Por defecto, se usa https://dummyjson.com/products.

## Personalización
Puedes personalizar el estilo del componente modificando el archivo api-table.css. Se utilizan variables CSS y clases predefinidas para facilitar la modificación de colores, fuentes, y otros aspectos del diseño.

## Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes ideas para mejorar este proyecto, no dudes en abrir un issue o enviar un pull request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.