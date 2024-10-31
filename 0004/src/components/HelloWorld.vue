<script setup>
</script>

<template>
  <div class="greetings">
    <p>El contador es: {{ $store.state.count }} </p>
    <button @click="$store.commit('increment')">incrementar</button>
    <p>El nombre es: {{ $store.state.nombre }} </p>
    <p>La carrera es: {{ $store.state.carrera }} </p>
    <p>La película {{ $store.getters.getTituloId0 }} es del año {{ $store.getters.getAñoId0 }}.</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
