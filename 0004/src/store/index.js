import { createStore } from "vuex";

export default createStore({
    state:{
        count: 0,
        nombre: 'Germán Riveros',
        carrera: 'Front-End',
        peliculas: [{
            id: 0,
            titulo: "El señor de los anillos",
            director: "Peter Jackson",
            fechaLanzamiento: {
                año: 2001,
                mes: 12,
                dia: 19
            }
        },
        { 
            id: 1,
            titulo: "Harry Potter y la piedra filosofal",
            director: "Chris Columbus",
            fechaLanzamiento: {
                año: 2001,
                mes: 12,
                dia: 19
            }
        }]
    },
    mutations:{ //Métodos
        increment(state){
            state.count++;
        }
    },
    actions:{
        //Se usa para las APIs
    },
    modules:{},
    getters: {
        obtenerAñoPorId: (state) => (id) => {
            const pelicula = state.peliculas.find(p => p.id === id);
            return pelicula ? pelicula.fechaLanzamiento.año : null;
        },

        getAñoId0(state){
            return state.peliculas[0].fechaLanzamiento.año
        },
        getTituloId0(state){
            return state.peliculas[0].titulo
        }

    }
})