import { createStore } from 'vuex'
import { tareas } from "../db/db_tareas";

export default createStore({
  state: {
    contador: 2,
    nombre: 'Germán R. S.',
    carrera: "Front End Vue",
  //   tareas:[
  //     { id: 1, descripcion: 'Tarea 1', estado: 'terminada'},
  //     { id: 2, descripcion: 'Tarea 2', estado: 'terminada'},
  //     { id: 3, descripcion: 'Tarea 3', estado: 'en proceso'},
  //     { id: 4, descripcion: 'Tarea 4', estado: 'en proceso'}, 
  //     { id: 5, descripcion: 'Tarea 5', estado: 'terminada'} 
  // ]

  tareas //último ejercicio
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
