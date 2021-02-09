<template>
  <fetchable :hook="fetchPosts">
    <!-- <blog-card
      to="/post/hello"
      author="Author"
      :date="new Date()"
      title="hello"
    >
      Content
    </blog-card> -->
  </fetchable>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import BlogCard from "../components/elements/blogCard/BlogCard.vue";
import { fetchPaginatedPosts } from "../app/api/post";
import Fetchable from "../components/logic/Fetchable.vue";
import Loader from "../components/elements/loader/Loader.vue";
import Error from "../components/elements/error/Error.vue";

export default defineComponent({
  components: { BlogCard, Fetchable, Loader, Error },
  setup() {
    const pageState = reactive({
      perPage: 5,
      page: 1
    });

    const fetchPosts = fetchPaginatedPosts(pageState);

    return {
      pageState,
      fetchPosts
    };
  }
});
</script>
