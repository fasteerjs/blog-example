<template>
  <form class="space-y-6" action="#" method="POST">
    <div>
      <input-label for="username">Username</input-label>
      <div class="mt-1">
        <text-input id="username" type="text" autocomplete="username" />
      </div>
    </div>

    <div>
      <input-label for="password">Password</input-label>
      <div class="mt-1">
        <text-input id="password" type="passwor" autocomplete="password" />
      </div>
    </div>

    <div class="flex items-center justify-between" v-if="login">
      <div class="flex items-center">
        <checkbox id="remember" />
        <input-label for="remember" class="ml-2"> Remember me </input-label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ login ? "Sign in" : "Register" }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TextInput from "../../../form/TextInput.vue";
import InputLabel from "../../../form/InputLabel.vue";
import Checkbox from "../../../form/Checkbox.vue";

export default defineComponent({
  props: {
    login: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TextInput,
    InputLabel,
    Checkbox
  }
});
</script>
