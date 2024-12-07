<script>
/**
 * Se define el componente CardComponent.
 */
export default {
  /**
   * Se establece el nombre del componente.
   */
  name: 'CardComponent',
  /**
   * Se definen las propiedades que el componente acepta.
   * @property {Object} especie - Objeto que representa una especie, requerido.
   */
  props: {
    especie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="card mb-3">
    <!-- Se muestra la imagen de la especie. -->
    <img :src="especie.imagen" class="card-img-top" :alt="especie.nombre" />
    <div class="card-body">
      <!-- Se muestra el nombre de la especie. -->
      <h5 class="card-title">{{ especie.nombre }}</h5>
      <!-- Se muestra la descripción de la especie. -->
      <p class="card-text">{{ especie.descripcion }}</p>
      <!-- Se proporciona un enlace para ver más detalles de la especie. -->
      <router-link :to="`/detalle/${especie.id}`" class="btn">Ver detalles</router-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  /* Se aplica un margen inferior a la tarjeta. */
  margin-bottom: 1.5rem;
}
.card-body {
  /* Se centra el texto dentro del cuerpo de la tarjeta. */
  text-align: center;
}
.card img {
  /* Se define el ancho máximo y la altura automática de la imagen. */
  max-width: 100%;
  height: auto;
}
</style>
