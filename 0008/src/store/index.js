import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    frutas: ['Fruta 1', 'Fruta 2', 'Fruta 3']
  },
  getters: {
    obtenerFrutas(state) {
      console.log(state.frutas.length) }
  },
  mutations: {
    incrementar(state, payload){
      return state.contador = state.contador + payload;
    },
    disminuir(state, payload){
      return state.contador = state.contador + payload;
    },
  },
  actions: {
    accionIncrementar(context) {
      console.log(typeof(context.dispatch));

      setTimeout(() => {
        context.commit('incrementar', 10);
      }, 800)

    },
    accionDisminuir(context){
      setTimeout(() => {
        context.commit('disminuir', -10)
       }, 800)  
    }
  },
  modules: {
  }
})
