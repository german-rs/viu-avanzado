<script>
import axios from 'axios';
export default{
    data(){
        return{
            gender: '',
            user: null
        }
    },
    methods:{
        async getUser(){
            try {
                const url = `https://randomuser.me/api/?gender=${this.gender}`;
                const { data } = await axios.get(url);
                this.user = data.results; 
            } catch (error) {
                console.error(error);
            }
        }
    },
    computed:{
        dataUser(){
            return{
                name: `${this.user[0].name.title} ${this.user[0].name.first} 
                    ${this.user[0].name.last}`,
                picture: this.user[0].picture.large    
            }
        }
    }
}
</script>
<template>
    <div class="contenedor">
        <h1>Busca un usuario por género</h1>
        <div class="botonesRadio">
            <label for="female">
                <input type="radio" id="female" value="female" v-model="gender" >Female
            </label>
            <label for="male">
                <input type="radio" id="male" value="male" v-model="gender" >Male
            </label>
        </div>

        <button @click="getUser">Buscar</button>

        <div v-if="user" >
            <img :src="dataUser.picture">
            <h4>{{ dataUser.name }}</h4>
        </div>
    </div>
</template>
<style scoped>
.botonesRadio{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
</style>