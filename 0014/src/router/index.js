import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{
        login : true
      }
    },
  ],
})

router.beforeEach((to, from, next) =>{
  const authRequired = to.meta.login
  const isAuthenticated  = auth.currentUser !== null

  if(authRequired && !isAuthenticated){
    next({name: 'home'});
  }else{
    next()
  }

});

export default router
