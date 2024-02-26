import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../indonesia/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile_i',
      name: 'profile_i',
      component: () => import('../indonesia/MainView.vue')
    },
    {
      path: '/pendidikan_i',
      name: 'pendidikan_i',
      component: () => import('../indonesia/PendidikanView.vue')
    },
    {
      path: '/pengalaman_i',
      name: 'pengalaman_i',
      component: () => import('../indonesia/PengalamanView.vue')
    },
    {
      path: '/keahlian_i',
      name: 'keahlian_i',
      component: () => import('../indonesia/KeahlianView.vue')
    },
    {
      path: '/project_i',
      name: 'project_i',
      component: () => import('../indonesia/ProjectView.vue')
    },
    {
      path: '/profile_e',
      name: 'profile_e',
      component: () => import('../english/MainView.vue')
    },
    {
      path: '/pendidikan_e',
      name: 'pendidikan_e',
      component: () => import('../english/PendidikanView.vue')
    },
    {
      path: '/pengalaman_e',
      name: 'pengalaman_e',
      component: () => import('../english/PengalamanView.vue')
    },
    {
      path: '/keahlian_e',
      name: 'keahlian_e',
      component: () => import('../english/KeahlianView.vue')
    },
    {
      path: '/project_e',
      name: 'project_e',
      component: () => import('../english/ProjectView.vue')
    },
    
  ]
})

export default router
