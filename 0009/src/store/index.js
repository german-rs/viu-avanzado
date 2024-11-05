import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    juegos: [] 
  },
  mutations: {
    establecerJuegos(state, juegos) {
      state.juegos = juegos; 
    },
    actualizarExistencias(state, { codigo, cantidad }) {
      const juego = state.juegos.find(juego => juego.codigo === codigo);
      if (juego) {
        juego.stock = parseInt(juego.stock) + cantidad; 
      }
    }
  },
  actions: {
    async cargarJuegos({ commit }) {
        const url = 'src/bd/juegos.json';       
        try {
            const respuesta = await axios.get(url); 
            commit('establecerJuegos', respuesta.data); 
        } catch (error) {
            console.error("Error al cargar los juegos: ", error);
      }
    },
    modificarStock({ commit }, payload) {
      commit('actualizarExistencias', payload); 
    }
  },
  getters: {
    listaDeJuegos: (state) => state.juegos 
  }
});