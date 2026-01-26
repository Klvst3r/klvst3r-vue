<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger"></slot>
    </div>

    <div
      @click="open = false" 
      v-show="open"
      class="absolute z-50 end-0 mt-2 w-48"
    >
      <div
        class="bg-white rounded-md shadow-lg py-2 px-2 font-size-sm text-gray-700"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
