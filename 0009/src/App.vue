<script>
import Cabecera from './components/Cabecera.vue';
import TablaJuegos from './components/TablaJuegos.vue';
import Pie from './components/Pie.vue';

export default {
  components: {
    Cabecera,
    TablaJuegos,
    Pie
  }
};
</script>

<template>
  <div id="app" class="contenedor">
    <Cabecera />
    <TablaJuegos />
    <Pie />
  </div>
</template>

<style>
#app {
  text-align: center;
}
</style>

