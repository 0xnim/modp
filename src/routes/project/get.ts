import { Elysia, NotFoundError } from "elysia";
import { query } from "../../libs";


export const single = new Elysia()

// Query the database for a single project
  .get("/:id", async (context) => {
    const { id } = context.params;
    const result =  await query("SELECT * FROM projects WHERE id = $1::int", [id]);
    if (result.rows.length === 0) {
      throw new NotFoundError();
    } else {
      return result.rows[0];
    }
  })
  .onError(({ code, error, set }) => {
    if (code === 'NOT_FOUND') {
        set.status = 404
    
        return 'Not Found :('
    }
});

export const multiple = new Elysia();


export const random = new Elysia();


export const check = new Elysia()
// Check if a project exists by checking the validity and then querying the database
// REGEX FOR SLUGS: ^[\w!@$()`.+,"\-']{3,64}$
// REGEX FOR IDS: ^[0-9A-Za-z]{8}$

export const dependencies = new Elysia()






// GENERATE NOTE
/*
function randomBase62Rng(length) {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
  
    return result;
  }
*/