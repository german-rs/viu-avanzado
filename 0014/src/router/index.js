// import { createRouter, createWebHistory } from 'vue-router';
// import LoginView from '../views/LoginView.vue';
// import SignUpView from '../views/SignUpView.vue';
// import HomeView from '../views/HomeView.vue';
// import { auth } from '@/auth';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: LoginView,
//       meta: { guest: true }
//     },
//     {
//       path: '/signup',
//       name: 'signup',
//       component: SignUpView,
//       meta: { guest: true }
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: HomeView,
//       meta: { requiresAuth: true }
//     }
//   ]
// });

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.meta.requiresAuth;
//   const guest = to.meta.guest;
//   const isAuthenticated = auth.currentUser !== null;

//   if (requiresAuth && !isAuthenticated) {
//     next({ name: 'login' });
//   } else if (guest && isAuthenticated) {
//     next({ name: 'home' });
//   } else {
//     next();
//   }
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import HomeView from '../views/HomeView.vue';
import { auth } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { guest: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      meta: { guest: true }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const guest = to.meta.guest;
  const isAuthenticated = auth.currentUser !== null;

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (guest && isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
