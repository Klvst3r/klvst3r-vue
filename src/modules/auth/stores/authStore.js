import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)
import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API
export const useAuthStore = defineStore('auth', () => {
  // --- ESTADO (STATE) ---

  // Almacenamos la info del usuario. Usamos "_" como convención de propiedad privada.
  const _user = ref(null)

  // Recuperamos el token del localStorage al inicializar la tienda para persistir la sesión.
  const token = ref(localStorage.getItem('access_token') || null)

  // --- GETTERS (Propiedades Computadas) ---

  // Retorna true si el token existe, false si es null. Controla el acceso en los Guards.
  const isAuthenticated = computed(() => !!token.value)

  // Exponemos el usuario como solo lectura (computed) para que no se modifique externamente.
  const user = computed(() => _user.value)

  // --- ACCIONES (ACTIONS) ---

  /**
   * Maneja el inicio de sesión.
   * Almacena el token y busca la información del usuario inmediatamente.
   */
  async function login(credentials) {
    try {
      // Esperamos la respuesta del servicio con el access_token.
      const response = await authService.login(credentials)

      // Guardamos en localStorage para que no se pierda al recargar (F5).
      localStorage.setItem('access_token', response.access_token)

      // Actualizamos la referencia reactiva para que isAuthenticated cambie a true.
      token.value = response.access_token

      // Una vez tenemos el token, recuperamos los datos del usuario (id, name, email).
      await fetchUser()

      return response
    } catch (error) {
      console.error('Error detectado en el Store (Login):', error)
      // Difundimos el error para que el componente LoginView lo muestre.
      throw error.response?.data || error
    }
  }

  /**
   * Cierra la sesión del usuario.
   * El bloque 'finally' asegura que la sesión se limpie localmente aunque el servidor falle.
   */
  async function logout() {
    try {
      // Avisamos al backend para invalidar el token.
      await authService.logout()
    } catch (error) {
      console.error('Error detectado en el Store (Logout):', error)
    } finally {
      // Se ejecuta SIEMPRE: Limpiamos rastro de sesión para evitar accesos indebidos.
      localStorage.removeItem('access_token')
      token.value = null
      _user.value = null
    }
  }

  /**
   * Recupera la información del usuario autenticado desde el endpoint /me.
   * Si el token ha caducado, cierra la sesión automáticamente.
   */
  async function fetchUser() {
    // Solo actuamos si hay un token activo (isAuthenticated).
    if (isAuthenticated.value) {
      try {
        // Almacenamos la info del usuario en nuestra variable privada.
        _user.value = await authService.me()
      } catch (error) {
        console.error(
          'Error al recuperar usuario (Token posiblemente caducado):',
          error,
        )

        // Si falla (ej. error 401), forzamos el logout para limpiar el localStorage.
        await logout()
        throw error
      }
    }
  }

  // Retornamos los elementos públicos de la tienda.
  return {
    token,
    isAuthenticated,
    user,
    login,
    logout,
    fetchUser,
  }
})
