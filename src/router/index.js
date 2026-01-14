import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from '@/modules/public/router/index'
import authRoutes from '@/modules/auth/router/index'
import adminRoutes from '@/modules/admin/dashboard/router/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/public/PublicLayout.vue'),
      children: publicRoutes,
    },
    {
      path: '/auth',
      component: () => import('@/layouts/auth/AuthLayout.vue'),
      children: authRoutes,
    },
    {
      path: '/admin',
      component: () => import('@/layouts/admin/AdminLayout.vue'),
      // Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre
      redirect: { name: 'admin.dashboard' },
      children: [...adminRoutes],
    },
  ],
})

export default router
