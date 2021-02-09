<template>
  <nav class="bg-indigo-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div>
            <div class="flex items-baseline space-x-4">
              <router-link
                class="text-2xl font-medium hover:text-gray-200 transition"
                to="/"
                >Example.com Blog</router-link
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm text-white focus:outline-none"
                  id="user-menu"
                  aria-haspopup="true"
                  @click="state.dropdownOpen = !state.dropdownOpen"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://via.placeholder.com/256"
                    alt=""
                  />
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leaving-active-class="transition ease-in duration-75"
                leaving-from-class="transform opacity-100 scale-100"
                leaving-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-show="state.dropdownOpen"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <navbar-item href="/account/settings">Settings</navbar-item>

                  <navbar-item>Logout</navbar-item>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="state.mobileMenuOpen = !state.mobileMenuOpen"
            class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{
                block: !state.mobileMenuOpen,
                hidden: state.mobileMenuOpen
              }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="{
                block: state.mobileMenuOpen,
                hidden: !state.mobileMenuOpen
              }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div
      class="md:hidden"
      :class="{
        block: state.mobileMenuOpen,
        hidden: !state.mobileMenuOpen
      }"
    >
      <div class="pt-4 pb-3 border-t border-indigo-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://via.placeholder.com/256"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-indigo-300">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <navbar-item href="/account/settings">Settings</navbar-item>

          <navbar-item>Logout</navbar-item>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import NavbarItem from "./NavbarItem.vue";

export default defineComponent({
  components: {
    NavbarItem
  },
  setup() {
    const state = reactive({
      dropdownOpen: false,
      mobileMenuOpen: false
    });

    return {
      state
    };
  }
});
</script>
