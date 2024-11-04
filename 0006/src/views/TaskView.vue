<script>
export default{}
</script>

<template>
    <h1>Tareas</h1>
    <ul v-for="tarea in $store.state.tareas" :key="tarea.id">
        <li>
           {{ tarea.id }} - {{ tarea.descripcion }} - 
           {{ tarea.estado }}
        </li>
    </ul>
</template>

<style scoped>
</style>