<template>
  <div class="px-4 py-4 sm:px-0">
    <div class="px-8 py-4 bg-gray-700 rounded-md">
      <div class="mb-6">
        <h1 class="text-2xl font-medium">{{ title }}</h1>
        <h2 class="text-sm font-thin text-gray-400">
          <span class="font-medium">{{ date.toLocaleString() }}</span>
          &ndash;
          <span class="font-medium">{{ author }}</span>
        </h2>
      </div>
      <div class="mb-6">
        <slot />
      </div>

      <div class="flex md:justify-end">
        <router-link
          class="bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-md transition"
          :to="to"
        >
          Read
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String
    },
    date: {
      type: Date
    },
    author: {
      type: String
    },
    to: {
      type: String
    }
  }
});
</script>
