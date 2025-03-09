import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import authApi from "./routes/auth.js";
import prisma from "./lib/prisma.js";

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get("/users", async (c) => {
  const users = await prisma.users.findMany();

  return c.json({
    users
  });
})

app.route("/", authApi);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
