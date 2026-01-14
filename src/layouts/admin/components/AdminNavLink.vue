<script setup>
import { RouterLink } from 'vue-router'

// Definimos que este componente recibirá una prop "to"
defineProps(['to'])
</script>

<template>
  <RouterLink
    v-bind="$attrs"
    :to="to"
    active-class="bg-gray-100 text-blue-600"
    class="flex items-center px-2 py-1.5 text-gray-700 rounded-lg hover:bg-gray-100 group"
  >
    <slot></slot>
  </RouterLink>
</template>
