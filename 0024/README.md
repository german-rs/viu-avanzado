# ![Logo](/public/FF.png) Proyecto: Flora y Fauna en Chile

## Descripción del Proyecto
Este proyecto consiste en una aplicación web que promueve el conocimiento sobre la biodiversidad de Chile. A través de una interfaz atractiva y funcional, los usuarios pueden explorar información relevante sobre diversas especies de flora y fauna, incluyendo sus nombres, ubicación, descripciones, imágenes y estado de conservación. El desarrollo se realiza aplicando buenas prácticas de desarrollo front-end y utilizando tecnologías modernas.

## Características Principales
### Estructura del Sitio
- Cinco páginas principales:
  - **Inicio (/):** Introducción a la biodiversidad en Chile.
  - **Página Principal (/home):** Resumen de especies en formato de tarjetas, enlazadas a la página de detalles.
  - **Página de Detalles (/detalle/:id):** Información completa sobre una especie seleccionada.
  - **Página de Contacto (/contacto):** Formulario para consultas de los usuarios.
  - **Página 404:** Manejo de errores para rutas inexistentes.

### Responsividad y Estilos
- Uso de **Sass** como preprocesador CSS.
- Aplicación de la metodología **BEM** para un código organizado.
- Uso de **Bootstrap** para diseño responsivo y personalización adicional con CSS.

### Componentización y Navegación
- Desarrollo de componentes reutilizables en **Vue.js**:
  - Lista de especies.
  - Detalles de especies.
  - Formulario de contacto.
  - Barra de navegación.
  - Entre otros.
- Gestión de rutas dinámicas con **Vue Router**.

### Consumo de API y Gestión de Estados
- Integración con un servicio REST para obtener datos de flora y fauna.
- Manejo de estado global con **Vuex** para asegurar reactividad.
- Uso de **Axios** o **Fetch** para realizar peticiones al API.

### Filtrado y Ordenación de Datos
- Filtrado por categoría de tipo y estado de conservación.
- El ordenamiento se realiza cada vez que se accede a la propiedad computada sortedFilteredEspecies(). Esta es una propiedad derivada de la función filteredEspecies(), que siempre que se evalúa, ordena la lista filtrada actual alfabéticamente por el nombre de las especies.

### Buenas Prácticas
- Código siguiendo estándares ES6.
- Tests unitarios con herramientas como **Vitest**.
- Documentación clara y detallada en el código.

## Comandos utilizados

## Creación del proyecto

```sh
npm create vue@latest
```

## Instalación de dependencias

```sh
npm install
```

### Instalación de Vuex

```sh
npm install vuex@next --save
```

### Instalación de Axios

```sh
npm i axios
```

### Instalación de Sass

```sh
npm install sass sass-loader --save-dev
```


### Ejecutar test unitarios con Vitest

```sh
npm run test:unit
```

### Ejecutar proyecto

```sh
npm run dev
```
