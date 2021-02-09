import { hookFetch, req } from "@vottuscode/vue-fetchable";
import { PaginatedQuerySchema } from "@fasteerjs/example-blog-backend/src/schemas/post";
import { bar } from "@/app";

const fetchPaginatedPosts = (params: PaginatedQuerySchema["Querystring"]) =>
  hookFetch(async () => {
    try {
      const res = await bar.promised(
        req({
          method: "GET",
          url: "/post/paginated",
          params
        })
      );

      return res;
    } catch (e) {
      if (e.name === "BackendFetchError") throw e;
      return false;
    }
  });

export { fetchPaginatedPosts };
