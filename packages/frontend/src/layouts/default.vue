<template>
  <navbar />
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </main>

  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Footer from "@/components/layout/footer/Footer.vue";
import Navbar from "@/components/layout/navbar/Navbar.vue";
import BlogCard from "@/components/elements/blogCard/BlogCard.vue";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    BlogCard
  },
  setup() {
    const menuOpen = ref(false);
    return {
      menuOpen
    };
  }
});
</script>
