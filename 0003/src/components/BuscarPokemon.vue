<script>
import axios from 'axios';    
export default{
    data(){
        return{
            pokemonIngresado: '',
            datosPokemon: null
        }
    },
    methods:{
        async buscarPokemon(){
            const url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonIngresado.toLowerCase()}`;    
            try {
                const { data } = await axios.get(url);
                this.datosPokemon = data;
            } catch (error) {
                this.datosPokemon = null;
            }
        }
    },
    computed:{
        informacionDelPokemon(){
            if(!this.datosPokemon){
                return null;
            }
            return{
                name: this.datosPokemon.name,
                img: this.datosPokemon.sprites?.other?.dream_world?.front_default ||
                    this.datosPokemon.sprites?.front_default
            }
        }
    }
}
</script>
<template>
    <div class="contenedor">
        <h1 class="titulo">Busca tu pokémon</h1>
        <h3>Usa un número o el nombre del Pokémon</h3>
    </div>

    <div class="contenedor">
        <input type="text" v-model="pokemonIngresado">
        <button @click="buscarPokemon">Buscar</button>
    </div> 

    <div v-if="informacionDelPokemon" class="contenedor">
        <img :src="informacionDelPokemon.img" alt="imágen del pokémon">
        <h4>{{ informacionDelPokemon.name }}</h4>
    </div>
</template>