<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos']) 
  },
  methods: {
    ...mapActions(['modificarStock', 'cargarJuegos'])
  },
  mounted() {
    this.cargarJuegos(); 
  }
};
</script>

<template>
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegos" :key="juego.codigo"> 
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <button @click="modificarStock({ codigo: juego.codigo, cantidad: 1 })">+</button>
              <button @click="modificarStock({ codigo: juego.codigo, cantidad: -1 })">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  font-weight: 600;
  text-align: center;
}

button {
  margin-right: 5px;
}

table tr td:last-of-type {
  text-align: center;
}
</style>