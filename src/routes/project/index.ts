import { Elysia } from 'elysia';
import { ProjectSchema } from './schema';
export { ProjectSchema };

import { check } from './get';

export const project = new Elysia({
    prefix: '/project',
    schema: ProjectSchema,
})
    // GET /:{id|slug}
    .use(check)
;
