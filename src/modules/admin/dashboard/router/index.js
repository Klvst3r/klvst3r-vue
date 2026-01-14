//Hay que importarlo en el arhivo de rutas del modulo dashboard

// Defniremos aca las rutas del del submodulo dashboard, lo incluimos destructurando el array
const routes = [
  {
    path: 'dashboard',
    name: 'admin.dashboard', //componente que se va a renderizar
    component: () => import('@/modules/admin/dashboard/views/Dashboard.vue'),
  },
]

//exportamos el contenido de estas rutas hacia el router pricipal
export default routes
