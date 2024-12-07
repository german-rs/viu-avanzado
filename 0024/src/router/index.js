import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MainView from '../views/MainView.vue'
import DetailView from '../views/DetailView.vue'

/**
 * Se define la configuración de las rutas de la aplicación.
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'F & F | Bienvenidos',
    },
  },
  {
    path: '/home',
    name: 'main',
    component: MainView,
    meta: {
      title: 'F & F | Flora & Fauna',
    },
  },
  {
    path: '/detalle/:id',
    name: 'detail',
    component: DetailView,
    meta: {
      title: 'F & F | Detalle',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'F & F | Contacto',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'F & F | Página No Encontrada',
    },
  },
]

/**
 * Se crea una instancia del router utilizando el historial HTML5.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * Se define un guardia global para cambiar el título de la página según la ruta actual.
 * @param {Route} to - La ruta a la que se navega.
 * @param {Route} from - La ruta desde la que se navega.
 * @param {Function} next - Función para continuar con la navegación.
 */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'F & F'
  next()
})

/**
 * Se exporta el router para su uso en la aplicación.
 */
export default router
