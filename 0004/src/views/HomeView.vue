<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <p>El contador es: {{ $store.state.count }} </p>
      <p>El nombre es: {{ $store.state.nombre }} </p>
      <p>La carrera es: {{ $store.state.carrera }} </p> 

      <p>La película {{ $store.getters.getTituloId0 }} es del año {{ $store.getters.getAñoId0 }}.</p>
  </main>
</template>
