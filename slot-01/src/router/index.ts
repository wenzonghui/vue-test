import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/slot-a',
      name: 'slot-a',
      component: () => import('../views/SlotA.vue')
    },
    {
      path: '/slot-b',
      name: 'slot-b',
      component: () => import('../views/SlotB.vue')
    }
  ]
})

export default router
