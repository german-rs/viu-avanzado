import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Con use.(store) agregamos el store y para router sería similar use.(router) 
createApp(App).use(store).mount('#app')
