<script setup>
import { computed } from 'vue'
// useRoute nos da la información de la URL actual (el "mapa")
import { RouterLink, useRoute } from 'vue-router'

// defineOptions es para configurar el comportamiento del componente
defineOptions({
  // Al poner inheritAttrs en false, le decimos a Vue:
  // "No pongas automáticamente las clases del padre en el div raíz, yo las controlaré"
  inheritAttrs: false,
})

// Definimos qué datos esperamos recibir desde fuera
const props = defineProps({
  to: {
    type: [String, Object], // Aceptamos tanto "/ruta" como { name: 'ruta' }
    required: true,
  },
})

// Creamos una instancia para observar la ruta actual
const route = useRoute()

// Esta función se recalcula automáticamente cada vez que la URL cambia
const isActive = computed(() => {
  // Si por error no hay destino, no está activo
  if (!props.to) return false

  // Caso 1: Si pasaron un string (ej: to="/about")
  // Comparamos el path de la URL con el string recibido
  if (typeof props.to === 'string') {
    return route.path === props.to
  }

  // Caso 2: Si pasaron un objeto con nombre (ej: :to="{ name: 'home' }")
  if (props.to.name) {
    return route.name === props.to.name
  }

  // Caso 3: Si pasaron un objeto con path (ej: :to="{ path: '/about' }")
  if (props.to.path) {
    return route.path === props.to.path
  }

  return false
})
</script>

<template>
  <RouterLink
    v-bind="$attrs"
    :to="to"
    class="block py-2 px-3 md:p-0 rounded transition-colors"
    :class="[
      isActive
        ? 'text-white bg-brand md:bg-transparent md:text-fg-brand' // Estilos si estoy en esta página
        : 'text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand', // Estilos si NO estoy
    ]"
  >
    <slot />
  </RouterLink>
</template>
