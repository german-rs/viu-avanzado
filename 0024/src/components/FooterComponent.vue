<template>
  <footer class="footer container">
    <!-- Se inserta la imagen del logo en el pie de página. -->
    <img src="../../public/FF.png" alt="Logo" />
    <p class="footer__text">
      <!-- Se muestra el texto de derechos reservados en el pie de página. -->
      F & F © 2024 - Flora y Fauna de Chile. Todos los derechos reservados.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
$color-gray600: #4b5563;

.footer {
  /* Se aplica un margen superior e inferior al pie de página. */
  margin-top: 4em;
  margin-bottom: 2em;
  /* Se establece el tamaño de la fuente y el color del texto del pie de página. */
  font-size: 0.9em;
  color: $color-gray600;
  /* Se centra el texto del pie de página. */
  text-align: center;

  &__text {
    /* Se elimina el margen del texto del pie de página. */
    margin: 0;
  }
}
</style>
