<script >
import MountedApi from './components/MountedApi.vue';
import ComputedPropertyUser from './components/ComputedPropertyUser.vue';
import APIGithub from './components/APIGithub.vue';
import Pokemon from './components/Pokemon.vue';

export default{
  components:{
    MountedApi,
    APIGithub,
    ComputedPropertyUser,
    Pokemon
  }
}
</script>

<template>
  <h2>Ejercicio 1.</h2>
  <div>
    <MountedApi/>
  </div>
  <hr>
  <h2>Ejercicio 2.</h2>
  <div>
    <APIGithub/>
  </div>
  <hr>
  <h2>Ejercicio 3.</h2>
  <div>
    <ComputedPropertyUser/>
  </div>
  <hr>
  <h2>Ejercicio 4.</h2>
  <div>
    <Pokemon/>
  </div>

</template>

<style scoped>
#App { 
  display: grid; 
  grid-template-columns: repeat(6, 1fr); 
  gap: 10px; 
}
</style>
