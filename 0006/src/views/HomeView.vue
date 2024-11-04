<script setup>

</script>

<template>
  <main>
    <h1>Inicio</h1>
    <ul v-for="tarea in $store.state.tareas" :key="tarea.id">
        <li>
           {{ tarea.id }} - {{ tarea.descripcion }} - 
           {{ tarea.estado }}
        </li>
    </ul>
  </main>
</template>
