<script setup>
import { ref } from 'vue'
//import PublicNav from '@/layouts/public/components/PublicNav.vue'
import PublicNavLink from './PublicNavLink.vue'

const openMenu = ref(false)
</script>
<template>
  <nav
    class="bg-neutral-primary sticky w-full z-20 top-0 start-0 border-b border-default"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-7"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl text-heading font-semibold whitespace-nowrap"
          >Flowbite</span
        >
      </a>
      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
          id="user-dropdown"
        >
          <div class="px-4 py-3 text-sm border-b border-default">
            <span class="block text-heading font-medium">Joseph McFall</span>
            <span class="block text-body truncate">name@flowbite.com</span>
          </div>
          <ul
            class="p-2 text-sm text-body font-medium"
            aria-labelledby="user-menu-button"
          >
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          @click="openMenu = !openMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-user"
          :aria-expanded="openMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!openMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- Div encargado de mostrar nuestro meno -->
      <div
        id="navbar-user"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="{ block: openMenu, hidden: !openMenu }"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary"
        >
          <li>
            <!-- <a
              href="#"
              class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
              aria-current="page"
              >Home</a
            >-->
            <PublicNavLink :to="{ name: 'home' }"> Home </PublicNavLink>
          </li>
          <li>
            <!--   <a
              href="#"
              class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >About</a
            >-->
            <PublicNavLink to="/about"> About </PublicNavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
