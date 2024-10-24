<script>
import axios from 'axios';
export default {
  data() {
    return {
      usuario: null,      
      nombreDeUsuario: '',
      usuarioNoEncontrado: false 
    }
  },
  methods: {
    async obtenerDatosDeUsuario() {
      const url = `https://api.github.com/users/${this.nombreDeUsuario}`;
      try {
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        return null;
      }
    },
    async asignarUsuario() {
      this.usuario = await this.obtenerDatosDeUsuario();
      if (!this.usuario) {
          this.usuarioNoEncontrado = true;   
      }
      this.nombreDeUsuario = '';  
    }
  },
  computed: {
    fotografiaDeUsuario() {
      if (this.usuario) {
        return this.usuario.avatar_url;
      }else {
        return null;
      }
    }
  }
}
</script>

<template>
    <div>
      <div class="contenedor">
        <h1>Busca un usuario de GitHub</h1>
        <input type="text" v-model="nombreDeUsuario">
        <button @click="asignarUsuario">Buscar</button>
      </div> 

      <div class="contenedor">
        <div v-if="fotografiaDeUsuario">
            <img :src="fotografiaDeUsuario" alt="usuario" style="width: 200px;">
            <p>¡Sí, existe!</p>
        </div>

        <div v-else-if="usuarioNoEncontrado">
            <p>No, no existe</p>
        </div>
      </div>  
    </div>
</template>

