
// Defniremos aca las rutas de administración
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/modules/public/views/HomeView.vue'),
    },
   
];

//exportamos el contenido de estas rutas hacia el router pricipal
export default routes;

//Despues hay que importarlo en el arhivo de rutas pricipal
  
