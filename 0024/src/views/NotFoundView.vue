<script>
export default {
  /**
   * Se define el nombre del componente para facilitar su identificación en herramientas
   * de depuración y desarrollo.
   */
  name: 'NotFoundView',
}
</script>

<template>
  <div class="not-found">
    <!-- Se muestra una imagen representativa de "No encontrado". -->
    <img
      class="not-found__image"
      src="../../public/not-found.webp"
      alt="Una lupa y una x que representa No encontrado"
    />

    <!-- Se muestra el título de la página de error. -->
    <h1 class="not-found__title">Página no encontrada</h1>

    <!-- Se muestra un mensaje descriptivo informando que la página no existe. -->
    <p class="not-found__message">Lo sentimos, la página que buscas no existe.</p>

    <!-- Se proporciona un enlace para volver a la página de inicio. -->
    <router-link class="btn not-found__button" to="/">Volver al inicio</router-link>
  </div>
</template>

<style lang="scss" scoped>
/* Se definen los colores personalizados. */
$color-gray800: #1f2937;
$color-gray700: #374151;

.not-found {
  /* Se aplica un margen superior al contenedor principal. */
  margin-top: 2em;

  /* Se usa Flexbox para centrar los elementos vertical y horizontalmente. */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  &__image {
    /* Se define el ancho de la imagen representativa. */
    width: 250px;
  }

  &__title {
    /* Se aplica estilo al título. */
    text-align: center;
    font-size: 2em;
    color: $color-gray700;
  }

  &__message {
    /* Se aplica estilo al mensaje descriptivo. */
    font-size: 1.2rem;
    color: $color-gray800;
  }

  &__button {
    /* Se aplica estilo al enlace del botón. */
    text-decoration: none;
  }
}
</style>
