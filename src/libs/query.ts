import { Pool } from 'pg';

const pool = new Pool({
  user: 'modp',
  host: 'localhost',
  database: 'postgres',
  password: 'modp',
  port: 5432, // PostgreSQL default port
});

// Export a function to query the database
export const query = async (text, params) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    throw error;
  }
};

