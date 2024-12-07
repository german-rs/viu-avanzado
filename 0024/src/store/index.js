import { createStore } from 'vuex'
import axios from 'axios'

/**
 * Se crea un store de Vuex para manejar el estado de la aplicación.
 */
const store = createStore({
  /**
   * Se define el estado inicial del store.
   */
  state: {
    especies: [], // Lista de especies, inicialmente vacía.
  },
  /**
   * Se definen las mutaciones para modificar el estado.
   */
  mutations: {
    /**
     * Se establece la lista de especies en el estado.
     * @param {Object} state - El estado actual del store.
     * @param {Array} payload - La nueva lista de especies.
     */
    setEspecies(state, payload) {
      state.especies = payload
    },
  },
  /**
   * Se definen las acciones que pueden ejecutar tareas asíncronas.
   */
  actions: {
    /**
     * Se obtiene la lista de especies desde un archivo JSON y se actualiza el estado.
     * @param {Function} commit - Función para realizar commit de las mutaciones.
     */
    async fetchEspecies({ commit }) {
      try {
        const response = await axios.get('/data/db.json')
        console.log('Datos obtenidos:', response.data.especies)
        // Se realiza commit de la mutación para actualizar la lista de especies.
        commit('setEspecies', response.data.especies)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
  /**
   * Se definen los getters para acceder a los datos del estado.
   */
  getters: {
    /**
     * Se obtiene la lista de especies desde el estado.
     * @param {Object} state - El estado actual del store.
     * @returns {Array} La lista de especies.
     */
    getEspecies: (state) => state.especies,
  },
})

/**
 * Se exporta el store de Vuex para su uso en la aplicación.
 */
export default store
