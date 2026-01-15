<script setup>
import { RouterLink } from 'vue-router'
import AppLogo from '@/modules/shared/components/AppLogo.vue'
</script>
<!-- La referencia del template es:
https://flowbite.com/blocks/marketing/login/ -->
<template>
  <!-- <section class="bg-gray-50 dark:bg-gray-900"> -->
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <!-- <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </a> -->

      <RouterLink
        to="/"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <AppLogo />
      </RouterLink>

      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <!-- El H1 y el formulario de login lo mandamos al componente de auth en el
          modulo -->
          <RouterView />
        </div>
      </div>
    </div>
  </section>
</template>
