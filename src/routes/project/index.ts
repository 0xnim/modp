import { Elysia } from 'elysia';
import { ProjectSchema } from './schema';
export { ProjectSchema };

import { single, check } from './get';

export const project = new Elysia({
    prefix: '/project',
    schema: ProjectSchema,
})
    //.get('/', () => 'This is the project api!')
    // GET /:{id|slug}
    .use(single)
;
