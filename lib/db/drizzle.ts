import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

function createDatabase(postgresUrl: string) {
  const client = postgres(postgresUrl);

  return {
    client,
    db: drizzle(client, { schema })
  };
}

export type Database = ReturnType<typeof createDatabase>['db'];

let database: Database | null = null;

function getPostgresUrl() {
  const postgresUrl = process.env.POSTGRES_URL;

  if (!postgresUrl) {
    throw new Error('POSTGRES_URL environment variable is not set');
  }

  return postgresUrl;
}

export function getDb(): Database {
  if (!database) {
    database = createDatabase(getPostgresUrl()).db;
  }

  return database;
}
