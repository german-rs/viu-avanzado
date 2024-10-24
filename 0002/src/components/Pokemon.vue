<script>
import axios from 'axios'
export default {
  data() {
    return {
      pokemon:{}
    }
  },
  async mounted() {
    await this.cargarPokemon()
  },
  computed: {
     datosDelPokemon(){
      return {
        name: this.pokemon.name,
        id: this.pokemon.id,
        picture: this.pokemon.sprites?.other['official-artwork'].front_default
      }
     }
  },
  methods: {
    async cargarPokemon(){
      const url = 'https://pokeapi.co/api/v2/pokemon/25'
      const { data } = await axios.get(url)
      this.pokemon = data
    }
  },
}
</script>

<template>
  <div class="contenedor">
     <div v-if="datosDelPokemon">
      <h2>{{ datosDelPokemon.name }} {{ datosDelPokemon.id }}</h2>
      <img :src="datosDelPokemon.picture" alt="Imagen del Pokémon" />
    </div>
  </div>
</template>

<style scoped>
.contenedor{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>