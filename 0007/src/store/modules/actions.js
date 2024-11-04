import axios from "axios";

export default{
    async getIndicadoresEconomicos({ commit }){
        const url = 'https://mindicador.cl/api';
        try {
            const response = await axios.get(url);
            commit('changeDolarPrice', response.data.dolar.valor);
        } catch (error) {
            console.error("Error al obtener indicadores económicos: ", error);
        }
    }
}