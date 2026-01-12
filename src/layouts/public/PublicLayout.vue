<script setup>
import { RouterView } from 'vue-router'
import PublicNav from '@/layouts/public/components/PublicNav.vue'
import PublicFooter from '@/layouts/public/components/PublicFooter.vue'
</script>
<template>
  <PublicNav></PublicNav>

  <div class="max-w-7-xl mx-auto p-4">
    <RouterView></RouterView>
  </div>

  <PublicFooter></PublicFooter>
</template>
