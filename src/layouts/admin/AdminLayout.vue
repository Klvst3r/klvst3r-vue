<script setup>
import { RouterView } from 'vue-router'

//Para que funcionen los Dropdowns y sidebars hay que inicalizar Flowbite
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
//import Dashboard from '@/modules/admin/dashboard/views/Dashboard.vue'
import AdminNav from '@/layouts/admin/components/AdminNav.vue'
import AdminAside from '@/layouts/admin/components/AdminAside.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <!-- Importamos el layout de admin Sidebar with navbar -->

  <AdminNav />

  <AdminAside />

  <main class="p-4 sm:ml-64 mt-14">
    <div class="p-4 border-1 border-gray-200 border-dashed rounded-base">
      <RouterView />
    </div>
  </main>
</template>
