<script></script>

<template>
    <h1>Usuarios</h1>
    <ul v-for="usuario in $store.state.usuarios" :key="usuario.id">
        <li>
           {{ usuario.id }} - {{ usuario.nombre }} - 
           {{ usuario.correo }}
        </li>
    </ul>
</template>

<style scoped>
</style>
