// Defniremos aca las rutas de administración
const routes = [
  {
    path: '',
    redirect: { name: 'auth-login' },
  },
  {
    path: 'login',
    name: 'auth-login',
    component: () => import('@/modules/auth/views/LoginView.vue'),
  },
  {
    path: 'register',
    name: 'auth-register',
    component: () => import('@/modules/auth/views/RegisterView.vue'),
  },
]

//exportamos el contenido de estas rutas hacia el router pricipal
export default routes

//Despues hay que importarlo en el arhivo de rutas pricipal
