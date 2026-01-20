import apiClient from '@/axios/axiosConfig'

export default {
  //Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas

  async login(acredentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,

      return response.data
    } catch (error) {
      //return error.response.data  //en lugar de devolver un error que nos devuelva una excepcion
      throw error.response.data //En esta excepcion, quiero mandar lo que se ha capturado
    }
  },
  async logout() {
    try {
      const response = await apiClient.post('/auth/logout') //no pasamos ninguna credencial

      return response.data
    } catch (error) {
      return error.response.data
    }
  },
  async refresh() {
    try {
      const response = await apiClient.post('/auth/refresh')

      return response.data
    } catch (error) {
      return error.response.data
    }
  },
  async me() {
    //Obtenemos los datos del usuario
    try {
      const response = await apiClient.get('/auth/me')

      return response.data
    } catch (error) {
      return error.response.data
    }
  },
}
