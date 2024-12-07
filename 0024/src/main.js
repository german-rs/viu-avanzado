/**
 * Se importa el archivo principal de estilos SCSS.
 */
import './assets/sass/main.scss'

/**
 * Se importan las funciones necesarias desde Vue.
 */
import { createApp } from 'vue'
/**
 * Se importa el componente raíz de la aplicación.
 */
import App from './App.vue'
/**
 * Se importa el enrutador de la aplicación.
 */
import router from './router'
/**
 * Se importa el store de Vuex de la aplicación.
 */
import store from './store'

/**
 * Se crea una instancia de la aplicación.
 */
const app = createApp(App)

/**
 * Se configura el enrutador en la aplicación.
 */
app.use(router)
/**
 * Se configura el store de Vuex en la aplicación.
 */
app.use(store)
/**
 * Se monta la aplicación en el elemento con id 'app'.
 */
app.mount('#app')