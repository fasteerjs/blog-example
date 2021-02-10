import { hookFetch, req } from "@vottuscode/vue-fetchable";
import { PostQuerySchema } from "@fasteerjs/example-blog-backend/src/schemas/post";
import { bar } from "@/app";

const fetchById = (params: PostQuerySchema["Params"]) =>
  hookFetch(async () => {
    try {
      const res = await bar.promised(
        req({
          method: "GET",
          url: `/post/byId/${params.id}`
        })
      );

      return res;
    } catch (e) {
      if (e.name === "BackendFetchError") throw e;
      return false;
    }
  });

const fetchBySlug = (params: PostQuerySchema["Params"]) =>
  hookFetch(async () => {
    try {
      const res = await bar.promised(
        req({
          method: "GET",
          url: `/post/bySlug/${params.id}`
        })
      );

      return res;
    } catch (e) {
      if (e.name === "BackendFetchError") throw e;
      return false;
    }
  });

export { fetchById, fetchBySlug };
