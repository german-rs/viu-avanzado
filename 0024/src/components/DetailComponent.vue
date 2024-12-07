<script>
/**
 * Se define el componente DetailComponent.
 */
export default {
  /**
   * Se establece el nombre del componente.
   */
  name: 'DetailComponent',
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
  <div class="detail-card card">
    <!-- Se muestra la imagen de la especie. -->
    <img :src="especie.imagen" class="card-img-top" :alt="especie.nombre" />
    <div class="card-body">
      <!-- Se muestra el nombre de la especie. -->
      <h5 class="card-title">{{ especie.nombre }}</h5>
      <!-- Se muestra la descripción de la especie. -->
      <p class="card-text">{{ especie.descripcion }}</p>
      <!-- Se muestra el tipo de la especie. -->
      <p class="card-text"><strong>Tipo:</strong> {{ especie.tipo }}</p>
      <!-- Se muestra la ubicación de la especie. -->
      <p class="card-text"><strong>Ubicación:</strong> {{ especie.ubicacion }}</p>
      <!-- Se muestra el estado de conservación de la especie. -->
      <p class="card-text">
        <strong>Estado de Conservación:</strong> {{ especie.estadoConservacion }}
      </p>
    </div>
  </div>
</template>
