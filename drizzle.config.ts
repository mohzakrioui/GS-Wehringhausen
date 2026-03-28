import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

/**
 * Drizzle Kit Configuration for gs-wehringhausen PayloadCMS Database
 *
 * This config enables automatic schema synchronization with Neon PostgreSQL
 * during the build process, bypassing the PayloadCMS CLI which has undici
 * compatibility issues.
   *
   * Usage:
 * - npm run db:push  (in development)
   * - Automatically runs in Vercel build pipeline
 */

const config = {
    schema: './drizzle/schema.ts',  // Will contain PayloadCMS collection definitions
        out: './drizzle',               // Migration artifacts directory
        driver: 'pg',                   // PostgreSQL driver

        dbCredentials: {
    connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
      },

        // Drizzle strict mode - catches schema conflicts early
        strict: true,

            // Print SQL statements to console during migrations
            verbose: true,

            // The following settings help with Vercel deployment
            // Drizzle automatically handles connection pooling and SSL

          } satisfies Config;

export default config;
