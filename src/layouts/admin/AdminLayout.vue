<script setup>
import { RouterView } from 'vue-router'

//Para que funcionen los Dropdowns y sidebars hay que inicalizar Flowbite
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Dashboard from '@/modules/admin/submodules/dashboard/views/Dashboard.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <!-- Importamos el layout de admin Sidebar with navbar -->

  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button
            data-drawer-target="top-bar-sidebar"
            data-drawer-toggle="top-bar-sidebar"
            aria-controls="top-bar-sidebar"
            type="button"
            class="sm:hidden text-gray-900 bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
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
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex ms-2 md:me-24">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 me-3"
              alt="FlowBite Logo"
            />
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
              >Flowbite</span
            >
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            <!--Dropdown del usuario -->
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    id="top-bar-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-white border-e border-gray-200"
    >
      <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 me-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-lg text-gray-900 font-semibold whitespace-nowrap"
          >Flowbite</span
        >
      </a>
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
              />
            </svg>
            <span class="ms-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
            <span
              class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              Pro
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
            <span
              class="inline-flex items-center justify-center w-5 h-5 ms-3 text-xs font-semibold text-red-800 bg-red-100 rounded-full"
            >
              2
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                stroke-width="2"
                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <main class="p-4 sm:ml-64 mt-14">
    <div class="p-4 border-1 border-gray-200 border-dashed rounded-base">
      <RouterView />
    </div>
  </main>
</template>
