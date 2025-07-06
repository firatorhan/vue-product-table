import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProducsView.vue'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
