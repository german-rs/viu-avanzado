<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      nuevoUsuario: {
        nombre: '',
        correo: '',
        telefono: '',
      }
    };
  },
  methods: {
    ...mapActions('usuarios', ['agregarUsuario']),
    
    async onAgregarUsuario() {
      if (this.nuevoUsuario.nombre.trim() === '' || 
          this.nuevoUsuario.correo.trim() === '' || 
          this.nuevoUsuario.telefono.trim() === '') return;

      await this.agregarUsuario({
        nombre: this.nuevoUsuario.nombre,
        correo: this.nuevoUsuario.correo,
        telefono: this.nuevoUsuario.telefono
      });

      this.nuevoUsuario = { nombre: '', correo: '', telefono: '' };
    }
  }
}
</script>

<template>
  <div class="principal">
    <form @submit.prevent="onAgregarUsuario" class="glass">
      <input type="text" v-model="nuevoUsuario.nombre" placeholder="Nombre">
      <input type="email" v-model="nuevoUsuario.correo" placeholder="Correo electrónico">
      <input type="tel" v-model="nuevoUsuario.telefono" placeholder="Teléfono">
      <button type="submit">Agregar usuario</button>
    </form>
  </div>
</template>

<style scoped>
.principal {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.glass {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 2em;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    color: #fff;
}

input, button {
    width: 100%;
    padding: 0.8em;
    margin: 0.5em 0;
    border: none;
    border-radius: 10px;
    outline: none;
}

input {
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

input::placeholder {
    color: #ddd;
}

button {
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
    background: rgba(255, 255, 255, 0.5);
}

.mensaje {
    color: #fff;
    font-weight: bold;
    margin-top: 1em;
    text-align: center;
}
</style>


