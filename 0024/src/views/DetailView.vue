<script>
/**
 * Se importan los estados de Vuex.
 */
import { mapState } from 'vuex'
/**
 * Se importan los componentes DetailComponent, InitiativeComponent y FooterComponent.
 */
import DetailComponent from '@/components/DetailComponent.vue'
import InitiativeComponent from '@/components/InitiativeComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  /**
   * Se define el nombre del componente para facilitar su identificación en herramientas
   * de depuración y desarrollo.
   */
  name: 'DetailView',
  /**
   * Se registran los componentes DetailComponent, InitiativeComponent y
   * FooterComponent para su uso dentro de este componente.
   */
  components: {
    DetailComponent,
    InitiativeComponent,
    FooterComponent,
  },
  /**
   * Se definen las propiedades computadas del componente.
   */
  computed: {
    /**
     * Se mapean los estados de Vuex como propiedades computadas.
     */
    ...mapState({
      especies: (state) => state.especies,
    }),
    /**
     * Se obtiene la especie específica basada en el ID de la ruta.
     */
    especie() {
      return this.especies.find((e) => e.id === parseInt(this.$route.params.id))
    },
  },
}
</script>

<template>
  <div class="detail container">
    <h1 class="detail__title">Detalle</h1>
    <!-- Se inserta el componente DetailComponent con la especie específica. -->
    <DetailComponent :especie="especie" />
    <h2 class="detail__subtitle">Indicanos tu iniciativa</h2>
    <!-- Se inserta el componente InitiativeComponent. -->
    <InitiativeComponent />
    <!-- Se inserta el componente FooterComponent. -->
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
$color-gray800: #1f2937;

.detail {
  &__title {
    /* Se aplican márgenes y alineación de texto al título. */
    margin: 2em 0;
    text-align: center;
  }

  &__subtitle {
    /* Se aplican márgenes y alineación de texto al subtítulo. */
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: center;
  }
}

.detail-card {
  /* Se define el margen y el ancho máximo de las tarjetas de detalle. */
  margin: 20px auto;
  max-width: 600px;

  .card-body {
    /* Se centra el texto dentro del cuerpo de la tarjeta. */
    text-align: center;

    .card-title {
      /* Se define el tamaño de la fuente del título de la tarjeta. */
      font-size: 1.8em;
    }

    .card-text {
      /* Se define el tamaño y el color de la fuente del texto de la tarjeta. */
      font-size: 1.1em;
      color: $color-gray800;

      &:not(:last-child) {
        /* Se aplica un margen inferior a todos los elementos excepto el último. */
        margin-bottom: 1em;
      }
    }
  }

  .card-img-top {
    /* Se define la altura máxima y el ajuste de objeto de la imagen superior de la tarjeta. */
    max-height: 400px;
    object-fit: cover;
  }
}
</style>
