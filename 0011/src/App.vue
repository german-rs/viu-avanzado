<script>
  import Colaboradores from './components/Colaboradores.vue';
  import ColaboradoresExtendido from './components/ColaboradoresExtendido.vue';
  export default{
    components:{
      Colaboradores,
      ColaboradoresExtendido
    }
  }
</script>

<template>
  <header>
    <h1>Gestión de Colaboradores</h1>
  </header>
  <div class="primera-version">
    <Colaboradores/>
  </div>
  <div>
    <ColaboradoresExtendido/>
  </div>
</template>

<style scoped>
.primera-version{
  border: 1px solid black;
  padding: 1em;
  margin-bottom: 1em;
}
</style>
