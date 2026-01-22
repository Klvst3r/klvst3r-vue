import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

//Si no exportamos explicitamente el objeto, por defecto se exportara el objeto que se define en la primera linea de codigo, en este caso el objeto apiClientm esta permanece privada dentro de este archivo

export default apiClient
