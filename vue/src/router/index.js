import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/organshop',
      name: 'organshop',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/OrganShop.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/createnew',
      name: 'createnew',
      component: () => import('../views/CreateNew.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/EditCard.vue')
    }
  ]
})

export default router
