<script>
/**
 * Se importa el helper mapGetters desde Vuex para mapear getters del store.
 */
import { mapGetters } from 'vuex'
export default {
  /**
   * Se define el nombre del componente.
   */
  name: 'CarouselComponent',
  /**
   * Se definen las propiedades computadas del componente.
   */
  computed: {
    /**
     * Se mapean los getters del store a propiedades computadas del componente.
     */
    ...mapGetters({
      especies: 'getEspecies',
    }),
  },
}
</script>

<template>
  <div class="carousel-container container">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
        <!-- Se itera sobre la lista de especies para crear los elementos del carrusel. -->
        <div
          v-for="(especie, index) in especies"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <!-- Se muestra la imagen de la especie dentro del carrusel. -->
          <img :src="especie.imagen" class="d-block w-100" :alt="especie.nombre" />
        </div>
      </div>
      <!-- Botón para deslizar el carrusel hacia la imagen anterior. -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <!-- Botón para deslizar el carrusel hacia la imagen siguiente. -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color-gray50: #f8fafc;

.carousel-container {
  /* Se aplica padding, ancho, alto, margen y overflow al contenedor del carrusel. */
  padding: 1em 0;
  width: 450px;
  height: 300px;
  margin: auto;
  overflow: hidden;

  .carousel {
    /* Se define el ancho y alto del carrusel. */
    width: 100%;
    height: 100%;

    &-inner {
      /* Se establece la altura del interior del carrusel. */
      height: 100%;

      .carousel-item {
        /* Se establece la altura de los ítems del carrusel. */
        height: 100%;

        img {
          /* Se define el ancho, alto, ajuste y posición de las imágenes del carrusel. */
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    &-indicators button {
      /* Se aplica un color de fondo a los indicadores del carrusel. */
      background-color: $color-gray50;
    }

    &-control-prev-icon,
    &-control-next-icon {
      /* Se define el color de fondo de los íconos de control del carrusel. */
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
