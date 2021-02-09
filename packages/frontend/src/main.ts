import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { deploymentUrl, port } from "@fasteerjs/example-blog-backend/src/env";

import "@/assets/main.css";

(window as any).$axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://localhost:${port()}`
      : deploymentUrl(),
  headers: {
    // add Auth header
  }
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
