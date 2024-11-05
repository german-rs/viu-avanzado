<script>
import {mapState} from 'vuex'

export default { 
    computed: {
        ...mapState(['contador']),
        botonObtenerFrutas() {
            this.$store.getters.obtenerFrutas;
        },
    },
    methods:{
        botonIncrementar(){
            this.$store.dispatch('accionIncrementar');
        },
        botonDisminuir(){
            this.$store.dispatch('accionDisminuir');
        }
    }
}
</script>

<template> 
    <div>
        <button @click="botonIncrementar">Incrementar contador</button>
    </div>
    <div>
        <button @click="botonDisminuir">Disminuir contador</button>
    </div>
</template>

<style scoped>
</style>