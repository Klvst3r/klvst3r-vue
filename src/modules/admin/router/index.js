//Hay que importarlo en el arhivo de rutas del modulo dashboard
import dashboardRoutes from '@/modules/admin/submodules/dashboard/router/index'

// Defniremos aca las rutas de administración, lo incluimos destructurando el arrayu
const routes = [...dashboardRoutes]

//exportamos el contenido de estas rutas hacia el router pricipal
export default routes

//Despues hay que importarlo en el arhivo de rutas pricipal
