// import postgres from 'postgres';

// const sql = postgres(process.env.DATABASE_URL!, {
//   ssl: 'require', 
// });
import { sql } from '@vercel/postgres';
export default sql;
