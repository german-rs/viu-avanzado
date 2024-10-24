<script>
import UsuarioGithub from './components/BuscadorUsuarioGithub.vue';
import BuscarPokemon from './components/BuscarPokemon.vue';
import BuscadorGenero from './components/BuscadorGenero.vue';
export default{
  components:{
    UsuarioGithub,
    BuscarPokemon,
    BuscadorGenero
  }
}
</script>

<template>
  <section>
    <h2>EJERCICIO 1.</h2>
    <UsuarioGithub/>
  </section>
  <hr>
  <section>
    <h2>EJERCICIO 2.</h2>
    <BuscarPokemon/>
  </section>
  <hr>
  <section>
    <h2>EJERCICIO 3.</h2>
    <BuscadorGenero/>
  </section>
</template>

<style scoped>

</style>
