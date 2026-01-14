const routes = [
  //Definimos nuestra primera ruta
  {
    path: '',
    name: 'home',
    component: () => import('@/modules/public/home/views/HomeView.vue'),
  },
]

export default routes
