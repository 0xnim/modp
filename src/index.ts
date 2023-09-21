import { Elysia } from "elysia";
import { query } from "./libs";

import { project } from "./routes";

const app = new Elysia()
  // Projects
  // Later: Search
  // GET: /project/{id|slug}
  // PUT: /project/{id|slug}
  // DELETE: /project/{id|slug}
  // GET: /projects (array of ids) 
  // GET: /projects_random (count 0..100)
  // POST: /project 
  // Later: Icon Stuff
  // GET: /project/{id|slug}/check
  // Later: Gallery
  // GET /project/{id|slug}/dependencies
  // POST /project/{id|slug}/follow
  // DELETE /project/{id|slug}/follow
  // POST /project/{id|slug}/schedule



  .get("/", () => "Welcome to Elysia!")
  .group("v1", app => app
    .get("/", () => "This is the v1 api!")
    .use(project)

  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
