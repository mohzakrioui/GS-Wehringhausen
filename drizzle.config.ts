import type { Config } from 'drizzle-kit';

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL || process.env.POSTGRES_URL || '',
  },
} satisfies Config;
