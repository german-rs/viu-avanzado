<script>
/**
 * Se importa el componente de navegación NavComponent.
 */
import NavComponent from './components/NavComponent.vue'

export default {
  /**
   * Se registra el componente NavComponent para su uso en este componente.
   */
  components: {
    NavComponent,
  },
}
</script>

<template>
  <header>
    <div>
      <!-- Se inserta el componente NavComponent en el encabezado. -->
      <NavComponent />
    </div>
  </header>
  <!-- Se utiliza RouterView para mostrar el componente de la ruta activa. -->
  <RouterView />
</template>