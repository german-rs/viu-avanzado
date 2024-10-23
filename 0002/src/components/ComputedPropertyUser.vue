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
  computed:{
    fotoDeLosUsuarios(){
        return this.usuarios.map( (usuario) => usuario.picture.large );
    }
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
  <h4 class="titulo">Utilizando Computed</h4>
  <div id="App">
     <div v-for="(foto, indice) in fotoDeLosUsuarios" :key="indice">
        <img :src="foto" alt="">
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
.titulo{
  text-align: center;
  padding: 1em;
}
</style>