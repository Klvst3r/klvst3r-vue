<script setup>
import { onMounted } from 'vue' // Importamos onMounted para usarlo en el setup
import { RouterView } from 'vue-router'

//este access_token estaba en localStorage de src/modules/auth/stores/authStore.js
//console.log(localStorage.getItem('access_token'))

import { useAuthStore } from './modules/auth/stores/authStore'

//Despues de esto inicializamos la tienda
const authStore = useAuthStore() //ya tenemos la tienda podemos ocuparla abajo

//queremos trabar en la parte del logout y queremos trabajar cn el ciclo de vida del componente de Vue para ello llamaresmo a onMounted
// onMounted permite pasarle otra funcion y cualquier cosa que coloquemos se va aejecutar cuando el componente se haya cargado.
onMounted(async () => {
  //Al montar el componente vamos a limpiar el localStorage
  //localStorage.removeItem('access_token')
  try {
    //Vamos a llamar al metodo de la tienda que verifica si el usuario esta autenticado
    //esperamos la respuesta de la información del usuario
    await authStore.fetchUser() //Busca la ifnormación del usuario autenticado, esperamos lo respuesta, dentro l eagregamos un try catch

    //si logra obtener la ifnoramción del suaurio ahora mosytramos en consola
    //console.log(authStore.user) //acdedemos a la ifnoramción del usuario, lo activamos si queremos saber los datos del usuario para ver en consola
    //pero podemos acceder a ella desde authStore a traves de la poriedad cocmputada const user = computed(() => authStore.user) en cualquier componente
  } catch (error) {
    //mostramos el error de verlo
    console.log(error)
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
