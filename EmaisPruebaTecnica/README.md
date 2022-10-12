
# Prueba Técnica  EMAIS - Raúl Orga

Proyecto realizado como prueba técnica para la empresa EMAIS.

Consiste en realizar una pequeña aplicación web en la que se mostrará un listado 
de películas con su póster, título y fecha de estreno.

Además, cada ítem tendrá asociado un botón de “Favoritos” para agregar/desagregar a una lista de películas favoritas.


## Framework

El proyecto ha sido desarrollado con ANGULAR y TypeScript, ya que es el Framework con el
que más experiencia tengo y mejor me desenvuelvo.
## Referencias de Colores y Diseño

He usado estos colores, ya que el azul es uno de mis colores favoritos además de que representa
seriedad y equilibrio.

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color primario    | #112640 |
| Color secundario  | #224C80 |
| Color terciario   | #3472BF |
| Color cuaternario | #4699FF |


## Librerías usadas

He usado Angular Material, ya que es una librería de componentes web de las más establecidas
y usadas a día de hoy además de ser bastante versátil y tener multitud de documentación disponible.
## Referencias de las APIs

#### Get all items

```http
  GET /search/movie?api_key=${api_key}&query=${busqueda}
```

| Parameter | Type      | Description                 |
| :-------- |  :------- | :------------------------- |
| `api_key` |  `string` | Api_key que se nos proporciona.|
| `busqueda`| `string`  | Película a buscar |
