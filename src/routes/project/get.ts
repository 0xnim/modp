import { Elysia } from "elysia";
import { query } from "../../libs";

export const single = new Elysia()
// Query the database for a single project

    

export const multiple = new Elysia()


export const random = new Elysia()


async function queryDatabase(input) {
    const slugRegex = /^[\w!@$()`.+,"\-']{3,64}$/;
    const idRegex = /^[0-9A-Za-z]{8}$/;
  
    if (slugRegex.test(input)) {
      // Input matches the slug pattern, so query the database for slugs
      const queryText = `SELECT * FROM your_table WHERE slug = $1`;
      const queryParams = [input];
  
      try {
        const result = await pool.query(queryText, queryParams);
        console.log('Database Query Result:', result.rows);
      } catch (error) {
        console.error('Error querying database:', error);
      }
    } else if (idRegex.test(input)) {
      // Input matches the ID pattern, so query the database for IDs
      const queryText = `SELECT * FROM your_table WHERE id = $1`;
      const queryParams = [input];
  
      try {
        const result = await pool.query(queryText, queryParams);
        console.log('Database Query Result:', result.rows);
      } catch (error) {
        console.error('Error querying database:', error);
      }
    } else {
      console.log('Input does not match either pattern.');
    }
  }

export const check = new Elysia()
// Check if a project exists by checking the validity and then querying the database
// REGEX FOR SLUGS: ^[\w!@$()`.+,"\-']{3,64}$
// REGEX FOR IDS: ^[0-9A-Za-z]{8}$

    .get('/:id/check', ({ params: { id } }) => 
        query('SELECT * FROM projects WHERE id = $1', [id]));


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