<script>
import Cabecera from './components/Cabecera.vue';
import AgregarUsuarios from './components/AgregarUsuarios.vue';
import ListarUsuarios from './components/ListarUsuarios.vue';
export default{
    components:{
        Cabecera,
        AgregarUsuarios,
        ListarUsuarios
    }
}
</script>

<template>
    <Cabecera/>
    <AgregarUsuarios/>    
    <ListarUsuarios/>
</template>

<style scoped>

</style>
