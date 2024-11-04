<script>
import { mapActions, mapState } from 'vuex';

export default{
    name: 'Indicadores',
    computed: {
        // ...mapState(['dolarPrice', 'country']),
         ...mapState(['dolarPrice']),
    },
    methods:{
        //Usar los ... (spread operator)
        ...mapActions(['getIndicadoresEconomicos'])
    }
}
</script>
<template>
    <h1>El valor del dolar es: {{ dolarPrice }}</h1>
    <button @click="getIndicadoresEconomicos">Obtener indicadores</button>
</template>