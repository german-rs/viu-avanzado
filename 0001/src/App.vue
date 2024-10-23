<script>
import Header from './components/Header.vue';
import Clima from './components/Clima.vue';
import Indicador from './components/Indicador.vue';
export default{
  components:{
    Header,
    Clima,
    Indicador
  }
}
</script>

<template>
  <Header/>
  <section>
    <Clima/>
  </section>
  <hr>
  <section>
    <Indicador/>
  </section>
</template>

<style scoped>
</style>
