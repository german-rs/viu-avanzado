<script>
import axios from 'axios';

export default{
    data(){
        return{
            climas : []
        }
    },
    mounted(){
        this.obtenerClimas();
    },
    methods:{
        async obtenerClimas(){
            const url = 'https://api.gael.cloud/general/public/clima';
            try {
                const { data } = await axios.get(url);
                console.log(data);
                return data;

            } catch (error) {
                console.error(error);
            }
        },
        async definirClimas(){
            const climas = await this.obtenerClimas();
            this.climas = climas;
        }
    }
}
</script>

<template>
    <div>
        <h3>Climas</h3>
        <button @click="definirClimas">Mostrar climas por ciudad</button>
        <ul>
            <li v-for="clima of climas">
                {{ clima.Estacion }}: {{ clima.Temp }}ºC 
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>