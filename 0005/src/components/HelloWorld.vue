<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<template>
  <div class="hello">
    <!-- <h1>{{ $store.state.contador }}</h1>
    <p>{{ $store.state.nombre }}</p>
    <p>{{ $store.state.carrera }}</p> -->
    <ul v-for="tarea in $store.state.tareas">
      <li>{{ tarea.id }} - {{ tarea.descripcion }} - {{ tarea.estado }}</li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
