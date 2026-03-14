import { Suspense } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CookieBanner from '../../components/layout/CookieBanner'
import '../globals.css'
import { Nunito } from 'next/font/google'
import { getPayloadClient } from '../../lib/payload'
import { unstable_cache } from 'next/cache'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
})

// Cache the menu pages fetch for 1 hour
const getMenuPages = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'pages',
      select: {
        title: true,
        slug: true,
      },
      limit: 100,
      pagination: false,
    })
    return docs
  },
  ['menu-pages'],
  { revalidate: 3600, tags: ['pages'] }
)

// Async server component — resolves CMS pages without blocking the layout stream
async function HeaderWithCmsPages() {
  const pages = await getMenuPages()
  const menuPages = (pages as any[]).filter(
    (p) => !['impressum', 'datenschutz', 'cookies'].includes(p.slug)
  )
  return <Header cmsPages={menuPages} />
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${nunito.variable} font-main antialiased min-h-screen flex flex-col`}>
        {/*
          Suspense here means the layout HTML is streamed immediately.
          The header renders with hardcoded links first, CMS pages resolve in background.
        */}
        <Suspense fallback={<Header cmsPages={[]} />}>
          <HeaderWithCmsPages />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
