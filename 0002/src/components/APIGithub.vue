<script>
import axios from 'axios';
export default{
    data(){
        return{
            datagit: {},
        }
    },
    async mounted(){
        await this.mostrarGit();
  },
  methods:{
    async cargarDatosGit(){
      const url = "https://api.github.com/users/german-rs"
      const { data } = await axios.get(url)
      return data
    },
    async mostrarGit(){
      this.datagit = await this.cargarDatosGit()
    }
  }
}
</script>
<template>
    <div >
      <div class="contenedor">
      <img style="height: 300px" :src="datagit.avatar_url">
        <h3>{{datagit.name}}</h3>
        <a :href="`http://${datagit.blog}`">{{ datagit.blog }}</a>
     </div>
        
    </div>
</template>
<style>
  .contenedor{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
    padding: 1em;
  }
</style>