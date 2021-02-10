<template>
  <div class="my-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="my-6 flex justify-center items-center text-center">
      <div>
        <h1 class="text-white text-3xl font-medium">Login</h1>
        <h2 class="text-gray-100 text-base">Sign into your account</h2>
      </div>
    </div>
    <div class="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <auth-form :login="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthForm from "../../components/logic/form/auth/AuthForm.vue";

export default defineComponent({
  components: {
    AuthForm
  }
});
</script>
