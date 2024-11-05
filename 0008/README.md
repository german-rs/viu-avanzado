# 0008

## Vuex

Se resuelve lo siguiente:

## Tabla de Contenidos
1. **Actividad guiada**: Crear un contador con payload.
2. **Getters**: Implementación de lógica para evitar redundancia.
3. **Actions**: Introducción a acciones asíncronas en Vuex.
4. **Ejercicio práctico**: Agregar una acción de decremento al contador.
5. **Solución**: Código completo del ejercicio final.

## Actividad guiada: Contador con Payload
- Se crea un contador en `Contador.vue` que recibe un valor a incrementar mediante un *payload*.
- Pasos:
  - Definir el estado `contador` en `index.js`.
  - Crear una mutación `incrementar` que acepte el payload.
  - Incorporar un botón en `Contador.vue` para disparar la mutación mediante `commit`.

## Getters
- Los *getters* en Vuex permiten obtener valores derivados del estado.
- Ejemplo: Calcular la cantidad de elementos en un arreglo de frutas.
- Se integran en `index.js` y se accede a ellos desde componentes para mantener la lógica centralizada.

## Actions
- Las *actions* permiten manejar procesos asíncronos en Vuex.
- Ejemplo: Usar `setTimeout` para ejecutar una mutación después de un retraso.
- Uso de `dispatch` para invocar acciones desde los componentes.

## Ejercicio Práctico: Disminuir el Contador
1. Crear una acción `accionDisminuir`.
2. Definir una mutación `disminuir` que reduzca el contador.
3. Agregar un botón en `Contador.vue` para disparar la acción.

## En este [link](https://github.com/Giovasdf/Gui-a-de-ejercicios---Vuex--II-) se encuentra una solución alternativa. 