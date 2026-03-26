import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { s3Storage } from '@payloadcms/storage-s3'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { NewsArticles } from './collections/NewsArticles'
import { Events } from './collections/Events'
import { GalleryAlbums } from './collections/GalleryAlbums'
import { Pages } from './collections/Pages'
import { Staff } from './collections/Staff'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { SickReports } from './collections/SickReports'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URI || ''

export default buildConfig({
      admin: {
              user: Users.slug,
      },
      collections: [
              Users,
              Media,
              NewsArticles,
              Events,
              GalleryAlbums,
              Pages,
              Staff,
              ContactSubmissions,
              SickReports,
            ],
      editor: lexicalEditor({}),
      secret: process.env.PAYLOAD_SECRET || '',
      typescript: {
              outputFile: path.resolve(dirname, 'payload-types.ts'),
      },
      db: postgresAdapter({
            push: true,
              pool: {
                        connectionString,
                        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
                        max: 5,
                        idleTimeoutMillis: 20000,
                        connectionTimeoutMillis: 30000,
              },
      }),
      sharp,
      email: nodemailerAdapter({
              defaultFromAddress: process.env.EMAIL_FROM || 'noreply@gs-wehringhausen.de',
              defaultFromName: 'GS Wehringhausen',
              transportOptions: {
                        host: process.env.SMTP_HOST || 'smtp.gmail.com',
                        port: parseInt(process.env.SMTP_PORT || '587'),
                        auth: {
                                    user: process.env.SMTP_USER || '',
                                    pass: process.env.SMTP_PASS || '',
                        },
              },
      }),
      plugins: [
              seoPlugin({
                        collections: ['pages', 'news-articles'],
                        uploadsCollection: 'media',
                        generateTitle: ({ doc }: any) => doc?.title?.value || 'GS Wehringhausen',
                        generateDescription: ({ doc }: any) => doc?.excerpt?.value || '',
              }),
              s3Storage({
                        collections: {
                                    media: true,
                        },
                        bucket: process.env.S3_BUCKET || '',
                        config: {
                                    credentials: {
                                                  accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                                                  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                                    },
                                    region: process.env.S3_REGION || 'eu-central-1',
                                    endpoint: process.env.S3_ENDPOINT,
                        },
              }),
            ],
})
