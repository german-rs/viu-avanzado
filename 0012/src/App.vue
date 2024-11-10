<script>
import Medicamentos from './components/Medicamentos.vue';
export default{
  components:{
    Medicamentos
  }
}
</script>

<template>
  <header>
    <h1>Farmacia Vista</h1>
  </header>
  <Medicamentos/>
</template>

<style scoped>
header{
  text-align: center;
}
h1{
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  padding: 1em 0;
}
</style>
