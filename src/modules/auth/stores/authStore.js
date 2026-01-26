import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)
import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API
export const useAuthStore = defineStore('auth', () => {
  // Definimos una constante token que recupera el valor del localStorage al iniciar
  //esta es la forma de recuperar local storage: localStorage.getItem('access_token')
  const token = ref(localStorage.getItem('access_token') || null)

  // Propiedad computada para saber si el usuario está autenticado
  // Retorna true si hay token, false si es null,
  const isAuthenticated = computed(() => !!token.value)

  // Función asíncrona para manejar el inicio de sesión
  async function login(credentials) {
    try {
      // Accedemos al servicio y ejecutamos el método login
      // Esperamos la respuesta del authService
      const response = await authService.login(credentials)

      // Actualizamos la referencia reactiva para que la UI se entere del cambio
      token.value = response.access_token

      // Almacenamos en el localStorage el token enviado por la API
      localStorage.setItem('access_token', response.access_token)

      //para el logaut tambien se borra el local storage y actualizamos el token, esto es para cambiar el estado autenticado, despues de hacer login
      token.value = response.access_token

      // Retornamos la respuesta para que el componente pueda usarla (ej. redireccionar)
      return response
    } catch (error) {
      // Capturamos el error del servicio y lo seguimos difundiendo
      console.error('Error detectado en el Store:', error)
      //throw error
      throw error.response.data
    }
  }

  //Logout

  async function logout() {
    try {
      // Accedemos al servicio y ejecutamos el método logout, pedimos que llame a nuestro servicio
      // Esperamos la respuesta del authService
      //const response = await authService.logout()
      await authService.logout()

      //ahora lo que toca despues de esperar que se resuelva la promesa para eliminar del localstorage esa variable llamada access_token
      localStorage.removeItem('access_token')

      //Tambien lo que queremos que ocurra es resetear el valor del token para que el estado isAutehticated cambie a false, con esto ceramos lasesion
      token.value = null

      // Actualizamos la referencia reactiva para que la UI se entere del cambio
      //token.value = null
      // Borramos el token almacenado en el localStorage
    } catch (error) {
      // Capturamos el error del servicio y lo seguimos difundiendo
      console.error('Error detectado en el Store:', error)

      //throw error.response.data
      throw error
    } finally {
      //  Esto se ejecuta SIEMPRE, falle o no la petición
      localStorage.removeItem('access_token')
      token.value = null

      // Opcional: Redirigir al login después de limpiar
      // router.push({ name: 'auth-login' })
    }
  }
  // Retornamos los valores y métodos para que sean accesibles en los componentes
  return {
    token,
    isAuthenticated,
    login,
    logout,
  }
})
