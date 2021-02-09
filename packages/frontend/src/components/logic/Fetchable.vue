<template>
  <VueFetchable :hook="hook">
    <template #error>
      <error />
    </template>
    <template #loading>
      <loader />
    </template>
    <slot />
  </VueFetchable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueFetchable from "@vottuscode/vue-fetchable/Fetchable.vue";
import Loader from "../elements/loader/Loader.vue";
import Error from "../elements/error/Error.vue";

export default defineComponent({
  props: ["hook"],
  components: {
    VueFetchable,
    Loader,
    Error
  }
});
</script>
