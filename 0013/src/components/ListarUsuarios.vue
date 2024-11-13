<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('usuarios', ['getUsuarios'])
  },
  methods: {
    ...mapActions('usuarios', ['fetchUsuarios', 'deleteUsuario']),
    
    onDeleteColaborador(usuarioId) {
      this.deleteUsuario(usuarioId);
    }
  },
  mounted() {
    this.fetchUsuarios();
  }
};
</script>

<template>
  <div class="table-container">
    <table class="glass-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in getUsuarios" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.correo }}</td>
          <td>{{ usuario.telefono }}</td>
          <td>
            <button @click="onDeleteColaborador(usuario.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.glass-table {
    width: 100%;
    max-width: 900px;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    margin: 20px 0;
}

.glass-table th,
.glass-table td {
    padding: 15px;
    text-align: center;
    color: #fff;
}

.glass-table th {
    background: rgba(255, 255, 255, 0.3);
    font-weight: bold;
}

.glass-table td {
    background: rgba(255, 255, 255, 0.1);
}

.glass-table tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.15);
}

.glass-table tr:hover td {
    background: rgba(255, 255, 255, 0.2);
}

button {
    background: rgba(255, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
}

button:hover {
    background: rgba(139, 0, 0, 0.8);
}
</style>
