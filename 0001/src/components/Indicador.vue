<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                indicadores: null 
            };
        },
        mounted() {
            this.obtenerIndicadores(); 
            
        },
        methods: {
            async obtenerIndicadores() {
                const url = 'https://mindicador.cl/api';
                try {
                    const { data } = await axios.get(url);
                    console.log(data);
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            async definirIndicadores() {
                const indicadores = await this.obtenerIndicadores();
                this.indicadores = indicadores; 
            }
        }
    }
</script>

<template>
    <div>
        <h3>Indicadores</h3>
        <button @click="definirIndicadores">Mostrar tabla indicadores</button>
    </div>    
    <div v-if="indicadores">
        <table border="1">
            <thead>
                <tr>
                    <th v-if="indicadores.uf">{{ indicadores.uf.codigo }}</th>
                    <th v-if="indicadores.ivp">{{ indicadores.ivp.codigo }}</th>
                    <th v-if="indicadores.dolar">{{ indicadores.dolar.codigo }}</th>
                    <th v-if="indicadores.dolar_intercambio">{{ indicadores.dolar_intercambio.codigo }}</th>
                    <th v-if="indicadores.euro">{{ indicadores.euro.codigo }}</th>
                    <th v-if="indicadores.ipc">{{ indicadores.ipc.codigo }}</th>
                    <th v-if="indicadores.utm">{{ indicadores.utm.codigo }}</th>
                    <th v-if="indicadores.imacec">{{ indicadores.imacec.codigo }}</th>
                    <th v-if="indicadores.tpm">{{ indicadores.tpm.codigo }}</th>
                    <th v-if="indicadores.libra_cobre">{{ indicadores.libra_cobre.codigo }}</th>
                    <th v-if="indicadores.tasa_desempleo">{{ indicadores.tasa_desempleo.codigo }}</th>
                    <th v-if="indicadores.bitcoin">{{ indicadores.bitcoin.codigo }}</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>{{ indicadores.uf.valor }}</td>
                    <td>{{ indicadores.ivp.valor }}</td>
                    <td>{{ indicadores.dolar.valor }}</td>
                    <td>{{ indicadores.dolar_intercambio.valor }}</td>
                    <td>{{ indicadores.euro.valor }}</td>
                    <td>{{ indicadores.ipc.valor }}</td>
                    <td>{{ indicadores.utm.valor }}</td>
                    <td>{{ indicadores.imacec.valor }}</td>
                    <td>{{ indicadores.tpm.valor }}</td>
                    <td>{{ indicadores.libra_cobre.valor }}</td>
                    <td>{{ indicadores.tasa_desempleo.valor }}</td>
                    <td>{{ indicadores.bitcoin.valor }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>
