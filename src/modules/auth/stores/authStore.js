import { defineStore } from 'pinia'

//Llamamos al servicio definido
import authService from '../services/authService'

//utilizamos la sintaxis de Composition API
export const useauthStore = defineStore('auth', () => {
  //Definimos mejor una constante token y sea la constante de recuperar el valor
  const token = ref(localStorage.getItem('access_token') || null) //Si existe la variable que sea el valor al que se asigna al token

  //Primero definimos un apropiedad computada, nos ineresa saber si tiene o no un token
  //const isAuthenticated = computed(() => (token.value ? true : false)) //Verificamos si lo que se recibe es un valor nullo, verificando el token, esto es lo msmo que lo de la siguiente linea
  const isAuthenticated = computed(() => !!token.value) // si tenemos ago aca devuelve true en caso contrasrio retorna false

  //Definimos la funcion login pasandole las credenciales, la siguiente funcion tambien es una fucnio asincrona
  async function login(credentials) {
    //Acedemos al servicio y ejecutamos el metodo login, esperando que se resulva la siguiente promesa, despues la respuesta del authService la queremos capturar
    const response = await authService.login(credentials)

    //Quiero almacenar en el local storage ese token, enviado por la api, como parametros la variable del tokem y con un segudo valor el valor que queremos almacenar
    localStorage.setItem('access_token', response.access_token)
    //localStorage.setItem('access_token', response.data.access_token)

    //este metodo puede ser satisfactorio o generar error
    try {
      //captura la respuesta, si se produce un error se ejcuta la captura el error del servcio y se retorna el error
    } catch (error) {
      //Retorna el error
      throw error //capturamos el error y seguimos difundiendo el error
    }
  }

  //Finalmenbte debemos pedir que nos retorne esot s valores
  return {
    isAuthenticated, //saber si el usuario esta autenticado
    login, //metodo para loguear
  }
})
