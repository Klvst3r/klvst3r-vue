import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from '@/modules/public/router/index'
import authRoutes from '@/modules/auth/router/index'
import adminRoutes from '@/modules/admin/dashboard/router/index.js'
import { authGuard } from '@/router/guards/authGuard';


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
      meta: { 
        requiresGuest: true//con estas rutas podemos ingresar si no estamos autenticasdos
      },
      component: () => import('@/layouts/auth/AuthLayout.vue'),
      children: authRoutes,
    },
    {
      path: '/admin',
      meta: { 
        requiresAuth: true //con esto para ingresar a este grupo de rutas se requiere autenticación
      },
      component: () => import('@/layouts/admin/AdminLayout.vue'),
      // Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre
      redirect: { name: 'admin.dashboard' },
      children: [...adminRoutes],
    },
  ],
})


// Agregamos el guard de manera global
 //despues de importarse se usa
 router.beforeEach(authGuard);

export default router
