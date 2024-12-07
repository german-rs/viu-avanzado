<script>
/**
 * Se importa el componente FormComponent desde la ruta especificada.
 */
import FormComponent from '@/components/FormComponent.vue'
/**
 * Se importa el componente FooterComponent desde la ruta especificada.
 */
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  /**
   * Se registran los componentes FormComponent y FooterComponent para su uso dentro de
   * este componente.
   */
  components: {
    FormComponent,
    FooterComponent,
  },
}
</script>

<template>
  <div class="contact-page">
    <h1 class="contact-page__title">Contacto</h1>
    <!-- Se inserta el componente FormComponent con la clase contact-page__form. -->
    <FormComponent class="contact-page__form" />
    <!-- Se inserta el componente FooterComponent al final de la vista. -->
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  &__title {
    /* Se aplica un margen, alineación de texto y tamaño de fuente al título. */
    margin: 2em 0;
    text-align: center;
    font-size: 2em;
  }

  &__form {
    /* Se aplica un margen superior al formulario de contacto. */
    margin-top: 2em;
  }
}
</style>
