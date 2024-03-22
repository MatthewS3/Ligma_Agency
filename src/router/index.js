import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/agent/:id',
    name: 'agent',
    component: () => import('@/views/AgentView.vue')
  },
  {
    path: '/agents',
    name: 'agents',
    component: () => import('@/views/AgentsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    name: 'webopenerview',
    component: () => import('@/views/WebOpenerView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
