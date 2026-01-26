import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

//Para logout, agregamos un interceptor de peticiones
// este metodo espera que le paemos una funcion
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')

    if (token) {
      //queremos ingresar a la configracuón, que accedeamosa las cabecerasn agregando un campo que se va a autilizar
      config.headers.Authorization = `Bearer ${token}` //La palabra Bearer y lo concatenamos con el token interceptado,
    }

    //y finalmente tenemos que retornar la configuración
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

//Si no exportamos explicitamente el objeto, por defecto se exportara el objeto que se define en la primera linea de codigo, en este caso el objeto apiClientm esta permanece privada dentro de este archivo
export default apiClient
