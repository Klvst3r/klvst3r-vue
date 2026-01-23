// import apiClient from '@/axios/axiosConfig' //nos marca erro por la ruta de la configruaicon de axios cambiamos a:
//import apiClient from '../../../api/axiosConfig'
import apiClient from '@/api/axiosConfig' // Sin llaves porque es export default

export default {
  //Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas

  async login(credentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,

      return response.data
    } catch (error) {
      // Si el servidor respondió con un error (401, 422, etc.)
      if (error.response) {
        throw error.response.data
      }
      // Si el error es de red o el servidor no responde
      throw { message: 'Error de conexión con el servidor' }
    }
  },
  async logout() {
    try {
      const response = await apiClient.post('/auth/logout') //no pasamos ninguna credencial

      return response.data
    } catch (error) {
      throw error.response.data
    }
  },
  async refresh() {
    try {
      const response = await apiClient.post('/auth/refresh')

      return response.data
    } catch (error) {
      throw error.response.data
    }
  },
  async me() {
    //Obtenemos los datos del usuario
    try {
      const response = await apiClient.get('/auth/me')

      return response.data
    } catch (error) {
      throw error.response.data
    }
  },
}
