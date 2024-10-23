<script >
import axios from 'axios';

export default{
  data(){
    return{
      usuarios : []
    }
  },
  async mounted(){
    await this.listaUsuario();
  },
  methods:{
    async cargarUsuarios(){
      const url = 'https://randomuser.me/api?results=30';
      const { data } = await axios.get(url);
      return data.results;  
    },
    async listaUsuario(){
      this.usuarios = await this.cargarUsuarios();
    }
  }
}
</script>

<template>
  <div id="App">
    <div v-for="(usuario, indice) in usuarios" :key="indice">
      <img :src="usuario.picture.large" :alt="usuario.name.first">
    </div>
  </div>
</template>

<style scoped>
#App { 
  display: grid; 
  grid-template-columns: repeat(6, 1fr); 
  gap: 10px; 
  padding: 1em;
}
</style>
