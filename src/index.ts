import { Elysia } from "elysia";
import { query } from "./libs";

import { project } from "./routes";

const app = new Elysia()
  .get("/", () => "Welcome to Elysia!")
  .group("v1", app => app
    .get("/", () => "This is the v1 api!")
    .use(project)

  )
  .listen(3000);


query("SELECT * FROM projects").then((res) => {
  console.log(res.rows);
});

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
