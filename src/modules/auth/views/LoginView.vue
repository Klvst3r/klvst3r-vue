<script setup>
import FormInput from '@/modules/shared/components/FormInput.vue'
import FormLabel from '@/modules/shared/components/FormLabel.vue'
import MyButton from '@/modules/shared/components/MyButton.vue'
import TextLink from '@/modules/shared/components/TextLink.vue'

//importamos el metodo reactive, ya que puede cambiar a medida que el usuario vaya escribiendo
import { ref, reactive } from 'vue'

//Vamos a llamar a la tienda
import { useAuthStore } from '@/modules/auth/stores/authStore.js' // = '../stores/authStore'

import { useRouter } from 'vue-router'

const authStore = useAuthStore() //definimos una constante y le decimos que queremos utilizar esta tienda aqui

//Instanciamos el enrutador y una vez podrmeos dirigirnos
const router = useRouter()

//variable reactiva de credenciales, inicializada con un objeto con dos propiedades
const credentials = reactive({
  // email: 'klvst3r@gmail.com', //inicializamos a la variable con un correo
  // password: 'desarrollo',
})

const errores = ref([])

//Definicimos una funcion con este nombre, una, ya que vamos a hacer una peticion justamente a el metodo handleLogin
async function handleLogin() {
  //Aqui iria la logica para manejar el login,
  //console.log('Login form submitted')
  // el usuario escribe sus credenciales en el formulario y se hace una peticion a la api

  try {
    //Cada vez que se envie el formulario
    // 1. Limpiamos los errores previos antes de un nuevo intento
    errores.value = []

    //await authStore.login(credentials) //llamamos al metodo login de la tienda authStore y le pasamos las credenciales
    await authStore.login(credentials)
    //console.log('Login successful')

    //Si llegamos aqui el login es correcto, entonces redireccioname al sitio una vez resulta la promesa por eso el await
    router.push('/')
  } catch (error) {
    //console.error('Login failed:', error) //si hay error retorna en consola

    //Vamos a capturar los errores que lleguen
    // 2. Capturamos los errores que vienen del servidor
    // Nota: asegúrate de que 'error.errors' sea la estructura que manda tu API
    const responseErrors = error.errors

    //Imprimimos los errores arrays
    //console.log(responseErrors)

    //Vamos a recorrer el array y vaya almacenando el valor de field
    if (responseErrors) {
      for (const field in responseErrors) {
        // 3. IMPORTANTE: Usamos 'errores' (coincidiendo con la declaración arriba)
        errores.value.push(responseErrors[field][0])
      }
    } else {
      // 4. Fallback por si el error no trae el objeto 'errors' (ej. error de red)
      errores.value.push(error.message || 'Error de conexión con el servidor')
    }
    //comprobamos si hay elementos faltantes en el login los imprmimos en el alert
    //console.log(errores.value) //mostramos lo que tenemos en la constante errors
  }
}
</script>

<template>
  <div>
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6"
    >
      Inicia sesión en tu cuenta
    </h1>

    <div
      v-if="errores.length > 0"
      class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-300"
      role="alert"
    >
      <svg
        class="w-4 h-4 me-2 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span class="sr-only">Danger</span>
      <div>
        <span class="font-medium">Ensure that these requirements are met:</span>
        <ul class="mt-2 list-disc list-outside space-y-1 ps-2.5">
          <li v-for="(error, index) in errores" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>

    <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
      <div>
        <!-- <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label 
        >-->

        <FormLabel
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</FormLabel
        >
        <FormInput
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <FormLabel
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</FormLabel
        >
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="text-gray-500 dark:text-gray-300"
              >Remember me</label
            >
          </div>
        </div>
        <!-- <TextLink href="#">Forgot password?</TextLink> -->
        <TextLink to="/">Forgot password?</TextLink>
      </div>
      <!-- <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign in
      </button> -->

      <MyButton type="submit" color="secondary-"> Sign in </MyButton>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <!-- <a
          href="#"
          class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >Sign up</a -->
        <!-- <TextLink href="#">Sign up</TextLink> -->
        <TextLink to="/">Sign up</TextLink>
      </p>
    </form>
  </div>
</template>
