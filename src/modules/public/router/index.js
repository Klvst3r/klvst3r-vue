// importamos el archivo de rutas de cada submodulo
import aboutRoutes from '@/modules/public/about/router/index.js'
import blogRoutes from '@/modules/public/blog/router/index.js'
import contactRoutes from '@/modules/public/contact/router/index.js'
import homeRoutes from '@/modules/public/home/router/index.js'

// Una forma de combinar las rutas de los submodulos e
//const routes = aboutRoutes;

// Defniremos aca las rutas de administración
const routes = [
  // {
  //     path: '/',
  //     name: 'home',
  //     component: () => import('@/modules/public/views/HomeView.vue'),
  // },

  // Rutas del submodulo about
  //Descrutruacion de las rutas importadas

  // Se esta especificando es que en esta parte se van a agregar los elementos de este array, es decir no va a importar el array sino solo los elementos que contiene
  ...aboutRoutes,
  ...blogRoutes,
  ...contactRoutes,
  ...homeRoutes,
]

//exportamos el contenido de estas rutas hacia el router pricipal
//export default routes
export default routes

//Despues hay que importarlo en el arhivo de rutas pricipal
