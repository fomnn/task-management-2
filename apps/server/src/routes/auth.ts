import { createHono } from "../lib/hono.js";

const authApi = createHono().basePath("auth");

authApi.get("/login", async (c) => {
  return c.text("woi");
});

export default authApi;
