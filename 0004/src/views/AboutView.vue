<script></script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>El contador es: {{ $store.state.count }} </p>
    <p>El nombre es: {{ $store.state.nombre }} </p>
    <p>La carrera es: {{ $store.state.carrera }} </p>
    <p>La película {{ $store.getters.getTituloId0 }} es del año {{ $store.getters.getAñoId0 }}.</p>
  </div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
